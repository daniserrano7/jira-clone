import type { LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ProjectSummary } from "@domain/project";
import { getProjectsSummary } from "@infrastructure/db/project";
import { getUserIdFromRequest } from "@app/session-storage";
import { ProjectsView } from "@app/ui/main/projects";

type LoaderData = {
  projectsSummary: ProjectSummary[];
};

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await getUserIdFromRequest(request);

  if (!userId) {
    return redirect("/login");
  }

  const projectsSummary = await getProjectsSummary(userId);

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
