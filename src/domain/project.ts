import { User } from "./user";
import { Category } from "./category";

type ProjectId = number;
export type Project = {
  id: ProjectId;
  name: string;
  users: User[];
  categories: Category[];
}

export const setName = (project: Project, name: string): Project => {
  return {
    ...project,
    name,
  }
}

export const addUser = (project: Project, user: User): Project => {
  const updatedUsers = [...project.users, user];
  return {
    ...project,
    users: updatedUsers,
  }
}

export const removeUser = (project: Project, userId: ProjectId): Project => {
  const updatedUsers = project.users.filter(user => user.id !== userId);
  return {
    ...project,
    users: updatedUsers,
  }
}