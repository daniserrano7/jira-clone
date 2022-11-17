import type { LoaderFunction } from "@remix-run/node";
import { useParams } from "@remix-run/react";
import { Error404 } from "@app/components/error-404";

export const loader: LoaderFunction = async () => {
  throw new Response("Not Found", {
    status: 404,
  });
};

export function CatchBoundary() {
  const params = useParams();
  const slug = params["*"] as string;
  const errorMessage = `The URL "/${slug}" does not exists, so a fallback 404 is shown. Navigate to boards page`;
  return (
    <div className="flex justify-center items-center h-full">
      <Error404 message={errorMessage} href="board" />
    </div>
  );
}

// This will never render
export default function Error404Route() {
  return null;
}
