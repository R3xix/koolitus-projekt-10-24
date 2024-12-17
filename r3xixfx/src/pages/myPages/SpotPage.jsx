import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css/Tables.css"


function SpotPage() {
  const [spots, setSpotCryptos] = useState([]);
  
  const [expandedRow, setExpandedRow] = useState(null); 
  const spotsUrl="https://r3xix-fx-default-rtdb.europe-west1.firebasedatabase.app/spotTrade.json"
  
 
  const profitLossSum = spots.reduce(
    (total, spots) => total + (spots.profitloss || 0), 
    0
  );
  
  useEffect(() => {
    fetch(spotsUrl)
      .then(res => res.json())
      .then(json  => setSpotCryptos(json || [] )) //
  }, []);

  return (
    <div>
      <section className="table-header">
      <h1>Spot portfolio</h1>
      </section>
      <Table className="custom-table" striped bordered hover variant="light">
      <thead className="theader">
        <tr>
          <th>#</th>
          <th>Symbol</th>
          <th>Tokens</th>
          <th>Date</th>
          <th>Time</th>
          <th>Price</th>
          <th>Current price</th>
          <th>Profit/loss $</th>
       
        </tr>
      </thead>
      <tbody>
          {spots.map(spot => (
            <React.Fragment key={spot.id}>
              <tr
                onClick={() => setExpandedRow(expandedRow === spot.id ? null : spot.id)} 
                style={{ cursor: 'pointer' }}>

                <td>{spot.id}</td>
                <td><a href={spot.logo} target="_blank" rel="noopener noreferrer">
                    <img style={{ width: '40px' }} src={spot.logo} alt="" /></a> {spot.symbol}</td>
                <td>{spot.tokens}</td>
                <td>{spot.date}</td>
                <td>{spot.time}</td>
                <td>{spot.price}</td>
                <td>{spot.currentprice}</td>
                <td style={{ color: spot.profitloss >= 0 ? 'green' : 'red', fontWeight: 'bold'  }}>
                  {spot.profitloss}$</td>
               
                
                
              </tr>
              {expandedRow === spot.id && (
              <tr>
                <td colSpan="10" style={{ backgroundColor: '#444', color: 'black' }}>
                <div
                  style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '10px',
                  backgroundColor: 'white'}}>
                    <div style={{ flex: '1', paddingLeft: '10px' }}>
                      <h5>Details for {spot.tokens}</h5>
                      <p> Profit/Loss: <span style={{ color: spot.profitloss >= 0 ? 'green' : 'red',
                          fontWeight: 'bold'}}>{spot.profitloss}</span></p>
                      <p>Information: {spot.information}</p>
                    </div></div>
                    </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="7" style={{ textAlign: 'right', fontWeight: 'bold' }}>Total Profit/Loss $:</td>
            <td
              colSpan="2"
              style={{
                color: profitLossSum >= 0 ? 'green' : 'red',
                fontWeight: 'bold',
              }}>
              {profitLossSum.toFixed(2)}
            </td>
          </tr>
        </tfoot>
    </Table>
    </div>
  )
}

export default SpotPage