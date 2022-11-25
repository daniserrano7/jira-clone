import type { LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { ProjectData, ProjectId } from "@domain/project";
import { fetchProject } from "@infrastructure/db/project";
import { Error500 } from "@app/components/error-500";
import { BoardView } from "@app/views/app/project/board";

type LoaderData = {
  projectData: ProjectData;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const url = new URL(request.url);
  const projectId = params.projectId as ProjectId;

  invariant(params.projectId, `params.projectId is required`);

  const projectData: ProjectData | null = await fetchProject(projectId);

  if (!projectData) {
    throw new Response("Not Found", {
      status: 404,
    });
  }

  if (url.pathname === `/projects/${projectId}`) {
    console.log("PATH: ", url.pathname);
    return redirect(`/projects/${projectId}/board`);
  }

  const mockIssue = projectData.categories[0].issues[0];
  console.log("PROJECT ISSUE DATA: ", mockIssue);
  console.log("ISSUE CREATED AT TYPE: ", typeof mockIssue.createdAt);
  console.log(
    "COMMENT CREATED AT TYPE: ",
    typeof mockIssue.comments[0].createdAt
  );

  return json<LoaderData>({ projectData });
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
  const { projectData } = useLoaderData() as LoaderData;
  return <BoardView projectData={projectData} />;
}
