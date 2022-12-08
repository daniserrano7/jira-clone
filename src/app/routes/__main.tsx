import type { LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { User } from "@domain/user";
import { getUserIdFromRequest } from "@app/session-storage/user-storage.server";
import { getUser } from "@infrastructure/db/user";
import { MainLayout } from "@app/ui/main";

type LoaderData = {
  user: User;
};

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await getUserIdFromRequest(request);

  if (!userId) {
    return redirect("/login");
  }

  const user = await getUser(userId);

  if (!user) {
    throw new Response("Not Found", {
      status: 404,
    });
  }

  return json<LoaderData>({
    user: user,
  });
};

export default function AppRoute() {
  const { user } = useLoaderData() as LoaderData;
  return <MainLayout user={user} />;
}
