import React from 'react'
import { useParams } from 'react-router-dom'
import hinnadJSON from "../../data/hinnad.json";

function MuudaHind() {
    const {hindIndex} = useParams();
    const leitud = hinnadJSON[hindIndex]
  return (
    <div>
        <input type="text" defaultValue={leitud.number} />
        <input type="text" defaultValue={leitud.lisaja} />
        
    </div>
  )
}

export default MuudaHind