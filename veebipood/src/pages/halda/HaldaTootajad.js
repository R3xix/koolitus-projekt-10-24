import React, {useState} from 'react'
import tootajadJSON from "../../data/tootajad.json"

function HaldaTootajad() {
  const [tootajad, muudaTootajad] = useState(tootajadJSON.slice());

  const kustuta = (index) => {
    tootajadJSON.splice(index, 1);
    muudaTootajad(tootajadJSON.slice()); 
  }

  return (
    <div>
      
      <table>
        <thead>
          <tr>
              <th>Töötaja</th>
              <th>Kustuta</th>
              
          </tr>
        </thead>
        <tbody>
       {tootajad.map((tootaja, index) => 
          <tr key={index}>
              <td>{tootaja}</td>
              <td>
                <button onClick={() => kustuta(tootaja)}>X</button>
              </td>
          </tr>
          )}

       </tbody>


      </table>
</div>
  )
}

export default HaldaTootajad