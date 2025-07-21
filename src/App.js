import './App.css';
import Nav from './header';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
     <p>Chandini Suraj Padhi Dashboard</p>
     </BrowserRouter>
    </div>
  );
}

export default App;
