import { v4 as uuidv4 } from "uuid";
import { User, UserId } from "@domain/user";
import { Category, CategoryId } from "@domain/category";

export type ProjectId = string;
export interface ProjectData {
  id?: ProjectId;
  name: string;
  description?: string;
  users: User[];
  categories: Category[];
}

export class Project {
  readonly id: ProjectId;
  name: string;
  description: string;
  users: User[];
  categories: Category[];

  constructor(data: ProjectData) {
    this.id = data.id || uuidv4();
    this.name = data.name;
    this.description = data.description || "";
    this.users = data.users || [];
    this.categories = data.categories || [];
  }

  setName(name: string) {
    this.name = name;
  }

  setDescription(description: string) {
    this.description = description;
  }

  getUser(userId: UserId): User | undefined {
    return this.users.find((user) => user.id === userId);
  }

  addUser(user: User) {
    this.users.push(user);
  }

  removeUser(userId: UserId) {
    const user = this.users.find((user) => user.id === userId);
    this.users = this.users.filter((user) => user.id !== userId);
    return user;
  }

  getCategory(categoryId: CategoryId): Category | undefined {
    return this.categories.find((category) => category.id === categoryId);
  }
}
