import { createCookieSessionStorage, redirect } from "@remix-run/node";
import { SESSION_SECRET } from "./shared";

const _30daysInSeconds = 60 * 60 * 24 * 30;
const USER_SESSION_KEY = "userId";

const userStorage = createCookieSessionStorage({
  cookie: {
    name: "user_session",
    secure: process.env.NODE_ENV === "production",
    secrets: [SESSION_SECRET],
    sameSite: "lax",
    path: "/",
    maxAge: _30daysInSeconds,
    httpOnly: true,
  },
});

export const createUserSession = async (userId: string, redirectTo: string) => {
  const session = await userStorage.getSession();
  session.set(USER_SESSION_KEY, userId);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await userStorage.commitSession(session),
    },
  });
};

export const getUserSession = (request: Request) => {
  return userStorage.getSession(request.headers.get("Cookie"));
};

export const getUserIdFromRequest = async (request: Request) => {
  const session = await getUserSession(request);
  const userId = session.get(USER_SESSION_KEY);
  if (!userId || typeof userId !== "string") return null;
  return userId;
};
