import { Category, addTask, removeTask } from "./category";
import { taskMock1 } from "domain/task";

describe("Category entity module", () => {
  it("Add task to category", () => {
    const task = taskMock1;
    const reference: Category = {
      id: "TODO",
      name: "To Do",
      tasks: [],
    }
    const expected: Category = {
      id: "TODO",
      name: "To Do",
      tasks: [task],
    }
    const result = addTask(reference, task);

    expect(result).toEqual(expected);
  })

  it("Remove task from category", () => {
    const task = taskMock1;
    const reference: Category = {
      id: "TODO",
      name: "To Do",
      tasks: [task],
    }
    const expected: Category = {
      id: "TODO",
      name: "To Do",
      tasks: [],
    }
    const result = removeTask(reference, task.id);

    expect(result).toEqual(expected);
  })
})