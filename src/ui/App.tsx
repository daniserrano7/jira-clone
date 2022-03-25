import { Header } from "./containers/header";
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