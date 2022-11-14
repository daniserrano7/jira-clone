import { Project, ProjectId, projectsMock } from "@domain/project";
import db from "./db";
import { populateUsers } from "./user";
import { populateCategories } from "./category";

export interface ProjectDB {
  id: ProjectId;
  name: string;
  description?: string;
}

export const populateProjects = (projects: Project[]): void => {
  projects.forEach((project) => {
    const projectDbData = projectDbPipe(project);
    db.projects.add(projectDbData);
    populateCategories(project);
    populateUsers(project);
  });
};

const projectDbPipe = (project: Project): ProjectDB => ({
  id: project.id,
  name: project.name,
  description: project.description,
});

// export const fetchProject = (projectId: ProjectId) => {
//   return db.projects.get(projectId);
// };

export const fetchProject = async (projectId: ProjectId): Promise<Project | undefined> => {
  return projectsMock.find((project) => project.id === projectId);
};

export const fetchProjects = async (): Promise<Project[]> => {
  return projectsMock;
};
