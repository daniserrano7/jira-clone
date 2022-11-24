import { ProjectData, ProjectId, projectsMock } from "@domain/project";

export const fetchProject = async (projectId: ProjectId): Promise<ProjectData | undefined> => {
  return projectsMock.find((project) => project.id === projectId);
};

export const fetchProjects = async (): Promise<ProjectData[]> => {
  return projectsMock;
};
