import React, { useState } from 'react' // reactist 
import { Link } from 'react-router-dom' // Link, Route, Routes URLiga seotud
import ostukorvFailist from "../data/ostukorv.json";
// kirjutamisel 2 varianti
// 1. emmet  div+enter ------div div
// button+enter ---- button button
// 2. Soovin importi  Link ja sealt dropdownist Link ja näha react-router-dom
//                    Page   dorpdownist  ----- ./pages/Page


function Ostukorv() {
  const [tooted, muudaTooted] = useState(ostukorvFailist.slice());
// useStaet järgi [] sisse läheb nimekiri toodetest mis eraldatakse jutumärkidega
   function kustuta (index) {
    ostukorvFailist.splice(index, 1); // splice(mitmendat)
      muudaTooted(ostukorvFailist.slice());

   }
   function tühjenda () {
     ostukorvFailist.splice(0); // alates 0ndast (esimesest) lõpuni välja
     muudaTooted(ostukorvFailist.slice());

   }
   const arvutaKokku = ( ) => {
    let sum = 0;
    tooted.forEach(toode => sum = sum + toode.hind);
    return sum;
   }

  return (
    <div>
      <button onClick={tühjenda} >Tühjenda</button>
      
      {tooted.map((toode, index) => 
      <div key={index}>
        <img src={toode.pilt} style= {{"width": "50px"}} alt="" />
        {toode.nimi} - {toode.hind}€
        <button onClick={() =>kustuta()}>x</button>
      </div>
    
    )}
    <div>Toodete hind kokku: {arvutaKokku()} tk</div><br />
      
      {tooted.length === 0&&<div>Ostukorv on tühi <Link to="/">
      Mine avalehele
      </Link></div>}
      
    </div>
    
  )
}

export default Ostukorv