import React, { useEffect, useState } from 'react'
import Table from "react-bootstrap/Table";
import { MdDelete } from 'react-icons/md';
import { BiEditAlt } from 'react-icons/bi';
import "../../css/EditFxTrade.css";
import AddSpotTrade from './AddSpotTrade';

function MaintainSpotTrade() { 
    const [spots, setSpots] = useState([]);
    const [expandedRow, setExpandedRow] = useState(null); // Jälgib, milline rida on avatud
    const [showAddMenu, setShowAddMenu] = useState(false); // Jälgib, kas lisamismenüü on nähtav
    const spotsUrl="https://r3xix-fx-default-rtdb.europe-west1.firebasedatabase.app/spotTrade.json"

   useEffect(() => {
    fetch(spotsUrl)
      .then(res => res.json())
      .then(json  => setSpots(json || [] )) //
  }, []);

  const erase = (index) => {
    const updatedTrades = spots.filter((_, i) => i !== index);
    setSpots(updatedTrades);
    fetch(spotsUrl, {method: "PUT", body: JSON.stringify(updatedTrades)})
  }
  const handleInputChange = (index, field, value) => {
    const updatedTrades = [...spots];
    updatedTrades[index][field] = value;
    setSpots(updatedTrades);
  };

  const saveChanges = () => {
    fetch(spotsUrl, { method: "PUT", body: JSON.stringify(spots) });
  };

  // https://r3xix-fx-default-rtdb.europe-west1.firebasedatabase.app/spotTrade.json
  return (
    <div className="fxtrade-container">
      <section className="table-header">
      <h1 >Maintain Spot portfolio</h1>
      
      <button className="btn-add-trade" onClick={() => setShowAddMenu(!showAddMenu)}>
        {showAddMenu ? "Close Add Menu" : "Add New Trade"}
      </button>
      </section>
      {showAddMenu && (
      <div className="add-menu">
        <AddSpotTrade />
      </div>
    )}
       <Table className="custom-table" striped bordered hover variant="light">
            <thead>
              <tr>  
              <th>#</th>
          <th>Symbol</th>
          <th>Date</th>
          <th>Tokens</th>
          <th>Price</th>
          <th>Current price</th>
          <th>Profit/loss $</th>
          <th>Information</th>
          <th><MdDelete /></th>
              </tr>
            </thead>
            <tbody>
               {spots.map((spot, index) => 
                  <React.Fragment key={spot.id}> 
                  <tr> 
                    <td>{spot.id}</td>
                    <td>  <img style={{ width: '40px' }} src={spot.logo}  alt=""  />{spot.symbol} </td>
                    <td>{spot.date}</td>
                    <td>{spot.tokens}</td>
                    <td>{spot.price}</td>
                    <td>{spot.currentprice}</td>
                    <td style={{ color: spot.profitloss >= 0 ? 'green' : 'red', fontWeight: 'bold'  }}>
                    {spot.profitloss}</td>
                    <td>{spot.information}</td>
                      
                    <td><MdDelete className="btn-delete" onClick={() => erase(index)} /></td>
                    <td>
                    <BiEditAlt className="editbtn-image"
                    onClick={() => setExpandedRow(expandedRow === index ? null : index)} >{expandedRow === index ? "Close" : "Edit"}</BiEditAlt>
                    </td>
                </tr>
                {expandedRow === index && (
                <tr className="editfx-expanded-row">
                  <td colSpan="13">
                    <div className="editfx-expander-content">
                      <div className="editfx-label">
                        Logo:
                        <input
                          className="editfx-input"
                          type="text"
                          value={spot.logo}
                          onChange={(e) => handleInputChange(index, 'logo', e.target.value)}
                        />
                      </div>
                      <div className="editfx-label">
                        Crypto pair:
                        <input
                          className="editfx-input"
                          type="text"
                          value={spot.symbol}
                          onChange={(e) => handleInputChange(index, 'symbol', e.target.value)}
                        />
                      </div>
                      <div className="editfx-label">
                        Date:
                        <input
                          className="editfx-input"
                          type="date"
                          value={spot.date}
                          onChange={(e) => handleInputChange(index, 'date', e.target.value)}
                        />
                      </div>
                      <div className="editfx-label">
                        Nr of tokens:
                        <input
                          className="editfx-input"
                          type="text"
                          value={spot.tokens}
                          onChange={(e) => handleInputChange(index, 'tokens', e.target.value)}
                        />
                      </div>
                      <div className="editfx-label">
                        Prices:
                        <input
                          className="editfx-input"
                          type="text"
                          value={spot.price}
                          onChange={(e) => handleInputChange(index, 'price', e.target.value)}
                        />
                      </div>
                      <div className="editfx-label">
                        Current price:
                        <input
                          className="editfx-input"
                          type="text"
                          value={spot.currentprice}
                          onChange={(e) => handleInputChange(index, 'currentprice', e.target.value)}
                        />
                      </div>
                      <div className="editfx-label">
                        Profit/loss:
                        <input
                          className="editfx-input"
                          type="text"
                          value={spot.profitloss}
                          onChange={(e) => handleInputChange(index, 'profitloss', e.target.value)}
                        />
                      </div>
                      <div className="editfx-label">
                        Information:
                        <input
                          className="editfx-input"
                          type="text"
                          value={spot.information}
                          onChange={(e) => handleInputChange(index, 'information', e.target.value)}
                        />
                      </div>
                    </div>
                    <button onClick={saveChanges} className="editfx-button-save">Save</button>
                  </td>
                </tr>
              )}
                </React.Fragment> 
               )}
                
            </tbody>
            </Table>
    </div>
  )
}

export default MaintainSpotTrade