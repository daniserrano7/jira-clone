import cx from "classix";
import { ProjectPreview } from "@domain/project";
import { Icon } from "@app/components/icon";

export const ProjectsView = ({ projects }: Props): JSX.Element => {
  return (
    <div className="p-6">
      <h1 className="font-primary-black text-2xl">PROJECTS</h1>
      <button className="mt-8 flex items-center rounded bg-grey-300 p-3 hover:bg-primary-light hover:text-primary-main">
        <span>
          <Icon name="add" size={20} />
        </span>
        <span className="ml-2 leading-4">Add Project</span>
      </button>
      <ul className="mt-4 w-[400px] space-y-6">
        {projects.map((project) => (
          <li key={project.id}>
            <a
              href={`/projects/${project.id}`}
              className={cx(
                "group flex rounded shadow-sm outline outline-2 outline-transparent duration-100 ease-linear",
                "hover:-translate-y-0.5 hover:bg-primary-light hover:text-primary-main hover:shadow-md hover:outline-primary-main"
              )}
            >
              <img
                src="/images/default-project.png"
                alt="Project"
                className="h-auto w-[90px] rounded-l object-cover"
              />
              <div className="flex flex-col gap-1 px-3 pt-2 pb-6">
                <h2 className="text-lg">{project.name}</h2>
                <h3 className="min-h-[40px] font-primary-light text-sm text-font-light text-opacity-80 line-clamp-2 group-hover:text-primary-main">
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
  projects: ProjectPreview[];
}
