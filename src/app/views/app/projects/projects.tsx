import cx from "classix";
import { Project, ProjectData } from "@domain/project";
import { Icon } from "@app/components/icon";

export const ProjectsView = ({ projectsData }: Props): JSX.Element => {
  const projects = projectsData.map((projectData) => new Project(projectData));

  return (
    <div className="p-6">
      <h1 className="text-2xl font-primary-black">PROJECTS</h1>
      <button className="bg-grey-300 mt-8 flex items-center p-3 rounded hover:bg-primary-light hover:text-primary-main">
        <span>
          <Icon name="add" size={20} />
        </span>
        <span className="leading-4 ml-2">Add Project</span>
      </button>
      <ul className="mt-4 space-y-6 w-[400px]">
        {projects.map((project) => (
          <li key={project.id}>
            <a
              href={`/projects/${project.id}`}
              className={cx(
                "group flex rounded outline outline-transparent outline-2 shadow-sm ease-linear duration-100",
                "hover:bg-primary-light hover:text-primary-main hover:outline-primary-main hover:shadow-md hover:-translate-y-0.5"
              )}
            >
              <img
                src="/images/default-project.png"
                alt="Project"
                className="object-cover w-[90px] h-auto rounded-l"
              />
              <div className="flex flex-col gap-1 pt-2 pb-6 px-3">
                <h2 className="text-lg">{project.name}</h2>
                <h3 className="text-sm min-h-[40px] line-clamp-2 font-primary-light text-font-light group-hover:text-primary-main text-opacity-80">
                  {project.description}
                </h3>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface Props {
  projectsData: ProjectData[];
}
