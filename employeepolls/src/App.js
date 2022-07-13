import logo from './logo.svg';
import './App.css';
import { getInitialData } from './utils/api'
function App() {
  return (
    <div className="App">
      {getInitialData().then(data => console.log(data))}
    </div>
  );
}

export default App;
