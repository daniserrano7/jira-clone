import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Project } from "@domain/project";
import { fetchProjects } from "@infrastructure/db/project";

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

export default function ProjectPage() {
  const loaderData = useLoaderData();
  const { projects } = loaderData as LoaderData;

  return (
    <div className="p-6">
      <h1 className="text-lg">PROJECTS</h1>
      <ul className="mt-4">
        {projects.map((project) => (
          <li key={project.id} className="text-primary-main hover:underline">
            <a href={`/projects/${project.id}`}>{project.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
