import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect, json } from "@remix-run/node";
import { UserId } from "@domain/user";
import { CategoryId } from "@domain/category";
import { Comment } from "@domain/comment";
import { Priority } from "@domain/priority";
import { createIssue, CreateIssueInputData } from "@infrastructure/db/issue";
import { IssuePanel } from "@app/ui/main/project/board/issue-panel";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";
import { emitter, EVENTS } from "@app/events";

export type ActionData = {
  errors: {
    name?: string;
  };
};

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

    if (!name || textAreOnlySpaces(name)) {
      return json<ActionData>(
        { errors: { name: "Title is required" } },
        { status: 400 }
      );
    }

    const newIssueId = await createIssue(issueInputData);
    console.log("newIssueId", newIssueId);

    emitter.emit(EVENTS.ISSUE_CHANGED, newIssueId);
    return json(null, { status: 201 });
  }

  return redirect(`/projects/${params.projectId}/board`);
};

export default function IssuePanelRoute() {
  return <IssuePanel />;
}
