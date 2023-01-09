import { createContext, useContext } from "react";
import { User } from "@domain/user";

interface UserStore {
  user: User;
}

const UserContext = createContext<UserStore | undefined>(undefined);

export const UserContextProvider = ({
  user,
  children,
}: {
  user: User;
  children: JSX.Element;
}): JSX.Element => (
  <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
);

export const useUserStore = (): UserStore => {
  const userStore = useContext(UserContext);
  if (!userStore) {
    throw new Error("User context not found");
  }
  return userStore;
};
