import { UserId } from "@domain/user";
import { Project, ProjectSummary, ProjectId } from "@domain/project";
import { Category, CategoryType } from "@domain/category";
import { Priority } from "@domain/priority";
import { db } from "./db.server";
import { dnull } from "@infrastructure/utils/dnull";

export const getProject = async (projectId: ProjectId): Promise<Project | null> => {
  const projectDb = await db.project.findUnique({
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
              priority: true,
              createdAt: true,
              reporter: true,
              asignee: true,
            },
            orderBy: {
              createdAt: "desc",
            },
          },
        },
      },
    },
  });

  if (!projectDb) {
    return null;
  }

  const project: Project = {
    id: projectDb.id,
    users: projectDb.users.map(dnull),
    name: projectDb.name,
    description: projectDb.description || "",
    categories: projectDb.categories.map((category) => ({
      id: category.id,
      name: category.name,
      type: category.type as CategoryType,
      order: category.order,
      issues: category.issues.map((issue) => ({
        id: issue.id,
        name: issue.name,
        priority: issue.priority as Priority,
        reporter: dnull(issue.reporter),
        asignee: dnull(issue.asignee),
        comments: [],
        createdAt: issue.createdAt.getDate(),
        updatedAt: issue.createdAt.getDate(),
      })),
    })),
    createdAt: projectDb.createdAt.getDate(),
    updatedAt: projectDb.updatedAt.getDate(),
  };

  return project;
};

export const getProjectSummary = async (projectId: ProjectId): Promise<ProjectSummary | null> => {
  const projectSummaryDb = await db.project.findUnique({
    where: { id: projectId },
    select: {
      id: true,
      name: true,
      description: true,
      createdAt: true,
    },
  });

  if (!projectSummaryDb) {
    return null;
  }

  const projectSummary: ProjectSummary = {
    id: projectSummaryDb.id,
    name: projectSummaryDb.name,
    description: projectSummaryDb.description || "",
    createdAt: projectSummaryDb.createdAt.getDate(),
  };

  return projectSummary;
};

export const getProjectsSummary = async (): Promise<ProjectSummary[]> => {
  const projectsSummaryDb = await db.project.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  const projectsSummary: ProjectSummary[] = projectsSummaryDb.map((projectSummaryDb) => ({
    id: projectSummaryDb.id,
    name: projectSummaryDb.name,
    description: projectSummaryDb.description || "",
    createdAt: projectSummaryDb.createdAt.getDate(),
  }));

  return projectsSummary;
};

type CreateProjectInput = {
  name: string;
  description: string;
  userIds: UserId[];
  categories: Omit<Category, "id">[];
};
export const createProject = async (project: CreateProjectInput): Promise<void> => {
  await db.project.create({
    data: {
      name: project.name,
      description: project.description,
      categories: {
        create: project.categories.map((category) => ({
          name: category.name,
          type: category.type,
          order: category.order,
        })),
      },
    },
    include: {
      categories: true,
    },
  });

  // const projectCreated: Project = {
  //   id: projectDb.id,
  //   users: [],
  //   name: projectDb.name,
  //   description: projectDb.description || "",
  //   categories: projectDb.categories.map((category) => ({
  //     id: category.id,
  //     name: category.name,
  //     type: category.type as CategoryType,
  //     order: category.order,
  //     issues: [],
  //   })),
  //   createdAt: projectDb.createdAt.getDate(),
  //   updatedAt: projectDb.updatedAt.getDate(),
  // };

  // return projectCreated;
};
