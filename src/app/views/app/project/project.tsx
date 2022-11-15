import { Project as ProjectEntity } from "@domain/project";
import { User } from "@domain/user";
import { appStore, projectStore } from "@infrastructure/store";
import { Sidebar } from "@app/views/app/project/sidebar";
import { Board } from "./board";

export const Project = ({ user, project }: Props): JSX.Element => {
  appStore.user = user;
  projectStore.project = project;

  return (
    <div className="flex h-full flex-grow bg-white">
      <Sidebar />
      <div className="z-10 h-full w-full flex-grow py-6 px-5">
        <Board />
      </div>
    </div>
  );
};

interface Props {
  user: User;
  project: ProjectEntity;
}
