import { Project } from "./project";
import { usersMock } from "@domain/user";
import { categoriesMock1, categoriesMock2 } from "@domain/category";

export const projectMock1: Project = {
  id: "jira-clone",
  name: "JIRA Clone",
  description: "Software project",
  users: usersMock,
  categories: categoriesMock1,
};

export const projectMock2: Project = {
  id: "second-project",
  name: "Second project",
  description:
    "Super long description to test how it clamps on project card in the projects page and in the project sidebar",
  users: usersMock.slice(0, 3), // Only the first 3 users
  categories: categoriesMock2,
};

export const projectsMock: Project[] = [projectMock1, projectMock2];
