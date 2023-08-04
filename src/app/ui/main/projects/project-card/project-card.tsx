import { Link, Form } from "@remix-run/react";
import { MdDeleteOutline } from "react-icons/md";
import cx from "classix";
import { ProjectId, ProjectSummary, projectsMock } from "@domain/project";
import * as AlertDialog from "@app/components/alert-dialog";

const defaultProjectsIds: ProjectId[] = projectsMock.map(
  (projectMock) => projectMock.id
);

export const ProjectCard = ({ project }: Props): JSX.Element => {
  const isDefaultProject = defaultProjectsIds.includes(project.id);

  return (
    <div className="w-[400px]">
      <Link
        to={project.id}
        className={cx(
          "group flex h-[112px] rounded bg-elevation-surface-raised text-font shadow-sm outline outline-2 outline-transparent duration-100 ease-linear",
          "hover:-translate-y-0.5 hover:bg-background-brand-subtlest-hovered hover:text-font-brand hover:shadow-md hover:outline-border-brand"
        )}
      >
        <img
          src={project.image || "/images/default-project.png"}
          alt="Project"
          width="90px"
          height="104px"
          className="h-auto w-[90px] rounded-l object-cover"
        />
        <div className="flex flex-col gap-1 px-3 pb-4 pt-2">
          <h2 className="text-lg">{project.name}</h2>
          <h3 className="line-clamp-2 min-h-[40px] font-primary-light text-sm text-font-subtle text-opacity-100">
            {project.description}
          </h3>
        </div>
      </Link>
      <AlertDialog.Root>
        <AlertDialog.Trigger
          className={cx(
            "mt-1 flex items-center gap-1 border-none text-sm",
            isDefaultProject
              ? "cursor-not-allowed text-font-disabled text-opacity-50"
              : "text-icon hover:text-font-danger"
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
              <AlertDialog.Action
                name="_action"
                value="delete"
                type="submit"
                aria-label="Delete issue"
              >
                Delete
              </AlertDialog.Action>
              <input type="hidden" name="projectId" value={project.id} />
            </Form>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </div>
  );
};

interface Props {
  project: ProjectSummary;
}
