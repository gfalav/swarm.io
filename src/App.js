import './App.scss';
import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Topbar from './layouts/topbar';
import Gantt from './gantt/gantt';

function App() {
  return (
    <div className="App">
      <Topbar />

      <Gantt />
    </div>
  );
}

export default App;
