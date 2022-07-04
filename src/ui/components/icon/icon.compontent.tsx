import { FunctionComponent, SVGProps } from "react";
import { ReactComponent as QuestionIcon } from "ui/assets/icons/question.svg";
import { ReactComponent as GithubIcon } from "ui/assets/icons/github.svg";
import { ReactComponent as SettingsIcon } from "ui/assets/icons/settings.svg";
import { ReactComponent as BacklogIcon } from "ui/assets/icons/backlog.svg";
import { ReactComponent as BoardIcon } from "ui/assets/icons/board.svg";
import { ReactComponent as ArrowIcon } from "ui/assets/icons/arrow.svg";
import { ReactComponent as LensIcon } from "ui/assets/icons/lens.svg";
import { ReactComponent as CloseIcon } from "ui/assets/icons/close.svg";
import { ReactComponent as TaskIcon } from "ui/assets/icons/issue-types/task.svg";
import { ReactComponent as PriorityIcon } from "ui/assets/icons/priority.svg";
import { ReactComponent as AddIcon } from "ui/assets/icons/add.svg";
import { ReactComponent as DeleteIcon } from "ui/assets/icons/delete.svg";
import { ReactComponent as EmptyIcon } from "ui/assets/icons/empty.svg";
import { ReactComponent as ClockIcon } from "ui/assets/icons/clock.svg";
import { ReactComponent as SortIcon } from "ui/assets/icons/sort.svg";

type IconModule = FunctionComponent<SVGProps<SVGSVGElement>>;
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

const iconLibrary: Record<IconName, IconModule> = {
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
}

export const Icon = ({ name, size = 24, ...otherProps }: IconProps): JSX.Element => {
  const IconComponent = iconLibrary[name];
  return <IconComponent width={size} height={size} {...otherProps} />
}

interface IconProps {
  name: IconName;
  size?: number;
}