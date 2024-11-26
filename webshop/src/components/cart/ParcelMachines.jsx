import React, { useEffect, useState } from 'react'

function ParcelMachines() {
    // APi päringutel on siin tühi array [] api päring võtab aega
    // muidu oleks tühjus -- se tekitab probleeme
    // tühjust tähistatakse "undefined" või "null"
    const [pms, setPms] = useState([]);
    
    useEffect(() => {
        
        // siin täidetakse muutuja, mis on seniakaua kuni võetakse tühi array (mitte tühjus)
        fetch("https://www.omniva.ee/locations.json") // aadress, kuhu päring tehgakse
        .then( res => res.json() ) // kogu tagastus, mille sees on igasugused metaandmad
        .then(json => setPms(json)) // siin ütleme mida me nende admetega teeme, mille saame
    }, []); // millisel juhul on vaja siia punkt panna?
    // 1. kui on [] kandilisest sulust kandilise suluni, siis punkti pole vaja panna
    // 2. kui on { loogelisest sulust loogelise suluni, siis pean tsima , 
    // milliste võtmete abil jõuan [ arrayni]}
  return (
    <div>
        
        <select>
           

       
        {pms
         .filter(pm => pm.A0_NAME === "EE" )
        .map(pm => <option >{pm.NAME}</option>)}
        </select>
    </div>
  )
}

export default ParcelMachines
