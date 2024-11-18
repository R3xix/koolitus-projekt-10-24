import React, { useRef, useState } from 'react'
import hinnadJSON from "../../data/hinnad.json";
import { Link } from 'react-router-dom'

function HaldaHinnad() {
    const [hinnad, muudaHinnad] = useState(hinnadJSON);
    const hindRef = useRef();


    const kustuta = (index) => {
        hinnadJSON.splice(index, 1); //võtan failist ühe hinna vähemaks
        muudaHinnad(hinnadJSON.slice());
    }
    // lisada enteriga
    const lisa = (event) => {

            console.log(event.key);
            if (event.key !== "Enter" && event.type !== "click") {
                return;
            }


        hinnadJSON.push({"number":hindRef.current.value, "lisaja": "Sisselogitu kasutaja"});
        muudaHinnad(hinnadJSON.slice());
        hindRef.current.value = "";
    }
  return (
    <div>
        <label >Uus hind</label><br />
        <input onKeyUp={lisa} ref={hindRef}type="text" /><br />
        <button onClick={lisa}>Sisesta</button><br />

        <table>
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Jknr</th>
                    <th>Hind</th>
                    <th>Lisaja</th>
                    <th>Kustuta</th>
                </tr>
            </thead>
            <tbody>
               {hinnad.map((hind, index) => 
                <tr key={index}>
                    <td>{index}</td>
                    <td>{index + 1}</td>
                    <td>{hind.number}</td>
                    <td>{hind.lisaja}</td>
                    <td><button onClick={() => kustuta(index)}>x</button></td>
                    <td>
                <Link to={"/muuda-hind/" + index}>
                <button>Muuda</button>
                </Link>
                </td>
                </tr> )}
            </tbody>
        </table>
    </div>
  )
}

export default HaldaHinnad