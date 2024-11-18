import React, { useRef, useState} from 'react'
import autodJSON from "../../data/autod.json"
import { Toaster, toast } from 'react-hot-toast';
import { Link } from 'react-router-dom'
function HaldaAutod() {

   const [autod, muudaAutod] =useState(autodJSON.slice())
   const nimiRef = useRef();
   const hindRef = useRef();
   const aktiivneRef = useRef();
   const piltRef = useRef(); 

   
   const lisa = (index) => {
   
    autodJSON.push(
      {"nimi":nimiRef.current.value, "hind":hindRef.current.value, "aktiivne": aktiivneRef.current.value, "pilt": piltRef.current.value}
     );
     muudaAutod(autodJSON.slice());
     nimiRef.current.value = "";
     toast.success('Lisatud');
    }
    const kustuta = (index) => {
      autodJSON.splice(index, 1);
      muudaAutod(autodJSON.slice());
      toast.error("Eemaldatud")
    }


  return (
    <div>
      <br />
      <div>Sisesta uus auto</div>
        <label >Auto mark: <input ref={nimiRef}type="text" /></label> <br />
        <label>Hind: <input ref={hindRef }type="text" />   </label> <br />
        <label>Aktiivne: <input ref={aktiivneRef }type="text" /></label><br />
        <label>Pilt: <input ref={piltRef} type="text" /></label>
        
        <br />
        <button onClick={lisa} >Sisesta</button><br />

       

        <table border="1" style={{ width: "100%", textAlign: "left" }}>
          <thead>
            <tr>
                <th>Nimi</th>
                <th>Hind (€)</th>
                {/* <th>Aktiivne</th> */}
                <th>Pilt</th>
                <th>Kustuta</th>
            </tr>
          </thead>
          <tbody>
            {autod.map((auto, index) => 
            <tr key={index} className={auto.aktiivne ? "aktiivne" : "mitteaktiivne"} >
                <td>{auto.nimi}</td>
                <td>{auto.hind}</td>
                {/* <td>{auto.aktiivne}</td> */}
                <td>{auto.pilt}</td>
                <td>
                <button onClick={() => kustuta(index)}>Kustuta</button>
                </td>
                <td>
                <Link to={"/muuda-auto/" + index}>
                <button>Muuda</button>
                </Link>
                </td>
            </tr>
             )}
          </tbody>
      </table>
      <Toaster
      position="top-left"
      reverseOrder={false}
      />

        
      





      
    </div>
  )
}

export default HaldaAutod