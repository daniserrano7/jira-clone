import { ProjectData } from "./project";
import { User, usersMock } from "@domain/user";
import { categoriesMock } from "@domain/category";

const users = usersMock.map((user) => new User(user));

export const projectMockData1: ProjectData = {
  id: "jira-clone",
  name: "JIRA Clone",
  description: "Software project",
  users: users,
  categories: categoriesMock,
};

export const projectMockData2: ProjectData = {
  id: "second-project",
  name: "Second project",
  description: "For routing purposes",
  users: users,
  categories: categoriesMock,
};
