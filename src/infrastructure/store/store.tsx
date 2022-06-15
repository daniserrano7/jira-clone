import { makeAutoObservable } from "mobx";
import { Project, createProject, projectMock } from "domain/project";

const store: Store = {
  project: makeAutoObservable(createProject(projectMock)),
}

export const useStore = (): Store => store;

interface Store {
  project: Project;
}