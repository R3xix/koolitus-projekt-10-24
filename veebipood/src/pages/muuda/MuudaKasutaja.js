import React from 'react'
import { useParams } from 'react-router-dom'
import kasutajadJSON from "../../data/kasutajad.json"

function MuudaKasutaja() {
    const {kasutajaIndex} = useParams();
    const leitud = kasutajadJSON[kasutajaIndex]
  return (
    <div>
        <input type="text" defaultValue={leitud.email} />
        <input type="text" defaultValue={leitud.parool} />
        <input type="text" defaultValue={leitud.aasta} />
       
    </div>
  )
}

export default MuudaKasutaja