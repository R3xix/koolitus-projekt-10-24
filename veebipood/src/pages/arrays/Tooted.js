import React, { useRef, useState } from 'react'
import tootedJSON from "../../data/tooted.json"

function Tooted() {

  // "nimi": 

      const [tooted, muudaTooted] = useState(tootedJSON)
      const sorteeriAZ = ( ) => {
        tooted.sort((a, b) => a.localeCompare(b, "et"));
        muudaTooted(tooted.slice());
      }
      const sorteeriZA = ( ) => {
          tooted.sort((a, b) => b.localeCompare(a, "et"));
          muudaTooted(tooted.slice());
      }
      const sorteeriTahemargidKasv = ( ) => {
          tooted.sort((a, b) =>  a.length - b.length);
          muudaTooted(tooted.slice());
      }
      const sorteeriTahemargidKah = ( ) => {
          tooted.sort((a, b) => b.length - a.length);
          muudaTooted(tooted.slice());
      }
      const tühjenda = ( ) => { 
        muudaTooted(tootedJSON)
      }
      const FiltreeriBgaAlg = ( ) => {
        const vastus = tooted.filter(toode => toode.startsWith("B"));
        muudaTooted(vastus);
      }
    
      const FiltreeriNgaAlg = ( ) => {
        const vastus = tooted.filter(toode => toode.startsWith("N"));
        muudaTooted(vastus);
      }
    
      const FiltreeriTgaAlg = ( ) => {
        const vastus = tooted.filter(toode => toode.startsWith("T"));
        muudaTooted(vastus);
      }
      const otsingRef = useRef();

      const otsi = ( ) => {
        const vastus = tootedJSON.filter(toode => toode.includes(otsingRef.current.value) );
        muudaTooted(vastus);
      }
      const arvutaKokku = ( ) => {
        let summa = 0;
        tooted.forEach(toode => summa = toode.match)
        return summa;
      }
  // Sorteeri
// 1. A-Z
// 2. Z-A
// 3. Tähed kasvavalt
// 4. Tähed kahanevalt

// Filtreeri
// 3 nuppu: Bga algavad, Nga algavad, Tga algavad
// Autode margid
// {esindused.map((esindus, index) => <div key={index}> {esindus} </div>)}
// Reset nupp

  return (
    <div>
       <input onChange={otsi} ref={otsingRef} type="text" />
       <div>Tähed kokku: {arvutaKokku()}</div>
      {tooted.map((toode, index) =>  <div key={index} >{toode}</div> )}

      <span>Sorteeri: </span>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriTahemargidKasv}>Sorteeri tähemärkide arv kasvavalt</button>
      <button onClick={sorteeriTahemargidKah}>Sorteeri tähemärkide arv kahanevalt</button><br /><br />
      <br />
      <span>Filtreeri: </span>
      <button onClick={FiltreeriBgaAlg}>B tähega algavad</button>
      <button onClick={FiltreeriNgaAlg}>N tähega algavad</button>
      <button onClick={FiltreeriTgaAlg}>T tähega algavad</button>

      <br />
      <button onClick={tühjenda}>Tühjenda</button>
    </div>
  )
}

export default Tooted