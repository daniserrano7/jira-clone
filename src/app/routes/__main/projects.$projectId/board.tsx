import type { LoaderFunction, ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { Project, ProjectId } from "@domain/project";
import { CategoryId } from "@domain/category";
import { IssueId } from "@domain/issue";
import { isValidSort, DEFAULT_SORT } from "@domain/filter";
import { getProject } from "@infrastructure/db/project";
import {
  updateIssueCategory,
  UpdateIssueCategoryData,
} from "@infrastructure/db/issue";
import { Error500 } from "@app/components/error-500";
import { BoardView } from "@app/ui/main/project/board";
import { emitter, EVENTS } from "@app/events";

type LoaderData = {
  project: Project;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const url = new URL(request.url);
  const sortByParam = url.searchParams.get("sortBy") as string;
  const sortBy = isValidSort(sortByParam) ? sortByParam : DEFAULT_SORT;
  const projectId = params.projectId as ProjectId;

  invariant(params.projectId, `params.projectId is required`);

  const project: Project | null = await getProject(projectId, {
    sortIssuesBy: sortBy,
  });

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
      emitter.emit(EVENTS.ISSUE_CHANGED, Date.now());
      return json(null, { status: 201 });
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
