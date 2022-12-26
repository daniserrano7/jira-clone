import type { LoaderFunction } from "@remix-run/node";
import { useParams } from "@remix-run/react";
import { ProjectId } from "@domain/project";
import { Error404 } from "@app/components/error-404";

export const loader: LoaderFunction = async () => {
  throw new Response("Not Found", {
    status: 404,
  });
};

export function CatchBoundary() {
  const params = useParams();
  const projectId = params.projectId as ProjectId;
  const slug = params["*"] as string;
  const errorMessage = `The section "/${slug}" does not exists, so a fallback 404 is shown (check network tab). Navigate to boards page`;
  return (
    <div className="flex h-full items-center justify-center">
      <Error404 message={errorMessage} href={`/projects/${projectId}/board`} />
    </div>
  );
}

// This will never render
export default function Error404Route() {
  return null;
}
