import { CategoryData, CategoryId, categoryIdDict } from "@domain/category";
import { IssueData, todoIssuesMock, inProgressIssuesMock, doneIssuesMock } from "@domain/issue";

const categoriesDict: Record<CategoryId, IssueData[]> = {
  TODO: todoIssuesMock,
  IN_PROGRESS: inProgressIssuesMock,
  DONE: doneIssuesMock,
};

export const categoriesMock: CategoryData[] = Object.keys(categoriesDict).map((key, idx) => {
  const categoryId = key as CategoryId;
  const categoryName = categoryIdDict[categoryId];
  const issueData = categoriesDict[categoryId];

  return {
    id: categoryId,
    name: categoryName,
    issues: issueData,
    order: idx,
  };
});
