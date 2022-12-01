import { Outlet } from "@remix-run/react";
import { User } from "@domain/user";
import { AppStore, AppContext } from "./app.store";
import { Header } from "./header";

export const AppLayout = ({ user }: Props) => {
  const appStore = new AppStore(user);

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
  user: User;
}
