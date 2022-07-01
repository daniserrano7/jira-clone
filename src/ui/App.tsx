import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import db from "infrastructure/db";
import { appStore, projectStore } from "infrastructure/store";
import { Header } from "./containers/header";
import { Project } from "./containers/project";

const App = observer((): JSX.Element => {
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

  return (
    <div className="app">
      <Header />
      {isLoaded
        ? <Project />
        : <div>LOADING</div>
      }
    </div>
  );
});

export default App;