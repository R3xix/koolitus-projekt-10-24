import React, { useRef, useState } from 'react'
import esindusedJSON from "../../data/esindused.json"


function HaldaEsindused() {
                                           //        0               1            2          3        4           5       
    const [esindused, muudaEsindused] = useState(esindusedJSON.slice());
    const esindusRef = useRef();
    const otsingRef= useRef();
    const kustutaEsimene = ( ) => {
        esindusedJSON.splice(0, 1); // .splice ---kustutamiseks
               //number 0 = tähendab mitmendat järjekorras
               // number 1 tähendab mitu tükki alates sellest elemendist
               muudaEsindused(esindusedJSON.slice()); // sama mis .sort() järgselt
               // uuendab htmli, pannes uuendatud esindused esindused muutuja peale       
    }
    const kustutaTeine = ( ) => {
        esindusedJSON.splice(1, 1);
        muudaEsindused(esindusedJSON.slice());
    }
    const kustutaKolmas = ( ) => {
        esindusedJSON.splice(2, 1);
        muudaEsindused(esindusedJSON.slice());
    }
    const kustuta = (index) => {
        esindusedJSON.splice(index, 1);
        muudaEsindused(esindusedJSON.slice());

    }
    const lisaEsindus = ( ) => {
        esindusedJSON.push(esindusRef.current.value);
        muudaEsindused(esindusedJSON.slice());
        esindusRef.current.value = "";
    }
    

    const otsi = ( ) => {
        // TODO -  tõstutundlikkuse kaotamine ehk saab leida ka läbivate väikeste tähtedega
        const vastus = esindusedJSON.filter(esindus => esindus.includes(otsingRef.current.value));
        muudaEsindused(vastus);
    
    }

    const arvutaKokku = ( ) => {
        let summa = 0;
        esindused.forEach(esindus => summa = summa + esindus.length );
        return summa; 
    }
    

 
 return (
    <div>

        <div>Tähti kokku kõikide esinduste peale: {arvutaKokku()} tk</div>
        <br /><br />

        <input onChange={otsi} ref={otsingRef} type="text" />
        {/* <button onClick={otsi}>Otsi</button> */}
        <br /><br />
        <label>Esindus</label><br />
        <input ref={esindusRef }type="text" />
        <br />
        <button onClick={lisaEsindus}>Lisa</button><br />


        <div>Kokku esindusi: {esindused.length} tk </div>
        {esindused.length > 0 && <button onClick={kustutaEsimene}>Kustuta esimene</button>}
        {esindused.length > 1 && <button onClick={kustutaTeine}>Kustuta teine</button>}
        {esindused.length > 2 && <button onClick={kustutaKolmas}>Kustuta kolmas</button>}

        <table>
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Jknr</th>
                    <th>Esindus</th>
                    <th>Kustuta</th>
                </tr>
  
            </thead>
            <tbody>
               
                {esindused.map((esindus, index) => 
                 <tr key={index}>
                 
                    <td>{index}</td>
                    <td>{index+1}</td>
                    <td> {esindus}</td>
                    <td><button onClick={() => kustuta(index)}>x</button></td>
            
                
                </tr>)}
            </tbody>

        </table>
        
    </div>
  )
}

export default HaldaEsindused