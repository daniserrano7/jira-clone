import type { LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { ProjectPreview, ProjectId } from "@domain/project";
import { fetchProjectPreview } from "@infrastructure/db/project";
import { Error404 } from "@app/components/error-404";
import { Error500 } from "@app/components/error-500";
import { ProjectView } from "@app/views/app/project";

type LoaderData = {
  projectPreview: ProjectPreview;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const url = new URL(request.url);
  const projectId = params.projectId as ProjectId;

  invariant(params.projectId, `params.projectId is required`);

  const projectData = await fetchProjectPreview(projectId);

  if (!projectData) {
    throw new Response("Not Found", {
      status: 404,
    });
  }

  if (url.pathname === `/projects/${projectId}`) {
    console.log("PATH: ", url.pathname);
    return redirect(`/projects/${projectId}/board`);
  }

  return json<LoaderData>({ projectPreview: projectData });
};

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  const errorMessage = "The Project page failed. Navigate to the projects page";

  return (
    <div className="flex h-full items-center justify-center">
      <Error500 message={errorMessage} href="/projects" />
    </div>
  );
}

export function CatchBoundary() {
  const errorMessage = "Project not found. Navigate to the projects page";
  return (
    <div className="flex h-full items-center justify-center">
      <Error404 message={errorMessage} href="/projects" />
    </div>
  );
}

export default function ProjectRoute() {
  const { projectPreview } = useLoaderData() as LoaderData;
  const { name, description } = projectPreview;
  return <ProjectView name={name} description={description} />;
}
