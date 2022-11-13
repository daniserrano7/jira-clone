import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import cx from "classix";

export const ScrollArea = ({ children }: ScrollAreaProps): JSX.Element => (
  <ScrollAreaPrimitive.Root
    type="hover"
    scrollHideDelay={400}
    style={{ scrollbarWidth: "none" }}
    className="h-[400px] w-full overflow-y-scroll"
  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollAreaPrimitive.Scrollbar
      orientation="vertical"
      className={cx(
        "flex w-2 touch-none select-none rounded-full bg-grey-400 duration-150 ease-out hover:bg-grey-600"
      )}
    >
      <ScrollAreaPrimitive.Thumb
        className={cx(
          "relative h-full flex-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-font-grey",
          "before:absolute before:top-1/2 before:left-1/2"
        )}
      />
    </ScrollAreaPrimitive.Scrollbar>
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
);

interface ScrollAreaProps {
  children: JSX.Element | JSX.Element[];
}
