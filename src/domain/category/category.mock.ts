import { Category } from "domain/category";
import { taskMock1, taskMock2, taskMock3, taskMock4 } from "domain/task";

export const categoryMock1: Category = {
  id: "TODO",
  name: "To Do",
  tasks: [taskMock1],
}

export const categoryMock2: Category = {
  id: "IN_PROGRESS",
  name: "In progress",
  tasks: [taskMock2],
}

export const categoryMock3: Category = {
  id: "DONE",
  name: "Done",
  tasks: [taskMock3, taskMock4],
}