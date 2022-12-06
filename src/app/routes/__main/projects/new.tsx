import type { LoaderFunction, ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { User, UserId } from "@domain/user";
import { Category, categoryTypes, categoryTypeDict } from "@domain/category";
import { getUsers } from "@infrastructure/db/user";
import { createProject } from "@infrastructure/db/project";
import { ProjectPanel } from "@app/ui/main/projects/project-panel/project-panel.view";
import { textAreOnlySpaces } from "@app/utils";

type LoaderData = {
  users: User[];
};

export type ActionData = {
  errors: {
    name?: string;
    users?: string;
  };
};

export const loader: LoaderFunction = async () => {
  const users = await getUsers();
  return json<LoaderData>({ users });
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const _action = formData.get("_action") as string;
  const name = formData.get("title") as string;
  const description = formData.get("description") as string;
  const users = formData.getAll("user") as UserId[];

  if (!(_action === "upsert" || _action === "delete")) {
    throw new Error(
      `Invalid action: '${_action}'. Values must be 'upsert' or 'delete'`
    );
  }

  if (_action === "upsert") {
    const errors: ActionData["errors"] = {};

    if (!name || textAreOnlySpaces(name)) {
      errors.name = "Name is required";
    }

    if (users.length === 0) {
      errors.users = "At least one user is required";
    }

    const isErrors = Object.keys(errors).length > 0;

    if (isErrors) {
      return json<ActionData>({ errors }, { status: 400 });
    }

    const categories: Omit<Category, "id">[] = categoryTypes.map(
      (type, index) => ({
        type,
        name: categoryTypeDict[type],
        order: index,
        issues: [],
      })
    );

    await createProject({
      name,
      description,
      userIds: users,
      categories,
    });

    return redirect("/projects");
  }
};

export default function IssuePanelRoute() {
  const { users } = useLoaderData() as LoaderData;
  return <ProjectPanel users={users} />;
}
