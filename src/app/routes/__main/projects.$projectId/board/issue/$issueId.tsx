import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
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
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

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
  }

  if (_action === "delete") {
    await deleteIssue(id);
  }

  if (_action === "deleteComment") {
    const commentId = formData.get("commentId") as CommentId;

    if (!commentId) return null;

    await deleteComment(commentId);
    return redirect(`/projects/${projectId}/board/issue/${id}`);
  }
  return redirect(`/projects/${projectId}/board`);
};

export default function IssuePanelRoute() {
  const { issue } = useLoaderData() as LoaderData;
  return <IssuePanel issue={issue} />;
}
