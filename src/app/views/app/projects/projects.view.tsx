import { Link } from "@remix-run/react";
import cx from "classix";
import { ProjectSummary } from "@domain/project";
import { Icon } from "@app/components/icon";

export const ProjectsView = ({ projectsSummary }: Props): JSX.Element => {
  return (
    <div className="bg-white p-6 dark:bg-dark-300">
      <h1 className="font-primary-black text-2xl">PROJECTS</h1>
      <button className="mt-8 flex items-center rounded bg-grey-300 p-3 hover:bg-primary-light hover:text-primary-main dark:bg-dark-200 dark:hover:bg-dark-100 dark:hover:text-font-main-dark">
        <span>
          <Icon name="add" size={20} />
        </span>
        <span className="ml-2 leading-4">Add Project</span>
      </button>
      <ul className="mt-4 w-[400px] space-y-6">
        {projectsSummary.map((project) => (
          <li key={project.id}>
            <Link
              to={project.id}
              className={cx(
                "group flex rounded shadow-sm outline outline-2 outline-transparent duration-100 ease-linear",
                "hover:-translate-y-0.5 hover:bg-primary-light hover:text-primary-main hover:shadow-md hover:outline-primary-main dark:bg-dark-200 dark:hover:text-primary-main-dark dark:hover:outline-primary-main-dark"
              )}
            >
              <img
                src="/images/default-project.png"
                alt="Project"
                className="h-auto w-[90px] rounded-l object-cover"
              />
              <div className="flex flex-col gap-1 px-3 pt-2 pb-6">
                <h2 className="text-lg">{project.name}</h2>
                <h3 className="min-h-[40px] font-primary-light text-sm text-font-light text-opacity-80 line-clamp-2 dark:text-font-light-dark dark:group-hover:text-primary-main-dark">
                  {project.description}
                </h3>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface Props {
  projectsSummary: ProjectSummary[];
}
