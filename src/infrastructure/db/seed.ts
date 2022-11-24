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
import { IssueData, IssueId } from "@domain/issue";
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
    asignee: { connect: { id: issueData.asignee.id } },
    reporter: { connect: { id: issueData.reporter.id } },
    category: { connect: { id: categoryId } },
  };
  return db.issue.upsert({
    where: { id: issueData.id },
    create: issueInput,
    update: issueInput,
  });
};

const createOrUpdateComment = async (commentData: CommentData, issueId: IssueId) => {
  const commentInput: Prisma.CommentCreateInput = {
    id: commentData.id,
    message: commentData.message,
    user: { connect: { id: commentData.user.id } },
    issue: { connect: { id: issueId } },
  };
  return db.comment.upsert({
    where: { id: commentData.id },
    create: commentInput,
    update: commentInput,
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
        const issue = await createOrUpdateIssue(issueData, category.id);

        for (const commentData of issueData.comments) {
          console.log(`Seeding COMMENT: ${commentData.message}`);
          await createOrUpdateComment(commentData, issue.id);
        }
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
