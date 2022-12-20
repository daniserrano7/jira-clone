import { createCookieSessionStorage } from "@remix-run/node";
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

export const getUserSession = async (request: Request) => {
  const session = await userStorage.getSession(request.headers.get("Cookie"));

  return {
    getUser: (): UserId | null => {
      const userId = session.get(USER_SESSION_KEY) as UserId | undefined;
      return isValidUserId(userId) ? userId : null;
    },
    setUser: (userId: UserId) => {
      if (isValidUserId(userId)) session.set(USER_SESSION_KEY, userId);
    },
    destroyUser: () => userStorage.destroySession(session),
    commit: () => userStorage.commitSession(session),
  };
};

const isValidUserId = (userId: unknown): userId is UserId => {
  return Boolean(userId) && typeof userId === "string";
};
