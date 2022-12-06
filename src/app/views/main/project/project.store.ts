import { createContext, useContext } from "react";
import { makeAutoObservable } from "mobx";
import { Project } from "@domain/project";
import { Sort } from "@domain/filter";

export class ProjectStore {
  project: Project;
  filters: Filters = {
    search: "",
    sort: "date",
  };

  constructor(project: Project) {
    this.project = project;
    makeAutoObservable(this);
  }
}

interface Filters {
  search: string;
  sort: Sort;
}

export const ProjectContext = createContext<ProjectStore | undefined>(undefined);

export const useProjectStore = (): ProjectStore => {
  const projectStore = useContext(ProjectContext);
  if (!projectStore) {
    throw new Error("Project context not found");
  }
  return projectStore;
};
