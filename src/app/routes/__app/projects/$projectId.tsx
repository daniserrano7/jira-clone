import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { User, userMock1 } from "@domain/user";
import { Project, ProjectId } from "@domain/project";
import { fetchProject } from "@infrastructure/db/project";
import { Project as ProjectView } from "@app/views/app/project";

type LoaderData = {
  user: User;
  project: Project;
};

export const loader: LoaderFunction = async ({ params }) => {
  const projectId = params.projectId as ProjectId;
  const project = await fetchProject(projectId);

  if (!project) {
    throw new Error("Project not found");
  }

  return {
    user: userMock1,
    project: project,
  };
};

export function ErrorBoundary() {
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
  const { user, project } = loaderData as LoaderData;
  return <ProjectView user={user} project={project} />;
}
