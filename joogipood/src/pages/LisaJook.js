import React from 'react'
import { useRef } from "react"
import joogidJSON from "../joogid.json"

function LisaJook() {
    const jookRef = useRef();

    const lisa =(index) => {
        joogidJSON.push(jookRef.current.value);
        
        
    }

  return (
    <div>LisaJook

<label >Uus toode</label><br />
        <input ref={jookRef} type="text" /><br />
        <button onClick={() =>lisa()}>Sisesta</button><br />







    </div>
  )
}

export default LisaJook