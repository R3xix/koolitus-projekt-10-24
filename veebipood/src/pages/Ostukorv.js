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
    ostukorvFailist.splice(index, 1);
      muudaTooted(ostukorvFailist.slice());

   }

  return (
    <div>
      <button onClick={() => muudaTooted([])} >Tühjenda</button>
      {tooted.map((toode, index) => 
      <div key={index}>
        {toode.nimi}
        <button onClick={() =>kustuta()}>x</button>
      </div>
    
    )}
      
      {tooted.length === 0&&<div>Ostukorv on tühi <Link to="/">
      Mine avalehele
      </Link></div>}
      
    </div>
    
  )
}

export default Ostukorv