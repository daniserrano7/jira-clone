import { Link, Outlet, Form } from "@remix-run/react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { AiOutlinePlus } from "react-icons/ai";
import cx from "classix";
import { ProjectSummary } from "@domain/project";

export const ProjectsView = ({ projectsSummary }: Props): JSX.Element => {
  const buttonBaseClass = cx(
    "border-none py-1.5 px-3.5 rounded bg-grey-300 dark:bg-dark-100 font-primary-bold cursor-pointer"
  );

  return (
    <div className="bg-white p-6 dark:bg-dark-400">
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
                width="90px"
                height="104px"
                className="h-auto w-[90px] rounded-l object-cover"
              />
              <div className="flex flex-col gap-1 px-3 pt-2 pb-6">
                <h2 className="text-lg">{project.name}</h2>
                <h3 className="min-h-[40px] font-primary-light text-sm text-font-light text-opacity-100 line-clamp-2 dark:text-white dark:text-opacity-60 dark:group-hover:text-primary-main-dark">
                  {project.description}
                </h3>
              </div>
            </Link>
            <AlertDialog.Root>
              <AlertDialog.Trigger
                className={cx(
                  "flex cursor-pointer rounded border-none p-1.5 text-icon flex-center hover:bg-grey-300 dark:text-font-light-dark dark:hover:bg-dark-100",
                  "hover:text-error-main dark:hover:text-error-main-dark"
                )}
                aria-label="Open delete issue dialog"
                title={"Delete issue"}
              >
                Delete project
              </AlertDialog.Trigger>

              <AlertDialog.Portal>
                <AlertDialog.Overlay className="fixed top-0 left-0 z-50 h-full w-full bg-black bg-opacity-40" />
                <AlertDialog.Content className="fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded bg-white p-5 shadow-lg dark:bg-dark-300">
                  <AlertDialog.Title className="mb-5 font-primary-black text-3xl">
                    Delete issue?
                  </AlertDialog.Title>
                  <AlertDialog.Description className="font-primary-light leading-6 text-font-light dark:text-font-light-dark">
                    This action is permanent and cannot be undone. Are you sure
                    you want to remove this issue completely?
                  </AlertDialog.Description>
                  <Form
                    method="delete"
                    className="mt-8 flex w-full justify-end gap-4"
                  >
                    <AlertDialog.Cancel
                      className={cx(
                        "hover:bg-grey-400 dark:text-font-light-dark dark:hover:bg-dark-500",
                        buttonBaseClass
                      )}
                      aria-label="Cancel"
                    >
                      Cancel
                    </AlertDialog.Cancel>
                    <button
                      name="_action"
                      value="delete"
                      type="submit"
                      className={cx(
                        "bg-error-light text-error-dark hover:bg-error-hover dark:bg-error-main-dark dark:text-error-light-dark dark:hover:bg-error-hover-dark",
                        buttonBaseClass
                      )}
                      aria-label="Delete issue"
                    >
                      Delete
                    </button>
                    <input type="hidden" name="projectId" value={project.id} />
                  </Form>
                </AlertDialog.Content>
              </AlertDialog.Portal>
            </AlertDialog.Root>
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
