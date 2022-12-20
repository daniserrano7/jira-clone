import type { ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Theme, Preference } from "@app/store/theme.store";
import { getThemeSession } from "@app/session-storage/theme-storage.server";

export const loader = () => redirect("/", { status: 404 });

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const theme = form.get("theme") as Theme;
  const preference = form.get("preference") as Preference;
  const themeSession = await getThemeSession(request);
  themeSession.setTheme({ theme, preference });

  return json(
    { success: true },
    {
      headers: { "Set-Cookie": await themeSession.commit() },
    }
  );
};

export default function SetThemeAction() {
  return <div>Oops... You should not see this.</div>;
}
