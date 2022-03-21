// import Playground from "./Playground";
import { Header } from "./containers";
import { Project } from "./pages";

function App(): JSX.Element {
  console.log("RENDERING APP");
  return (
    <div className="App">
      <Header />
      <Project />
    </div>
  );
}

export default App;