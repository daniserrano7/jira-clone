import { Category, CategoryId, createCategory, categoryIdDict } from "domain/category";
import { createIssue, todoIssues, inProgressIssues, doneIssues } from "domain/issue";
import { IssueData } from "domain/issue";

const createCategoryEntity = (categoryId: CategoryId, issues: IssueData[]): Category => {
  return createCategory({
    id: categoryId,
    name: categoryIdDict[categoryId],
    issues: issues.map(issue => createIssue({
      ...issue,
      categoryId: categoryId,
    })),
  })
}

export const todoCategory: Category = createCategoryEntity("TODO", todoIssues);
export const inProgressCategory: Category = createCategoryEntity("IN_PROGRESS", inProgressIssues);
export const doneCategory: Category = createCategoryEntity("DONE", doneIssues);

export const categoriesMock: Category[] = [
  todoCategory,
  inProgressCategory,
  doneCategory
];