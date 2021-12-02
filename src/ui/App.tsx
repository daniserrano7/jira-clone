// import Playground from "./Playground";
import { Header } from "./containers";
import { Project } from "./pages";

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <Project />
    </div>
  );
}

export default App;