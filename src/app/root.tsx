import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";
import styles from "./styles/app-compiled.css";
import fonts from "./styles/fonts.css";

export function links() {
  return [
    { rel: "stylesheet", href: fonts },
    { rel: "stylesheet", href: styles },
  ];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Jira clone",
  viewport: "width=device-width,initial-scale=1",
});

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

export default function App() {
  // TODO: Where to handle dark theme modification?
  return (
    <html lang="en" className="dark h-full">
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
}
