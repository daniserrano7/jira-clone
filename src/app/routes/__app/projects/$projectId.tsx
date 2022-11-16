import type { LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useLoaderData, useCatch } from "@remix-run/react";
import { ProjectData, ProjectId } from "@domain/project";
import { fetchProject } from "@infrastructure/db/project";
import { Error500 } from "@app/components/error-500";
import { ProjectView } from "@app/views/app/project";

// TODO: Ensure type safety for params
type LoaderData = {
  project: ProjectData;
  section: string;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const url = new URL(request.url);
  const projectId = params.projectId as ProjectId;
  const projectSection = url.pathname.split("/").slice(-1)[0];

  if (url.pathname === `/projects/${projectId}`) {
    return redirect(`${projectId}/board`);
  }

  const project = await fetchProject(projectId);

  if (!project) {
    throw new Error("Project not found");
  }

  return json<LoaderData>({
    project: project,
    section: projectSection,
  });
};

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  const errorMessage = "The Project page failed. Navigate to the projects page";

  return (
    <div className="pt-[100px]">
      <Error500 message={errorMessage} href="/projects" />
    </div>
  );
}

// TODO: 404 catch boundary only for this nested route
export function CatchBoundary() {
  const caught = useCatch();

  return (
    <h1>
      {caught.status} {caught.statusText} asdfasdf
    </h1>
  );
}

export default function ProjectRoute() {
  const { project, section } = useLoaderData() as LoaderData;
  return <ProjectView projectData={project} section={section} />;
}
