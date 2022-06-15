import { makeAutoObservable } from "mobx";
import { Project, createProject, projectMock } from "domain/project";
import { Issue } from "domain/issue";

const store: Store = makeAutoObservable({
  project: createProject(projectMock),
  editingIssue: null,
});

export const useStore = (): Store => store;

interface Store {
  project: Project;
  editingIssue: Issue | null;
}