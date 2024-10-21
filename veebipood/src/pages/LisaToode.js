import React, { useState }from 'react'

function LisaToode() {

  const [sonum, muudaSonum] = useState ();
  // muutuja, muutja

  return (
    <div>
      <div> {sonum} </div>
      <label> Toote nimi</label> <br />
      <input type="text" /><br />
      <button onClick={() => muudaSonum("Toode lisatud!")}>Sisesta</button><br />



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