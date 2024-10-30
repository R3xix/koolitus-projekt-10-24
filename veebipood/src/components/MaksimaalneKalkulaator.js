import React, { useRef, useState  } from 'react'

function MaksimaalneKalkulaator() {
  const peetavateRef= useRef();
  const sissetulekuRef= useRef();
  const kuluRef= useRef();
  const [maksimaalne, muudaMaksimaalne] = useState(24545)

  const arvutaKokku = () => {
    muudaMaksimaalne(300/(peetavateRef.current.value+1)*(sissetulekuRef.current.value-kuluRef.current.value)
  
  )


  }
  return (
    <div>
      <label>Ülalpeetavate arv : </label>
      <input onChange={arvutaKokku} defaultValue="1" ref={peetavateRef}type="number" /> <br />
      <label >Netosissetulek : </label>
      <input onChange={arvutaKokku} defaultValue="900"ref={sissetulekuRef} type="number" /> <br />
      <label >Kohustused : </label>
      <input onChange={arvutaKokku} defaultValue="0"ref={kuluRef} type="number" /> <br />
      {/* <button onClick={arvutaKokku}>Arvuta kokku</button> */}
      <div>{maksimaalne.toFixed(0)}€</div>
      
      
    </div>
  )
}

export default MaksimaalneKalkulaator