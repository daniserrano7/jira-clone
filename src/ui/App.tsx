import { Header } from "./containers/header";
import { Project } from "./containers/project";

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <Project />
    </div>
  );
}

export default App;