import { createContext, useContext } from "react";
import { User } from "@domain/user";

export class UserStore {
  user: User;

  constructor(user: User) {
    this.user = user;
  }
}

export const UserContext = createContext<UserStore | undefined>(undefined);

export const useUserStore = (): UserStore => {
  const userStore = useContext(UserContext);
  if (!userStore) {
    throw new Error("User context not found");
  }
  return userStore;
};
