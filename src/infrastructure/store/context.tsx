import { createContext, useContext } from "react";
import { makeAutoObservable } from "mobx";
import { Project, createProject, projectMock } from "domain/project";
import { Issue } from "domain/issue";

export const StoreContext = createContext<Store | undefined>(undefined);
export const StoreContextProvider = ({ children }: StoreContextProviderProps): JSX.Element => {
  const store: Store = {
    editinIssue: null,
    project: makeAutoObservable(createProject(projectMock)),
  }

  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error("Context is null");
  }

  return context;
}

interface Store {
  editinIssue: Issue | null;
  project: Project;
}

interface StoreContextProviderProps {
  children: JSX.Element | JSX.Element[];
}