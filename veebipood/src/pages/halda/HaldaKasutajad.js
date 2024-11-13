import React, { useState } from 'react'
import kasutajadJSON from "../../data/kasutajad.json"

function HaldaKasutajad() {

const [kasutajad, muudaKasutajad] = useState(kasutajadJSON.slice())

const kustuta = (index) => {
  kasutajadJSON.splice(index, 1);
  muudaKasutajad(kasutajadJSON.slice());

}


  return (
    <div>

      <table>
        <thead>
          <tr>
              <th>E-mail</th>
              <th>Parool</th>
              <th>Aasta</th>
          </tr>
        </thead>
        <tbody>
       {kasutajad.map((kasutaja, index) => 
          <tr key={index}>
              <td>{kasutaja.email}</td>
              <td>{kasutaja.parool}</td>
              <td>{kasutaja.aasta}</td>
              <td>
                <button onClick={() => kustuta(kasutaja.email)}>Kustuta</button>
              </td>
          </tr>
          )}

       </tbody>


      </table>
      
    </div>
  )
}

export default HaldaKasutajad