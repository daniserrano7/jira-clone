import { Outlet } from "@remix-run/react";
import { User, UserData } from "@domain/user";
import { AppStore, AppContext } from "./app.store";
import { Header } from "./header";

export const AppLayout = ({ userData }: Props) => {
  const user = new User(userData);
  const appStore = new AppStore(user);

  return (
    <AppContext.Provider value={appStore}>
      <div>
        <Header />
        <Outlet />
      </div>
    </AppContext.Provider>
  );
};

interface Props {
  userData: UserData;
}
