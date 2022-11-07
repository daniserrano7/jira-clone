import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import styles from "./scroll-area.module.scss";

export const ScrollArea = ({ children }: ScrollAreaProps): JSX.Element => (
  <ScrollAreaPrimitive.Root type="hover" scrollHideDelay={400} className={styles.root}>
    <ScrollAreaPrimitive.Viewport className={styles.viewport}>
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollAreaPrimitive.Scrollbar orientation="vertical" className={styles.scrollbar}>
      <ScrollAreaPrimitive.Thumb className={styles.thumb} />
    </ScrollAreaPrimitive.Scrollbar>
    <ScrollAreaPrimitive.Scrollbar orientation="horizontal" className={styles.scrollbar}>
      <ScrollAreaPrimitive.Thumb className={styles.thumb} />
    </ScrollAreaPrimitive.Scrollbar>
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
);

interface ScrollAreaProps {
  children: JSX.Element | JSX.Element[];
}
