import React from 'react'
import tootajadJSON from "../../data/tootajad.json"
import { useParams } from 'react-router-dom'

function MuudaTootaja() {
    const {tootajaNumber} = useParams();
    const leitud = tootajadJSON[tootajaNumber]
  return (
    <div>
        <input type="text" defaultValue={leitud.eesnimi} />
        <input type="text" defaultValue={leitud.ametikoht} />
        <input type="text" defaultValue={leitud.tel} />
        
    </div>
  )
}

export default MuudaTootaja