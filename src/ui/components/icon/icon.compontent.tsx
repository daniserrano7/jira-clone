import { FunctionComponent, SVGProps } from "react";
import { ReactComponent as QuestionIcon } from "ui/assets/icons/question.svg";
import { ReactComponent as SettingsIcon } from "ui/assets/icons/settings.svg";
import { ReactComponent as BacklogIcon } from "ui/assets/icons/backlog.svg";
import { ReactComponent as BoardIcon } from "ui/assets/icons/board.svg";
import { ReactComponent as ArrowIcon } from "ui/assets/icons/arrow.svg";

type IconModule = FunctionComponent<SVGProps<SVGSVGElement>>;
export type IconName = 
  | "question"
  | "settings"
  | "backlog"
  | "board"
  | "arrow";

const iconLibrary: Record<IconName, IconModule> = {
  question: QuestionIcon,
  settings: SettingsIcon,
  backlog: BacklogIcon,
  board: BoardIcon,
  arrow: ArrowIcon,
}

export const Icon = ({ name, ...otherProps }: IconProps): JSX.Element => {
  const IconComponent = iconLibrary[name];
  return <IconComponent {...otherProps} />
}

interface IconProps {
  name: IconName;
  width?: number;
  height?: number;
}