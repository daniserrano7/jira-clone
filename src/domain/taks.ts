import { User } from "./user";
import { Priority } from "./priority";

type TaskId = number;
export type Task = {
  id: TaskId;
  name: string;
  description?: string;
  reporter: User;
  asignees: User[];
  comments: Comment[];
  priority: Priority;
  //TODO: createdAt: timestamp
  //TODO: updatedAt: timestamp
}
export type Comment = {
  user: User;
  message: string;
  //TODO: createdAt: timestamp
}