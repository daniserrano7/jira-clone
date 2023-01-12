import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect, json } from "@remix-run/node";
import { useLoaderData, useLocation, useNavigate } from "@remix-run/react";
import { redirectBack } from "remix-utils";
import invariant from "tiny-invariant";
import cx from "classix";
import * as Dialog from "@radix-ui/react-dialog";
import { UserId } from "@domain/user";
import { ProjectId } from "@domain/project";
import { CategoryId } from "@domain/category";
import { Issue, IssueId } from "@domain/issue";
import { Comment, CommentId } from "@domain/comment";
import { Priority } from "@domain/priority";
import {
  getIssue,
  updateIssue,
  deleteIssue,
  UpdateIssueInputData,
} from "@infrastructure/db/issue";
import { deleteComment } from "@infrastructure/db/comment";
import { IssuePanel } from "@app/ui/main/project/board/issue-panel";
import { Error404 } from "@app/components/error-404";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";
import { emitter, EVENTS } from "@app/events";

type LoaderData = {
  issue: Issue;
};

export type ActionData = {
  errors: {
    name?: string;
  };
};

export const loader: LoaderFunction = async ({ params }) => {
  const issueId = params.issueId as IssueId;

  invariant(params.projectId, `params.projectId is required`);

  const issue = await getIssue(issueId);

  if (!issue) {
    throw new Response("Not Found", {
      status: 404,
    });
  }

  return json<LoaderData>({ issue });
};

export const action: ActionFunction = async ({ request, params }) => {
  const id = params.issueId as IssueId;
  const projectId = params.projectId as ProjectId;
  const formData = await request.formData();
  const _action = formData.get("_action") as string;

  if (_action === "upsert") {
    const name = formData.get("title") as string;
    const description = formData.get("description") as string;
    const categoryId = formData.get("status") as CategoryId;
    const priority = formData.get("priority") as Priority;
    const asigneeId = formData.get("asignee") as UserId;
    const reporterId = formData.get("reporter") as UserId;
    const comments = JSON.parse(
      formData.get("comments") as string
    ) as Comment[];
    const issueInputData: UpdateIssueInputData = {
      id,
      name,
      description,
      categoryId,
      priority,
      asigneeId,
      reporterId,
      comments,
    };

    if (!name || textAreOnlySpaces(name)) {
      return json<ActionData>(
        { errors: { name: "Title is required" } },
        { status: 400 }
      );
    }

    await updateIssue(issueInputData);
    emitter.emit(EVENTS.ISSUE_CHANGED, Date.now());
  }

  if (_action === "delete") {
    await deleteIssue(id);
  }

  if (_action === "deleteComment") {
    const commentId = formData.get("commentId") as CommentId;

    if (!commentId) return null;

    await deleteComment(commentId);
    return redirect(`/projects/${projectId}/board/issue/${id}`, 202);
  }

  return redirectBack(request, {
    fallback: `/projects/${params.projectId}/board`,
    status: 202,
  });
};

export function CatchBoundary() {
  const location = useLocation();
  const navigate = useNavigate();
  const boardUrl = location.pathname.split("/issue")[0];

  const handleProgrammaticNavigation = () => {
    navigate(boardUrl);
  };

  return (
    <Dialog.Root open={true}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cx(
            "absolute top-0 left-0 z-50 box-border grid h-full w-full place-items-center overflow-y-auto bg-black bg-opacity-50 py-[40px] px-[40px]",
            "radix-state-open:animate-fade-in duration-300"
          )}
        >
          <Dialog.Content
            onPointerDownOutside={handleProgrammaticNavigation}
            className={cx(
              "relative z-50 flex rounded-md bg-white py-12 px-20 shadow-lg flex-center dark:bg-dark-300",
              "duration-300 radix-state-open:animate-slide-up"
            )}
          >
            <Error404
              message="This issue does not exist. Go to the board page"
              href={boardUrl}
            />
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );

  return (
    <div>
      <Error404
        message="It seems that you have lost! Go to the main page"
        href="/"
      />
    </div>
  );
}

export default function IssuePanelRoute() {
  const { issue } = useLoaderData() as LoaderData;
  return <IssuePanel issue={issue} />;
}
