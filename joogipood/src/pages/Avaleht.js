import React, { useState } from 'react'
import joogidJSON from "../joogid.json"

function Avaleht() {

    const [joogid, uuendaJoogid] = useState(joogidJSON);


  return (
    <div>Joogid:
        
        
        {joogid.map((jook) => <div>{jook}</div> )}
    
    
    
    </div>
  )
}

export default Avaleht