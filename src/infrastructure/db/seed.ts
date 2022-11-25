import {
  Prisma,
  PrismaClient,
  Project as ProjectDB,
  User as UserDB,
  Category as CategoryDB,
  Issue as IssueDB,
} from "@prisma/client";
import { UserData, usersMock, getRandomPastelColor } from "@domain/user";
import { ProjectData, ProjectId, projectsMock } from "@domain/project";
import { CategoryData, CategoryId } from "@domain/category";
import { IssueData } from "@domain/issue";
import { CommentData } from "@domain/comment";

const db = new PrismaClient();

const createOrUpdateUser = async (userData: UserData): Promise<UserDB> => {
  const userInput: Prisma.UserCreateInput = {
    id: userData.id,
    name: userData.name,
    image: userData.image,
    color: userData.color || getRandomPastelColor(),
  };
  return db.user.upsert({
    where: { id: userData.id },
    create: userInput,
    update: userInput,
  });
};

const createOrUpdateProject = async (projectData: ProjectData): Promise<ProjectDB> => {
  const projectInput: Prisma.ProjectCreateInput = {
    id: projectData.id,
    name: projectData.name,
    description: projectData.description,
    users: {
      connect: projectData.users.map((user) => ({ id: user.id })),
    },
  };
  return db.project.upsert({
    where: { id: projectData.id },
    create: projectInput,
    update: projectInput,
  });
};

const createOrUpdateCategory = async (
  categoryData: CategoryData,
  projectId: ProjectId
): Promise<CategoryDB> => {
  const categoryInput: Prisma.CategoryCreateInput = {
    id: categoryData.id,
    type: categoryData.type,
    name: categoryData.name,
    order: categoryData.order,
    project: { connect: { id: projectId } },
  };
  return db.category.upsert({
    where: { id: categoryData.id },
    create: categoryInput,
    update: categoryInput,
  });
};

const createOrUpdateIssue = async (
  issueData: IssueData,
  categoryId: CategoryId
): Promise<IssueDB> => {
  const issueInput: Prisma.IssueCreateInput = {
    id: issueData.id,
    name: issueData.name,
    description: issueData.description,
    categoryType: issueData.categoryType,
    category: { connect: { id: categoryId } },
    asignee: { connect: { id: issueData.asignee.id } },
    reporter: { connect: { id: issueData.reporter.id } },
  };

  const getCommentInput = (commentData: CommentData): Omit<Prisma.CommentCreateInput, "issue"> => {
    return {
      id: commentData.id,
      message: commentData.message,
      user: { connect: { id: commentData.user.id } },
    };
  };

  return db.issue.upsert({
    where: { id: issueData.id },
    create: {
      ...issueInput,
      comments: {
        create: issueData.comments.map(getCommentInput),
      },
    },
    update: {
      ...issueInput,
      comments: {
        upsert: issueData.comments.map((commentData) => ({
          where: { id: commentData.id },
          create: getCommentInput(commentData),
          update: getCommentInput(commentData),
        })),
      },
    },
  });
};

const seedUsers = async () => {
  for (const userData of usersMock) {
    console.log(`Seeding USER: ${userData.name}`);
    await createOrUpdateUser(userData);
  }
};

const seedProjects = async () => {
  for (const projectData of projectsMock) {
    console.log(`Seeding PROJECT: ${projectData.name}`);
    const project = await createOrUpdateProject(projectData);

    for (const categoryData of projectData.categories) {
      console.log(`Seeding CATEGORY: ${categoryData.name}`);
      const category = await createOrUpdateCategory(categoryData, project.id);

      for (const issueData of categoryData.issues) {
        console.log(`Seeding ISSUE: ${issueData.name}`);
        await createOrUpdateIssue(issueData, category.id);
      }
    }
  }
};

const seedDb = async () => {
  await seedUsers();
  await seedProjects();
};

seedDb();

// const userDbToUserData = (userDb: UserDB): UserData => ({
//   ...userDb,
//   image: userDb.image || undefined,
// });
