import type { LoaderFunction, ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { Project, ProjectId } from "@domain/project";
import { CategoryId } from "@domain/category";
import { IssueId } from "@domain/issue";
import { getProject } from "@infrastructure/db/project";
import {
  updateIssueCategory,
  UpdateIssueCategoryData,
} from "@infrastructure/db/issue";
import { Error500 } from "@app/components/error-500";
import { BoardView } from "@app/ui/main/project/board";

type LoaderData = {
  project: Project;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const url = new URL(request.url);
  const projectId = params.projectId as ProjectId;

  invariant(params.projectId, `params.projectId is required`);

  const project: Project | null = await getProject(projectId);

  // TODO: Should this be a 404 or a 500?
  if (!project) {
    throw new Response("Not Found", {
      status: 404,
    });
  }

  if (url.pathname === `/projects/${projectId}`) {
    return redirect(`/projects/${projectId}/board`);
  }

  return json<LoaderData>({ project });
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const _action = formData.get("_action") as string;

  if (_action === "updateIssueCategory") {
    const categoryId = formData.get("categoryId") as CategoryId;
    const issueId = formData.get("issueId") as IssueId;
    const inputData: UpdateIssueCategoryData = {
      categoryId,
      issueId,
    };

    try {
      await updateIssueCategory(inputData);
      return json({ issueId }, { status: 200 });
    } catch (error) {
      const errorMsg =
        error instanceof Error
          ? error.message
          : "Could not update issue category";
      return json({ error: errorMsg }, { status: 500 });
    }
  }
  console.error("Unknown action", _action);
};

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  const errorMessage = "The board page failed. Navigate to the projects page";

  return (
    <div className="flex h-full items-center justify-center">
      <Error500 message={errorMessage} href="board" />
    </div>
  );
}

export default function BoardRoute() {
  const { project } = useLoaderData() as LoaderData;
  return <BoardView project={project} />;
}
