import { User } from "@domain/user";
import { Category } from "@domain/category";

export type ProjectId = string;
export interface Project {
  id: ProjectId;
  name: string;
  description?: string;
  users: User[];
  categories: Category[];
  createdAt?: Date;
  updatedAt?: Date;
}

// TODO: Make createdAt and updatedAt mandatory
export type ProjectSummary = Pick<Project, "id" | "name" | "description" | "createdAt">;
