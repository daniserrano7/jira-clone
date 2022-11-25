import { ProjectData } from "./project";
import { User, usersMock } from "@domain/user";
import { categoriesMock1, categoriesMock2 } from "@domain/category";

const users = usersMock.map((user) => new User(user));

export const projectMock1: ProjectData = {
  id: "jira-clone",
  name: "JIRA Clone",
  description: "Software project",
  users: users,
  categories: categoriesMock1,
};

export const projectMock2: ProjectData = {
  id: "second-project",
  name: "Second project",
  description:
    "Super long description to test how it clamps on project card in the projects page and in the project sidebar",
  users: users.slice(0, 3), // Only the first 3 users
  categories: categoriesMock2,
};

export const projectsMock: ProjectData[] = [projectMock1, projectMock2];
