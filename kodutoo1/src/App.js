
import './App.css';
import { Link, Route, Routes } from "react-router-dom" ;
import Meist from './pages/Meist';
import Kontakt from './pages/Kontakt';
import Avaleht from './pages/Avaleht';
import Seaded from './pages/Seaded';
import {useRef, useState } from 'react'
import Leht from './pages/Leht';
import Loader from './pages/Loader';
import Animals from './arrays/Animals';
import Words from './arrays/Words';
import Months from './arrays/Months';
import Books from './pages/Books';
import Numbrid from './arrays/Numbrid';



function App() {

    const [sisselogitud, muudaSisselogitud] = useState("ei");
    const [sonum, muudaSonum] = useState("");
    const kasutajanimiRef = useRef();
    const paroolRef = useRef();
    const logiSisse = () => {
        if (paroolRef.current.value === "123")
        {muudaSisselogitud("jah");
        muudaSonum(kasutajanimiRef.current.value + ", oled sisse logitud")}
        else {
        muudaSonum("Vale parool");
        }
        }

    const logiValja = () => {
        muudaSisselogitud("ei");
        muudaSonum("");
    }

  return (
    <div className="App">
         <div>{sonum}</div>
        { sisselogitud === "ei" && <div>
         <label>Kasutajanimi</label><br />
         <input  ref={kasutajanimiRef} type="text" /><br />
         <label>Parool</label><br />
         <input ref={paroolRef} type="password" />
         <br />
         </div>}
          { sisselogitud === "ei" && <button onClick={logiSisse}>Logi sisse</button>} <br />
                  
          { sisselogitud === "jah" &&<button onClick={logiValja}>Logi välja</button>}
        

       

        <br />

       <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/kontakt">
        <button>Kontakt</button>
      </Link>
      <Link to="/meist">
        <button>Meist</button>
      </Link>
      <Link to="/seaded">
        <button>Seaded</button>
      </Link>
      <Link to="/leht">
        <button>Leht</button>
      </Link>
      <Link to="/loader">
        <button>Loader</button>
      </Link>
      <Link to="/animals">
        <button>Animal</button>
      </Link>
      <Link to="/words">
        <button>Words</button>
      </Link>
      <Link to="/months">
        <button>Months</button>
      </Link>
      <Link to="/books">
        <button>Books</button>
      </Link>
      <Link to="/numbrid">
        <button>Numbrid</button>
      </Link>
      
     

       

      
        
       
      

    <Routes>
        <Route path='/' element={<Avaleht/>}></Route>
        <Route path='kontakt' element={ <Kontakt/>}></Route>
        <Route path='meist' element={ <Meist/>}></Route>
        <Route path='seaded' element={ <Seaded/>}></Route>
        <Route path='leht' element={ <Leht/>}></Route>
        <Route path='loader' element={ <Loader/>}></Route>
        <Route path='animals' element={ <Animals/>}></Route>
        <Route path='words' element={ <Words/>}></Route>
        <Route path='months' element={ <Months/>}></Route>
        <Route path='books' element={ <Books/>}></Route>
        <Route path='numbrid' element={ <Numbrid/>}></Route>
      </Routes>
       
        
      
      

          





      
    </div> 
    
  );
}
export default App;
