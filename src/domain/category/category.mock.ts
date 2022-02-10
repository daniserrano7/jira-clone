import { Category } from "domain/category";
import { issueMock1, issueMock2, issueMock3, issueMock4 } from "domain/issue";

export const categoryMock1: Category = {
  id: "TODO",
  name: "To Do",
  issues: [issueMock1],
}

export const categoryMock2: Category = {
  id: "IN_PROGRESS",
  name: "In progress",
  issues: [issueMock2],
}

export const categoryMock3: Category = {
  id: "DONE",
  name: "Done",
  issues: [issueMock3, issueMock4],
}

export const categoriesMock: Category[] = [
  categoryMock1,
  categoryMock2,
  categoryMock3
];