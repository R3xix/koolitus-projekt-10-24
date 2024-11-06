import React, { useState } from 'react'

function Tooted() {

      const [tooted, muudaTooted] = useState(["Tesla", "BMW", "Bentley", "Nissan", "Toyota", "Audi", "Nio", "KIA"])
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
        muudaTooted(["Tesla", "BMW", "Bentley", "Nissan", "Toyota", "Audi", "Nio", "KIA"])
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