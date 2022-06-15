import { Sidebar } from "ui/containers/project/sidebar";
import { Board } from "./board";
import styles from "./project.module.scss";

export const Project = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.board_container}>
        <Board />
      </div>
    </div>
  )
}