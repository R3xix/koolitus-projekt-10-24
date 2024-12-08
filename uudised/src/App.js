
import './App.css';
import { Link, Route, Routes } from "react-router-dom"
import Avaleht from "./pages/Avaleht" ;
import Kontakt from "./pages/Kontakt" ;
import Uudised from "./pages/Uudised" ;
import Meist from "./pages/Meist" ;
import KasutajaPostitus from './pages/KasutajaPostitus';
import YksPostitus from './pages/YksPostitus';
import LisaUudis from './pages/LisaUudis';
import HaldaUudiseid from './pages/HaldaUudiseid';
import MuudaUudis from './pages/MuudaUudis';
import YksUudis from './pages/YksUudis';



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
      <Link to="lisa-uudis"> 
      <button>Lisa uudis</button>
      </Link>
      <Link to="halda"> 
      <button>Halda uudiseid</button>
      </Link>
      

    
      <Routes>
        <Route path="" element={ <Avaleht /> } />
        <Route path="uudised" element={ <Uudised /> } />
        <Route path="kontakt" element={ <Kontakt /> } />
        <Route path="meist" element={ <Meist /> } />
        <Route path="lisa-uudis" element={ <LisaUudis /> } />
        <Route path="halda" element={ <HaldaUudiseid /> } />
        <Route path="kasutaja-postitus/:kasutajaId" element={ <KasutajaPostitus /> } />
        <Route path="vaata-postitus/:postituseId" element={ <YksPostitus /> } />
        <Route path="uudis/:index" element={ <YksUudis /> } />
        <Route path="muuda/:index" element={ <MuudaUudis /> } />
      </Routes>
     
    </div>
  );
}

export default App;
