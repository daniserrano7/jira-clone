import { Issue, IssueId } from "domain/issue";

export const categoryIds = ["TODO", "IN_PROGRESS", "DONE"] as const;
export type CategoryId = typeof categoryIds[number];


export interface CategoryData {
  id: CategoryId,
  name: string;
  issues: Issue[];
}

export interface Category extends CategoryData {
  addIssue: (issue: Issue) => void;
  removeIssue: (issueId: IssueId) => void;
}

export const createCategory = (data: CategoryData): Category => {
  return {
    ...data,

    addIssue: function(issue: Issue) {
      this.issues.push(issue);
    },

    removeIssue: function(issueId: IssueId) {
      this.issues = this.issues.filter(issue => issue.id !== issueId);
    },
  }
}