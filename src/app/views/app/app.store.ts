import { createContext, useContext } from "react";
import { makeAutoObservable } from "mobx";
import { User } from "@domain/user";

interface Constructor {
  user: User;
}

export class AppStore {
  user: User;

  constructor({ user }: Constructor) {
    console.log("INITIALIZING APP STORE");
    this.user = user;
    makeAutoObservable(this);
  }
}

export const AppContext = createContext<AppStore | undefined>(undefined);
export const useAppStore = (): AppStore => {
  const appStore = useContext(AppContext);
  if (!appStore) {
    throw new Error("App context not found");
  }
  return appStore;
};
