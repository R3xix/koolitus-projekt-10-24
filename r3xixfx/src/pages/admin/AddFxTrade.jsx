import React, { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import '../../css/AddFxTrade.css';


function AddFxTrade() {
  const [fxtrade, setFxTrade] = useState([]);
  const fxtradeUrl="https://r3xix-fx-default-rtdb.europe-west1.firebasedatabase.app/fxtrades.json"
  const [nextId, setNextId] = useState(null); // Järgmine vaba ID

    const strategyRef = useRef();
    const positionRef = useRef();
    const symbolRef = useRef();
    const dateRef = useRef();
    const volumeRef = useRef();
    const openpriceRef = useRef();
    const closepriceRef = useRef();
    const imageRef = useRef();


    // Eelnevalt määratud valikud
  const strategies = ['Breakout', 'Scalping', 'Swing', 'Day Trading', 'Other'];
  const positions = ['long', 'short'];
  const symbols = ['EURUSD', 'GBPUSD', 'USDJPY', 'XAUUSD'];

  useEffect(() => {
    // Laeme olemasolevad andmed ja määrame järgmise ID
    fetch(fxtradeUrl)
      .then((res) => res.json())
      .then((json) => {
        const trades = json || [];
        setFxTrade(trades);

        // Arvuta järgmine vaba ID
        const existingIds = trades.map((trade) => Number(trade.id)).sort((a, b) => a - b);
        let newId = 1;
        for (let i = 0; i < existingIds.length; i++) {
          if (existingIds[i] !== newId) break;
          newId++;
        }
        setNextId(newId);
      });
  }, []);
    

  const add = () => {
    fxtrade.push({
            "id": nextId,
            "strategy": strategyRef.current.value,
            "position": positionRef.current.value,
            "symbol": symbolRef.current.value,
            "date": dateRef.current.value,
            "volume": Number(volumeRef.current.value),
            "openprice": Number(openpriceRef.current.value),
            "closeprice": Number(closepriceRef.current.value),
            "image": imageRef.current.value
              })
    toast.success("Product added!");
    fetch(fxtradeUrl, {method: "PUT", body: JSON.stringify(fxtrade)})
    // Uuenda järgmine vaba ID
    setNextId((prevId) => prevId + 1);
  }


return (
  <div className="addfxtrade-container">
  <h2>Add new trade</h2>
  <section className="addfxtrade">
    <label>
      New ID:
      <input value={nextId || ''} disabled type="number" />
    </label>
    <label>
      Strategy:
      <select ref={strategyRef}>
        {strategies.map((strategy) => (
          <option key={strategy} value={strategy}>
            {strategy}
          </option>
        ))}
      </select>
    </label>
    <label>
      Position:
      <select ref={positionRef}>
        {positions.map((position) => (
          <option key={position} value={position}>
            {position}
          </option>
        ))}
      </select>
    </label>
    <label>
      Symbol:
      <select ref={symbolRef}>
        {symbols.map((symbol) => (
          <option key={symbol} value={symbol}>
            {symbol}
          </option>
        ))}
      </select>
    </label>
    <label>
      Date:
      <input ref={dateRef} type="date" />
    </label>
    <label>
      Volume:
      <input ref={volumeRef} type="number" />
    </label>
    <label>
      Open Price:
      <input ref={openpriceRef} type="number" />
    </label>
    <label>
      Close Price:
      <input ref={closepriceRef} type="number" />
    </label>
    <label>
      Image:
      <input ref={imageRef} type="text" />
    </label>
    <button className="addfxtrade-btn" onClick={add}>Add</button>
  </section>
  
  <ToastContainer />
</div>
)
}
export default AddFxTrade