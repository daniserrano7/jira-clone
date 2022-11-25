import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { UserId } from "@domain/user";
import { CategoryId, CategoryType } from "@domain/category";
import { IssueData, IssueId } from "@domain/issue";
import { CommentData } from "@domain/comment";
import { Priority } from "@domain/priority";
import {
  getIssue,
  updateIssue,
  UpdateIssueInputData,
} from "@infrastructure/db/issue";
import { IssuePanel } from "@app/views/app/project/board/issue-panel";

type LoaderData = {
  issueData: IssueData;
};

export const loader: LoaderFunction = async ({ params }) => {
  const issueId = params.issueId as IssueId;

  invariant(params.projectId, `params.projectId is required`);

  const issueData = await getIssue(issueId);

  if (!issueData) {
    throw new Response("Not Found", {
      status: 404,
    });
  }

  return json<LoaderData>({ issueData });
};

export const action: ActionFunction = async ({ request, params }) => {
  // TODO: get categoryId from issue panel status select
  const categoryId = "1e8877a7-91dc-46de-bce0-f077ad922fc8" as CategoryId;
  const id = params.issueId as IssueId;
  const formData = await request.formData();
  const name = formData.get("title") as string;
  const description = formData.get("description") as string;
  const categoryType = formData.get("status") as CategoryType;
  const priority = formData.get("priority") as Priority;
  const asigneeId = formData.get("asignee") as UserId;
  const reporterId = formData.get("reporter") as UserId;
  const comments = JSON.parse(
    formData.get("comments") as string
  ) as CommentData[];
  const issueInputData: UpdateIssueInputData = {
    id,
    name,
    description,
    categoryId,
    categoryType,
    priority,
    asigneeId,
    reporterId,
    comments,
  };

  await updateIssue(issueInputData);
  return redirect(`/projects/${params.projectId}/board`);
};

export default function IssuePanelRoute() {
  const { issueData } = useLoaderData() as LoaderData;
  return <IssuePanel issueData={issueData} />;
}
