
import './App.css';
import { Link, Route, Routes } from "react-router-dom" ;
import Tagasiside from './pages/Tagasiside';

function App() {
  return (
    <div>


      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/tagasiside">
        <button>Tagasisidede lehele</button>
      </Link>

      <Routes>
        <Route path='/' exact element="Tere"></Route>
        <Route path='/tagasiside' exact element={ <Tagasiside/>}></Route>
      

      </Routes>
      
    </div>
  );
}

export default App;
