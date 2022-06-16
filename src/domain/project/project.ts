import { User, UserId } from "domain/user";
import { Category } from "domain/category";

type ProjectId = number;
export interface ProjectData {
  id: ProjectId;
  name: string;
  users: User[];
  categories: Category[];
}

export interface Project extends ProjectData {
  setName: (name: string) => void;
  addUser: (user: User) => void;
  removeUser: (userId: UserId) => User | undefined;
}

export const createProject = (data: ProjectData): Project => ({
  ...data,

  setName: function(name: string) {
    this.name = name;
  },

  addUser: function(user: User) {
    this.users.push(user);
  },

  removeUser: function(userId: UserId) {
    this.users = this.users.filter(user => user.id !== userId);
    const user = this.users.find(user => user.id !== userId);
    return user;
  },
});