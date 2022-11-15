import { Project } from "@domain/project";
import { User } from "@domain/user";
import { appStore } from "@infrastructure/store";
import { Sidebar } from "@app/views/app/project/sidebar";
import {
  ProjectContext,
  ProjectStore,
} from "@app/views/app/project/project.store";
import { Board } from "./board";

export const ProjectView = ({ user, project }: Props): JSX.Element => {
  appStore.user = user;

  return (
    <ProjectContext.Provider value={new ProjectStore(project)}>
      <div className="flex h-full flex-grow bg-white">
        <Sidebar />
        <div className="z-10 h-full w-full flex-grow py-6 px-5">
          <Board />
        </div>
      </div>
    </ProjectContext.Provider>
  );
};

interface Props {
  user: User;
  project: Project;
}
