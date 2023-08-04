import { useState } from "react";
import cx from "classix";

export const Tooltip = ({
  title,
  show = true,
  children,
}: TooltipProps): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  if (!show) return children;

  return (
    <div className="relative h-fit w-fit">
      <div onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
        {children}
      </div>
      <div
        className={cx(
          "z-80 absolute left-1/2 top-full mt-1.5 -translate-x-1/2 transform justify-center break-words",
          isVisible ? "flex" : "hidden"
        )}
      >
        <div className="w-fit whitespace-nowrap rounded bg-font px-1.5 py-0.5 text-2xs text-font-inverse">
          {title}
        </div>
      </div>
    </div>
  );
};

interface TooltipProps {
  title: string;
  show?: boolean;
  children: JSX.Element;
}
