import { FunctionComponent, SVGProps } from "react";
import { ReactComponent as QuestionIcon } from "@app/assets/icons/question.svg";
import { ReactComponent as GithubIcon } from "@app/assets/icons/github.svg";
import { ReactComponent as SettingsIcon } from "@app/assets/icons/settings.svg";
import { ReactComponent as BacklogIcon } from "@app/assets/icons/backlog.svg";
import { ReactComponent as BoardIcon } from "@app/assets/icons/board.svg";
import { ReactComponent as ArrowIcon } from "@app/assets/icons/arrow.svg";
import { ReactComponent as LensIcon } from "@app/assets/icons/lens.svg";
import { ReactComponent as CloseIcon } from "@app/assets/icons/close.svg";
import { ReactComponent as TaskIcon } from "@app/assets/icons/issue-types/task.svg";
import { ReactComponent as PriorityIcon } from "@app/assets/icons/priority.svg";
import { ReactComponent as AddIcon } from "@app/assets/icons/add.svg";
import { ReactComponent as DeleteIcon } from "@app/assets/icons/delete.svg";
import { ReactComponent as EmptyIcon } from "@app/assets/icons/empty.svg";
import { ReactComponent as ClockIcon } from "@app/assets/icons/clock.svg";
import { ReactComponent as SortIcon } from "@app/assets/icons/sort.svg";

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
};

export const Icon = ({ name, size = 24, ...otherProps }: IconProps): JSX.Element => {
  const IconComponent = iconLibrary[name];
  return <IconComponent width={size} height={size} {...otherProps} />;
};

interface IconProps {
  name: IconName;
  size?: number;
}
