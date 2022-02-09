import { Task, TaskId } from "domain/task"

export const categoryIds = ["TODO", "IN_PROGRESS", "DONE"] as const;
type CategoryId = typeof categoryIds[number];

export type Category = {
  id: CategoryId,
  name: string;
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