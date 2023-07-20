import type { LoaderFunction, V2_MetaFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { ProjectSummary, ProjectId } from "@domain/project";
import { getProjectSummary } from "@infrastructure/db/project";
import { Error404 } from "@app/components/error-404";
import { Error500 } from "@app/components/error-500";
import { ProjectView } from "@app/ui/main/project";
import { formatTags, formatProperties } from "@utils/meta";

export const meta: V2_MetaFunction<typeof loader> = ({ data }) => {
  const { projectSummary } = data as LoaderData;
  const title = `Jira clone - ${projectSummary.name || "Project"}`;
  const description =
    "See all your projects in one place. Create new ones and assigne team members.";
  const image = "https://jira-clone.fly.dev/static/images/readme/project.png";
  const url = `https://jira-clone.fly.dev/projects/${projectSummary.id}`;

  const tags = {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title: title,
    description: description,
    "twitter:card": "summary_large_image",
    "twitter:site": url,
    "twitter:domain": "jira-clone.fly.dev",
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": image,
    "twitter:image:width": "1457",
    "twitter:image:height": "872",
    "twitter:image:alt": title,
    "twitter:creator": "@Jack_DanielSG",
    "twitter:creator:id": "Jack_DanielSG",
  };

  const properties = {
    "og:url": url,
    "og:type": "website",
    "og:site_name": title,
    "og:title": title,
    "og:description": description,
    "og:image": image,
  };

  return [...formatTags(tags), ...formatProperties(properties)];
};

type LoaderData = {
  projectSummary: ProjectSummary;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const url = new URL(request.url);
  const projectId = params.projectId as ProjectId;

  invariant(params.projectId, `params.projectId is required`);

  const projectSummary = await getProjectSummary(projectId);

  if (!projectSummary) {
    throw new Response("Not Found", {
      status: 404,
    });
  }

  if (url.pathname === `/projects/${projectId}`) {
    return redirect(`/projects/${projectId}/board`);
  }

  return json<LoaderData>({ projectSummary: projectSummary });
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
  const { projectSummary } = useLoaderData() as LoaderData;
  const { name, description, image } = projectSummary;
  return <ProjectView name={name} description={description} image={image} />;
}
