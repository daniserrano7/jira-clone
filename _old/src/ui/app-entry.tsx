import { observer } from 'mobx-react-lite';
import { Header } from './containers/header';
import { Project } from './containers/project';

const App = observer((): JSX.Element => {
  return (
    <div className="app">
      <Header />
      <Project />
    </div>
  );
});

export default App;
