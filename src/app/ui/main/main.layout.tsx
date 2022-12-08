import { Outlet } from "@remix-run/react";
import { User } from "@domain/user";
import { UserStore, UserContext } from "@app/store/user.store";
import { Header } from "./header";

export const MainLayout = ({ user }: Props) => {
  const userStore = new UserStore(user);
  return (
    <UserContext.Provider value={userStore}>
      <div className="flex h-full flex-col bg-white dark:bg-dark-300 dark:text-font-main-dark">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

interface Props {
  user: User;
}
