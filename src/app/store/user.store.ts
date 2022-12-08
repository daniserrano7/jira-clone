import { createContext, useContext } from "react";
import { makeAutoObservable } from "mobx";
import { User } from "@domain/user";

interface Constructor {
  user: User;
}

export class UserStore {
  user: User;

  constructor({ user }: Constructor) {
    this.user = user;
    makeAutoObservable(this);
  }

  setUser(user: User) {
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
