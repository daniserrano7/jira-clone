import { Sidebar } from "ui/containers";
import { Board } from "ui/containers/project-layouts";
import styles from "./project.module.scss";

export const Project = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.project_container}>
        <Board />
      </div>
    </div>
  )
}