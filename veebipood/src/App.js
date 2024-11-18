// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom" ;
import Avaleht from './pages/Avaleht';
import Esindused from './pages/arrays/Esindused';
import Kinkekaart from './pages/Kinkekaart';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';
import Seaded from './pages/Seaded';
import Kalkulaator from './pages/Kalkulaator';
import NotFound from './pages/NotFound';
// import Menyy from './components/Menyy';
import Hinnad from './pages/arrays/Hinnad';
import Tootajad from './pages/arrays/Tootajad';
import Tooted from './pages/arrays/Tooted';
import HaldaEsindused from './pages/halda/HaldaEsindused';
import HaldaHinnad from './pages/halda/HaldaHinnad';
import HaldaTootajad from './pages/halda/HaldaTootajad';
import HaldaTooted from './pages/halda/HaldaTooted';
import HaldaAutod from './pages/halda/HaldaAutod';
import HaldaKasutajad from './pages/halda/HaldaKasutajad';
import Autod from './pages/arrays/Autod';
import Kasutajad from './pages/arrays/Kasutajad';
import YksEsindus from './pages/yks/YksEsindus';
import YksHind from './pages/yks/YksHind';
import YksTootaja from './pages/yks/YksTootaja';
import YksToode from './pages/yks/YksToode';
import YksAuto from './pages/yks/YksAuto';
import YksKasutaja from './pages/yks/YksKasutaja';
import { ContactUs } from './pages/ContactUs';
import Kaart from './pages/Kaart';
import MuudaAuto from './pages/muuda/MuudaAuto';
import MuudaEsindus from './pages/muuda/MuudaEsindus';
import MuudaHind from './pages/muuda/MuudaHind';
import MuudaKasutaja from './pages/muuda/MuudaKasutaja';
import MuudaTootaja from './pages/muuda/MuudaTootaja';
import MuudaToode from './pages/muuda/MuudaToode';
import NavigationBar from './components/NavigationBar';


// igal HTML elemendil peab olema algus ja lõpp või ta on self-closing
// HTMLi omadused pannakse alguse sisse: <div OMADUSED_SIIA></div>

function App() {
  return (
    <div className="App">

      {/* <Menyy /> */}
      <NavigationBar/>

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

      
      <Route path="hinnad" element={<Hinnad/>}/>
      <Route path="tootajad" element={<Tootajad/>}/>
      <Route path="tooted" element={<Tooted/>}/>
      <Route path="autod" element={<Autod/>}/>
      <Route path="kasutajad" element={<Kasutajad/>}/>

      <Route path="halda-esindused" element={<HaldaEsindused/>}/>
      <Route path="halda-hinnad" element={<HaldaHinnad/>}/>
      <Route path="halda-tootajad" element={<HaldaTootajad/>}/>
      <Route path="halda-tooted" element={<HaldaTooted/>}/>
      <Route path="halda-autod" element={<HaldaAutod/>}/>
      <Route path="halda-kasutajad" element={<HaldaKasutajad/>}/>

      <Route path="esindus/:index" element={<YksEsindus/>}/>
      <Route path="hind/:number" element={<YksHind/>}/>
      <Route path="tootaja/:inimene" element={<YksTootaja/>}/>
      <Route path="toode/:toodeIndex" element={<YksToode/>}/>
      <Route path="auto/:auto_id" element={<YksAuto/>}/>
      <Route path="kasutaja/:kasutaja" element={<YksKasutaja/>}/>

      <Route path="tagasiside" element={<ContactUs/>}/>
      <Route path="kaart" element={<Kaart/>}/>
      
      <Route path="muuda-auto/:jrknr" element={<MuudaAuto/>}/>
      <Route path="muuda-esindus/:esinduse_index" element={<MuudaEsindus/>}/>
      <Route path="muuda-hind/:hindIndex" element={<MuudaHind/>}/>
      <Route path="muuda-kasutaja/:kasutajaIndex" element={<MuudaKasutaja/>}/>
      <Route path="muuda-tootaja/:tootajaNumber" element={<MuudaTootaja/>}/>
      <Route path="muuda-toode/:toodeNimi" element={<MuudaToode/>}/>



      <Route path="*" element={<NotFound/>}/>
      


     </Routes>
    </div>
  );
}

export default App;
// 8.  K 06.11   9.00

// 9.  K 13.11   13.30
// 10. R 15.11   13.30

// 11. E 18.11   13.30
// 12. K 20.11   13.30