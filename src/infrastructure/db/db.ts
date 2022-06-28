import Dexie, { Table } from "dexie";
import { Project, ProjectId, projectsMock } from "domain/project";
import { Category, CategoryId } from "domain/category";
import { Issue, IssueId } from "domain/issue";
import { Priority } from "domain/priority";
import { User, UserId } from "domain/user";
import { Comment, CommentId } from "domain/comment";


class DB extends Dexie {
  projects!: Table<ProjectDB>;
  categories!: Table<CategoryDB>;
  issues!: Table<IssueDB>;
  users!: Table<UserDB>;
  comments!: Table<CommentDB>;

  constructor() {
    super("jira-clone-db");
    this.version(1).stores({
      projects: "id",
      categories: "id, projectId",
      issues: "id, categoryId",
      users: "id",
      comments: "id, issueId",
    });
  }
}

const db = new DB();

db.on("populate", () => {
  populateProjects(projectsMock);
});

// PROJECT
const populateProjects = (projects: Project[]): void => {
  projects.forEach(project => {
    const projectDbData = projectDbPipe(project);
    db.projects.add(projectDbData);
    populateCategories(project);
    populateUsers(project);
  });
}

const projectDbPipe = (project: Project): ProjectDB => ({
  id: project.id,
  name: project.name,
  description: project.description,
});

interface ProjectDB {
  id: ProjectId;
  name: string;
  description?: string;
}

// USER
const populateUsers = (project: Project): void => {
  project.users.forEach(user => {
    const userDbData = userDbPipe(user);
    db.users.add(userDbData);
  });
}

const userDbPipe = (user: User): UserDB => ({
  id: user.id,
  name: user.name,
  image: user.image,
  color: user.color,
});

interface UserDB {
  id: UserId;
  name: string;
  image?: string;
  color: string;
}

// CATEGORY
const populateCategories = (project: Project): void => {
  project.categories.forEach(category => {
    const categoryDbData = categoryDbPipe(category, project.id);
    db.categories.add(categoryDbData);
    populateIssues(category);
  });
}

const categoryDbPipe = (category: Category, projectId: ProjectId): CategoryDB => ({
  projectId,
  id: category.id,
  name: category.name,
});

interface CategoryDB {
  projectId: ProjectId;
  id: CategoryId;
  name: string;
}

// ISSUE
const populateIssues = (category: Category): void => {
  category.issues.forEach(issue => {
    const issueDbData = issueDbPipe(issue, category.id);
    db.issues.add(issueDbData);
    populateComments(issue);
  });
}

const issueDbPipe = (issue: Issue, categoryId: CategoryId): IssueDB => ({
  categoryId,
  id: issue.id,
  name: issue.name,
  description: issue.description,
  priority: issue.priority,
  reporter: issue.reporter.id,
  asignee: issue.asignee.id,
});

interface IssueDB {
  categoryId: CategoryId;
  id: IssueId;
  name: string;
  description?: string;
  priority: Priority;
  reporter: UserId;
  asignee: UserId;
}

// COMMENT
const populateComments = (issue: Issue): void => {
  issue.comments.forEach(comment => {
    const commentDbData = commentDbPipe(comment, issue.id);
    db.comments.add(commentDbData);
  });
}

const commentDbPipe = (comment: Comment, issueId: IssueId): CommentDB => ({
  issueId,
  id: comment.id,
  message: comment.message,
  userId: comment.user.id,
});

interface CommentDB {
  issueId: IssueId;
  id: CommentId;
  message: string;
  userId: UserId;
}

export default db;