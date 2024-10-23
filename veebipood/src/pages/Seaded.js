import React, { useState } from 'react'

function Seaded() {

  // vasakpoolne sisaldab enda sees keelt
  // parempoolne võimaldab keelt muuta
  const [keel, muudaKeel] = useState("est");
                                      //algväärtus
            // muudaKeel is assigned or never used
            // see tähendab et kuskil ei muudeta muutujat  - {keel}, vaja muuta
  // "keel" is assigned but never used
  // muutujat muudetakse koguaeg, aga muutujat ei kasutata
  // peab olema märatud <div>{keel}</div>
  // vene keels võib olla kirillitsa probleem, tekib kollane kast, käsitsi need tähed muuta
  // kui html element on loogeliste sulgude sees ja tema ees on && siis näidatakse elementi
  // vähemalt üks peab olema muutuvas seisundis
  // siis ta vahepeal on tõde ja vahepeal mitte (useState muutuja milleks on keel)
  // kujunduse muutumine, alati kui on htmlis dünaamika kasutan logelisi sulge
  return (
    <div>
      <div>{keel}</div>
      <button className={keel === "est" ? "keel-aktiivne": "keel"} onClick={() => muudaKeel("est")}> Eesti keelseks</button>
      <button className={keel === "eng" ? "keel-aktiivne": "keel"} onClick={() => muudaKeel("eng")}> To English</button>
      <button className={keel === "rus" ? "keel-aktiivne": "keel"} onClick={() => muudaKeel("rus")}> Russkij</button>

      {keel === "est" &&<div>Leht on eesti keelne</div>}
      {keel === "eng" &&<div> Page is in English</div>}
      {keel === "rus" &&<div> Staranitsa na russkom jazõke</div>}
      
      
      
      
      
    </div>
  )
}

export default Seaded