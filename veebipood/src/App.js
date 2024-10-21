// import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from "react-router-dom" ;
import Avaleht from './pages/Avaleht';
import Esindused from './pages/Esindused';
import Kinkekaart from './pages/Kinkekaart';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';
import Seaded from './pages/Seaded';
import Kalkulaator from './pages/Kalkulaator';
import NotFound from './pages/NotFound';

// igal HTML elemendil peab olema algus ja lõpp või ta on self-closing
// HTMLi omadused pannakse alguse sisse: <div OMADUSED_SIIA></div>

function App() {
  return (
    <div className="App">





      <Link to="/">
       <img className="pilt" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsupercarspro.files.wordpress.com%2F2016%2F05%2Fsports-cars-1.jpg&f=1&nofb=1&ipt=19af6d8b1d1d3a347d8114a06a8613d794f269ff611fa9ee423a857756757a0f&ipo=images" alt="" />
       </Link>

      <Link to="/esindused">
        <button className="nupp">Meie esindused</button>
      </Link>

     <Link to="/osta-kinkekaart">
       <button className="nupp">Mine kinkekaarti ostma</button>
     </Link>

     <Link to="/ostukorv">
        <button className="nupp">Ostukorv</button>
      </Link>

      <Link to="/lisa-toode">
        <button className="nupp">Lisa toode</button>
      </Link>

      <Link to="/seaded">
        <button className="nupp">Seaded</button>
      </Link>
      <Link to="/kalkulaator">
        <button className="nupp">Kalkulaator</button>
      </Link>

      
        

     {/* localhost:3000>/esindused  <div>10 esindust </div>
         localhost:3000/osta-kinkekaart <div>Kliendikaardi ostmine </div>
     */}

     <Routes>
      <Route path="" element={<Avaleht />}/>
      <Route path="esindused" element={<Esindused />}/>
      <Route path="osta-kinkekaart" element={<Kinkekaart />}/>
      <Route path="ostukorv" element={<Ostukorv />}/>
      <Route path="lisa-toode" element={<LisaToode/>}/>
      <Route path="seaded" element={<Seaded/>}/>
      <Route path="kalkulaator" element={<Kalkulaator/>}/>
      <Route path="*" element={<NotFound/>}/>

     </Routes>
    </div>
  );
}

export default App;
