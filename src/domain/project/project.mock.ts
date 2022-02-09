import { Project } from "./project";
import { userMock1, userMock2, userMock3 } from "domain/user";
import { categoryMock1, categoryMock2, categoryMock3 } from "domain/category";

export const projectMock1: Project = {
  id: 1,
  name: "JIRA Clone project",
  users: [userMock1, userMock2, userMock3],
  categories: [categoryMock1, categoryMock2, categoryMock3],
}