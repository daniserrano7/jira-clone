import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { IssueData, IssueId } from "@domain/issue";
import { createIssue, getIssue } from "@infrastructure/db/issue";
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

export const action: ActionFunction = async ({ params }) => {
  await createIssue();
  return redirect(`/projects/${params.projectId}/board`);
};

export default function IssuePanelRoute() {
  const { issueData } = useLoaderData() as LoaderData;
  return <IssuePanel issueData={issueData} />;
}
