import { createContext, useContext } from "react";
import { User } from "@domain/user";

interface Constructor {
  user: User;
  darkMode?: boolean;
}

export class AppStore {
  user: User;
  darkMode: boolean;

  constructor({ user, darkMode }: Constructor) {
    this.user = user;
    this.darkMode = darkMode || false;
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
