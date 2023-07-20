import { Link, Outlet, Form } from "@remix-run/react";
import * as AlertDialog from "@app/components/alert-dialog";
import { AiOutlinePlus } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import cx from "classix";
import { ProjectId, ProjectSummary, projectsMock } from "@domain/project";

const defaultProjectsIds: ProjectId[] = projectsMock.map(
  (projectMock) => projectMock.id
);

export const ProjectsView = ({
  projectsSummary,
}: ProjectsViewProps): JSX.Element => {
  return (
    <div className="bg-white p-6">
      <h1 className="font-primary-black text-2xl">PROJECTS</h1>
      <Link
        to="new"
        className="mt-8 flex w-fit items-center rounded bg-grey-300 py-3 pl-3 pr-4 hover:bg-primary-light hover:text-primary-main"
      >
        <span>
          <AiOutlinePlus size={22} />
        </span>
        <span className="ml-2 leading-4">Add Project</span>
      </Link>
      <div className="4 mt-4 grid grid-cols-auto-400 gap-8">
        {projectsSummary.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <Outlet />
    </div>
  );
};

interface ProjectsViewProps {
  projectsSummary: ProjectSummary[];
}

const ProjectCard = ({ project }: ProjectCardProps): JSX.Element => {
  const isDefaultProject = defaultProjectsIds.includes(project.id);

  return (
    <div className="w-[400px]">
      <Link
        to={project.id}
        className={cx(
          "group flex rounded shadow-sm outline outline-2 outline-transparent duration-100 ease-linear",
          "hover:-translate-y-0.5 hover:bg-primary-light hover:text-primary-main hover:shadow-md hover:outline-primary-main"
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
          <h3 className="min-h-[40px] font-primary-light text-sm text-font-light text-opacity-100 line-clamp-2">
            {project.description}
          </h3>
        </div>
      </Link>
      <AlertDialog.Root>
        <AlertDialog.Trigger
          className={cx(
            "flex items-center gap-1 cursor-pointer border-none text-sm mt-1",
            isDefaultProject
              ? "text-font-light text-opacity-50 cursor-not-allowed"
              : "text-icon hover:text-error-main"
          )}
          aria-label="Open delete issue dialog"
          title={
            isDefaultProject
              ? "Cannot delete default project"
              : "Delete project"
          }
          disabled={isDefaultProject}
        >
          <MdDeleteOutline size={15} />
          Delete project
        </AlertDialog.Trigger>

        <AlertDialog.Portal>
          <AlertDialog.Overlay />
          <AlertDialog.Content>
            <AlertDialog.Title>Delete issue?</AlertDialog.Title>
            <AlertDialog.Description>
              This action is permanent and cannot be undone. Are you sure you
              want to remove this issue completely?
            </AlertDialog.Description>
            <Form
              method="delete"
              className="mt-8 flex w-full justify-end gap-4"
            >
              <AlertDialog.Cancel aria-label="Cancel">
                Cancel
              </AlertDialog.Cancel>
              <AlertDialog.Confirm
                name="_action"
                value="delete"
                type="submit"
                aria-label="Delete issue"
              >
                Delete
              </AlertDialog.Confirm>
              <input type="hidden" name="projectId" value={project.id} />
            </Form>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </div>
  );
};

interface ProjectCardProps {
  project: ProjectSummary;
}
