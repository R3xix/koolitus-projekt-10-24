import React, { useRef, useState } from 'react'
import andjadJSON from "../nimed.json"

function TagasisideAndjad() {

    const [andjad, muudaAndjad] = useState(andjadJSON.slice());

    const filtreerimTähtAlg = ( ) => {
        const vastus = andjad.filter(andja =>  andja.startsWith("M"));
        muudaAndjad(vastus);
    }
    const filtreeri6Tähte = ( ) => {
        const vastus = andjad.filter(andja =>  andja.length === 6);
        muudaAndjad(vastus);
    }
    const filtreeriYLõpus = ( ) => {
        const vastus = andjad.filter(andja =>  andja.endsWith("y"));
        muudaAndjad(vastus);
    }
    const sorteeriAZ = ( ) => {
        andjad.sort((a, b) => a - b );
        muudaAndjad(andjad);
    }
    const kustuta = (index) => {
        andjad.splice(index, 1);
        muudaAndjad(andjad.slice());
    }
    const uusAndjad = andjad.map(andja => `EST-${andja}`);
    
    const andjaRef = useRef();

    const lisa = (index) => {
        andjad.push(andjaRef.current.value);
        muudaAndjad(andjad.slice());
        andjaRef.current.value = "";
    }
    



    
    


  return (
    <div>
        
        <div>Nimed kokku: {andjad.length}tk</div>
        <br />
        <div>Filtreeri:    
            <button onClick={filtreerimTähtAlg}>M tähega algavad</button>
            <button onClick={filtreeri6Tähte}>6 tähega</button>
            <button onClick={filtreeriYLõpus}>Y lõpus</button>
        </div>
        <div>Sorteeri: 
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
             </div>
        
        <br /><br />
        <label >Uus andja</label><br />
        <input ref={andjaRef} type="text" /><br />
        <button onClick={lisa}>Sisesta andja: </button><br />
        
        <br /><br />
        <table>
        <thead>
          <tr>
              <th>Nimi</th>
          </tr>
        </thead>
        <tbody>
       {uusAndjad.map((andja, index) => 
          <tr key={index}>
              <td>{andja}</td>
              <td><button onClick={() => kustuta(andja)}>Kustuta</button></td>
             
              
          </tr>
          )}

       </tbody>


      </table> 
        
        
        
        
        
        </div>
  )
}

export default TagasisideAndjad