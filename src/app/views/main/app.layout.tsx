import { Outlet } from "@remix-run/react";
import { User } from "@domain/user";
import { AppStore, AppContext } from "./app.store";
import { Header } from "./header";

export const AppLayout = ({ user }: Props) => {
  const appStore = new AppStore({ user });

  return (
    <AppContext.Provider value={appStore}>
      <div className="flex h-full flex-col bg-white dark:bg-dark-300 dark:text-font-main-dark">
        <Header />
        <Outlet />
      </div>
    </AppContext.Provider>
  );
};

interface Props {
  user: User;
}
