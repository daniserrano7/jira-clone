import { Task } from "./taks";

export const categories = ["backlog", "todo", "progress", "done"] as const;

type CategoryId = typeof categories[number];
export type Category = {
  id: CategoryId;
  tasks: Task[];
}