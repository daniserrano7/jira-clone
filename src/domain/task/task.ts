import { User, UserId } from "../user/user";
import { Priority } from "../priority/priority";

type TaskId = number;
export type Task = {
  id: TaskId;
  name: string;
  description?: string;
  reporter: User;
  asignees: User[];
  comments: Comment[];
  priority: Priority;
  //TODO: epic: Epic
  //TODO: createdAt: timestamp
  //TODO: updatedAt: timestamp
}

type CommentId = number;
export type Comment = {
  id: CommentId,
  user: User;
  message: string;
  //TODO: createdAt: timestamp
}

//TODO: ¿¿ createTask ??

export const setName = (task: Task, name: string): Task => {
  return {
    ...task,
    name,
  }
}

export const setDescription = (task: Task, description: string): Task => {
  return {
    ...task,
    description,
  }
}

export const addAsignee = (task: Task, asignee: User): Task => {
  const updatedAsignees = [...task.asignees, asignee];
  return {
    ...task,
    asignees: updatedAsignees,
  }
}

export const removeAsignee = (task: Task, asigneeId: UserId): Task => {
  const updatedAsignees = task.asignees.filter(asignee => asignee.id !== asigneeId);
  return {
    ...task,
    asignees: updatedAsignees,
  }
}

export const setPriority = (task: Task, priority: Priority): Task => {
  return {
    ...task,
    priority,
  }
}

export const addComment = (task: Task, comment: Comment): Task => {
  const updatedComments = [...task.comments, comment];
  return {
    ...task,
    comments: updatedComments,
  }
}

export const removeComment = (task: Task, commentId: CommentId): Task => {
  const updatedComments = task.comments.filter(comment => comment.id !== commentId);
  return {
    ...task,
    comments: updatedComments,
  }
}