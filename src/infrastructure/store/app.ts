import { makeAutoObservable } from "mobx";
import { Project, ProjectId, projectMock } from "domain/project";
import { User, userMock1 } from "domain/user";


export const appStore: AppStore = makeAutoObservable({
  projects: [projectMock],
  user: userMock1,

  getProject: function(projectId: ProjectId): Project | undefined {
    return this.projects.find(project => project.id === projectId);
  },
});


interface AppStore {
  projects: Project[];
  user: User;
  getProject: (projectId: ProjectId) => Project | undefined;
}