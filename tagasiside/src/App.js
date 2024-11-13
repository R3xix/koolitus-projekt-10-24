
import './App.css';
import { Link, Route, Routes } from "react-router-dom" ;
import Tagasiside from './pages/Tagasiside';
import TagasisideAndjad from './pages/TagasisideAndjad';
import Tegevused from './pages/Tegevused';
import Kasutajad from './pages/Kasutajad';

function App() {
  return (
    <div>


      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/tagasiside">
        <button>Tagasisidede lehele</button>
      </Link>
      <Link to="/tagasiside-andjad">
        <button>Tagasiside andjad</button>
      </Link>
      <Link to="/tegevused">
        <button>Tegevused</button>
      </Link>
      <Link to="/kasutajad">
        <button>Kasutajad</button>
      </Link>
      
      <Routes>
        <Route path='/' exact element= {"Tere"} ></Route>
        <Route path='/tagasiside' exact element={ <Tagasiside/>}></Route>
        <Route path='/tagasiside-andjad' exact element={ <TagasisideAndjad/>}></Route>
        <Route path='/tegevused' exact element={ <Tegevused/>}></Route>
        <Route path='/kasutajad' exact element={ <Kasutajad/>}></Route>
      

      </Routes>
      
    </div>
  );
}

export default App;
