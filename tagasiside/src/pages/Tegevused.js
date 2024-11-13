import { useState } from 'react'
import tegevusedJSON from "../tegevused.json"

function Tegevused() {

    const [tegevused, uuendaTegevused] = useState(tegevusedJSON);


    const kasutajaYksTegev = () => {
        const vastus = tegevused.filter(tegevus => tegevus.userId === 1 );
        uuendaTegevused(vastus);
    }
    const kasutajaKaksTegev = () => {
        const vastus = tegevused.filter(tegevus => tegevus.userId === 2 );
        uuendaTegevused(vastus);
    }
   const kasutajaKolmTegev = () => {
        const vastus = tegevused.filter(tegevus => tegevus.userId === 3 );
        uuendaTegevused(vastus);
    }
     const valmisTegev = () => {
        const vastus = tegevused.filter(tegevus => tegevus.completed === true );
        uuendaTegevused(vastus);
    }
     const mitteValmisTegev = () => {
        const vastus = tegevused.filter(tegevus => tegevus.completed === false );
        uuendaTegevused(vastus);
    }
    const algTTähtTegev = () => {
        const vastus = tegevused.filter(tegevus => tegevus.title.startsWith("t") );
        uuendaTegevused(vastus);
        
    }
    const yle20TähtTegev = () => {
        const vastus = tegevused.filter(tegevus => tegevus.title.length > 20 );
        uuendaTegevused(vastus);
    }
    const uuendaFilter =  () => {
        tegevusedJSON.splice();
        uuendaTegevused(tegevusedJSON.slice());
    }
    return (
    <div>
        <div >Kogu tegevuste arv: {tegevused.length}</div>
        <br />
        <br />
        <button onClick={() => kasutajaYksTegev()}>Kasutaja ID 1 tegevused</button>
        <button onClick={() => kasutajaKaksTegev()}>Kasutaja ID 2 tegevused</button>
        <button onClick={() => kasutajaKolmTegev()}>Kasutaja ID 3 tegevused</button>
        <button onClick={() => valmisTegev()}>Valmis tegevused</button>
        <button onClick={() => mitteValmisTegev()}>Mittevalmis tegevused</button>
        <button onClick={() => algTTähtTegev()}>"t" tähega algavad tegevused</button>
        <button onClick={() => yle20TähtTegev()}>Tähemärke rohkem kui 20</button>
        <button onClick={() => uuendaFilter()}>Kuva kõik tegevused tagasi</button>
       
      {tegevused.map(tegevus =>
        <div>
            <div>{tegevus.userId}</div>
            <div>{tegevus.id}</div>
            <div>{tegevus.title}</div>
            <div>{tegevus.completed}</div>
            </div>)}
   
    
    </div>
  )
}
export default Tegevused