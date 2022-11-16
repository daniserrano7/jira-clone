import { LoaderFunction, redirect } from "@remix-run/node";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  if (url.pathname === "/") {
    return redirect("projects");
  }
  return null;
};

// Currently there is no landing. Just redirecting to /projects
export default function IndexRoute() {
  return (
    <div>
      <h1>LANDING</h1>
    </div>
  );
}
