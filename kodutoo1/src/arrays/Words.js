import React, { useState } from 'react'

function Words() {
    const [words, muudaWords] = useState(['spray', 'elite', 'exuberant', 'destruction', 'present']);
    
    

  return (
    <div>
      
       {words.map(word =><div>{word}</div> )}
       <div> Kogus: {words.length}</div>
       {words.length === 0 && <div>Sõnu pole</div>}
       <button onClick={() => muudaWords([])}>Tühjenda sõnad</button>


    </div>
  )
}

export default Words