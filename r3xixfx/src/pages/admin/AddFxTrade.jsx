import React, { useEffect, useRef, useState } from 'react'
import fxJSON from '../../components/data/fx.json';

function AddFxTrade() {

    const idRef = useRef();
    const strategyRef = useRef();
    const positionRef = useRef();
    const symbolRef = useRef();
    const dateRef = useRef();
    const timeRef = useRef();
    const volumeRef = useRef();
    const openpriceRef = useRef();
    const closepriceRef = useRef();
    const pipsRef = useRef();
    const profitlossRef = useRef();
    const imageRef = useRef();

    // const [fxs, setFxs] = useState(fxJSON.slice());
    const [idUnique, setIdUnique] = useState(true);
    


      // useEffect(() => {
      //   setFxs(fxJSON.slice());
      // }, []);
  
// products???
// kui lisada siis refreshiga kustub ära ei salvesta

  
  const add = () => {
    const fxs = JSON.parse(localStorage.getItem("fxs"))
    fxJSON.push({
            "id": Number(idRef.current.value),
            "strategy": strategyRef.current.value,
            "position": positionRef.current.value,
            "symbol": symbolRef.current.value,
            "date": dateRef.current.value,
            "time": Number(timeRef.current.value),
            "volume": Number(volumeRef.current.value),
            "openprice": Number(openpriceRef.current.value),
            "closeprice": Number(closepriceRef.current.value),
            "pips": Number(pipsRef.current.value),
            "profitloss": Number(profitlossRef.current.value),
            "image": imageRef.current.value
              })
     localStorage.setItem("fxs", JSON.stringify("fxs"));
     
     
      // toast.success("Product added!");
      
      // õige arendus: saadame toote back-endi, et back-end paneks andmebaasi
  }
  const checkIdUniqueness = () => {
    const result = fxJSON.filter(fx => fx.id === Number(idRef.current.value));
    setIdUnique(result.length === 0);
  };
  

return (
  <div>
    {idUnique === false && <div>ID is already in use!</div>}
      <label >New ID: <input onChange={checkIdUniqueness} ref={idRef}type="number" /></label>
      <br />
      <label>Strategy: <input ref={strategyRef }type="text" /></label>
       <br />
      <label>Position: <input ref={positionRef }type="text" /></label><br />
      <label>Symbol: <input ref={symbolRef }type="text" /></label><br />
      <label>Date <input ref={dateRef }type="text" /></label><br />
      <label>Time: <input ref={timeRef }type="text" /></label><br />
      <label>Volume: <input ref={volumeRef }type="number" /></label><br />
      <label>Open Price: <input ref={openpriceRef}type="number" /></label><br />
      <label>Close price <input ref={closepriceRef }type="number" /></label><br />
      <label>Pips earned <input ref={pipsRef }type="number" /></label><br />
      <label>Profit/loss $ <input ref={profitlossRef }type="number" /></label><br />
      <label>Image <input ref={imageRef }type="text" /></label><br />
      <button onClick={add}>Add</button><br /><br />
      {/* <ToastContainer /> */}
  </div>
)
}
export default AddFxTrade