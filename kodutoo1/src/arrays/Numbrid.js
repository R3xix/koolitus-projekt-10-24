import React, { useState} from 'react'

function Numbrid() {
    const [numbrid, muudaNumbrid] = useState([4, 23, 7, 39, 19, 0, 9, 14, 135, 456, 1001]);
    
    const sorteeriKasvavalt = () => { 
        numbrid.sort((a, b) => a - b);
        muudaNumbrid(numbrid.slice());
    }
    const sorteeriKahanevalt = () => { 
        numbrid.sort((a, b) => b - a);
        muudaNumbrid(numbrid.slice());
    }
    const sorteeri1numbTähtJärg = () => { 
        numbrid.sort((a, b) => a.toString().localeCompare(b.toString()));
        muudaNumbrid(numbrid.slice());
    }
    const sorteeriVastupidi1numbOsas = () => { 
        numbrid.sort((a, b) => b.toString().localeCompare(a.toString()));
        muudaNumbrid(numbrid.slice());
    }
    const Filtreeri8suuremad = ( ) => {
        const vastus = numbrid.filter(number => number > 8);
        muudaNumbrid(vastus);
    }
    const FiltreeriVäiksemad10 = ( ) => {
        const vastus = numbrid.filter(number => number < 10);
        muudaNumbrid(vastus);
    }
    const FiltreeriPaarisArvud = ( ) => {
        const vastus = numbrid.filter(number => number % 2 === 0);
        muudaNumbrid(vastus);
    }
    const FiltreeriPaaritudArvud = ( ) => {
        const vastus = numbrid.filter(number => number % 2 !== 0);
        muudaNumbrid(vastus);
    }
    const Filtreeri1gaAlgavad = ( ) => {
        const vastus = numbrid.filter(number => number.toString().startsWith("1"));
        muudaNumbrid(vastus);
    }
    const Filtreeri3eSisaldavad = ( ) => {
        const vastus = numbrid.filter(number => number.toString().includes("3"));
        muudaNumbrid(vastus);
    }

    const tühjenda = ( ) => {
        
        muudaNumbrid([4, 23, 7, 39, 19, 0, 9, 14, 135, 456, 1001]);
    }

  return (
    <div>

        <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
        <button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>
        <button onClick={sorteeri1numbTähtJärg}>Esimese numbri järgi tähestiku järjekorras</button>
        <button onClick={sorteeriVastupidi1numbOsas}>Vastupidises järjekorras esimese numbri osas</button>
         <br />
         <button onClick={Filtreeri8suuremad}>Suuremad kui 8</button>
        <button onClick={FiltreeriVäiksemad10}>Väiksemad kui 10</button>
        <button onClick={FiltreeriPaarisArvud}>Paarisarvud</button>
        <button onClick={FiltreeriPaaritudArvud}>Paaritud arvud</button>
        <button onClick={Filtreeri1gaAlgavad}>Algavad 1-ga</button>
        <button onClick={Filtreeri3eSisaldavad}>Sisaldavad 3-e</button>

        {numbrid.map(number => <div>{number}</div>)}

        <button onClick={tühjenda}>Tühjenda</button>
        
        
    </div>
  )
}

export default Numbrid