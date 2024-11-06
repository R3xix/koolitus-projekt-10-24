import React, { useRef, useState } from 'react'
import hinnadJSON from "../../data/hinnad.json";

function HaldaHinnad() {
    const [hinnad, muudaHinnad] = useState(hinnadJSON);
    const hindRef = useRef();


    const kustuta = (index) => {
        hinnadJSON.splice(index, 1); //võtan failist ühe hinna vähemaks
        muudaHinnad(hinnadJSON.slice());
    }
    const lisa = (index) => {
        hinnadJSON.push(hindRef.current.value);
        muudaHinnad(hinnadJSON.slice());
        hindRef.current.value = "";
    }
  return (
    <div>
        <label >Uus hind</label><br />
        <input ref={hindRef}type="text" /><br />
        <button onClick={lisa}>Sisesta</button><br />

        <table>
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Jknr</th>
                    <th>Hind</th>
                    <th>Kustuta</th>
                </tr>
            </thead>
            <tbody>
               {hinnad.map((hind, index) => 
                <tr key={index}>
                    <td>{index}</td>
                    <td>{index + 1}</td>
                    <td>{hind}</td>
                    <td><button onClick={() => kustuta(index)}>x</button></td>
                </tr> )}
            </tbody>
        </table>
    </div>
  )
}

export default HaldaHinnad