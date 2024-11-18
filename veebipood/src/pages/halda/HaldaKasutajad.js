import React, { useRef, useState } from 'react'
import kasutajadJSON from "../../data/kasutajad.json"
import { Link } from 'react-router-dom'

function HaldaKasutajad() {

const [kasutajad, muudaKasutajad] = useState(kasutajadJSON.slice())
const emailRef = useRef();
const paroolRef =useRef();
const aastaRef = useRef();

const kustuta = (index) => {
  kasutajadJSON.splice(index, 1);
  muudaKasutajad(kasutajadJSON.slice());

}
const lisa = (index) => {
  kasutajadJSON.push(
      {"email":emailRef.current.value, "parool":paroolRef.current.value, "aasta": aastaRef.current.value}
  );
  muudaKasutajad(kasutajadJSON.slice());
  emailRef.current.value = "";
}

  return (
    <div>
       <label >Uus email</label><br />
        <input ref={emailRef}type="text" /><br />
        <label>Parool</label><br />
        <input ref={paroolRef }type="text" /> <br />
        
        <label>Aasta</label><br />
        <input ref={aastaRef }type="text" />
        <br />
        <button onClick={lisa}>Sisesta</button><br />
      <table>
        <thead>
          <tr>
              <th>E-mail</th>
              <th>Parool</th>
              <th>Aasta</th>
          </tr>
        </thead>
        <tbody>
       {kasutajad.map((kasutaja, index) => 
          <tr key={index}>
              <td>{kasutaja.email}</td>
              <td>{kasutaja.parool}</td>
              <td>{kasutaja.aasta}</td>
              <td>
                <button onClick={() => kustuta(index)}>Kustuta</button>
              </td>
              <td>
                <Link to={"/muuda-kasutaja/" + index}>
                <button>Muuda</button>
                </Link>
                </td>
          </tr>
          )}
        
       </tbody>


      </table>
      
    </div>
  )
}

export default HaldaKasutajad