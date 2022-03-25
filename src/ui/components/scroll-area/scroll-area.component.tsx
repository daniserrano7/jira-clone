import { useState, useRef, useEffect } from "react";
import { ScrollAreaProps } from "./scroll-area.interface";
import styles from "./scroll-area.module.scss";

export const ScrollArea = ({ width, height, disabled, children }: ScrollAreaProps): JSX.Element => {
  const areaRef = useRef<HTMLHeadingElement>(null);
  const [ areaWidth, setAreaWidth ] = useState<string>(width ? "0px" : "100%");
  const [ areaHeight, setAreaHeight ] = useState<string>(height ? "0px" : "100%");

  useEffect(() => {
    if (!areaRef.current) return;

    if (width) setAreaWidth(`${areaRef.current.offsetWidth}px`);
    if (height) setAreaHeight(`${areaRef.current.offsetHeight}px`);
  }, [areaRef]);
  
  return (
    <div ref={areaRef} className={styles.container}>
      <div style={{ 
        width: areaWidth,
        height: areaHeight,
        overflowX: disabled ? "hidden" : "auto",
      }}>
        {children}
      </div>
    </div>
  )
}