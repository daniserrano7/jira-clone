import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { User } from "@domain/user";
import { fetchUser } from "@infrastructure/db/user";
import { AppLayout } from "@app/views/app";

type LoaderData = {
  user: User;
};

export const loader: LoaderFunction = async () => {
  const user = await fetchUser();

  if (!user) {
    throw new Error("Project not found");
  }

  return json<LoaderData>({
    user: user,
  });
};

export default function AppRoute() {
  const { user } = useLoaderData() as LoaderData;
  return <AppLayout user={user} />;
}
