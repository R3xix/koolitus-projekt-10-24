import React, { useState } from 'react'

function Kujundus() {

    const {valitud, uuendaValitud} = useState("family")


  return (
    <div>


        <span className={valitud === "family" ? "pakett-aktiivne" :  "pakett" }
          onclick={() => uuendaValitud("family")} >
          Family 
        </span>
        <span className={valitud === "standard" ? "pakett-aktiivne" :  "pakett" }
          onclick={() => uuendaValitud("standard")} >
          Standard
        </span>
        <span className={valitud === "mini" ? "pakett-aktiivne" :  "pakett" }
          onclick={() => uuendaValitud("mini")} >
          Mini
        </span>
        

        





    </div>
  )
}

export default Kujundus