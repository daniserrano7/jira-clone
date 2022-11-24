import { ProjectData, ProjectPreview, ProjectId, projectsMock } from "@domain/project";
import { db } from "./db.server";

export const fetchProject = async (projectId: ProjectId): Promise<ProjectData | undefined> => {
  return projectsMock.find((project) => project.id === projectId);
};

export const fetchProjects = async (): Promise<ProjectPreview[]> => {
  const projects = await db.project.findMany({
    select: {
      id: true,
      name: true,
      description: true,
    },
  });

  return projects.map((project) => ({
    ...project,
    description: project.description || undefined, // To convert 'null' to 'undefined'
  }));
};
