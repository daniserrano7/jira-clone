import { CSSProperties, useEffect } from "react";
import type { LoaderFunction, V2_MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useFetcher,
  useLoaderData,
} from "@remix-run/react";
import cx from "classix";
import { Theme, Preference } from "@app/store/theme.store";
import { formatTags, formatProperties } from "@utils/meta";
import { getThemeSession } from "./session-storage/theme-storage.server";
import { ThemeProvider, useTheme } from "./store/theme.store";
import { Toast } from "./components/toast";
import { Error404 } from "./components/error-404";
import { Error500 } from "./components/error-500";
import styles from "./styles/app-compiled.css";
import fonts from "./styles/fonts.css";
import fuck from 'react-toastify/dist/ReactToastify.css'

export const links = () => {
  return [
    { rel: "stylesheet", href: fonts },
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: fuck },
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
  ];
};

export const meta: V2_MetaFunction = () => {
  const title = "Jira clone";
  const description =
    "Task manager application inspired in Jira. Side project made with Remix, React, Tailwind, TypeScript and more.";
  const image =
    "https://jira-clone.fly.dev/static/images/select-theme-light.png";
  const url = "https://jira-clone.fly.dev";

  const tags = {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title: title,
    description: description,
    "twitter:card": "summary_large_image",
    "twitter:site": url,
    "twitter:domain": "jira-clone.fly.dev",
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": image,
    "twitter:image:width": "951",
    "twitter:image:height": "696",
    "twitter:image:alt": title,
    "twitter:creator": "@Jack_DanielSG",
    "twitter:creator:id": "Jack_DanielSG",
  };

  const properties = {
    "og:url": url,
    "og:type": "website",
    "og:site_name": title,
    "og:title": title,
    "og:description": description,
    "og:image": image,
  };

  return [...formatTags(tags), ...formatProperties(properties)];
};

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
    if (sessionTheme && sessionPreference === Preference.SELECTED) return;

    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? Theme.DARK
      : Theme.LIGHT;

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
        <Toast />
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

const errorComponentStyle: CSSProperties = {
  maxWidth: "500px",
  width: "80%",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  color: "#0052cc",
  fontFamily: "sans-serif",
  fontWeight: "bold",
};

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  const errorMessage =
    "It seems there is a critical error! Please try again or contact me at: danielserrano.contacto@gmail.com";

  return (
    // Inline styles because tailwind is not loaded at this point
    <div style={errorComponentStyle}>
      <Error500 message={errorMessage} href="/" />
    </div>
  );
}

export function CatchBoundary() {
  return (
    <html>
      <head>
        <title>Oops! Not found</title>
        <Meta />
        <Links />
      </head>
      <body>
        <div style={errorComponentStyle}>
          <Error404
            message="It seems that you have lost! Go to the main page"
            href="/"
          />
        </div>
      </body>
    </html>
  );
}
