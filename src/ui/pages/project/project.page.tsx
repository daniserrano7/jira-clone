import { Sidebar, ProjectLayout } from "ui/containers";
import styles from "./project.module.scss";

export const Project = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <ProjectLayout />
    </div>
  )
}