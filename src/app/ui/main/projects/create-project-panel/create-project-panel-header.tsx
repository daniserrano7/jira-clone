import { Link } from "@remix-run/react";
import { IoCloseOutline } from "react-icons/io5";
import { IssueId } from "@domain/issue";

export const CreateProjectPanelHeader = ({
  id,
}: PanelHeaderProjectProps): JSX.Element => {
  // TODO: Add edit mode
  return (
    <div className="flex">
      <span className="flex flex-grow items-center">
        <span className="ml-1">{id}</span>
      </span>
      <Link
        to="/projects"
        className="ml-3 flex cursor-pointer rounded border-none p-0.5 text-icon hover:bg-background-accent-grey-subtlest"
      >
        <IoCloseOutline size={32} />
      </Link>
    </div>
  );
};

interface PanelHeaderProjectProps {
  id: IssueId;
}
