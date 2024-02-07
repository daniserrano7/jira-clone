import type {
  ActionFunction,
  LoaderFunction,
  V2_MetaFunction,
} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import invariant from "tiny-invariant";
import { UserId } from "@domain/user";
import { ProjectId } from "@domain/project";
import { CategoryId } from "@domain/category";
import { Comment } from "@domain/comment";
import { PriorityId } from "@domain/priority";
import { isValidSort } from "@domain/filter";
import { createIssue, CreateIssueInputData } from "@infrastructure/db/issue";
import { IssuePanel } from "@app/ui/main/project/board/issue-panel";
import { emitter, EVENTS } from "@app/events";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";
import { formatTags, formatProperties } from "@utils/meta";

export const meta: V2_MetaFunction<typeof loader> = ({ data }) => {
  const { projectId } = data as LoaderData;
  const title = `Jira clone - Create issue`;
  const description = "Create new issue, edit it and and assigne team members.";
  const image =
    "https://jira-clone.fly.dev/static/images/readme/issue-panel.png";
  const url = `https://jira-clone.fly.dev/projects/${projectId}/board/issue/new`;

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
    "twitter:image:width": "1452",
    "twitter:image:height": "865",
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
  projectId: ProjectId;
};

export const loader: LoaderFunction = async ({ params }) => {
  const projectId = params.projectId as ProjectId;

  invariant(params.projectId, `params.projectId is required`);
  return json<LoaderData>({ projectId });
};

export type ActionData = {
  errors: {
    name?: string;
  };
};

export const action: ActionFunction = async ({ request, params }) => {
  const projectId = params.projectId as ProjectId;
  const formData = await request.formData();
  const _action = formData.get("_action") as string;
  const url = new URL(request.url);
  const sortByParam = url.searchParams.get("sortBy") as string;
  const sortBySeachParam = isValidSort(sortByParam)
    ? `?sortBy=${sortByParam}`
    : "";
  const previousUrl = `/projects/${projectId}/board${sortBySeachParam}`;

  if (_action === "create") {
    const name = formData.get("title") as string;
    const description = formData.get("description") as string;
    const categoryId = formData.get("status") as CategoryId;
    const priority = formData.get("priority") as PriorityId;
    const asigneeId = formData.get("asignee") as UserId;
    const reporterId = formData.get("reporter") as UserId;
    const comments = JSON.parse(
      formData.get("comments") as string
    ) as Comment[];
    const issueInputData: CreateIssueInputData = {
      name,
      description,
      categoryId,
      priority,
      asigneeId,
      reporterId,
      comments,
    };

    if (!name || textAreOnlySpaces(name)) {
      return json<ActionData>(
        { errors: { name: "Title is required" } },
        { status: 400 }
      );
    }

    await createIssue(issueInputData);

    emitter.emit(EVENTS.ISSUE_CREATED, Date.now());
  }

  return redirect(previousUrl);
};

export default function IssuePanelRoute() {
  return <IssuePanel />;
}
