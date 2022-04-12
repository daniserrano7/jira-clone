import { v4 as uuidv4 } from "uuid";
import { IssueData } from "./issue";
import { createComment } from "domain/comment";
import { userMock1, userMock2, userMock3 } from "domain/user";

export const issueMock1: IssueData = {
  id: uuidv4(),
  name: "Refactor entities id to UUID",
  description: "Should be better to use UUID so ID duplication is less likely",
  reporter: userMock1,
  asignees: [userMock2],
  comments: [],
  priority: "high",
}

export const issueMock2: IssueData = {
  id: uuidv4(),
  name: "Random issue 2",
  description: "Random issue 2 description",
  reporter: userMock1,
  asignees: [userMock2, userMock2],
  comments: [],
  priority: "medium",
}

export const issueMock3: IssueData = {
  id: uuidv4(),
  name: "Random issue 3",
  description: "Random issue 3 description",
  reporter: userMock1,
  asignees: [],
  comments: [],
  priority: "low",
}

export const issueMock4: IssueData = {
  id: uuidv4(),
  name: "Random issue 4",
  description: "Random issue 4 description",
  reporter: userMock2,
  asignees: [userMock1, userMock3],
  comments: [createComment({
    id: uuidv4(),
    user: userMock2,
    message: "This should be implemented ASAP",
  }), createComment({
    id: uuidv4(),
    user: userMock1,
    message: "Ok, I'm on it",
  })],
  priority: "high",
}