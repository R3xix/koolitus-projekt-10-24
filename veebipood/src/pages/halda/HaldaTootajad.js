import React, { useRef, useState} from 'react'
import tootajadJSON from "../../data/tootajad.json"
import { Link } from 'react-router-dom'

function HaldaTootajad() {
  const [tootajad, muudaTootajad] = useState(tootajadJSON.slice());
  const eesnimiRef = useRef();
  const ametikohtRef = useRef();
  const telRef = useRef();

  const kustuta = (index) => {
    tootajadJSON.splice(index, 1);
    muudaTootajad(tootajadJSON.slice()); 
  }
  const lisa = (index) => {
    tootajadJSON.push(
        {"eesnimi":eesnimiRef.current.value, "ametikoht":ametikohtRef.current.value, "tel": telRef.current.value}
    );
    muudaTootajad(tootajadJSON.slice());
    eesnimiRef.current.value = "";
}

  return (
    <div>

        <label >Eesnimi</label><br />
        <input ref={eesnimiRef}type="text" /><br />
        <label>Ametikoht</label><br />
        <input ref={ametikohtRef }type="text" /> <br />  
        <label>Telefon</label><br />
        <input ref={telRef }type="text" />
        <br />
        <button onClick={lisa}>Sisesta</button><br />
      
      <table>
        <thead>
          <tr>
              <th>Töötaja</th>
              <th>Ametikoht</th>
              <th>Telefon</th>
              <th>Kustuta</th>
              
          </tr>
        </thead>
        <tbody>
       {tootajad.map((tootaja, index) => 
          <tr key={index}>
              <td>{tootaja.eesnimi}</td>
              <td>{tootaja.ametikoht}</td>
              <td>{tootaja.tel}</td>
              <td>
                <button onClick={() => kustuta(index)}>X</button>
              </td>
              <td>
                <Link to={"/muuda-tootaja/" + index}>
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

export default HaldaTootajad