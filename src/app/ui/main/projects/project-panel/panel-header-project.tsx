import { Link } from "@remix-run/react";
import { IoCloseOutline } from "react-icons/io5";
import { IssueId } from "@domain/issue";

export const PanelHeaderProject = ({
  id,
}: PanelHeaderProjectProps): JSX.Element => {
  // TODO: Add edit mode
  return (
    <div className="flex">
      <span className="flex flex-grow items-center">
        <span className="ml-1 text-font-light text-opacity-80 dark:text-font-light-dark">
          {id}
        </span>
      </span>
      <Link
        to="/projects"
        className="ml-3 flex cursor-pointer rounded border-none p-0.5 text-icon hover:bg-grey-300 dark:text-font-light-dark dark:hover:bg-dark-100"
      >
        <IoCloseOutline size={32} />
      </Link>
    </div>
  );
};

interface PanelHeaderProjectProps {
  id: IssueId;
}
