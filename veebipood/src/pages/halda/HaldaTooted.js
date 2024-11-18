import React, {useRef, useState } from 'react'
import tootedJSON from "../../data/tooted.json"
import { ToastContainer, toast } from 'react-toastify';
// suure tähega html, väikse tähega javaScript
import { Link } from 'react-router-dom'

function HaldaTooted() {
    const [tooted, muudaTooted] = useState(tootedJSON.slice());
    const toodeRef = useRef();
    const hindRef = useRef();
    const aktiivneRef = useRef();
    const piltRef = useRef(); 
    


    
    const lisa = (index) => {
        tootedJSON.push(
            {"nimi":toodeRef.current.value, "hind":hindRef.current.value, "aktiivne": aktiivneRef.current.value, 
                "pilt": piltRef.current.value}
        );
        muudaTooted(tootedJSON.slice());
        toodeRef.current.value = "";
        toast.success("Toode edukalt lisatud");
    }
    const kustuta = (index) => {
        tooted.splice(index, 1);
        muudaTooted(tooted.slice());
        toast.error("Toode edukalt kustutatud")
    }
    const tühjenda = ( ) => { 
        muudaTooted(tootedJSON.slice());
    }
    const arvutaKokku = ( ) => {
        let summa = 0;
        tooted.forEach(toode => summa = summa + toode.nimi.length );
        return summa; 
    }
  return (
    <div>

        <div>Tähti kokku kõikide toodete peale: {arvutaKokku()} tk</div><br />
        <label >Uus toote nimi: <input ref={toodeRef}type="text" /></label>
        <br />
        <label>Uue toote hind: <input ref={hindRef }type="text" /></label>
         <br />
        <label>Staatus: <input ref={aktiivneRef }type="text" /></label><br />
        <label>Pilt: <input ref={piltRef }type="text" /></label><br />
        
        
        <button onClick={lisa}>Sisesta</button><br /><br />
        <div><button onClick={tühjenda}>Tühjenda filtrid</button></div><br />

        <table>
            <thead>
                <tr>  
                    <th>Toode</th>
                    <th>Hind</th>
                    {/* <th>Staatus</th> */}
                    <th>Pilt</th> 
                    <th>Kustuta</th>
                    <th>Muuda</th>
                </tr>
            </thead>
            <tbody>
               {tooted.map((toode, index) => 
                <tr key={index} className={toode.aktiivne ? "aktiivne" : "mitteaktiivne"}>
                    
                    <td>{toode.nimi}</td>
                    <td>{toode.hind}</td>
                    {/* <td>{toode.aktiivne}</td> */}
                    <td>{toode.pilt}</td>
                   
                    <td><button onClick={() => kustuta(index)}>x</button></td>
                    <td>
                <Link to={"/muuda-toode/" + index}>
                <button>Muuda</button>
                </Link>
                </td>
                </tr> )}
            </tbody>
        </table>
        <ToastContainer
            position="bottom-right"
            autoClose={3000}
           
            theme="dark"
             />
        



    </div>
  )
}

export default HaldaTooted