import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { UserData } from "@domain/user";
import { fetchUser } from "@infrastructure/db/user";
import { AppLayout } from "@app/views/app";

// TODO: Ensure type safety between the loader and the view
type LoaderData = {
  user: UserData;
};

export const loader: LoaderFunction = async () => {
  const user = await fetchUser();

  if (!user) {
    throw new Error("Project not found");
  }

  return {
    user: user,
  };
};

export default function AppRoute() {
  const loaderData = useLoaderData();
  const { user } = loaderData as LoaderData;
  return <AppLayout userData={user} />;
}
