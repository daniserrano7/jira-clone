import { createCookieSessionStorage, redirect } from "@remix-run/node";
import { UserId } from "@domain/user";
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

export const destroyUserSession = async (request: Request, redirectTo: string) => {
  const session = await getUserSession(request);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await userStorage.destroySession(session),
    },
  });
};

export const getUserSession = (request: Request) => {
  return userStorage.getSession(request.headers.get("Cookie"));
};

export const getUserIdFromRequest = async (request: Request): Promise<UserId | null> => {
  const session = await getUserSession(request);
  const userId = session.get(USER_SESSION_KEY);

  return isValidUserId(userId) ? (userId as UserId) : null;
};

const isValidUserId = (userId: unknown): userId is UserId => {
  return Boolean(userId) && typeof userId === "string";
};
