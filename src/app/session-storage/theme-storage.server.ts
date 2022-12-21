import { createCookieSessionStorage } from "@remix-run/node";
import { Theme, Preference, isValidTheme, isValidPreference } from "@app/store/theme.store";
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

interface ThemeSessionValues {
  theme?: Theme;
  preference?: Preference;
}

export const getThemeSession = async (request: Request) => {
  const session = await themeStorage.getSession(request.headers.get("Cookie"));

  return {
    getTheme: (): ThemeSessionValues => {
      const theme = session.get(THEME_SESSION_KEY) as Theme | undefined;
      const preference = session.get(THEME_PREFERENCE_SESSION_KEY) as Preference | undefined;
      return {
        theme: isValidTheme(theme) ? theme : undefined,
        preference: isValidPreference(preference) ? preference : undefined,
      };
    },
    setTheme: ({ theme, preference }: ThemeSessionValues) => {
      if (isValidTheme(theme)) session.set(THEME_SESSION_KEY, theme);
      if (isValidPreference(preference)) session.set(THEME_PREFERENCE_SESSION_KEY, preference);
    },
    commit: () => themeStorage.commitSession(session, { expires: new Date("2088-10-18") }),
  };
};
