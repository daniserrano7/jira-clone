import { CategoryData } from "domain/category";
import { createIssue, issueMock1, issueMock2, issueMock3, issueMock4 } from "domain/issue";

export const categoryMock1: CategoryData = {
  id: "TODO",
  name: "To Do",
  issues: [
    createIssue(issueMock1),
    createIssue(issueMock1)
    // createIssue(issueMock1),
    // createIssue(issueMock1),
    // createIssue(issueMock1),
    // createIssue(issueMock1),
    // createIssue(issueMock1),
    // createIssue(issueMock1),
    // createIssue(issueMock1),
    // createIssue(issueMock1),
    // createIssue(issueMock1)
  ],
}

export const categoryMock2: CategoryData = {
  id: "IN_PROGRESS",
  name: "In progress",
  issues: [createIssue(issueMock2)],
}

export const categoryMock3: CategoryData = {
  id: "DONE",
  name: "Done",
  issues: [createIssue(issueMock3), createIssue(issueMock4)],
}

export const categoriesMock: CategoryData[] = [
  categoryMock1,
  categoryMock2,
  categoryMock3
];