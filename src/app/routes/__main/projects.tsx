import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ProjectSummary } from "@domain/project";
import { getProjectsSummary } from "@infrastructure/db/project";
import { ProjectsView } from "@app/ui/main/projects";

type LoaderData = {
  projectsSummary: ProjectSummary[];
};

export const loader: LoaderFunction = async () => {
  const projectsSummary = await getProjectsSummary();

  return json<LoaderData>({ projectsSummary });
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
  const { projectsSummary } = useLoaderData() as LoaderData;
  return <ProjectsView projectsSummary={projectsSummary} />;
}
