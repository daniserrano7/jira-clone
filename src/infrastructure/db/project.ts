import { ProjectData, ProjectPreview, ProjectId } from "@domain/project";
import { db } from "./db.server";
import { dnull } from "@infrastructure/utils/dnull";

export const fetchProject = async (projectId: ProjectId): Promise<ProjectData | null> => {
  const project = await db.project.findUnique({
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
              priority: true,
              asignee: true,
              reporter: true,
              createdAt: true,
              updatedAt: true,
              category: {
                select: {
                  type: true,
                },
              },
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

  project.categories.forEach((category) => {
    category.issues.forEach((issue) => {
      // @ts-expect-error - To adjust Prisma schema to the domain model
      issue.categoryType = issue.category.type;
      // @ts-expect-error - To adjust Prisma schema to the domain model
      delete issue.category;
    });
  });

  // TODO: fix this
  // Dificult to type cast all nested objects
  // The error comes from ENUMS (categoryType, priority)
  return dnull(project) as unknown as ProjectData;
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
