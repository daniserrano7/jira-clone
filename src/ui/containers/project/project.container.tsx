import { useState, useEffect } from "react";
import db from "infrastructure/db";
import { appStore, projectStore } from "infrastructure/store";
import { Sidebar } from "ui/containers/project/sidebar";
import { Board } from "./board";
import styles from "./project.module.scss";

export const Project = (): JSX.Element => {
  const [ isLoaded, setIsLoaded ] = useState<boolean>(false);

  useEffect(() => {
    db.open();
    db.on("ready", () => {
      Promise.all([
        appStore.fetchInitData(),
        projectStore.fetchInitData()
      ])
        .then(() => setIsLoaded(true));
    });
  }, []);

  if (!isLoaded) return <LoadingScreen />

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.board_container}>
        <Board />
      </div>
    </div>
  )
}

const LoadingScreen = (): JSX.Element => {
  return (
    <div className={styles.loading_screen}>
      <div className={styles.loader}>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}