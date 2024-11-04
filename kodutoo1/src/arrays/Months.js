import React, { useState } from 'react'

function Months() {

    const [months, muudaMonths] = useState(['Jan', 'March', 'April', 'June']);
    
    

   

  return (
    <div>
      {months.map(month => <div>{month}</div> )}
      <div> Kogus: {months.length}</div>
      {months.length === 0 && <div>Kuid pole valitud</div>}
      <button onClick={() => muudaMonths([])}>Tühjenda kuud</button>
      
    </div>
  )
}

export default Months