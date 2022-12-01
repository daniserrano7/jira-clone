import {
  Prisma,
  PrismaClient,
  Project as ProjectDB,
  User as UserDB,
  Category as CategoryDB,
  Issue as IssueDB,
} from "@prisma/client";
import { User, usersMock, getRandomPastelColor } from "@domain/user";
import { Project, ProjectId, projectsMock } from "@domain/project";
import { Category, CategoryId } from "@domain/category";
import { Issue } from "@domain/issue";
import { Comment } from "@domain/comment";

const db = new PrismaClient();

const createOrUpdateUser = async (user: User): Promise<UserDB> => {
  const userInput: Prisma.UserCreateInput = {
    id: user.id,
    name: user.name,
    image: user.image,
    color: user.color || getRandomPastelColor(),
  };
  return db.user.upsert({
    where: { id: user.id },
    create: userInput,
    update: userInput,
  });
};

const createOrUpdateProject = async (project: Project): Promise<ProjectDB> => {
  const projectInput: Prisma.ProjectCreateInput = {
    id: project.id,
    name: project.name,
    description: project.description,
    users: {
      connect: project.users.map((user) => ({ id: user.id })),
    },
  };
  return db.project.upsert({
    where: { id: project.id },
    create: projectInput,
    update: projectInput,
  });
};

const createOrUpdateCategory = async (
  category: Category,
  projectId: ProjectId
): Promise<CategoryDB> => {
  const categoryInput: Prisma.CategoryCreateInput = {
    id: category.id,
    type: category.type,
    name: category.name,
    order: category.order,
    project: { connect: { id: projectId } },
  };
  return db.category.upsert({
    where: { id: category.id },
    create: categoryInput,
    update: categoryInput,
  });
};

const createOrUpdateIssue = async (issue: Issue, categoryId: CategoryId): Promise<IssueDB> => {
  const issueInput: Prisma.IssueCreateInput = {
    id: issue.id,
    name: issue.name,
    description: issue.description,
    category: { connect: { id: categoryId } },
    asignee: { connect: { id: issue.asignee.id } },
    reporter: { connect: { id: issue.reporter.id } },
  };

  const getCommentInput = (comment: Comment): Omit<Prisma.CommentCreateInput, "issue"> => {
    return {
      id: comment.id,
      message: comment.message,
      user: { connect: { id: comment.user.id } },
    };
  };

  return db.issue.upsert({
    where: { id: issue.id },
    create: {
      ...issueInput,
      comments: {
        create: issue.comments.map(getCommentInput),
      },
    },
    update: {
      ...issueInput,
      comments: {
        upsert: issue.comments.map((comment) => ({
          where: { id: comment.id },
          create: getCommentInput(comment),
          update: getCommentInput(comment),
        })),
      },
    },
  });
};

const seedUsers = async () => {
  for (const user of usersMock) {
    console.log(`Seeding USER: ${user.name}`);
    await createOrUpdateUser(user);
  }
};

const seedProjects = async () => {
  for (const project of projectsMock) {
    console.log(`Seeding PROJECT: ${project.name}`);
    const project = await createOrUpdateProject(project);

    for (const category of project.categories) {
      console.log(`Seeding CATEGORY: ${category.name}`);
      const category = await createOrUpdateCategory(category, project.id);

      for (const issue of category.issues) {
        console.log(`Seeding ISSUE: ${issue.name}`);
        await createOrUpdateIssue(issue, category.id);
      }
    }
  }
};

const seedDb = async () => {
  await seedUsers();
  await seedProjects();
};

seedDb();
