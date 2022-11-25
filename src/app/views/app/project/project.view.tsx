import { Outlet, Link, useLocation } from "@remix-run/react";
import { Project, ProjectData } from "@domain/project";
import { Sidebar } from "@app/views/app/project/sidebar";
import { ProjectContext, ProjectStore } from "./project.store";

const sectionTitles: Record<string, string> = {
  board: "Board",
  analytics: "Analytics",
  backlog: "Backlog",
  "server-error": "Server Error",
  "not-found": "Not Found",
};

export const ProjectView = ({ projectData }: Props): JSX.Element => {
  const project = new Project(projectData);
  const location = useLocation();
  const section = location.pathname.split("/").slice(-1)[0];

  return (
    <ProjectContext.Provider value={new ProjectStore(project)}>
      <div className="relative flex h-full flex-grow bg-white">
        <Sidebar initialActiveItem={section} />
        <div className="z-10 flex h-full w-full flex-grow flex-col py-6 px-5">
          <section>
            <Link to="/projects" className="underline underline-offset-[3px]">
              Projects
            </Link>
            <span className="mx-2">/</span>
            <span>{project.name}</span>
            <h1 className="mt-4 mb-5 font-primary-black text-2xl">
              {sectionTitles[section]}
            </h1>
          </section>
          <Outlet />
        </div>
      </div>
    </ProjectContext.Provider>
  );
};

interface Props {
  projectData: ProjectData;
}
