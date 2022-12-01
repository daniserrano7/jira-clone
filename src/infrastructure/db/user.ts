import { User, userMock1 } from "@domain/user";

export const fetchUser = async (): Promise<User> => {
  return userMock1;
};
