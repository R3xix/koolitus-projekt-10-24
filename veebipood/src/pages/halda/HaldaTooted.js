import React, {useRef, useState } from 'react'

function HaldaTooted() {
    const [tooted, muudaTooted] = useState(["Tesla", "BMW", "Bentley", "Nissan", "Toyota", "Audi", "Nio", "KIA"]);
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
        muudaTooted(["Tesla", "BMW", "Bentley", "Nissan", "Toyota", "Audi", "Nio", "KIA"])
    }
  return (
    <div>
        <label >Uus toode</label><br />
        <input ref={toodeRef}type="text" /><br />
        <button onClick={lisa}>Sisesta</button><br />
        <div><button onClick={tühjenda}>Tühjenda</button></div>

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