import { Issue, IssueId } from "domain/issue"

export const categoryIds = ["TODO", "IN_PROGRESS", "DONE"] as const;
export type CategoryId = typeof categoryIds[number];

export type Category = {
  id: CategoryId,
  name: string;
  issues: Issue[];
}

export const addIssue = (category: Category, issue: Issue): Category => {
  const updatedIssues = [...category.issues, issue];
  return {
    ...category,
    issues: updatedIssues,
  }
}

export const removeIssue = (category: Category, issueId: IssueId): Category => {
  const updatedIssues = category.issues.filter(issue => issue.id !== issueId);
  return {
    ...category,
    issues: updatedIssues,
  }
}