import React, { useState } from 'react'

function Avaleht() {
  const [laigitud, muudaLaigitud] = useState(true);
  const [kogus, muudaKogus] = useState(0);
  const [sonum, muudaSonum] = useState("Muuda kogust");

  function nulli () {
    muudaKogus(0);
    muudaSonum("Kogus nullitud!");

  }

  function vahenda( ) {
    muudaKogus(kogus - 1);
    muudaSonum("Kogus vähendatud!");
  }
  function suurenda( ) {
    muudaKogus(kogus +1);   
    muudaSonum("Kogus suurendatud!");
  }


  // string - sõna lisaks 
  // number - saan teda kokku liita/ lahutada/korruta/jagada
  // boolean -kahendväärtus, saan teda tagurpidi keerata
  // kui on jtumärgid võin anda väärtuseks ükskõik mille
  // ilma jutumärkideta -- võin anda ainult kas number või true/false
  // boolean- kus pole 

  return (
    <div>
      {laigitud === true &&<img src="/laigitud.svg" alt="" />}
      {laigitud === false &&<img src="/mittelaigitud.svg" alt="" />}
      <br />

      {/* 1.variant */}
      <button onClick={() => muudaLaigitud(true)}>Vajuta like</button>
      <button onClick={() => muudaLaigitud(false)}>Võta like maha</button>
      <br />
      {/* 2.variant */}
      <button onClick={() => muudaLaigitud(!laigitud)}>Muuda like'i</button>
      <br />
      <br />

      <div>{sonum}</div>
      {kogus > 0 && <button onClick={nulli}>Tagasi nulli</button>} <br />

      <button  disabled={kogus === 0} onClick = {vahenda} >-</button>
      <span>{kogus}</span>
      <button onClick = {suurenda} >+</button>



    </div>
  )
}

export default Avaleht



// [] --> array jaoks, useState vasakul pool on array
// {} --> JavaScriptis koodibloki jaoks / objekti jaoks
//          HTMLs JavaScripti tähistus
// () --> funktsiooni väljakutsumiseks
// =  --> väärtuse andmiseks
// === -> kontrolliks, kas vasak ja parem pool on identne
// &&  -> kas HTMLs näidatakse välja
// <=  -> väiksem võrdne
// >=  -> suurem võrdne
// =>  -> nool ehk kasutame funktsioonide juures, for tsükli juures
// !== -> kontrollime et vasak ja parem pool pole identseks
// %   -> jäägi märk   5 % 2 === 1
// ? : -> ternary operator - lühendatud if/else 
// ?/:  if/else    TRUE/FALSE ? KUI_TRUE : KUI_FALSE 
// ,   -> array sees elementide eraldamiseks
// ;   -> rea lõpetamiseks
// .   -> muutuja seest mingi funktsiooni välja kutseks
//          objekti seest võtme abil väärtuse saamiseks
// ""   ''   -> sobivad nii ühekordsed kui ka kahekordsed jutumärgid