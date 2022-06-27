import { makeAutoObservable } from "mobx";
import { Project, ProjectId, projectMock } from "domain/project";
import { Issue } from "domain/issue";
import { User, userMock1 } from "domain/user";
import { appStore } from "./app";

export const projectStore: ProjectStore = makeAutoObservable({
  project: projectMock,
  editingIssue: null,
  user: userMock1,
  filters: {
    search: "",
  },

  setProject: function(projectId: ProjectId): void {
    const project = appStore.getProject(projectId);
    if (project) {
      this.project = project;
    }
  },
});

interface ProjectStore {
  project: Project;
  editingIssue: Issue | null;
  user: User;
  filters: {
    search: string;
  };
  setProject: (projectId: ProjectId) => void;
}