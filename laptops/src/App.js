
import './App.css';
import { Link, Route, Routes } from "react-router-dom" ;
import Avaleht from './pages/Avaleht';
import LisaArvuti from './pages/LisaArvuti';
import VaataArvuteid from './pages/VaataArvuteid';
import Tooted from './pages/Tooted';
import Ostukorv from './pages/Ostukorv';

function App() {
  return (
    <div>

      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/all">
        <button>Vaata sülearvuteid</button>
      </Link>
      <Link to="/add">
        <button>Lisa sülearvuti</button>
      </Link>
      <Link to="/products">
        <button>Vaata tooteid</button>
      </Link>
      <Link to="/cart">
        <button>Ostukorv</button>
      </Link>

      <Routes>
        <Route path='/' element={<Avaleht/>}></Route>
        <Route path='all' element={ <VaataArvuteid/>}></Route>
        <Route path='add' element={ <LisaArvuti/>}></Route>
        <Route path='products' element={ <Tooted/>}></Route>
        <Route path='cart' element={ <Ostukorv/>}></Route>

      </Routes>
      
    </div>
  );
}

export default App;
