import React, {useRef, useState } from 'react'

function Tagasiside() {

    const [tagasisided, muudaTagasisided] = useState(["Oli hea", "Huvitav", "Teistsugune", "Põnev"]);
    const kustuta = (index) => {
        tagasisided.splice(index, 1);
        muudaTagasisided(tagasisided.slice())
    }
    const tagasisideRef = useRef();

    const lisa = () => {
        tagasisided.push(tagasisideRef.current.value);
        muudaTagasisided(tagasisided.slice())

    }
  
  return (
    <div>
        
        {tagasisided.map((tagasiside, index) => <div>
            {tagasiside}
            <button onClick={() => kustuta(index) }>x</button>
            
            </div>)}
        
        <div>
            <label>Lisa uus tagasiside:</label>
            <input ref={tagasisideRef} type="text" />
            <button onClick={()  => lisa()}>Sisesta</button>
            
        </div>




    </div>
  )
}

export default Tagasiside