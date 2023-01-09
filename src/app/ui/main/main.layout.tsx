import { Outlet } from "@remix-run/react";
import { User } from "@domain/user";
import { UserContext } from "@app/store/user.store";
import { Header } from "./header";

export const MainLayout = ({ user }: Props) => {
  return (
    <UserContext.Provider value={{ user }}>
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
