
import './App.css';
import Ilmumine from './pages/Ilmumine';
import Kujundus from './pages/Kujundus';
import Muutmine from './pages/Muutmine';
import Telefon from './pages/Telefon';
import Hind from './pages/Hind';
import {Link, Navigate, Route, Routes } from "react-router-dom"


function App() {
  return (
    <div>

       <Link to="/ilmumine"><button>Ilmumine</button></Link>
       <Link to="/kujundus"><button>Kujundus</button></Link>
       <Link to="/muutmine"><button>Muutmine</button></Link>
       <Link to="/hind"><button>Hind</button></Link>
       <Link to="/telefon"><button>Telefon</button></Link>

       <Routes>
         <Route path="/" element={ <Navigate to="/ilmumine" /> }/>
         <Route path="/ilmumine" element={ <Ilmumine /> }/>
         <Route path="/kujundus" element={ <Kujundus /> }/>
         <Route path="/muutmine" element={ <Muutmine /> }/>
         <Route path="/hind" element={ <Hind /> }/>
         <Route path="/telefon" element={ <Telefon /> }/>


       </Routes>
      
    </div>
  );
}

export default App;
