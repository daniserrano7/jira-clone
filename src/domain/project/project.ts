import { User, UserId } from "domain/user";
import { Category, CategoryId } from "domain/category";

type ProjectId = number;
export interface ProjectData {
  id: ProjectId;
  name: string;
  description?: string;
  users: User[];
  categories: Category[];
}

export interface Project extends ProjectData {
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  getUser: (userId: UserId) => User | undefined;
  addUser: (user: User) => void;
  removeUser: (userId: UserId) => User | undefined;
  getCategory: (categoryId: CategoryId) => Category | undefined;
}

export const createProject = (data: ProjectData): Project => ({
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