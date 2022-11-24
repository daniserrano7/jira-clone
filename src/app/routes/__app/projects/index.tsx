import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ProjectPreview } from "@domain/project";
import { fetchProjects } from "@infrastructure/db/project";
import { ProjectsView } from "@app/views/app/projects";

type LoaderData = {
  projects: ProjectPreview[];
};

export const loader: LoaderFunction = async () => {
  const projects = await fetchProjects();

  return json<LoaderData>({ projects });
};

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <div className="h-full w-full text-center">
      <h1 className="mt-[200px] mb-6 text-lg">/projects ERROR</h1>
      <a href="/" className="text-primary-main hover:underline">
        Navigate to home
      </a>
    </div>
  );
}

export default function ProjectsRoute() {
  const { projects } = useLoaderData() as LoaderData;
  return <ProjectsView projects={projects} />;
}
