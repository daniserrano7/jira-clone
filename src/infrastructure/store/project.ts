import { makeAutoObservable } from "mobx";
import { Project } from "@domain/project";
import { User } from "@domain/user";
import { Category } from "@domain/category";
import { Issue } from "@domain/issue";
import { Comment } from "@domain/comment";
import db from "@infrastructure/db";
import { ProjectDB, fetchProject } from "@infrastructure/db/project";
import { UserDB, fetchUser, fetchUsers } from "@infrastructure/db/user";
import { CategoryDB, fetchCategories } from "@infrastructure/db/category";
import { IssueDB, fetchIssues } from "@infrastructure/db/issue";
import { CommentDB } from "@infrastructure/db/comment";

class ProjectStore {
  /* @ts-expect-error: null checking will be at component lebel  */
  project: Project = null;
  editingIssue: Issue | null = null;
  filters: Filters = {
    search: "",
    sort: "date",
  };

  constructor() {
    makeAutoObservable(this);
  }

  async fetchInitData() {
    const projectsDb = await db.projects.toArray();
    const projectId = projectsDb[0].id;

    const [project, users, categories] = await Promise.all([
      fetchProject(projectId),
      fetchUsers(),
      fetchCategories(projectId),
    ]);

    if (!project) {
      throw new Error(`Project not found: ${projectId}`);
    }

    this.project = createProjectFromDb(project);
    this.project.users = users.map(createUserFromDb);
    this.project.categories = await Promise.all(categories.map(createCategoryFromDb));
  }
}

interface Filters {
  search: string;
  sort: SortFilter;
}

export type SortFilter = "date" | "priority";

export const projectStore = new ProjectStore();

// PROJECT
const createProjectFromDb = (projectDb: ProjectDB): Project => {
  return new Project({
    id: projectDb.id,
    name: projectDb.name,
    description: projectDb.description,
    users: [],
    categories: [],
  });
};

// USER
export const createUserFromDb = (user: UserDB): User => {
  return new User({
    id: user.id,
    name: user.name,
    image: user.image,
    color: user.color,
  });
};

// CATEGORY
const createCategoryFromDb = async (categoryDb: CategoryDB): Promise<Category> => {
  const issuesDb = await fetchIssues(categoryDb.id);
  const issues = await Promise.all(issuesDb.map(createIssueFromDb));

  return new Category({
    id: categoryDb.id,
    name: categoryDb.name,
    issues: issues,
    order: categoryDb.order,
  });
};

// ISSUE
const createIssueFromDb = async (issueDb: IssueDB): Promise<Issue> => {
  const issueId = issueDb.id;
  const commentsDb = await db.comments.where({ issueId }).toArray();

  if (!issueDb) {
    throw new Error(`Issue not found: ${issueId}`);
  }
  const [reporterDb, asigneeDb, comments] = await Promise.all([
    db.users.get(issueDb.reporter),
    db.users.get(issueDb.asignee),
    Promise.all(commentsDb.map(createCommentFromDb)),
  ]);

  if (!reporterDb || !asigneeDb) {
    throw new Error("User not found");
  }

  return new Issue({
    id: issueDb.id,
    name: issueDb.name,
    description: issueDb.description,
    comments: comments,
    categoryId: issueDb.categoryId,
    priority: issueDb.priority,
    reporter: createUserFromDb(reporterDb),
    asignee: createUserFromDb(asigneeDb),
    createdAt: new Date(issueDb.createdAt),
  });
};

// COMMENT
const createCommentFromDb = async (commentDb: CommentDB): Promise<Comment> => {
  const user = await fetchUser(commentDb.userId);

  if (!user) {
    throw new Error("Comment user not found");
  }

  return new Comment({
    id: commentDb.id,
    user: createUserFromDb(user),
    message: commentDb.message,
    createdAt: commentDb.createdAt,
  });
};
