import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import spotJSON from '../../components/data/spot.json';
import Dropdown from 'react-bootstrap/Dropdown';


function SpotPage() {
  const [spotCryptos] = useState(spotJSON.slice());
  const [filterSymbol, setFilterSymbol] = useState('');
  const [expandedRow, setExpandedRow] = useState(null); 
  const filteredSpotCr = filterSymbol
    ? spotCryptos.filter(spotCrypto => spotCrypto.symbol === filterSymbol)
    : spotCryptos;

  // Sümbolite unikaalne nimekiri
  const symbols = Array.from(new Set(spotJSON.map(spotCrypto => spotCrypto.symbol)));

  
   const profitLossSum = filteredSpotCr.reduce(
    (total, spotCrypto) => total + (spotCrypto.profitloss || 0), 
    0
  );

  return (
    <div>
      <h1>Spot portfolio</h1>
      <br /><br /> <br />
      <Table className="custom-table" striped bordered hover variant="light">
      <thead>
        <tr>
          <th>#</th>
          <th>Logo</th>
          <th>Date</th>
          <th>Time</th>
          <th>Symbol</th>
          <th>Tokens</th>
          <th>Price</th>
          <th>Current price</th>
          <th>Profit/loss $</th>
        </tr>
      </thead>
      <tbody>
          {filteredSpotCr.map(spotCrypto => (
            <React.Fragment key={spotCrypto.id}>
              <tr
                onClick={() => setExpandedRow(expandedRow === spotCrypto.id ? null : spotCrypto.id)} 
                style={{ cursor: 'pointer' }}>

                <td>{spotCrypto.id}</td>
                <td><a href={spotCrypto.logo} target="_blank" rel="noopener noreferrer">
                    <img style={{ width: '40px' }} src={spotCrypto.logo} alt="" /></a></td>
                <td>{spotCrypto.symbol}</td>
                <td>{spotCrypto.date}</td>
                <td>{spotCrypto.time}</td>
                <td>{spotCrypto.tokens}</td>
                <td>{spotCrypto.price}</td>
                <td>{spotCrypto.currentprice}</td>
                <td style={{ color: spotCrypto.profitloss >= 0 ? 'green' : 'red', fontWeight: 'bold'  }}>
                  {spotCrypto.profitloss}</td>
                
                
              </tr>
              {expandedRow === spotCrypto.id && (
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
                      <h5>Details for {spotCrypto.symbol}</h5>
                      <p> Profit/Loss: <span style={{ color: spotCrypto.profitloss >= 0 ? 'green' : 'red',
                          fontWeight: 'bold'}}>{spotCrypto.profitloss}</span></p>
                      <p>Information: {spotCrypto.information}</p>
                    </div>
                    
                    </div>
                    </td>
                  
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="8" style={{ textAlign: 'right', fontWeight: 'bold' }}>Total Profit/Loss $:</td>
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