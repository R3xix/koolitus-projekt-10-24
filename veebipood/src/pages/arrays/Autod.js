import React, { useState } from 'react'
import autodFailist from "../../data/autod.json"

// string ---- "Ülemiste".includes()   "Ülemiste".startsWith()  "Ülemiste".length
// array ---- [].filter  [].sort  [].forEach [].push  []..splice []..length
// object ... {"aasta": 2010}  punktidega saan küsida ainult võime kaudu väärtust
// {"aasta": 2010}.aasta   .... 2010 
function Autod() {
    const [autod, muudaAutod] = useState (autodFailist.slice());
    const sorteeriAZ= ( ) => {
        autod.sort((a, b ) => a.nimi.localeCompare(b.nimi));
        muudaAutod(autod.slice());
    }
    const hindKasvavalt= ( ) => {
        autod.sort((a, b) => a.hind - b.hind);
        muudaAutod(autod.slice());
    }
    const filtreeriBTahegaAlgavad = ( ) => {
        const vastus = autod.filter(auto =>  auto.nimi.startsWith("B"));
        muudaAutod(vastus);

    }

    const arvutaKokku = ( ) => {
        let sum = 0;
        autod.forEach(auto => sum = sum + auto.hind);
        return sum;
    }

  return (
    <div>

        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={hindKasvavalt}>Sorteeri kasvavalt</button>

        <button onClick={filtreeriBTahegaAlgavad}>B tähega algavad</button>

        <div>{arvutaKokku()}</div>
        <br /><br />

        {autod.map((auto, index) => 
        <div key={index}>
            {auto.nimi} - {auto.hind}€ 
            
        
            
            </div> )}
        
        
        </div>
  )
}

export default Autod