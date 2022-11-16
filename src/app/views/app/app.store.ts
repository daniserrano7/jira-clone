import { createContext, useContext } from "react";
import { User } from "@domain/user";

export class AppStore {
  user: User;

  constructor(user: User) {
    this.user = user;
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
