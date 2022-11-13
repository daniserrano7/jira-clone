import { useState, useEffect } from "react";
import db from "infrastructure/db";
import { appStore, projectStore } from "infrastructure/store";
import { Sidebar } from "ui/containers/project/sidebar";
import { Board } from "./board";

export const Project = (): JSX.Element => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    db.open();
    db.on("ready", () => {
      Promise.all([
        appStore.fetchInitData(),
        projectStore.fetchInitData(),
      ]).then(() => setIsLoaded(true));
    });
  }, []);

  if (!isLoaded)
    return (
      <div className="flex h-full w-full items-center justify-center">
        <LoadingScreen />
      </div>
    );

  return (
    <div className="flex h-full flex-grow bg-white">
      <Sidebar />
      <div className="z-10 h-full w-full flex-grow py-6 px-5">
        <Board />
      </div>
    </div>
  );
};

const LoadingScreen = (): JSX.Element => {
  return (
    <span className="relative flex flex-col items-center justify-center">
      <span className="relative inline-flex h-12 w-12 animate-ping rounded-full bg-primary-main opacity-75"></span>
      <span className="mt-6">Loading...</span>
    </span>
  );
};
