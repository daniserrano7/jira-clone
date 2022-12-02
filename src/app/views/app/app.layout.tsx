import { Outlet } from "@remix-run/react";
import { User } from "@domain/user";
import cx from "classix";
import { AppStore, AppContext, useAppStore } from "./app.store";
import { Header } from "./header";

export const AppLayout = ({ user }: Props) => {
  // TODO: Get theme from OS settings
  const darkMode = true;
  const appStore = new AppStore({ user, darkMode });

  return (
    <AppContext.Provider value={appStore}>
      <Wrapper>
        <div className="flex h-full flex-col bg-white dark:bg-dark">
          <Header />
          <Outlet />
        </div>
      </Wrapper>
    </AppContext.Provider>
  );
};

interface Props {
  user: User;
}

const Wrapper = ({ children }: WrapperProps) => {
  const { darkMode } = useAppStore();

  return <div className={cx("h-full", darkMode && "dark")}>{children}</div>;
};
interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}
