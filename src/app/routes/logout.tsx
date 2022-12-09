import type { LoaderFunction, ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { User } from "@domain/user";
import { destroyUserSession } from "@app/session-storage";
import { LoginView } from "@app/ui/login";

type LoaderData = {
  users: User[];
};

export const loader: LoaderFunction = async () => {
  return redirect("/login");
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const _action = formData.get("_action") as string;

  if (_action === "logout") {
    const redirectTo = "/login";
    return destroyUserSession(request, redirectTo);
  }
  console.error("Unknown action", _action);
};

export default function LoginRoute() {
  const { users } = useLoaderData<LoaderData>();
  return <LoginView users={users} />;
}
