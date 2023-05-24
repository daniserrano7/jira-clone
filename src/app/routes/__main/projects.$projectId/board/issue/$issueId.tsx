import type {
  ActionFunction,
  LoaderFunction,
  V2_MetaFunction,
} from "@remix-run/node";
import { redirect, json } from "@remix-run/node";
import { useLoaderData, useLocation, useNavigate } from "@remix-run/react";
import invariant from "tiny-invariant";
import cx from "classix";
import * as Dialog from "@radix-ui/react-dialog";
import { UserId } from "@domain/user";
import { ProjectId } from "@domain/project";
import { CategoryId } from "@domain/category";
import { Issue, IssueId } from "@domain/issue";
import { Comment, CommentId } from "@domain/comment";
import { PriorityId } from "@domain/priority";
import { isValidSort } from "@domain/filter";
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
import { formatTags, formatProperties } from "@utils/meta";

export const meta: V2_MetaFunction<typeof loader> = ({ data }) => {
  const { issue, projectId } = data as LoaderData;
  const title = `Jira clone - ${issue.name}`;
  const description = issue.description || "No description";
  const image =
    "https://jira-clone.fly.dev/static/images/readme/issue-panel.png";
  const url = `https://jira-clone.fly.dev/projects/${projectId}/board/issue/${issue.name}`;

  const tags = {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title: title,
    description: description,
    "twitter:card": "summary_large_image",
    "twitter:site": url,
    "twitter:domain": "jira-clone.fly.dev",
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": image,
    "twitter:image:width": "1452",
    "twitter:image:height": "865",
    "twitter:image:alt": title,
    "twitter:creator": "@Jack_DanielSG",
    "twitter:creator:id": "Jack_DanielSG",
  };

  const properties = {
    "og:url": url,
    "og:type": "website",
    "og:site_name": title,
    "og:title": title,
    "og:description": description,
    "og:image": image,
  };

  return [...formatTags(tags), ...formatProperties(properties)];
};

type LoaderData = {
  issue: Issue;
  projectId: ProjectId;
};

export type ActionData = {
  errors: {
    name?: string;
  };
};

export const loader: LoaderFunction = async ({ params }) => {
  const projectId = params.projectId as ProjectId;
  const issueId = params.issueId as IssueId;

  invariant(params.projectId, `params.projectId is required`);

  const issue = await getIssue(issueId);

  if (!issue) {
    throw new Response("Not Found", {
      status: 404,
    });
  }

  return json<LoaderData>({ issue, projectId });
};

export const action: ActionFunction = async ({ request, params }) => {
  const id = params.issueId as IssueId;
  const projectId = params.projectId as ProjectId;
  const formData = await request.formData();
  const _action = formData.get("_action") as string;
  const url = new URL(request.url);
  const sortByParam = url.searchParams.get("sortBy") as string;
  const sortBySeachParam = isValidSort(sortByParam)
    ? `?sortBy=${sortByParam}`
    : "";
  const previousUrl = `/projects/${projectId}/board${sortBySeachParam}`;

  if (_action === "update") {
    const name = formData.get("title") as string;
    const description = formData.get("description") as string;
    const categoryId = formData.get("status") as CategoryId;
    const priority = formData.get("priority") as PriorityId;
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
    emitter.emit(EVENTS.ISSUE_DELETED, Date.now());
  }

  if (_action === "deleteComment") {
    const commentId = formData.get("commentId") as CommentId;

    if (!commentId) return null;

    await deleteComment(commentId);
    return redirect(`/projects/${projectId}/board/issue/${id}`, 202);
  }

  return redirect(previousUrl);
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
}

export default function IssuePanelRoute() {
  const { issue } = useLoaderData() as LoaderData;
  return <IssuePanel issue={issue} />;
}
