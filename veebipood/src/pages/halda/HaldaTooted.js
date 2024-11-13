import React, {useRef, useState } from 'react'
import tootedJSON from "../../data/tooted.json"

function HaldaTooted() {
    const [tooted, muudaTooted] = useState(tootedJSON);
    const toodeRef = useRef();


    const kustuta = (index) => {
        tooted.splice(index, 1);
        muudaTooted(tooted.slice());
    }
    const lisa = (index) => {
        tooted.push(toodeRef.current.value);
        muudaTooted(tooted.slice());
        toodeRef.current.value = "";
    }
    const tühjenda = ( ) => { 
        muudaTooted([tootedJSON])
    }
    const arvutaKokku = ( ) => {
        let summa = 0;
        tooted.forEach(toode => summa = summa + toode.length );
        return summa; 
    }
  return (
    <div>

        <div>Tähti kokku kõikide toodete peale: {arvutaKokku()} tk</div>
        <label >Uus toode</label><br />
        <input ref={toodeRef}type="text" /><br />
        <button onClick={lisa}>Sisesta</button><br />
        <div><button onClick={tühjenda}>Tühjenda</button></div>

        <table>
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Jknr</th>
                    <th>Toode</th>
                    <th>Kustuta</th>
                </tr>
            </thead>
            <tbody>
               {tooted.map((toode, index) => 
                <tr key={index}>
                    <td>{index}</td>
                    <td>{index + 1}</td>
                    <td>{toode}</td>
                    <td><button onClick={() => kustuta(index)}>x</button></td>
                </tr> )}
            </tbody>
        </table>
        



    </div>
  )
}

export default HaldaTooted