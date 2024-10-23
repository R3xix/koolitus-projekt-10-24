import React, { useState } from 'react'

function Muutmine() {
    const [hind, uuendaHind] = useState(39);

  return (
    <div>
        <span className={hind === 39 ? "pakett-aktiivne" :  "pakett" } onclick={() => uuendaHind(39)}>39 </span>
        <span className={hind === 17 ? "pakett-aktiivne" :  "pakett" } onclick={() => uuendaHind(17)}>17 </span>
        <span className={hind === 7 ? "pakett-aktiivne" :  "pakett" } onclick={() => uuendaHind(7)}>7 </span>
       
        <div>Kuumakse: 0 €</div>
        <div>Tavahind: {hind} €</div>


        


    </div>
  )
}

export default Muutmine