import React, { useRef }from 'react'
import tootedJSON from "..//data/tooted.json"
import { ToastContainer, toast } from 'react-toastify';

function LisaToode() {

  
  // muutuja, muutja
  

  const toodeRef = useRef();  // htmli inputi sesst sisestuse lugemiseks
  const hindRef = useRef();
  const aktiivneRef = useRef();
  const piltRef = useRef();

  function lisa () {
    tootedJSON.push(
      {"nimi":toodeRef.current.value, "hind":hindRef.current.value, "aktiivne": aktiivneRef.current.value, 
          "pilt": piltRef.current.value}
  );
  
  

  // toodeRef.current.value === "" ? muudaSonum ("Tühja nimega ei saa toodet lisada") : muuda("Lisatud")
  
    if (toodeRef.current.value === "") {toast.error("Toodet ei lisatud");} 
    else {toast.success("Toode edukalt lisatud");}
    
  }

  return (
    <div>
      
      <label >Uus toote nimi: <input ref={toodeRef}type="text" /></label>
        <br />
        <label>Uue toote hind: <input ref={hindRef }type="text" /></label>
         <br />
        <label>Staatus: <input ref={aktiivneRef }type="text" /></label><br />
        <label>Pilt: <input ref={piltRef }type="text" /></label><br />
        
        
        <button onClick={lisa}>Sisesta</button><br /><br />

        <ToastContainer
            position="bottom-right"
            autoClose={3000}
           
            theme="dark"
             />

    </div>
  )
}

export default LisaToode

// Kuhu tulevad vead:
// 1. kompileerimise vead ---punane joon all, localhostis punane tekst
// compile-time errors
// vea leiab üles sealt kust rakenduse käima panid. või ka lehelt saan lugeda (punane tekst)

// 2. käimasoleku vead --- ei tööta, mida ootan et töötaks / või leht on üleni valge
// run-time errors
// vea leiab ülesse: tehes klõps - inspect -console