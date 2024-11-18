import React, { useRef, useState } from 'react'
import kasutajadJSON from "../../data/kasutajad.json"
import { Link } from "react-router-dom"

function Kasutajad() {
  const [kasutajad, muudaKasutajad] = useState(kasutajadJSON.slice());

  const sorteeriAZ = ( ) => {
    kasutajad.sort((a, b ) => a.email.localeCompare(b.email));
    muudaKasutajad(kasutajad.slice());
  }
  const sorteeriZA = ( ) => {
    kasutajad.sort((a, b ) => b.email.localeCompare(a.email));
    muudaKasutajad(kasutajad.slice());
  }
  const sorteeriKasvavalt = ( ) => {
    kasutajad.sort((a, b) => a.email.length - b.email.length);
    muudaKasutajad(kasutajad.slice());
  }
  const sorteeriKahanevalt = ( ) => {
      kasutajad.sort((a, b) => b.email.length - a.email.length);
      muudaKasutajad(kasutajad.slice());
  }
  const sorteeriKasvavaltAasta = ( ) => {
    kasutajad.sort((a, b) => a.aasta - b.aasta);
    muudaKasutajad(kasutajad.slice());
  }
  const sorteeriKahanevaltAasta = ( ) => {
      kasutajad.sort((a, b) => b.aasta - a.aasta);
      muudaKasutajad(kasutajad.slice());
  }
  const filtreeriUSisaldavad = ( ) => {
    const vastus = kasutajad.filter(kasutaja =>  kasutaja.email.includes("u"));
    muudaKasutajad(vastus.slice());
  }
    const filtreeri3Sisaldavad = ( ) => {
      const vastus = kasutajad.filter(kasutaja =>  kasutaja.parool.includes(3));
      muudaKasutajad(vastus.slice());
    
  }
  const reset  = ( ) => {
    muudaKasutajad(kasutajadJSON.slice());
  }
  const otsiRef = useRef(); 
  const otsi = ( ) => {
    const vastus = kasutajadJSON.filter(kasutaja => kasutaja.email.includes(otsiRef.current.value) );
    muudaKasutajad(vastus);
  }
  const otsiParool = ( ) => {
    const vastus = kasutajadJSON.filter(kasutaja => kasutaja.parool.includes(otsiRef.current.value) );
    muudaKasutajad(vastus);
  }
  const arvutaKokku = ( ) => {
    let sum = 0;
    kasutajad.forEach(kasutaja => sum = sum += kasutaja.email.length);
    return sum;
  }
  const arvutaKeskmineAasta = ( ) => {
    let sum = 0;
    kasutajad.forEach(kasutaja => sum = sum + kasutaja.aasta);
    return sum/ kasutajad.length;
  }
  
  return (
    <div>
      <br />
      <div>Sorteeri:   
      <button onClick={sorteeriAZ}>AZ email</button>
      <button onClick={sorteeriZA}>ZA email</button>
      <button onClick={sorteeriKasvavalt}>Tähed kasvavalt</button>
      <button onClick={sorteeriKahanevalt}>Tähed kahanevalt</button>
      <button onClick={sorteeriKasvavaltAasta}>Loomise aeg kasvavalt aasta järgi</button>
      <button onClick={sorteeriKahanevaltAasta}>Loomise aeg kahanevalt aasta järgi</button>
      </div>
      <br />
      <div>Filtreeri:  <button onClick={filtreeriUSisaldavad}>U sisaldavad</button> <button onClick={filtreeri3Sisaldavad}>3 sisaldavad</button></div>
      <br /><br />
      <div>Otsi email: <input onChange={otsi} ref={otsiRef} type="text" /></div>
      
      <br />
      <div>Otsi parool: <input onChange={otsiParool} ref={otsiRef} type="text" /></div>
      
      <br />
      {kasutajad.map((kasutaja, index) => <div key={index}>{kasutaja.email}
         - {kasutaja.parool} - {kasutaja.aasta} 
       <Link to={"/kasutaja/" + index}>
            <button>Vt autot lähemalt</button>
       </Link>
       </div>)}

      {/* {hinnad.map((hind, index) => <div key={index}>{hind}</div>
       )}  */}
      <div>{arvutaKokku()}</div>
      <div>{arvutaKeskmineAasta()}</div>
      <button onClick={reset}>Tühjenda</button>
    </div>
  )
}

export default Kasutajad