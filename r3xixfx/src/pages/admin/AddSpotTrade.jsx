import React, { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import '../../css/AddFxTrade.css';

function AddSpotTrade() {
       const [spots, setSpots] = useState([]);
          const spotsUrl="https://r3xix-fx-default-rtdb.europe-west1.firebasedatabase.app/spotTrade.json"
          const [nextId, setNextId] = useState(null); // Järgmine vaba ID

          const logoRef = useRef();
          const symbolRef = useRef();
          const dateRef = useRef();
          const timeRef = useRef();
          const tokensRef = useRef();
          const priceRef = useRef();
          const currentPriceRef = useRef();
          const informationRef = useRef();

  
      useEffect(() => {
        fetch(spotsUrl)
        .then((res) => res.json())
        .then((json) => {
          const trades = json || [];
          setSpots(trades);
  
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
      spots.push({
        "id": nextId,
        "logo": logoRef.current.value,
        "symbol": symbolRef.current.value,
        "date": dateRef.current.value,
        "time": Number(timeRef.current.value),
        "tokens": Number(tokensRef.current.value),
        "price": Number(priceRef.current.value),
        "currentprice": Number(currentPriceRef.current.value),
        "information": informationRef.current.value,
                })
        toast.success("Product added!");
        fetch(spotsUrl, {method: "PUT", body: JSON.stringify(spots)}) 
         }
   
    
  return (
    <div className="addfxtrade-container">
          <h2>Open new position</h2>
          <section className="addfxtrade">
          <label> New ID:
             <input value={nextId || ''} disabled type="number" />
          </label>

          <label>Logo <input ref={logoRef }type="text" /></label><br />
          <label>Symbol: <input ref={symbolRef }type="text" /></label><br />
          <label>Date <input ref={dateRef }type="text" /></label><br />
          <label>Tokens: <input ref={tokensRef }type="number" /></label><br />
          <label>Price: <input ref={priceRef}type="number" /></label><br />
          <label>Current price <input ref={currentPriceRef }type="number" /></label><br />
          <label>Image <input ref={informationRef }type="text" /></label><br />
          <button className="addfxtrade-btn" onClick={add}>Add</button><br /><br />
          </section>
          <ToastContainer />
      </div>
  )
}

export default AddSpotTrade