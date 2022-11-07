import { Project } from "./project";
import { usersMock } from "@domain/user";
import { categoriesMock } from "@domain/category";

export const projectMock: Project = new Project({
  name: "JIRA Clone",
  description: "Software project",
  users: usersMock,
  categories: categoriesMock,
});

export const projectsMock: Project[] = [projectMock];
