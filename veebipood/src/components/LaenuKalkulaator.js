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
  // htmli, klikiga käivitub
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
      
      
    </div>
  )
}

export default LaenuKalkulaator