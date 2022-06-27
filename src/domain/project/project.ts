import { v4 as uuidv4 } from "uuid";
import { User, UserId } from "domain/user";
import { Category, CategoryId } from "domain/category";

export type ProjectId = string;
export interface ProjectData {
  name: string;
  description?: string;
  users: User[];
  categories: Category[];
}

export interface Project extends ProjectData {
  id: Readonly<ProjectId>;
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  getUser: (userId: UserId) => User | undefined;
  addUser: (user: User) => void;
  removeUser: (userId: UserId) => User | undefined;
  getCategory: (categoryId: CategoryId) => Category | undefined;
}

export const createProject = (data: ProjectData): Project => ({
  id: uuidv4(),
  ...data,

  setName: function(name: string) {
    this.name = name;
  },

  setDescription: function(description: string) {
    this.description = description;
  },

  getUser: function(userId: UserId): User | undefined {
    return this.users.find(user => user.id === userId);
  },

  addUser: function(user: User) {
    this.users.push(user);
  },

  removeUser: function(userId: UserId) {
    const user = this.users.find(user => user.id === userId);
    this.users = this.users.filter(user => user.id !== userId);
    return user;
  },

  getCategory: function(categoryId: CategoryId): Category | undefined {
    return this.categories.find(category => category.id === categoryId);
  },
});