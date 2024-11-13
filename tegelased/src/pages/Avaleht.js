import React, { useState } from 'react'

function Avaleht() {

  const tegelased = [
    
    {eesnimi: "Mickey", perenimi: "Mouse", asukoht: "Disneyland"},
    {eesnimi: "Minnie", perenimi: "Mouse", asukoht: "Disneyland"},
    {eesnimi: "Winnie", perenimi: "Pooh", asukoht: "Hundred Acre Wood"},
    {eesnimi: "Roo", perenimi: "Kangaroo", asukoht: "Hundred Acre Wood"},
    {eesnimi: "Scooby", perenimi: "Doo", asukoht: "Crystal Cove"}
  ]
  const kuvaNimi = (tegelane) => {
    // console.log(tegelane.eesnimi);
    uuendaKlikitudNimi(tegelane.eesnimi);

  }
  const [klikitudNimi, uuendaKlikitudNimi] = useState("");


  return (
    
    
    <div>
          {klikitudNimi !== "" && <div>Klikkisid tegelase {klikitudNimi}</div>}
          {tegelased.map(tegelane =>
           <div>
           <div>{tegelane.eesnimi}</div>
           <div>{tegelane.perenimi}</div>
           <div>{tegelane.asukoht}</div> 
           <button onClick={() => kuvaNimi(tegelane)}>Kuva nimi</button>
           
          </div> )}
      
      

    
    
        {/* <div>
          <div>Mickey</div>
          <div>Mouse</div>
          <div>Disneyland</div>
        </div>
        <div>
	        <div>Minnie</div>
            <div>Mouse</div>
            <div>Disneyland</div>
        </div>
        <div>
	        <div>Winnie</div>
            <div>Pooh</div>
            <div>Hundred Acre Wood</div>
        </div>
        <div>
	        <div>Roo</div>
            <div>Kangaroo</div>
            <div>Hundred Acre Wood</div>
        </div>
        <div>
        	<div>Scooby</div>
            <div>Doo</div>
            <div>Crystal Cove</div>
        </div> */}





        
    </div>
  )
}

export default Avaleht