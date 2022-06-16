import { Category, createCategory } from "domain/category";
import { createIssue, issueMock1, issueMock2, issueMock3, issueMock4 } from "domain/issue";

export const categoryMock1: Category = createCategory({
  id: "TODO",
  name: "To Do",
  issues: [
    createIssue(issueMock1),
    createIssue(issueMock1),
    createIssue(issueMock4),
    createIssue(issueMock1),
    createIssue(issueMock1),
    createIssue(issueMock1),
    createIssue(issueMock1),
    createIssue(issueMock1),
    createIssue(issueMock1),
    createIssue(issueMock1),
    createIssue(issueMock1),
    createIssue(issueMock1),
    createIssue(issueMock1),
    createIssue(issueMock1),
    createIssue(issueMock1),
    createIssue(issueMock1),
    createIssue(issueMock1)
  ],
});

export const categoryMock2: Category = createCategory({
  id: "IN_PROGRESS",
  name: "In progress",
  issues: [createIssue(issueMock2)],
});

export const categoryMock3: Category = createCategory({
  id: "DONE",
  name: "Done",
  issues: [createIssue(issueMock3), createIssue(issueMock4)],
});

export const categoriesMock: Category[] = [
  categoryMock1,
  categoryMock2,
  categoryMock3
];