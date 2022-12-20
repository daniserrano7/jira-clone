import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { getUserSession } from "@app/session-storage";

export const loader = () => redirect("/", { status: 404 });

export const action: ActionFunction = async ({ request }) => {
  const userSession = await getUserSession(request);

  return redirect("/login", {
    headers: { "Set-Cookie": await userSession.destroyUser() },
  });
};

export default function SetThemeAction() {
  return <div>Oops... You should not see this.</div>;
}
