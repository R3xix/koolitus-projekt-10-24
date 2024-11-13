import React, { useRef, useState } from 'react'
import joogidJSON from "../joogid.json"

function HaldaJooke() {
    const [joogid, uuendaJoogid] = useState(joogidJSON.slice());

    const kustuta =(index) => {
        joogidJSON.splice(index, 1);
        uuendaJoogid(joogidJSON.slice()); 
    }
    
    


  return (
    <div>

       
        
        <table>
            <thead>
                <tr>
                <th>Joogi nimi</th>
                <th>Kustuta</th>
                </tr>
            </thead>
            <tbody>
             
                
                {joogid.map((jook, index) =>  <tr key={index}>
                <td>{jook}</td> 
                <td><button onClick={() => kustuta(jook)}>x</button></td> 
             </tr>)} 

            </tbody>

         </table>
        
        
        
        
        </div>
  )
}

export default HaldaJooke