import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { User } from "@domain/user";
import { getUsers } from "@infrastructure/db/user";
import { ProjectPanel } from "@app/ui/main/projects/project-panel.view";

type LoaderData = {
  users: User[];
};

export const loader: LoaderFunction = async () => {
  const users = await getUsers();
  return json<LoaderData>({ users });
};

export default function IssuePanelRoute() {
  const { users } = useLoaderData() as LoaderData;
  return <ProjectPanel users={users} />;
}
