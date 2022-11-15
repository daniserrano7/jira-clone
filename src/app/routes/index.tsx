import { LoaderFunction, redirect } from "@remix-run/node";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  if (url.pathname === "/") {
    return redirect("/projects");
  }
  return null;
};

export default function Index() {
  return (
    <div>
      <h1>LANDING</h1>
    </div>
  );
}
