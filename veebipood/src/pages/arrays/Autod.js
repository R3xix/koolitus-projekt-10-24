import React, { useRef, useState } from 'react'
import autodFailist from "../../data/autod.json"
import ostukorvFailist from "../../data/ostukorv.json"
import { Link } from "react-router-dom"

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
    const otsiRef = useRef();
    const otsi = ( ) => {
        const vastus = autodFailist.filter(auto => auto.nimi.includes(otsiRef.current.value) );
        muudaAutod(vastus);
    }

    function lisaOstukorvi(auto) {
        ostukorvFailist.push(auto);
        

    }

  return (
    <div>

        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={hindKasvavalt}>Sorteeri kasvavalt</button>

        <button onClick={filtreeriBTahegaAlgavad}>B tähega algavad</button>

        <div>HInnad kokku €: {arvutaKokku()}</div>
        <br />
        <div> Otsi: <input onChange={otsi} ref={otsiRef} type="text" /></div><br />
        {autod.map((auto, index) => 
        <div key={index}>
            <img className="toote-pilt" src= {auto.pilt} alt="" />
            <div>{auto.nimi} </div>
            <div>{auto.hind}€  </div>
            {auto.aktiivne} 
            <button onClick={() => lisaOstukorvi(auto)}>Lisa ostukorvi</button>
            <Link to={"/auto/" + index}>
            <button>Vt autot lähemalt</button>
            </Link>
        
            
            </div> )}
        
        
        </div>
  )
}

export default Autod