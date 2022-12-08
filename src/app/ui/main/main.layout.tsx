import { Outlet } from "@remix-run/react";
import { User } from "@domain/user";
import { Header } from "./header";

export const MainLayout = ({ user }: Props) => {
  return (
    <div className="flex h-full flex-col bg-white dark:bg-dark-300 dark:text-font-main-dark">
      <Header />
      <Outlet />
    </div>
  );
};

interface Props {
  user: User;
}
