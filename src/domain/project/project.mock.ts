import { Project, createProject } from "./project";
import { usersMock } from "domain/user";
import { categoriesMock } from "domain/category";

export const projectMock: Project = createProject({
  id: 1,
  name: "JIRA Clone prueba 1",
  description: "Software project",
  users: usersMock,
  categories: categoriesMock,
});