import React from 'react'
import  { useParams } from "react-router-dom"  
import tootedFailist from "../../data/tooted.json"

function YksToode() {
  // loogeliste sulgude sisse läheb see, mis on selle faili urlis kooloni taga
  const {toodeIndex} = useParams(); 
  // --- loeb urlist parameetrit mis on kooloni taga

  // kuidas saada aru mis loogeliste sulgude sisse panna
  // 1. lähen App.js faili
  // 2. otsin selle failiga seotud urli üles
  // 3. vaatan mis on kooloni taga

  // indexiga saab elemendi arrayst üles otsida:
  // array [] ---- see väljastab õige elemendi, kellel on selline index
  const leitud = tootedFailist[toodeIndex];
  return (
    <div>
      {leitud.aktiivne === false && <i> Toode on mitteaktiivne</i>}
      {leitud.nimi}
      {leitud.hind}
      <img src={leitud.pilt} alt="" />
      </div>
    
  )
}

export default YksToode