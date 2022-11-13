import { FunctionComponent, SVGProps } from "react";
import QuestionIcon from "public/icons/question.js";
import GithubIcon from "public/icons/github.js";
import SettingsIcon from "public/icons/settings.js";
import BacklogIcon from "public/icons/backlog.js";
import BoardIcon from "public/icons/board.js";
import ArrowIcon from "public/icons/arrow.js";
import LensIcon from "public/icons/lens.js";
import CloseIcon from "public/icons/close.js";
import TaskIcon from "public/icons/issue-task.js";
import PriorityIcon from "public/icons/priority.js";
import AddIcon from "public/icons/add.js";
import DeleteIcon from "public/icons/delete.js";
import EmptyIcon from "public/icons/empty.js";
import ClockIcon from "public/icons/clock.js";
import SortIcon from "public/icons/sort.js";

type ImportedIcon = () => JSX.Element;
export type IconName =
  | "question"
  | "github"
  | "settings"
  | "backlog"
  | "board"
  | "arrow"
  | "lens"
  | "close"
  | "task"
  | "priority"
  | "add"
  | "delete"
  | "empty"
  | "clock"
  | "sort";

const iconLibrary: Record<IconName, ImportedIcon> = {
  question: QuestionIcon,
  github: GithubIcon,
  settings: SettingsIcon,
  backlog: BacklogIcon,
  board: BoardIcon,
  arrow: ArrowIcon,
  lens: LensIcon,
  close: CloseIcon,
  task: TaskIcon,
  priority: PriorityIcon,
  add: AddIcon,
  delete: DeleteIcon,
  empty: EmptyIcon,
  clock: ClockIcon,
  sort: SortIcon,
};

// TODO: Pass width and height props to SVG component
export const Icon = ({
  name,
  size = 24,
  ...otherProps
}: IconProps): JSX.Element => {
  const IconComponent = iconLibrary[name];
  return <IconComponent {...otherProps} />;
};

interface IconProps {
  name: IconName;
  size?: number;
}
