import React, { useRef, useState } from 'react'
import esindusedJSON from "../../data/esindused.json"
import { Link } from 'react-router-dom'


function HaldaEsindused() {
                                           //        0               1            2          3        4           5       
    const [esindused, muudaEsindused] = useState(esindusedJSON.slice());
    const esindusRef = useRef();
    const telefonRef = useRef(); // iga inputi jaoks oma useRef();
    const aadressRef = useRef();
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
    // kuidas enteriga lisada
    const lisaEsindus = ( ) => {
        esindusedJSON.push(
            {"nimi":esindusRef.current.value, "tel": telefonRef.current.value, "aadress": aadressRef.current.value}
        );
        muudaEsindused(esindusedJSON.slice());
        esindusRef.current.value = "";
    }
    

    const otsi = ( ) => {
        // TODO -  tõstutundlikkuse kaotamine ehk saab leida ka läbivate väikeste tähtedega
        const vastus = esindusedJSON.filter(esindus => 
            esindus.nimi.toLocaleLowerCase().includes(otsingRef.current.value.toLocaleLowerCase())
        );
        muudaEsindused(vastus);
    
    }

    const arvutaKokku = ( ) => {
        let summa = 0;
        esindused.forEach(esindus => summa = summa + esindus.nimi.length );
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
        <input ref={esindusRef }type="text" /> <br />
        <label>Telefon</label><br />
        <input ref={telefonRef }type="text" /> <br />
        
        <label>Aadress</label><br />
        <input ref={aadressRef }type="text" />
        <br /><br />
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
                    <th>Telefon</th>
                    <th>Aadress</th>
                    <th>Kustuta</th>
                    <th>Muuda</th>
                </tr>
  
            </thead>
            <tbody>
               
                {esindused.map((esindus, index) => 
                 <tr key={index}>
                 
                    <td>{index}</td>
                    <td>{index+1}</td>
                    <td> {esindus.nimi}</td>
                    <td> {esindus.tel}</td>
                    <td> {esindus.aadress}</td>
                    <td><button onClick={() => kustuta(index)}>x</button></td>
                    <td>
                        <Link to={"/muuda-esindus/" + index}>
                        <button>Muuda</button>
                         </Link></td>
            
                
                </tr>)}
            </tbody>

        </table>
        
    </div>
  )
}
// 3 varianti kuidas funktsioone käivitada
// 1. <button onClick={() => kustuta(index)}></button>
//          ---> kui midagi saadetakse funktsiooni sisse, siis on vaja panna lõppu sulud ja 
//               algusesse sulud + nool: () => . Nii on kohustuslik.
// 2. <button onClick={lisa}></button>
//          ---> kui midagi ei saadeta funktsiooni sisse, siis pole vaja lõppu sulge panna, aga
//                kui tahta, siis võib
//      <button onClick={lisa}></button> on sama, mis  <button onClick={() => lisa()}></button>
// 3. <div>{arvutaKokku()}</div>    
//          ---> ilma klikkimata käivitatakse funktsioon. Nii on kohustuslik
export default HaldaEsindused