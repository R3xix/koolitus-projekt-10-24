
import './App.css';
import { Link, Route, Routes } from "react-router-dom"
import Avaleht from "./pages/Avaleht" ;
import Kontakt from "./pages/Kontakt" ;
import Uudised from "./pages/Uudised" ;
import Meist from "./pages/Meist" ;
import KasutajaPostitus from './pages/KasutajaPostitus';
import YksPostitus from './pages/YksPostitus';



function App() {
  return (
    <div>

      
      <Link to="/"> 
      <button>Avaleht</button>      
      </Link>
      <Link to="uudised"> 
      <button>Uudised</button>
      </Link>
      <Link to="kontakt"> 
      <button>Kontakt</button>
      </Link>
      <Link to="meist"> 
      <button>Meist</button>
      </Link>
      

    
      <Routes>
        <Route path="" element={ <Avaleht /> } />
        <Route path="uudised" element={ <Uudised /> } />
        <Route path="kontakt" element={ <Kontakt /> } />
        <Route path="meist" element={ <Meist /> } />
        <Route path="kasutaja-postitus/:kasutajaId" element={ <KasutajaPostitus /> } />
        <Route path="vaata-postitus/:postituseId" element={ <YksPostitus /> } />
      </Routes>
     
    </div>
  );
}

export default App;
