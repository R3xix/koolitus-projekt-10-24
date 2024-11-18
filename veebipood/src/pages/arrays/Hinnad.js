import React, { useState } from 'react'
import hinnadFailist from "../../data/hinnad.json"; 
import { Link } from "react-router-dom"

// ./   ---samas kaustas
// ../---kausta võrra ülevalpool
// ../../ 2 kausta ülevalpool
// kui ei ole punkte ees siis võetakse node modulist

// teeme väljatõste andmete osas, et ei oleks nii plaju munbreid
// 1. lühem - muidu liiga palju ridu
// saan taaskasutada - kui muudan ühe korra siis muutub kõikjal

function Hinnad() {
    const [hinnad, muudaHinnad] = useState(hinnadFailist.slice());

    const reset = ( ) => {
      muudaHinnad(hinnadFailist.slice())
    }
    const sorteeriKasvavalt = ( ) => {
        hinnad.sort((a, b) => a.number - b.number);
        muudaHinnad(hinnad.slice());
    }
        const sorteeriKahanevalt = ( ) => {
         hinnad.sort((a, b) => b.number - a.number);
        muudaHinnad(hinnad.slice());
    }
    const sorteeriAZ = ( ) => {
        hinnad.sort((a, b) => a.number.toString().localeCompare(b.number.toString))
       muudaHinnad(hinnad.slice());
       // .slice( on vaja kui muudan arrayd ja tahan et see muutus ka htmlis kajastuks
       //-slice() teeb koopia, võtab mälukoha ära, et React ei näeks seda samasugune kui originaal 
    }
    
    const filtreeriVäiksemKui50 = ( ) => {
      // kui vaja siia panna uus muutuja millele võrdusmärgiga väärtus anda: .slice( pole vaja)
       const vastus = hinnadFailist.filter(hind => hind.number< 50 );
       muudaHinnad(vastus);
    }

    const filtreeriSuuremKui100 = ( ) => {
      const vastus = hinnadFailist.filter(hind => hind.number > 100 );
       muudaHinnad(vastus);

    }
    // const  -- konstantne, teda ei saa enam võrdusmärgiga muuta
    // let -- muutmine lubatud
    // var  -- Reactis ei kasuta

    const arvutaKokku =( ) => {
      let summa = 0;
      // summa = summa + 45; // 45
      // summa = summa + 9;  // 45+9
      // summa = summa + 80;  // 45+9+80....

      // [45, 9, 80]
      //              45           =       + 45 
      //              45           = 45    + 9
      //              45           = 54   + 80
      hinnad.forEach(hind => summa = summa + hind.number);
      return summa;
      

    }
    

  return (
    <div>

          <div>Hinnad kokku: {arvutaKokku()}</div>
          <button onClick={reset}>Kustuta filtrid</button>
          <br /><br />
        

        <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
        <button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <br /><br />
        <button onClick={filtreeriVäiksemKui50}>Filtreeri väiksem kui 50</button>
        <button onClick={filtreeriSuuremKui100}>Filtreeri suurem kui 100</button>
        
       {hinnad.map((hind, index) => 
       <div key={index}>
        {hind.number} 
       <Link to={"/hind/" + index}>
            <button>Vt  lähemalt</button>
       </Link>
       </div>
       )} 
        
    </div>
  )
}

export default Hinnad
