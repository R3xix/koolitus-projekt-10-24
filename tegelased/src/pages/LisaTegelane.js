import {useRef, useState} from 'react'

function LisaTegelane() {

  const [sonum, muudaSonum] = useState("");
  const nimiRef = useRef ();
  const lisaUusTegelane = () => {
    if (nimiRef.current.value === "") {muudaSonum("Tühja nimega ei saa toodet lisada");} 
    else {muudaSonum("Tegelane lisatud: " + nimiRef.current.value);}


  }

 
  return (

    <div>
      <div>{sonum}</div>
      <label>Tegelase nimi</label>
      <input ref={nimiRef} type="text" />  <br />
      <button onClick={lisaUusTegelane}>Lisa uus</button> <br />

      </div>  
  )
}

export default LisaTegelane