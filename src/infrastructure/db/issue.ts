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
}

export const populateIssues = (category: Category): void => {
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

export const fetchIssues = (categoryId: CategoryId): PromiseExtended<IssueDB[]> => {
  return db.issues.where({ categoryId }).sortBy("createdAt");
}