import { Task } from "./task";
import { userMock1, userMock2, userMock3 } from "domain/user";

export const taskMock1: Task = {
  id: 1,
  name: "Refactor entities id to UUID",
  description: "Should be better to use UUID so ID duplication is less likely",
  reporter: userMock1,
  asignees: [userMock2],
  comments: [],
  priority: "high",
}

export const taskMock2: Task = {
  id: 2,
  name: "Random task 2",
  description: "Random task 2 description",
  reporter: userMock1,
  asignees: [userMock2, userMock2],
  comments: [],
  priority: "medium",
}

export const taskMock3: Task = {
  id: 3,
  name: "Random task 3",
  description: "Random task 3 description",
  reporter: userMock1,
  asignees: [],
  comments: [],
  priority: "low",
}

export const taskMock4: Task = {
  id: 4,
  name: "Random task 4",
  description: "Random task 4 description",
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