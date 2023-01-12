import { LoaderFunction, redirect } from "@remix-run/node";
import { Error404 } from "@app/components/error-404";

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

export function CatchBoundary() {
  return (
    <div>
      <Error404
        message="It seems that you have lost! Go to the main page"
        href="/"
      />
    </div>
  );
}
