import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect, json } from "@remix-run/node";
import { UserId } from "@domain/user";
import { CategoryId } from "@domain/category";
import { Comment } from "@domain/comment";
import { Priority } from "@domain/priority";
import { createIssue, CreateIssueInputData } from "@infrastructure/db/issue";
import { IssuePanel } from "@app/views/app/project/board/issue-panel";

export const loader: LoaderFunction = async () => {
  return json(null);
};

export const action: ActionFunction = async ({ request, params }) => {
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
    const issueInputData: CreateIssueInputData = {
      name,
      description,
      categoryId,
      priority,
      asigneeId,
      reporterId,
      comments,
    };

    await createIssue(issueInputData);
  }

  return redirect(`/projects/${params.projectId}/board`);
};

export default function IssuePanelRoute() {
  return <IssuePanel />;
}
