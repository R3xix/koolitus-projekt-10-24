
import './App.css';
import { Link, Route, Routes } from "react-router-dom"
import Avaleht from "./pages/Avaleht" ;
import Kontakt from "./pages/Kontakt" ;
import Uudised from "./pages/Uudised" ;
import Meist from "./pages/Meist" ;



function App() {
  return (
    <div>

      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmy.alfred.edu%2Fzoom%2F_images%2Ffoster-lake.jpg&f=1&nofb=1&ipt=897de9c1b93ba1ad9e4042dff63936e53885254b248337c942c26ce239d1390a&ipo=images" alt="loodus" width="1260" height="345"/>
       <h1>Nature calling</h1>
       <br />
       Relax and enjoy your journey!
       <br /><br /><br />
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
        <Route path="element" element={ <Avaleht /> } />
        <Route path="uudised" element={ <Uudised /> } />
        <Route path="kontakt" element={ <Kontakt /> } />
        <Route path="meist" element={ <Meist /> } />
        
      </Routes>
     
    </div>
  );
}

export default App;
