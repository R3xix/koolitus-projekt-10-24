import React, { useRef, useState } from 'react'

// koju
// inputis 
//  1.ostuhind - useRef
//  2.sissemakse - useRef
//  ostuhindRef - sisseMakseRef
// html div {laenusumma} div  - useState [laenusumma, muudaLaenusumma]
// 3.periood -useRef
// 4.marginaal -useRef
// 5.Euribor -useRef
//marginaalRef + euriborRef
//Html div {intress}div - useState [intress, muudaIntress]
// valem mis on vähem
// kuumakse = (ostuhindRef.current.value - sisseMakseRef.current.value) / (perioodRef.current.value*12) *
//  (marginaalRef.current.value * euriborRef.current.value / 12)
// html div {kuumakse}div - useState [kuumakse, muudaKuumakse]
// const []


function LaenuKalkulaator() {

  const nr1Ref = useRef();
  const nr2Ref = useRef();
  const ostuhindRef = useRef(0);
  const sissemakseRef = useRef(0);
  const perioodRef = useRef(0);
  const marginaalRef = useRef(0);
  const euriborRef = useRef(0);

  const [laenusumma, muudaLaenusumma] = useState(75000);
  const [intress, uuendaIntress] = useState(4.8);
  const [kuumakse, muudaKuumakse] = useState(0);

  
  const laenusummaKokku = () => { 
    muudaLaenusumma(Number(ostuhindRef.current.value) - Number(sissemakseRef.current.value))   
    kuumakseKokku();
  }
  const intressKokku = () => { 
    uuendaIntress(Number(marginaalRef.current.value) + Number(euriborRef.current.value)) 
    kuumakseKokku();  
  }

  // kuuMakseKokku lisatud selleks et ka teistel väljadel infot muutes toimuks automaatne muutmine
  const kuumakseKokku = () => {
    const laen = ostuhindRef.current.value - sissemakseRef.current.value;
    const pikkusKuudes = perioodRef.current.value * 12;
    const laenuintress = Number(marginaalRef.current.value) + Number(euriborRef.current.value) /12;
  
     muudaKuumakse(laen / pikkusKuudes + laenuintress  / pikkusKuudes )
  }

  // liitmise puhul tuleb Number ette panna ja siis (), lhutamise peale ie pea
  // htmli, klikiga käivitub
  // defaultValue - fikseerib vaikimisi välja väärtuse, aga seda saab muuta
  const [summa, muudaSumma] =useState(0);

  const liidaKokku = () => {
    muudaSumma(Number(nr1Ref.current.value) + Number(nr2Ref.current.value))}

  const korrutaKokku = () => {
      muudaSumma(nr1Ref.current.value * nr2Ref.current.value)

  }
  return (
    <div>
      <input ref={nr1Ref} type="number" />
      <input ref={nr2Ref} type="number" />
      <button onClick={liidaKokku}>Liida kokku</button>
      <button onClick={korrutaKokku}>Korruta kokku</button>

      <div>{summa}€</div>
      <br /><br />

      <label>Ostuhind : </label>
      <input defaultValue="75000" ref={ostuhindRef} type="number" onChange={laenusummaKokku}/> <br />
      <label>Sissemakse : </label>
      <input defaultValue="0"ref={sissemakseRef} type="number" onChange={laenusummaKokku} /> <br />
      <div>
      <span>Sissemakse suurus (%): </span>
          <span>{laenusumma.toFixed(2)}</span><br />
          </div>
          {/* <button onClick={laenusummaKokku} >Arvuta laenusumma kokku</button> */}
      <div>
      <span>Laenusumma kokku (€): </span>
          <span>{laenusumma.toFixed(2)}</span><br />
          </div>
      <label>Periood : </label>
      <input onChange={kuumakseKokku} defaultValue="30" ref={perioodRef} type="number" /> <br />
      <label>Marginaal : </label>
      <input defaultValue={1.7} ref={marginaalRef} type="number" onChange={intressKokku}/> <br />
      
      <label>Euribor : </label>
      <input defaultValue="3.1" ref={euriborRef}type="number" onChange={intressKokku} /> <br />
      <div>
      <span>Intress kokku (%): </span>
          <span>{intress.toFixed(2)}</span><br />
          </div>
      {/* <button onClick={kuumakseKokku}>Kuumakse</button> */}
      {kuumakse > 0 && <div>{kuumakse.toFixed(2)}€</div>}
      {kuumakse <= 0 && <div>Kuumakse ei saa olla negatiivne arv</div>}
      
      

      

      
      
      
    </div>
  )
}

export default LaenuKalkulaator