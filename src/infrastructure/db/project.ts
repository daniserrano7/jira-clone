import { Project as ProjectDB } from "@prisma/client";
import { ProjectData, ProjectPreview, ProjectId } from "@domain/project";
import { db } from "./db.server";

export const fetchProject = async (projectId: ProjectId): Promise<ProjectData | null> => {
  const project: ProjectDB | null = await db.project.findUnique({
    where: {
      id: projectId,
    },
    include: {
      users: true,
      categories: {
        include: {
          issues: {
            select: {
              id: true,
              name: true,
              description: true,
              categoryType: true,
              priority: true,
              asignee: true,
              reporter: true,
              createdAt: true,
              updatedAt: true,
              comments: {
                select: {
                  id: true,
                  message: true,
                  user: true,
                  createdAt: true,
                  updatedAt: true,
                },
              },
            },
          },
        },
      },
    },
  });

  if (!project) {
    return null;
  }

  return {
    categories: [],
    users: [],
    ...project,
    description: project.description || undefined, // To convert 'null' to 'undefined'
  };
};

export const fetchProjectPreview = async (projectId: ProjectId): Promise<ProjectPreview | null> => {
  const project = await db.project.findUnique({
    where: { id: projectId },
    select: {
      id: true,
      name: true,
      description: true,
    },
  });

  if (!project) {
    return null;
  }

  return {
    ...project,
    description: project.description || undefined, // To convert 'null' to 'undefined'
  };
};

export const fetchProjectsPreview = async (): Promise<ProjectPreview[]> => {
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
