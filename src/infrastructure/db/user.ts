import { User, userMock1 } from "@domain/user";
import { dnull } from "src/utils/dnull";
import { db } from "./db.server";

export const fetchUser = async (): Promise<User> => {
  return userMock1;
};

export const getUsers = async (): Promise<User[]> => {
  const users = await db.user.findMany();
  return users.map(dnull);
};
