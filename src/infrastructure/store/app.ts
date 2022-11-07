import { makeAutoObservable } from "mobx";
import { Project, ProjectId } from "@domain/project";
import { User } from "@domain/user";
import { fetchUser } from "@infrastructure/db/user";
import { getLocalStorageUserId } from "@infrastructure/local-storage";
import { createUserFromDb } from "./project";

class AppStore {
  /* @ts-expect-error: null checking will be at component lebel  */
  user: User = null;
  projects: Project[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async fetchInitData() {
    const userId = getLocalStorageUserId();

    if (!userId) {
      throw new Error(`User ID not found in Local Storage: ${userId}`);
    }

    const userDb = await fetchUser(userId);

    if (!userDb) {
      throw new Error(`User not found in DB: ${userId}`);
    }

    this.user = createUserFromDb(userDb);
  }

  getProject(projectId: ProjectId): Project | undefined {
    return this.projects.find((project) => project["id"] === projectId);
  }
}

export const appStore = new AppStore();
