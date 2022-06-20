import { makeAutoObservable } from "mobx";
import { Project, projectMock } from "domain/project";
import { Issue } from "domain/issue";
import { User, userMock1 } from "domain/user";

const store: Store = makeAutoObservable({
  project: projectMock,
  editingIssue: null,
  user: userMock1,
});

export const useStore = (): Store => store;

interface Store {
  project: Project;
  editingIssue: Issue | null;
  user: User;
}