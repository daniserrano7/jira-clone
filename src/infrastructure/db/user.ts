import { PromiseExtended } from "dexie";
import { Project } from "domain/project";
import { User, UserId } from "domain/user";
import db from "./db";


export interface UserDB {
  id: UserId;
  name: string;
  image?: string;
  color: string;
}

export const populateUsers = (project: Project): void => {
  project.users.forEach(user => {
    const userDbData = userDbPipe(user);
    db.users.add(userDbData);
  });
}

const userDbPipe = (user: User): UserDB => ({
  id: user.id,
  name: user.name,
  image: user.image,
  color: user.color,
});

export const fetchUsers = (): PromiseExtended<UserDB[]> => {
  return db.users.orderBy("name").toArray();
}

export const fetchUser = (userId: UserId): PromiseExtended<UserDB | undefined> => {
  return db.users.get(userId);
}