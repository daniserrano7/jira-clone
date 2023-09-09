import { useEffect } from "react";
import type { V2_MetaFunction } from "@remix-run/node";
import { toast } from "react-toastify";
import { Error500 } from "@app/components/error-500";
import { formatTags } from "@utils/meta";

export const meta: V2_MetaFunction = () => {
  const title = "Jira clone - Error";
  const description =
    "Manage your project. Create, edit, delete new issues and assigne them.";

  const tags = {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title: title,
    description: description,
  };

  return [{ title }, ...formatTags(tags)];
};

export const loader = async () => {
  throw new Error("Fail from Error500Route");
};

export function ErrorBoundary({ error }: { error: Error }) {
  useEffect(() => {
    toast.error("Try reloading the page.");
  }, []);

  console.error(error);
  const errorMessage =
    "The Server error page failed. This is an example of a server error page (check network tab). Navigate to the board page";

  return (
    <div className="flex h-full items-center justify-center">
      <Error500 message={errorMessage} href="board" />
    </div>
  );
}

export default function Error500Route() {
  return <div>This will never show because of the server error 500</div>;
}

//  -^-
//   O
//  /|\  -> Felicidad
//  / \
