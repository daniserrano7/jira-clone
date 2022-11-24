import { UserData, userMock1 } from "@domain/user";

export const fetchUser = async (): Promise<UserData> => {
  return userMock1;
};
