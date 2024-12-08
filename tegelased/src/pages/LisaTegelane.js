import {useRef, useState} from 'react'

function LisaTegelane() {

  const [sonum, muudaSonum] = useState("");
  const eesNimiRef = useRef ();
  const pereNimiRef = useRef ();
  const elukohtRef = useRef ();
  const vanusRef = useRef ();
  const lisaUusTegelane = () => {
    if (eesNimiRef.current.value === "") {muudaSonum("Tühja nimega ei saa toodet lisada");} 
    else {
      muudaSonum("Tegelane lisatud");
    const tegelased = JSON.parse(localStorage.getItem("tegelased")) || [];
    tegelased.push({
      "eesnimi": eesNimiRef.current.value,
      "perenimi": pereNimiRef.current.value,
      "asukoht": elukohtRef.current.value,
      "vanus": Number(vanusRef.current.value)

    })
    localStorage.setItem("tegelased", JSON.stringify(tegelased))
    }


  }

 
  return (

    <div>
      <div>{sonum}</div>
      <label>Tegelase eesnimi</label>
      <input ref={eesNimiRef} type="text" />  <br />
      <label>Tegelase perenimi</label>
      <input ref={pereNimiRef} type="text" />  <br />
      <label>Tegelase asukoht</label>
      <input ref={elukohtRef} type="text" />  <br />
      <label>Tegelase vanus</label>
      <input ref={vanusRef} type="number" />  <br />
      <button onClick={lisaUusTegelane}>Lisa uus</button> <br />

      </div>  
  )
}

export default LisaTegelane