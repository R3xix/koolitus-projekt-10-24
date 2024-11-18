import React from 'react'
import { useParams } from 'react-router-dom'
import autodJSON from "../../data/autod.json"

function MuudaAuto() {
    const {jrknr} = useParams();
    const leitud = autodJSON[jrknr]
  return (
    <div>
        <input type="text" defaultValue={leitud.nimi} />
        <input type="text" defaultValue={leitud.hind} />
        <input type="text" defaultValue={leitud.aktiivne} />
        <input type="text" defaultValue={leitud.pilt} />
    </div>
  )
}

export default MuudaAuto