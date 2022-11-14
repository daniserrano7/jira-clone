import { Project } from "./project";
import { usersMock } from "@domain/user";
import { categoriesMock } from "@domain/category";

export const projectMock: Project = new Project({
  id: "jira-clone",
  name: "JIRA Clone",
  description: "Software project",
  users: usersMock,
  categories: categoriesMock,
});

export const projectMock2: Project = new Project({
  id: "second-project",
  name: "Second project",
  description: "For routing purposes",
  users: usersMock,
  categories: categoriesMock,
});

export const projectsMock: Project[] = [projectMock, projectMock2];
