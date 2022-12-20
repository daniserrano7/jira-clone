import type { LoaderFunction, ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { User } from "@domain/user";
import { getUsers } from "@infrastructure/db/user";
import { getUserSession } from "@app/session-storage";
import { LoginView } from "@app/ui/login";

type LoaderData = {
  users: User[];
};

export const loader: LoaderFunction = async () => {
  const users = await getUsers();
  return json<LoaderData>({ users });
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const _action = formData.get("_action") as string;

  if (_action === "setUser") {
    const userId = formData.get("user") as string;
    const userSession = await getUserSession(request);
    userSession.setUser(userId);

    return redirect("/projects", {
      headers: { "Set-Cookie": await userSession.commit() },
    });
  }
  console.error("Unknown action", _action);
};

export default function LoginRoute() {
  const { users } = useLoaderData<LoaderData>();
  return <LoginView users={users} />;
}
