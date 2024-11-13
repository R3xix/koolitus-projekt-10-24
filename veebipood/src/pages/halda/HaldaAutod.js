import React, {useState} from 'react'
import autodJSON from "../../data/autod.json"

function HaldaAutod() {

   const [autod, muudaAutod] =useState(autodJSON.slice())
   const kustuta = (index) => {
    autodJSON.splice(index, 1);
    muudaAutod(autodJSON.slice());

}


  






  return (
    <div>

<table border="1" style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>Nimi</th>
            <th>Hind (€)</th>
            <th>Aktiivne</th>
            <th>Kustuta</th>
          </tr>
        </thead>
        <tbody>
          {autod.map((auto, index) => (
            <tr key={index}>
              <td>{auto.nimi}</td>
              <td>{auto.hind}</td>
              <td>{auto.aktiivne}</td>
              <td>
                <button onClick={() => kustuta(auto.nimi)}>Kustuta</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

        
      





      
    </div>
  )
}

export default HaldaAutod