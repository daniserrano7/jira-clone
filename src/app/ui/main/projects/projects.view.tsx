import { Link, Outlet } from "@remix-run/react";
import { AiOutlinePlus } from "react-icons/ai";
import cx from "classix";
import { ProjectSummary } from "@domain/project";

export const ProjectsView = ({ projectsSummary }: Props): JSX.Element => {
  return (
    <div className="bg-white p-6 dark:bg-dark-300">
      <h1 className="font-primary-black text-2xl">PROJECTS</h1>
      <Link
        to="new"
        className="mt-8 flex w-fit items-center rounded bg-grey-300 py-3 pl-3 pr-4 hover:bg-primary-light hover:text-primary-main dark:bg-dark-200 dark:hover:bg-dark-100 dark:hover:text-font-main-dark"
      >
        <span>
          <AiOutlinePlus size={22} />
        </span>
        <span className="ml-2 leading-4">Add Project</span>
      </Link>
      <div className="4 mt-4 grid grid-cols-auto-400 gap-8">
        {projectsSummary.map((project) => (
          <div key={project.id} className="w-[400px]">
            <Link
              to={project.id}
              className={cx(
                "group flex rounded shadow-sm outline outline-2 outline-transparent duration-100 ease-linear",
                "hover:-translate-y-0.5 hover:bg-primary-light hover:text-primary-main hover:shadow-md hover:outline-primary-main dark:bg-dark-200 dark:hover:text-primary-main-dark dark:hover:outline-primary-main-dark"
              )}
            >
              <img
                src={project.image || "/images/default-project.png"}
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
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

interface Props {
  projectsSummary: ProjectSummary[];
}
