import { Task, TaskId } from "domain/task"

export const categories = ["backlog", "todo", "progress", "done"] as const;

type CategoryId = typeof categories[number];
export type Category = {
  id: number,
  category: CategoryId;
  tasks: Task[];
}

export const addTask = (category: Category, task: Task): Category => {
  const updatedTasks = [...category.tasks, task];
  return {
    ...category,
    tasks: updatedTasks,
  }
}

export const removeTask = (category: Category, taskId: TaskId): Category => {
  const updatedTasks = category.tasks.filter(task => task.id !== taskId);
  return {
    ...category,
    tasks: updatedTasks,
  }
}