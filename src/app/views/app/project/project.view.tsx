import { Project, ProjectData } from "@domain/project";
import { Sidebar } from "@app/views/app/project/sidebar";
import { ProjectContext, ProjectStore } from "./project.store";
import { Board } from "./board";

export const ProjectView = ({ projectData }: Props): JSX.Element => {
  const project = new Project(projectData);

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
  projectData: ProjectData;
}
