import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Menu from './components/menu.component';
import Routers from './routes/routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routers />
      </BrowserRouter>
    </div>
  );
}

export default App;
