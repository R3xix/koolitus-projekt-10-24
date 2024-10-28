import React, { useState} from 'react'

function Loader() {

    const [kasLaeb, uuendaLaadimist] = useState(true);

  return (
    <div >
       {kasLaeb === true && <div class="lds-ripple"><div></div><div></div></div>}
        <button onClick={() => uuendaLaadimist(false)} ></button>


    </div>
  )
}

export default Loader