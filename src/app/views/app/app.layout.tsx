import { Outlet } from "@remix-run/react";
import { User } from "@domain/user";
import { AppStore, AppContext } from "./app.store";
import { Header } from "./header";

export const AppLayout = ({ userData }: Props) => {
  const appStore = new AppStore(userData);

  return (
    <AppContext.Provider value={appStore}>
      <div className="flex h-full flex-col">
        <Header />
        <Outlet />
      </div>
    </AppContext.Provider>
  );
};

interface Props {
  userData: User;
}
