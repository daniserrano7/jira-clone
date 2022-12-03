import { Outlet } from "@remix-run/react";
import { observer } from "mobx-react-lite";
import { User } from "@domain/user";
import cx from "classix";
import { AppStore, AppContext, useAppStore, Theme } from "./app.store";
import { Header } from "./header";

export const AppLayout = ({ user }: Props) => {
  // TODO: Get theme from OS settings
  const theme: Theme = "dark";
  const appStore = new AppStore({ user, theme });
  console.log("APP LAYOUT");

  return (
    <AppContext.Provider value={appStore}>
      <Wrapper>
        <div className="flex h-full flex-col bg-white dark:bg-dark-300 dark:text-font-main-dark">
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

const Wrapper = observer(({ children }: WrapperProps) => {
  const { theme } = useAppStore();

  return (
    <div className={cx("h-full", theme === "dark" && "dark")}>{children}</div>
  );
});
interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}
