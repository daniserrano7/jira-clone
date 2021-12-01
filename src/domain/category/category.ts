import { Task } from "../task/task";

export const categories = ["backlog", "todo", "progress", "done"] as const;

type CategoryId = typeof categories[number];
export type Category = {
  id: CategoryId;
  tasks: Task[];
}

export const addTask = (category: Category, task: Task): Category => {
  const updatedTasks = [...category.tasks, task];
  return {
    ...category,
    tasks: updatedTasks,
  }
}