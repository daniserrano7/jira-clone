import type {
  MetaFunction,
  LoaderFunction,
  ActionFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
} from "@remix-run/react";
import cx from "classix";
import { Theme, ThemePreference } from "@app/store/theme.store";
import {
  createThemeSession,
  getThemeFromRequest,
} from "./session-storage/theme-storage.server";
import { ThemeProvider, useTheme } from "./store/theme.store";
import styles from "./styles/app-compiled.css";
import fonts from "./styles/fonts.css";

export const links = () => {
  return [
    { rel: "stylesheet", href: fonts },
    { rel: "stylesheet", href: styles },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Jira clone",
  viewport: "width=device-width,initial-scale=1",
});

type LoaderData = {
  theme?: Theme;
  themePreference?: ThemePreference;
};
export const loader: LoaderFunction = async ({ request }) => {
  const { theme, themePreference } = await getThemeFromRequest(request);
  return json<LoaderData>({ theme, themePreference });
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const _action = formData.get("_action") as string;

  if (_action === "setTheme") {
    const theme = formData.get("theme") as Theme;
    const themePreference = formData.get("preference") as ThemePreference;
    const redirectTo = (formData.get("redirectTo") as string) || "/";
    console.log("REDIRECT TO: ", redirectTo);
    return createThemeSession({ theme, themePreference }, redirectTo);
  }
  console.error("Unknown action", _action);
};

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <html>
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <h1>
          {caught.status} {caught.statusText} asdfasdf
        </h1>
        <Scripts />
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  const { theme, themePreference } = useLoaderData<LoaderData>();
  return (
    <ThemeProvider
      value={{ initTheme: theme, initPreference: themePreference }}
    >
      <App />
    </ThemeProvider>
  );
}

const App = (): JSX.Element => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  return (
    <html lang="en" className={cx("h-full", isDarkTheme && "dark")}>
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full font-primary text-font-main dark:text-font-main-dark">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};
