import { Board } from "./board/board.container";
import styles from "./project-layout.module.scss";

export const ProjectLayout = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Board />
    </div>
  )
}