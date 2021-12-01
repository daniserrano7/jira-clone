import { User } from "./user";
import { Category } from "./category";

type ProjectId = number;
export type Project = {
  id: ProjectId;
  name: string;
  users: User[];
  categories: Category[];
}