import React, {useRef, useState } from 'react'
import tootajadJSON from "../../data/tootajad.json"
import { Link } from "react-router-dom"

function Tootajad() {

  // {"eesnimi": "", "ametikoht": ""; "tel": "548254"}
  // korda teha sorteeri jne
  const [tootajad, muudaTootajad] = useState(tootajadJSON.slice())
  const sorteeriAZ = ( ) => {
    tootajad.sort((a, b) => a.eesnimi.localeCompare(b.eesnimi, "et"));
    muudaTootajad(tootajad.slice());
  }
  const sorteeriZA = ( ) => {
    tootajad.sort((a, b) => b.eesnimi.localeCompare(a.eesnimi, "et"));
    muudaTootajad(tootajad.slice());
  }
  const sorteeriTahemargidKasv = ( ) => {
    tootajad.sort((a, b) =>  a.eesnimi.length - b.eesnimi.length);
    muudaTootajad(tootajad.slice());
}
const sorteeriTahemargidKah = ( ) => {
  tootajad.sort((a, b) => b.eesnimi.length - a.eesnimi.length);
  muudaTootajad(tootajad.slice());
}
const sorteeriTeineTahtAZ = ( ) => {
  tootajad.sort((a, b) =>   a.eesnimi.localeCompare(b[2]));
  muudaTootajad(tootajad.slice());
}
const Filtreeri3Tähte = ( ) => {
  const vastus = tootajad.filter(tootaja => tootaja.eesnimi.length === 3);
  muudaTootajad(vastus);
}

const Filtreeri5plussTahte = ( ) => {
  const vastus = tootajad.filter(tootaja => tootaja.eesnimi.length > 5);
  muudaTootajad(vastus);
}

const FiltreeriSisAi = ( ) => {
  const vastus = tootajad.filter(tootaja => tootaja.eesnimi.includes("ai"));
  muudaTootajad(vastus);
}
const Filtreeri4siTaht = ( ) => {
  const vastus = tootajad.filter(tootaja => tootaja.eesnimi[3] === ("i"));
  muudaTootajad(vastus);
}
const FiltreeriMtahtAlg = ( ) => {
  const vastus = tootajad.filter(tootaja => tootaja.eesnimi.startsWith("M"));
  muudaTootajad(vastus);
}
const FiltreeriPaarisTaht = ( ) => {
  const vastus = tootajad.filter(tootaja => tootaja.eesnimi.length % 2 === 0);
  muudaTootajad(vastus);
} 
const tühjenda = ( ) => {
  muudaTootajad(tootajadJSON.slice());
}
const arvutaKokku = ( ) => {
  let summa = 0;
  tootajad.forEach(tootaja => summa += tootaja.eesnimi.length)
  return summa;
}
const otsiRef = useRef();

const otsi = ( ) => {
  const vastus = tootajadJSON.filter(tootaja => tootaja.eesnimi.toLocaleLowerCase().includes(otsiRef.current.value.toLocaleLowerCase()) );
  muudaTootajad(vastus);

}



  // Sorteeri
  // 1. A-Z
  // 2. Z-A
  // 3. Tähed kasvavalt
  // 4. Tähed kahanevalt
  // 5. Teine täht A-Z

  // Filtreeri
  // 1. Täpselt 3 tähelised
  // 2. Rohkem kui 5 tähelised
  // 3. "ai" lühendit sisaldavad
  // 4. Kellel on neljas täht "i"
  // 5. 'M' tähega algavad
  // 6. Huvitav: Paarisarv tähti

  // Reset nupp
  return (

    <div> 
       <input onChange={otsi} ref={otsiRef} type="text" />
      <div>Tähed kokku: {arvutaKokku()}</div>
      
      {tootajad.map((tootaja, index) =>  <div key={index} >{tootaja.eesnimi} {tootaja.ametikoht} {tootaja.tel}
      <Link to={"/tootaja/" + index}>
            <button>Vt lähemalt</button>
       </Link>
      </div> )}

          <span>Sorteeri: </span>
          <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
          <button onClick={sorteeriZA}>Sorteeri Z-A</button>
          <button onClick={sorteeriTahemargidKasv}>Sorteeri tähemärkide arv kasvavalt</button>
          <button onClick={sorteeriTahemargidKah}>Sorteeri tähemärkide arv kahanevalt</button>
          <button onClick={sorteeriTahemargidKah}>Sorteeri tähemärkide arv kahanevalt</button>
          <button onClick={sorteeriTeineTahtAZ}>Sorteeri teine täht A-Z</button><br /><br />
          <br />
          <span>Filtreeri: </span>
          <button onClick={Filtreeri3Tähte}>Täpselt 3 tähega</button>
          <button onClick={Filtreeri5plussTahte}>Üle 5 tähe</button>
          <button onClick={FiltreeriSisAi}>Sisaldab "ai"</button>
          <button onClick={Filtreeri4siTaht}>Neljas täht "i"</button>
          <button onClick={FiltreeriMtahtAlg}>M täht alguses</button>
          <button onClick={FiltreeriPaarisTaht}>Paarisarv tähti</button>

          <br />
          <button onClick={tühjenda}>Tühjenda</button></div>
  )
}

export default Tootajad