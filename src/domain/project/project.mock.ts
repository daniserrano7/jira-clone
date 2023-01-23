import { Project } from "./project";
import { usersMock } from "@domain/user";
import { categoriesMock1, categoriesMock2 } from "@domain/category";

export const projectMock1: Project = {
  id: "jira-clone",
  name: "JIRA Clone",
  description: "Software project",
  users: usersMock,
  categories: categoriesMock1,
  image:
    "https://admin.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10400?size=xxlarge",
  createdAt: new Date("2023-01-01 10:00").valueOf(),
};

export const projectMock2: Project = {
  id: "second-project",
  name: "Second project",
  description:
    "Super long description to test how it clamps on project card in the projects page and in the project sidebar",
  users: usersMock.slice(0, 3), // Only the first 3 users
  categories: categoriesMock2,
  image:
    "https://admin.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10401?size=xxlarge",
  createdAt: new Date("2023-01-01 11:00").valueOf(),
};

export const projectsMock: Project[] = [projectMock1, projectMock2];
