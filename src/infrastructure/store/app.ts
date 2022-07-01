import { makeAutoObservable } from "mobx";
import { Project, ProjectId } from "domain/project";
import { User, userMock1 } from "domain/user";


class AppStore {
  projects: Project[] = [];
  user: User = userMock1;

  constructor() {
    makeAutoObservable(this);
  }

  getProject(projectId: ProjectId): Project | undefined {
    return this.projects.find(project => project["id"] === projectId);
  }
}

export const appStore = new AppStore();