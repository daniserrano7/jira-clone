import cx from "classix";
import { HiFlag } from "react-icons/hi";
import { PriorityId } from "@domain/priority";

export const PriorityIcon = ({
  priority,
  size = 18,
}: PriorityIconProps): JSX.Element => (
  <span
    className={cx(
      "flex",
      priority === "low" && "text-icon-accent-green",
      priority === "medium" && "text-icon-accent-yellow",
      priority === "high" && "text-icon-accent-red"
    )}
  >
    <HiFlag size={size} />
  </span>
);

interface PriorityIconProps {
  priority: PriorityId;
  size?: number;
}
