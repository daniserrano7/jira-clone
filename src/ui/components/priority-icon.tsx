import cx from "classix";
import { Priority } from "domain/priority";
import { Icon } from "ui/components/icon";

export const PriorityIcon = ({
  priority,
  size = 16,
}: PriorityIconProps): JSX.Element => (
  <span
    className={cx(
      "flex",
      priority === "low" && "text-success-main",
      priority === "medium" && "text-warn-main",
      priority === "high" && "text-error-main"
    )}
  >
    <Icon name="priority" size={size} />
  </span>
);

interface PriorityIconProps {
  priority: Priority;
  size?: number;
}
