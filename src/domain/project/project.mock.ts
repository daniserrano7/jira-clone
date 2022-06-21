import { Project, createProject } from "./project";
import { userMock1, userMock2, userMock3 } from "domain/user";
import { categoriesMock } from "domain/category";

export const projectMock: Project = createProject({
  id: 1,
  name: "JIRA Clone prueba 1",
  description: "Software project",
  users: [userMock1, userMock2, userMock3],
  categories: categoriesMock,
});