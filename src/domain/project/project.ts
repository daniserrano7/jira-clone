import { v4 as uuidv4 } from "uuid";
import { User, UserData, UserId } from "@domain/user";
import { Category, CategoryData, CategoryType } from "@domain/category";

export type ProjectId = string;
export interface ProjectData {
  id: ProjectId;
  name: string;
  description?: string;
  users: UserData[];
  categories: CategoryData[];
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
    this.users = [];
    this.categories = [];

    data.users.forEach((user) => {
      try {
        this.users.push(new User(user));
      } catch (error) {
        console.error(`Error in project ${data.id} creating user: ${user.id}`, user, error);
      }
    });

    data.categories.forEach((category) => {
      try {
        this.categories.push(new Category(category));
      } catch (error) {
        console.error(
          `Error in project ${data.id} creating category: ${category.id}`,
          category,
          error
        );
      }
    });
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

  getCategory(categoryId: CategoryType): Category | undefined {
    return this.categories.find((category) => category.id === categoryId);
  }
}

export type ProjectPreview = Pick<ProjectData, "id" | "name" | "description">;
