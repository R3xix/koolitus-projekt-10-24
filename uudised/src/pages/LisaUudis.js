import  { useRef, useState } from 'react'

function LisaUudis() {
    const uudiseRef = useRef();
    const[sonum, uuendaSonum]= useState("TEST");

    const lisaUusUudis = () => {
        const uudised = JSON.parse(localStorage.getItem("uudised")) || [];
        uudised.push(uudiseRef.current.value);
        localStorage.setItem("uudised", JSON.stringify(uudised));
    }
    const kontrolli = () => {
      uuendaSonum(sonum + "muudetud")

    }
  return (
    <div>
        <div>{sonum}</div>
        <label>Uudise nimi</label><br />
        <input onChange={kontrolli}ref={uudiseRef} type="text" />
        <button onClick={() => lisaUusUudis()}>Lisa uudis</button>
        </div>
  )
}

export default LisaUudis
