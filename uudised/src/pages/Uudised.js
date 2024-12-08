import React from 'react'
import { Link } from 'react-router-dom';

function Uudised() {
   const uudised = JSON.parse(localStorage.getItem("uudised")) || [];
  return (
    <div>
            <h1>Uudiste leht</h1>              
                    
            {uudised.length === 0 && <div>Uudiseid pole, lisame õige pea!</div>}
            <div>{uudised.map((uudis, index) => 
              <Link to={"/uudis/" + index}><div>{uudis}</div> </Link> )}</div>
        
    </div>
  )
}

export default Uudised