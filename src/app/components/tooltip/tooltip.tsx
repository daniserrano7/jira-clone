import { useState } from "react";
import cx from "classix";
import { twMerge } from "tailwind-merge";

export const Tooltip = ({
  title,
  show = true,
  className = "",
  children,
}: TooltipProps): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  if (!show) return children;

  return (
    // Don't know why h-fit (and other h-*) doesn't work here
    <div className="relative w-fit" style={{ height: "fit-content" }}>
      <div onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
        {children}
      </div>
      <div
        className={cx(
          "absolute left-1/2 top-full z-50 mt-1.5 -translate-x-1/2 transform justify-center break-words",
          isVisible ? "flex" : "hidden"
        )}
      >
        <div
          className={twMerge(
            "w-fit whitespace-nowrap rounded bg-font px-1.5 py-0.5 text-2xs text-font-inverse",
            className
          )}
        >
          {title}
        </div>
      </div>
    </div>
  );
};

interface TooltipProps {
  title: string;
  show?: boolean;
  className?: string;
  children: JSX.Element;
}
