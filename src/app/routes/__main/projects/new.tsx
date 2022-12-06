import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { User } from "@domain/user";
import { getUsers } from "@infrastructure/db/user";
import { ProjectPanel } from "@app/ui/main/projects/project-panel/project-panel.view";

type LoaderData = {
  users: User[];
};

export const loader: LoaderFunction = async () => {
  const users = await getUsers();
  return json<LoaderData>({ users });
};

// export const action: ActionFunction = async ({ request }) => {
//   const body = new URLSearchParams(await request.text());
//   const name = body.get("name");
//   const userId = body.get("userId");

//   if (!name || !userId) {
//     return redirect("/projects/new");
//   }

//   return redirect("/projects");
// }

export default function IssuePanelRoute() {
  const { users } = useLoaderData() as LoaderData;
  return <ProjectPanel users={users} />;
}
