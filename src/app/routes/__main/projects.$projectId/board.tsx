import type {
  LoaderFunction,
  ActionFunction,
  V2_MetaFunction,
} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { Project, ProjectId } from "@domain/project";
import { CategoryId } from "@domain/category";
import { IssueId } from "@domain/issue";
import { isValidSort, DEFAULT_SORT } from "@domain/filter";
import { getProject } from "@infrastructure/db/project";
import {
  updateIssueCategory,
  UpdateIssueCategoryData,
} from "@infrastructure/db/issue";
import { Error500 } from "@app/components/error-500";
import { BoardView } from "@app/ui/main/project/board";
import { emitter, EVENTS } from "@app/events";
import { formatTags, formatProperties } from "@utils/meta";

export const meta: V2_MetaFunction<typeof loader> = ({ data }) => {
  const { project } = data as LoaderData;
  const title = "Jira clone - Board";
  const description =
    "Manage your project. Create, edit, delete new issues and assigne them.";
  const image = "https://jira-clone.fly.dev/static/images/readme/project.png";
  const url = `https://jira-clone.fly.dev/projects/${project.id}/board`;

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
  project: Project;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const url = new URL(request.url);
  const sortByParam = url.searchParams.get("sortBy") as string;
  const sortBy = isValidSort(sortByParam) ? sortByParam : DEFAULT_SORT;
  const projectId = params.projectId as ProjectId;

  invariant(params.projectId, `params.projectId is required`);

  const project: Project | null = await getProject(projectId, {
    sortIssuesBy: sortBy,
  });

  if (!project) {
    throw new Response("Not Found", {
      status: 404,
    });
  }

  if (url.pathname === `/projects/${projectId}`) {
    return redirect(`/projects/${projectId}/board`);
  }

  return json<LoaderData>({ project });
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const _action = formData.get("_action") as string;

  if (_action === "updateIssueCategory") {
    const categoryId = formData.get("categoryId") as CategoryId;
    const issueId = formData.get("issueId") as IssueId;
    const inputData: UpdateIssueCategoryData = {
      categoryId,
      issueId,
    };

    try {
      await updateIssueCategory(inputData);
      emitter.emit(EVENTS.ISSUE_CHANGED, Date.now());
      return json(null, { status: 201 });
    } catch (error) {
      const errorMsg =
        error instanceof Error
          ? error.message
          : "Could not update issue category";
      return json({ error: errorMsg }, { status: 500 });
    }
  }
  console.error("Unknown action", _action);
};

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  const errorMessage = "The board page failed. Navigate to the projects page";

  return (
    <div className="flex h-full items-center justify-center">
      <Error500 message={errorMessage} href="board" />
    </div>
  );
}

export default function BoardRoute() {
  const { project } = useLoaderData() as LoaderData;
  return <BoardView project={project} />;
}
