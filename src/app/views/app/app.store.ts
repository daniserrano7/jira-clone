import { createContext, useContext } from "react";
import { makeAutoObservable } from "mobx";
import { User } from "@domain/user";

export type Theme = "light" | "dark";
interface Constructor {
  user: User;
  theme: Theme;
}

export class AppStore {
  user: User;
  theme: Theme;

  constructor({ user, theme }: Constructor) {
    console.log("INITIALIZING APP STORE");
    this.user = user;
    this.theme = theme;
    makeAutoObservable(this);
  }

  setTheme(theme: Theme) {
    console.log("SETTING THEME", theme);
    this.theme = theme;
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
