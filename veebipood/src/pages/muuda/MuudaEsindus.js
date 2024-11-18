import React, { useRef} from 'react'
import { Link, useParams } from 'react-router-dom'
import esindusedFailist from "../../data/esindused.json"

function MuudaEsindus() {
    const {esinduse_index} = useParams();
    const leitud = esindusedFailist[esinduse_index]

    const nimiRef = useRef();
    const telRef = useRef();
    const aadressRef = useRef();

    function muuda() {
      esindusedFailist[esinduse_index] = {
        "nimi": nimiRef.current.value,
        "tel": telRef.current.value,
        "aadress": aadressRef.current.value,
      }


    }

  return (
    <div>
        <label >Nimi</label>
        <input type="text" ref={nimiRef} defaultValue={leitud.nimi} /><br />
        <label >Telefon</label>
        <input type="text" ref={telRef}defaultValue={leitud.tel} /><br />
        <label >Aadress</label>
        <input type="text" ref={aadressRef}defaultValue={leitud.aadress} />br
        <Link to="/halda-esindused">
        <button onClick={muuda}>Muuda</button>
    
         </Link>
    </div>
  )
}

export default MuudaEsindus