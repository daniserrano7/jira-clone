import { Category, createCategory } from "domain/category";
import { createIssue, issueMock1, issueMock2, issueMock3, issueMock4 } from "domain/issue";
import { Issue } from "domain/issue";

const todoIssues: Issue[] = Array
  .from({ length: 10 }, () => createIssue({ ...issueMock1, categoryId: "TODO"}));
export const categoryMock1: Category = createCategory({
  id: "TODO",
  name: "To Do",
  issues: todoIssues,
});

export const categoryMock2: Category = createCategory({
  id: "IN_PROGRESS",
  name: "In progress",
  issues: [createIssue({ ...issueMock2, categoryId: "IN_PROGRESS"})],
});

export const categoryMock3: Category = createCategory({
  id: "DONE",
  name: "Done",
  issues: [
    createIssue({ ...issueMock3, categoryId: "DONE"}), 
    createIssue({ ...issueMock4, categoryId: "DONE"})
  ],
});

export const categoriesMock: Category[] = [
  categoryMock1,
  categoryMock2,
  categoryMock3
];