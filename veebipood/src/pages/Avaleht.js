import React, { useState } from 'react'

function Avaleht() {
  const [laigitud, muudaLaigitud] = useState(true);

  // string - sõna lisaks 
  // number - saan teda kokku liita/ lahutada/korruta/jagada
  // boolean -kahendväärtus, saan teda tagurpidi keerata
  // kui on jtumärgid võin anda väärtuseks ükskõik mille
  // ilma jutumärkideta -- võin anda ainult kas number või true/false
  // boolean- kus pole 

  return (
    <div>
      {laigitud === true &&<img src="/laigitud.svg" alt="" />}
      {laigitud === false &&<img src="/mittelaigitud.svg" alt="" />}
      <br />

      {/* 1.variant */}
      <button onClick={() => muudaLaigitud(true)}>Vajuta like</button>
      <button onClick={() => muudaLaigitud(false)}>Võta like maha</button>
      <br />
      {/* 2.variant */}
      <button onClick={() => muudaLaigitud(!laigitud)}>Muuda like'i</button>
      



    </div>
  )
}

export default Avaleht