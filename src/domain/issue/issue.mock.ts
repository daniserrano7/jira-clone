import { Issue } from "./issue";
import { userMock1, userMock2, userMock3 } from "domain/user";

export const issueMock1: Issue = {
  id: 1,
  name: "Refactor entities id to UUID",
  description: "Should be better to use UUID so ID duplication is less likely",
  reporter: userMock1,
  asignees: [userMock2],
  comments: [],
  priority: "high",
}

export const issueMock2: Issue = {
  id: 2,
  name: "Random issue 2",
  description: "Random issue 2 description",
  reporter: userMock1,
  asignees: [userMock2, userMock2],
  comments: [],
  priority: "medium",
}

export const issueMock3: Issue = {
  id: 3,
  name: "Random issue 3",
  description: "Random issue 3 description",
  reporter: userMock1,
  asignees: [],
  comments: [],
  priority: "low",
}

export const issueMock4: Issue = {
  id: 4,
  name: "Random issue 4",
  description: "Random issue 4 description",
  reporter: userMock2,
  asignees: [userMock1, userMock3],
  comments: [{
    id: 1,
    user: userMock2,
    message: "This should be implemented ASAP",
  }, {
    id: 2,
    user: userMock1,
    message: "Ok, I'm on it",
  }],
  priority: "high",
}