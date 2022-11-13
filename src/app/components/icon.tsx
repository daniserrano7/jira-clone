import { FunctionComponent, SVGProps } from "react";
import QuestionIcon from "public/icons/question";
import GithubIcon from "public/icons/github";
import SettingsIcon from "public/icons/settings";
import BacklogIcon from "public/icons/backlog";
import BoardIcon from "public/icons/board";
import ArrowIcon from "public/icons/arrow";
import LensIcon from "public/icons/lens";
import CloseIcon from "public/icons/close";
import TaskIcon from "public/icons/issue-task";
import PriorityIcon from "public/icons/priority";
import AddIcon from "public/icons/add";
import DeleteIcon from "public/icons/delete";
import EmptyIcon from "public/icons/empty";
import ClockIcon from "public/icons/clock";
import SortIcon from "public/icons/sort";

type ImportedIcon = (props: SVGProps<SVGSVGElement>) => JSX.Element;
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
  return <IconComponent width={size} height={size} {...otherProps} />;
};

interface IconProps {
  name: IconName;
  size?: number;
}
