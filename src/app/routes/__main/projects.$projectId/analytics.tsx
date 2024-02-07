import type { LoaderFunction, V2_MetaFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import invariant from "tiny-invariant";
import { Project, ProjectId } from "@domain/project";
import { getProject } from "@infrastructure/db/project";
import { AnalyticsView } from "@app/ui/main/project/analytics";
import { Error500 } from "@app/components/error-500";
import { formatTags, formatProperties } from "@utils/meta";

export const meta: V2_MetaFunction<typeof loader> = ({ data }) => {
  const { project } = data as LoaderData;
  const title = "Jira clone - Analytics";
  const description =
    "Manage your project. Create, edit, delete new issues and assigne them.";
  const image = "https://jira-clone.fly.dev/static/images/readme/project.png";
  const url = `https://jira-clone.fly.dev/projects/${project.id}/analytics`;

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

  return [{ title }, ...formatTags(tags), ...formatProperties(properties)];
};

type LoaderData = {
  project: Project;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const url = new URL(request.url);
  const projectId = params.projectId as ProjectId;

  invariant(params.projectId, `params.projectId is required`);

  const project: Project | null = await getProject(projectId);

  if (!project) {
    throw new Response("Not Found", {
      status: 404,
    });
  }

  if (url.pathname === `/projects/${projectId}`) {
    return redirect(`/projects/${projectId}/analytics`);
  }

  return json<LoaderData>({ project });
};

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  const errorMessage = "The analytics page failed. Navigate to the board page";

  return (
    <div className="flex h-full items-center justify-center">
      <Error500 message={errorMessage} href="board" />
    </div>
  );
}

export default function AnalyticsRoute() {
  return <AnalyticsView />;
}
