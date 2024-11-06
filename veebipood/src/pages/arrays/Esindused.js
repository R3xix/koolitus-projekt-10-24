import React, {useState} from 'react'
import Esindus from '../../components/Esindus'
import esindusedFailist from "../../data/esindused.json"

// loogeliste sulgude vahel on JavaScript --- muutujad

// "something is not defined  ---- muutuja on loomata või importimata"

function Esindused() {

  const [linn,muudaLinn] = useState("Tallinn");
  const [esindused, muudaEsindused] = useState(esindusedFailist.slice());
  
  const sorteeriAZ = ( ) => {
    //esindused.sort();
    esindused.sort((a, b) => a.localeCompare(b, "et"));
    muudaEsindused(esindused.slice());
    //localeCompare kasutatakse tähtede jaoks, sõnad
  }
  const sorteeriZA = ( ) => {
    esindused.sort((a, b) => b.localeCompare(a, "et"));
     muudaEsindused(esindused.slice());
  }

  const sorteeriTahemargidKasv = ( ) => {
     esindused.sort((a, b) => a.length - b.length);
     muudaEsindused(esindused.slice());
  }
  const sorteeriTahemargidKah = ( ) => {
    esindused.sort((a, b) => b.length - a.length);
     muudaEsindused(esindused.slice());
  }


  const sorteeriKolmastahtAZ = ( ) => {
    esindused.sort((a, b) => a[2].localeCompare(b[2], "et"));
    muudaEsindused(esindused.slice());
    //0123456789
    // Kristiine Ülemiste
  }
  const FiltreeriEgaLoppevad = ( ) => {
    const vastus = esindusedFailist.filter(esindus => esindus.endsWith("e"));
    muudaEsindused(vastus);
  }

  const FiltreeriVah7Tahelised = ( ) => {
    const vastus = esindusedFailist.filter(esindus => esindus.length >= 7);
    muudaEsindused(vastus);
  }

  const Filtreeri9Tahelised = ( ) => {
    const vastus = esindusedFailist.filter(esindus => esindus.length === 9);
    muudaEsindused(vastus);
  }
  const FiltreeriIsSisaldavad = ( ) => {
    const vastus = esindusedFailist.filter(esindus => esindus.includes("is"));
    muudaEsindused(vastus);
  }
  const FiltreeriNeljasTahtS = ( ) => {
    const vastus = esindusedFailist.filter(esindus => esindus[3] === "s");
    muudaEsindused(vastus);
  }
  const reset =() => {
    muudaEsindused(esindusedFailist.slice())
  }

  return (
    <div>
      <div> {linn} </div>
      <button className={linn === "Tallinn" ? "linn-aktiivne" : ""} onClick={() => muudaLinn("Tallinn")}>Tallinn</button>
      <button className={linn === "Tartu" ? "linn-aktiivne" : ""} onClick={() => muudaLinn("Tartu")}>Tartu</button>
      <button className={linn === "Narva" ? "linn-aktiivne" : ""} onClick={() => muudaLinn("Narva")}>Narva</button>
      <button className={linn === "Pärnu" ? "linn-aktiivne" : ""} onClick={() => muudaLinn("Pärnu")}>Pärnu</button>


      { linn === "Tallinn" && 
        <div>
          <button onClick={reset}>Reset</button>
          <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
          <button onClick={sorteeriZA}>Sorteeri Z-A</button>
          <button onClick={sorteeriTahemargidKasv}>Sorteeri tähemärkide arv kasvavalt</button>
          <button onClick={sorteeriTahemargidKah}>Sorteeri tähemärkide arv kahanevalt</button>
          <button onClick={sorteeriKolmastahtAZ}>Sorteeri kolmas täht A-Z</button>
          <br /><br />
          <button onClick={FiltreeriEgaLoppevad}>Filtreeri "e"ga lõppevad</button>
          <button onClick={FiltreeriVah7Tahelised} >Filtreeri vähemalt 7 tähelised</button>
          <button onClick={Filtreeri9Tahelised}>Filtreeri täpselt 9 tähelised</button>
          <button onClick={FiltreeriIsSisaldavad}>Filtreeri "is" lühendit sisaldavad</button>
          <button onClick={FiltreeriNeljasTahtS}>Filtreeri neljas täht "s"</button>
          


          {esindused.map((esindus, index) => <div key={index}> {esindus} </div>)}
          {/* <div>Ülemiste</div>
          <div>Rocca al Mare</div>
          <div>Magistrali</div>
          <div>Vesse</div>
          <div>Kristiine</div>
          <div>Järveotsa</div> */}
        </div>
      }

      { linn === "Tartu" && 
        <div>
          <div>Lõunakeskus</div>
          <div>Raatuse</div>
        </div>
      }
       

      { linn === "Narva" && <div>Fama keskus</div>}


      { linn === "Pärnu" && <div>Port Artur 2</div>}


      <br /><br /><br />
      <Esindus />
      <Esindus />
      <Esindus />
      <Esindus />
      <Esindus />
      <Esindus />
      
      
      </div>
  )
}

export default Esindused