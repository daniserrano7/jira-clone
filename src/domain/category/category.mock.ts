import { CategoryId, createCategory, categoryIdDict } from "domain/category";
import { createIssue, todoIssues, inProgressIssues, doneIssues } from "domain/issue";
import { IssueData } from "domain/issue";


const categoriesDict: Record<CategoryId, IssueData[]> = {
  "TODO": todoIssues,
  "IN_PROGRESS": inProgressIssues,
  "DONE": doneIssues,
};

export const categoriesMock = Object.entries(categoriesDict).map((pair, idx) => {
  const categoryId = pair[0] as CategoryId;
  const issueDataList = pair[1] as IssueData[];
  return createCategory({
    id: categoryId,
    name: categoryIdDict[categoryId],
    issues: issueDataList.map(issueData => createIssue({
      ...issueData,
      categoryId: categoryId,
    })),
    order: idx,
  });
});