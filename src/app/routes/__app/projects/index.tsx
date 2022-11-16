import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Project } from "@domain/project";
import { fetchProjects } from "@infrastructure/db/project";
import { ProjectsView } from "@app/views/app/projects";

// TODO: Ensure type safety between the loader and the view
type LoaderData = {
  projects: Project[];
};

export const loader: LoaderFunction = async () => {
  const projects = await fetchProjects();

  return { projects };
};

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <div className="h-full w-full text-center">
      <h1 className="text-lg mt-[200px] mb-6">/projects ERROR</h1>
      <a href="/" className="text-primary-main hover:underline">
        Navigate to home
      </a>
    </div>
  );
}

export default function ProjectsRoute() {
  const loaderData = useLoaderData();
  const { projects } = loaderData as LoaderData;

  return <ProjectsView projects={projects} />;
}
