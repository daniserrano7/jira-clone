import { Category } from "domain/category";
import { taskMock1, taskMock2, taskMock3, taskMock4 } from "domain/task";

export const categoryMock1: Category = {
  id: 1,
  category: "backlog",
  tasks: [taskMock1],
}

export const categoryMock2: Category = {
  id: 2,
  category: "todo",
  tasks: [taskMock2],
}

export const categoryMock3: Category = {
  id: 3,
  category: "progress",
  tasks: [taskMock3, taskMock4],
}

export const categoryMock4: Category = {
  id: 4,
  category: "done",
  tasks: [taskMock1],
}