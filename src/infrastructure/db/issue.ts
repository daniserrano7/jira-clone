import { PromiseExtended } from "dexie";
import { Category, CategoryId } from "domain/category";
import { Issue, IssueId } from "domain/issue";
import { UserId } from "domain/user";
import { Priority } from "domain/priority";
import db from "./db";
import { populateComments } from "./comment";


export interface IssueDB {
  categoryId: CategoryId;
  id: IssueId;
  name: string;
  description?: string;
  priority: Priority;
  reporter: UserId;
  asignee: UserId;
  createdAt: number; // In miliseconds
}

export const populateIssues = (category: Category): void => {
  category.issues.forEach(issue => {
    const issueDbData = issueDbPipe(issue);
    db.issues.add(issueDbData);
    populateComments(issue);
  });
}

const issueDbPipe = (issue: Issue): IssueDB => ({
  categoryId: issue.categoryId,
  id: issue.id,
  name: issue.name,
  description: issue.description,
  priority: issue.priority,
  reporter: issue.reporter.id,
  asignee: issue.asignee.id,
  createdAt: issue.createdAt.getTime(),
});

export const fetchIssues = (categoryId: CategoryId): PromiseExtended<IssueDB[]> => {
  return db.issues.where({ categoryId }).sortBy("createdAt");
}

export const addIssueDb = (issue: Issue): void => {
  const issueDbData = issueDbPipe(issue);
  db.issues.add(issueDbData);
  populateComments(issue);
}

export const updateIssueDb = (issue: Issue): void => {
  const issueDbData = issueDbPipe(issue);
  db.issues.update(issue.id, {...issueDbData});
}

export const removeIssueDb = (issue: Issue): void => {
  const commentIds = issue.comments.map(comment => comment.id);
  db.issues.delete(issue.id);
  db.comments.bulkDelete(commentIds);
}