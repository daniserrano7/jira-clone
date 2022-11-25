import {
  redirect,
  json,
  ActionFunction,
  LoaderFunction,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { IssueData } from "@domain/issue";
import { createIssue, getIssue } from "@infrastructure/db/issue";
import { IssuePanel } from "@app/views/app/project/board/issue-panel";

type LoaderData = {
  issueData: IssueData;
};

export const loader: LoaderFunction = async ({ params }) => {
  const { issueId } = params;

  // TODO: Return 404
  if (!issueId) {
    return redirect(`/projects/${params.projectId}/board`);
  }

  const issueData = await getIssue(issueId);

  // TODO: Return 404
  if (!issueData) {
    return null;
  }

  return json<LoaderData>({ issueData });
};

export const action: ActionFunction = async ({ params }) => {
  await createIssue();
  return redirect(`/projects/${params.projectId}/board`);
};

export default function IssuePanelRoute() {
  const { issueData } = useLoaderData() as LoaderData;
  return <IssuePanel issueData={issueData} />;
}
