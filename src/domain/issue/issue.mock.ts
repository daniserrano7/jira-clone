import { IssueData } from "./issue";
import { createComment, commentMock1 } from "domain/comment";
import { userMock1, userMock2 } from "domain/user";

export const issueMock1: Omit<IssueData, "id"> = {
  name: "Refactor entities id to UUID",
  description: "Should be better to use UUID so ID duplication is less likely",
  categoryId: "TODO",
  reporter: userMock1,
  asignee: userMock2,
  comments: [],
  priority: "high",
}

export const issueMock2: Omit<IssueData, "id"> = {
  name: "Random issue 2",
  description: "Random issue 2 description",
  categoryId: "TODO",
  reporter: userMock1,
  asignee: userMock2,
  comments: [createComment(commentMock1)],
  priority: "medium",
};

export const issueMock3: Omit<IssueData, "id"> = {
  name: "Random issue 3",
  description: "Random issue 3 description",
  categoryId: "IN_PROGRESS",
  reporter: userMock1,
  asignee: userMock2,
  comments: [],
  priority: "low",
};

export const issueMock4: Omit<IssueData, "id"> = {
  name: "Random issue 4",
  description: "Random issue 4 description",
  categoryId: "DONE",
  reporter: userMock2,
  asignee: userMock2,
  comments: [createComment({
    user: userMock2,
    message: "This should be implemented ASAP",
  }), createComment({
    user: userMock1,
    message: "Ok, I'm on it",
  })],
  priority: "high",
};