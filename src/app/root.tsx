import { useEffect } from "react";
import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useFetcher,
  useLoaderData,
} from "@remix-run/react";
import cx from "classix";
import { Theme, Preference } from "@app/store/theme.store";
import { getThemeSession } from "./session-storage/theme-storage.server";
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
  preference?: Preference;
};
export const loader: LoaderFunction = async ({ request }) => {
  const themeSession = await getThemeSession(request);
  const { theme, preference } = themeSession.getTheme();
  return json<LoaderData>({ theme, preference });
};

export default function AppWithProviders() {
  const { theme, preference } = useLoaderData<LoaderData>();
  return (
    <ThemeProvider specifiedTheme={theme} specifiedPreference={preference}>
      <App />
    </ThemeProvider>
  );
}

const App = (): JSX.Element => {
  const loaderData = useLoaderData<LoaderData>();
  const { theme: sessionTheme, preference: sessionPreference } = loaderData;
  const { theme } = useTheme();
  const fetcher = useFetcher();
  const isDarkTheme = theme === Theme.DARK;

  useEffect(() => {
    // To avoid missmatch between server and client, theme is loaded
    // from cookie session. On the first visit, the theme is not stored
    // in the session, so we got it from system preference and set it.
    // Next time, the theme will be loaded from session and this won't run.
    if (sessionTheme && sessionPreference !== Preference.SYSTEM) return;

    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? Theme.DARK
      : Theme.LIGHT;

    if (systemTheme === theme) return;

    fetcher.submit(
      { theme: systemTheme, preference: Preference.SYSTEM },
      { action: "action/set-theme", method: "post" }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <html lang="en" className={cx("h-full", isDarkTheme && Theme.DARK)}>
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full font-primary text-font-main dark:bg-dark-300 dark:text-font-main-dark">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <script
          dangerouslySetInnerHTML={{
            __html: !sessionTheme
              ? `
                (function () {
                  if (typeof window === 'undefined') return;

                  const isSystemThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    
                  if (isSystemThemeDark) {
                    const htmlElement = document.documentElement;
                    htmlElement.classList.add('dark');
                  }
                })();
              `
              : "",
          }}
        />
      </body>
    </html>
  );
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
