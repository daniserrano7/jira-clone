import { createCookieSessionStorage, redirect } from "@remix-run/node";
import { Theme, ThemePreference } from "@app/store/theme.store";
import { SESSION_SECRET } from "./shared";

const THEME_SESSION_KEY = "theme";
const THEME_PREFERENCE_SESSION_KEY = "themePreference";

const themeStorage = createCookieSessionStorage({
  cookie: {
    name: "theme_session",
    secure: process.env.NODE_ENV === "production",
    secrets: [SESSION_SECRET],
    sameSite: "lax",
    path: "/",
    httpOnly: true,
  },
});

interface CreateThemeSessionData {
  theme: Theme;
  themePreference: ThemePreference;
}
export const createThemeSession = async (
  { theme, themePreference }: CreateThemeSessionData,
  redirectTo: string
) => {
  const session = await themeStorage.getSession();
  session.set(THEME_SESSION_KEY, theme);
  session.set(THEME_PREFERENCE_SESSION_KEY, themePreference);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await themeStorage.commitSession(session),
    },
  });
};

export const getThemeSession = (request: Request) => {
  return themeStorage.getSession(request.headers.get("Cookie"));
};

interface GetThemeFromRequest {
  theme?: Theme;
  themePreference?: ThemePreference;
}
export const getThemeFromRequest = async (request: Request): Promise<GetThemeFromRequest> => {
  const session = await getThemeSession(request);
  const sessionTheme = session.get(THEME_SESSION_KEY);
  const sessionPreference = session.get(THEME_PREFERENCE_SESSION_KEY);

  const theme = isValidTheme(sessionTheme) ? sessionTheme : undefined;
  const themePreference = isValidPreference(sessionPreference) ? sessionPreference : undefined;

  return { theme, themePreference };
};

const isValidTheme = (theme: string): theme is Theme => {
  const themes: Theme[] = ["light", "dark"];
  return themes.includes(theme as Theme);
};

const isValidPreference = (preference: string): preference is ThemePreference => {
  const themes: ThemePreference[] = ["selected", "system"];
  return themes.includes(preference as ThemePreference);
};
