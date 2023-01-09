import { Outlet } from "@remix-run/react";
import { User } from "@domain/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header";

export const MainLayout = ({ user }: Props) => {
  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col bg-white dark:bg-dark-400 dark:text-font-main-dark">
        <Header />
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

interface Props {
  user: User;
}
