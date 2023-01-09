import { createContext, useContext } from "react";
import { User } from "@domain/user";

interface UserStore {
  user: User;
}

export const UserContext = createContext<UserStore | undefined>(undefined);

export const useUserStore = (): UserStore => {
  const userStore = useContext(UserContext);
  if (!userStore) {
    throw new Error("User context not found");
  }
  return userStore;
};
