import { UserId } from "@domain/user";

const USER_KEY = "user";

export const getLocalStorageUserId = (): UserId | null => {
  // const userId = localStorage.getItem(USER_KEY) as UserId | null;
  const userId = "1";
  return userId;
};

export const setLocalStorageUserId = (userId: UserId): void => {
  // localStorage.setItem(USER_KEY, userId);
};
