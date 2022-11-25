import { Issue, IssueData, IssueId } from "@domain/issue";

export type CategoryId = string;
export type CategoryType = typeof categoryTypes[number];
export const categoryTypes = ["TODO", "IN_PROGRESS", "DONE"] as const;

export const categoryTypeDict: Record<CategoryType, string> = {
  TODO: "To do",
  IN_PROGRESS: "In progress",
  DONE: "Done",
};

export interface CategoryData {
  id: CategoryId;
  type: CategoryType;
  name: string;
  issues: IssueData[];
  order: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Category implements CategoryData {
  readonly id: CategoryId;
  readonly type: CategoryType;
  name: string;
  issues: Issue[];
  order: number;
  createdAt: Date;
  updatedAt: Date;

  constructor(data: CategoryData) {
    this.id = data.id;
    this.type = data.type;
    this.name = data.name;
    this.issues = [];
    this.order = data.order;
    this.createdAt = data.createdAt || new Date();
    this.updatedAt = data.updatedAt || new Date();

    data.issues.forEach((issue) => {
      try {
        this.issues.push(new Issue(issue));
      } catch (error) {
        console.error(`Error in category ${data.id} creating issue: ${issue.id}`, issue, error);
      }
    });
  }

  getIssue(issueId: IssueId) {
    return this.issues.find((issue) => issue.id === issueId);
  }

  addIssue(issue: Issue) {
    this.issues.push(issue);
  }

  removeIssue(issueId: IssueId) {
    this.issues = this.issues.filter((issue) => issue.id !== issueId);
  }
}
