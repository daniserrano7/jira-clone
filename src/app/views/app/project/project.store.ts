import { createContext, useContext } from "react";
import { makeAutoObservable } from "mobx";
import { Project } from "@domain/project";

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
  sort: SortFilter;
}

export type SortFilter = "date" | "priority";

export const ProjectContext = createContext<ProjectStore | undefined>(undefined);

export const useProjectStore = (): ProjectStore => {
  const projectStore = useContext(ProjectContext);
  if (!projectStore) {
    throw new Error("Project context not found");
  }
  return projectStore;
};
