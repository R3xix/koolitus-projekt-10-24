import React, { useState } from 'react'

function Animals() {

    const [animals, muudaAnimals] = useState(['pigs', 'goats', 'sheep']);

    
  return (
    <div>
      {animals.map(animal =><div>{animal}</div> )}
      <div> Kogus: {animals.length}</div>
      {animals.length === 0 && <div>Loomi pole valitud</div>}
      <br />
      <button onClick={() => muudaAnimals([])}>Tühjenda loomad</button>
      


    </div>
  )
}

export default Animals