import type { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ProjectData, ProjectId } from "@domain/project";
import { fetchProject } from "@infrastructure/db/project";
import { ProjectView } from "@app/views/app/project";

// TODO: Ensure type safety between the loader and the view
type LoaderData = {
  project: ProjectData;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const projectId = params.projectId as ProjectId;

  const url = new URL(request.url);
  if (url.pathname === `/projects/${projectId}`) {
    return redirect(`${projectId}/board`);
  }

  const project = await fetchProject(projectId);

  if (!project) {
    throw new Error("Project not found");
  }

  return {
    project: project,
  };
};

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return (
    <div className="h-full w-full text-center">
      <h1 className="text-lg mt-[200px] mb-6">/projects/$projectId ERROR</h1>
      <a href="/projects" className="text-primary-main hover:underline">
        Navigate to the projects page
      </a>
    </div>
  );
}

export default function ProjectPage() {
  const loaderData = useLoaderData();
  const { project } = loaderData as LoaderData;
  return <ProjectView projectData={project} />;
}
