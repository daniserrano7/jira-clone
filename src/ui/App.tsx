import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { projectStore } from "infrastructure/store";
import { Header } from "./containers/header";
import { Project } from "./containers/project";

const App = observer((): JSX.Element => {
  const [ isLoaded, setIsLoaded ] = useState<boolean>(false);
  console.log("RENDERING APP")

  useEffect(() => {
    projectStore.fetchInitData()
      .then(() => {
        // console.log("PROJECT USERS: ", projectStore.users);
        setIsLoaded(true);
      });
  }, []);
  return (
    <div className="App">
      <Header />
      {isLoaded
        ? <Project />
        : <div>LOADING</div>
      }
    </div>
  );
});

export default App;