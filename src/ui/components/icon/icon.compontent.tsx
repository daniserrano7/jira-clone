import { FunctionComponent, SVGProps } from "react";
import { ReactComponent as QuestionIcon } from "ui/assets/icons/question.svg";
import { ReactComponent as SettingsIcon } from "ui/assets/icons/settings.svg";
import { ReactComponent as BacklogIcon } from "ui/assets/icons/backlog.svg";
import { ReactComponent as BoardIcon } from "ui/assets/icons/board.svg";
import { ReactComponent as ArrowIcon } from "ui/assets/icons/arrow.svg";
import { ReactComponent as LensIcon } from "ui/assets/icons/lens.svg";
import { ReactComponent as CloseIcon } from "ui/assets/icons/close.svg";
import { ReactComponent as TaskIcon } from "ui/assets/icons/issue-types/task.svg";
import { ReactComponent as PriorityIcon } from "ui/assets/icons/priority.svg";
import { ReactComponent as AddIcon } from "ui/assets/icons/add.svg";

type IconModule = FunctionComponent<SVGProps<SVGSVGElement>>;
export type IconName = 
  | "question"
  | "settings"
  | "backlog"
  | "board"
  | "arrow"
  | "lens"
  | "close"
  | "task"
  | "priority"
  | "add";

const iconLibrary: Record<IconName, IconModule> = {
  question: QuestionIcon,
  settings: SettingsIcon,
  backlog: BacklogIcon,
  board: BoardIcon,
  arrow: ArrowIcon,
  lens: LensIcon,
  close: CloseIcon,
  task: TaskIcon,
  priority: PriorityIcon,
  add: AddIcon,
}

export const Icon = ({ name, size = 24, ...otherProps }: IconProps): JSX.Element => {
  const IconComponent = iconLibrary[name];
  return <IconComponent width={size} height={size} {...otherProps} />
}

interface IconProps {
  name: IconName;
  size?: number;
}