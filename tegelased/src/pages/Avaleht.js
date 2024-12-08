import React, { useState } from 'react'
import ValitudTegelased from './ValitudTegelased';

function Avaleht() {

  // const tegelased = [
    
  //   {eesnimi: "Mickey", perenimi: "Mouse", asukoht: "Disneyland", vanus: 25},
  //   {eesnimi: "Minnie", perenimi: "Mouse", asukoht: "Disneyland", vanus: 25},
  //   {eesnimi: "Winnie", perenimi: "Pooh", asukoht: "Hundred Acre Wood", vanus: 20},
  //   {eesnimi: "Roo", perenimi: "Kangaroo", asukoht: "Hundred Acre Wood", vanus: 9},
  //   {eesnimi: "Scooby", perenimi: "Doo", asukoht: "Crystal Cove", vanus: 7}
  // ]
  const tegelased = JSON.parse(localStorage.getItem("tegelased")) || [];
  
  
  const kuvaNimi = (tegelane) => {
    // console.log(tegelane.eesnimi);
    uuendaKlikitudNimi(tegelane.eesnimi);

  }
  const [klikitudNimi, uuendaKlikitudNimi] = useState("");
  const valiTegelane = (klikitudTegelane) => { 
    const valitud = JSON.parse(localStorage.getItem("valitudTegelased")) || [];
    valitud.push(klikitudTegelane);
    localStorage.setItem("valitudTegelased", JSON.stringify(valitud));

  }


  return (
    
    
    <div>
          {klikitudNimi !== "" && <div>Klikkisid tegelase {klikitudNimi}</div>}
          {tegelased.map(tegelane =>
           <div>
           <div>{tegelane.eesnimi}</div>
           <div>{tegelane.perenimi}</div>
           <div>{tegelane.asukoht}</div> 
           <div>{tegelane.vanus}</div> 
           <button onClick={() => valiTegelane(tegelane)}>Vali</button>
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