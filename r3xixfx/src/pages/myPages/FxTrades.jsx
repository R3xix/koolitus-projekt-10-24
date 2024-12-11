import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import fxJSON from '../../components/data/fx.json';
import Dropdown from 'react-bootstrap/Dropdown';




function FxTrades() {
  const [fxs] = useState(fxJSON.slice());
  const [filterSymbol, setFilterSymbol] = useState('');
  const [expandedRow, setExpandedRow] = useState(null); 

  const filteredFxs = filterSymbol
    ? fxs.filter(fx => fx.symbol === filterSymbol)
    : fxs;

  // Sümbolite unikaalne nimekiri
  const symbols = Array.from(new Set(fxJSON.map(fx => fx.symbol)));

  
   const profitLossSum = filteredFxs.reduce(
    (total, fx) => total + (fx.profitloss || 0), 
    0
  );
  
  
  return (
    <div>

      <h1>Fx trading journal</h1>
      <br /><br /> <br />
      <Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th>#</th>
          <th>Strategy</th>
          <th>Position</th>
          <th>
              Symbol 
              <Dropdown className="d-inline-block">
                <Dropdown.Toggle variant="secondary" size="xs" className="custom-dropdown-toggle">   
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setFilterSymbol('')}>
                    All
                  </Dropdown.Item>
                  {symbols.map(symbol => (
                  <Dropdown.Item key={symbol} onClick={() => setFilterSymbol(symbol)}>
                      {symbol}
                  </Dropdown.Item> ))}
                </Dropdown.Menu>
              </Dropdown>
            </th>
          <th>Date</th>
          <th>Volume lots</th>
          <th>Open price $</th>
          <th>TP price</th>
          <th>Pips traded</th>
          <th>Profit/loss $</th>
          <th>Setup image</th>
          
        </tr>
      </thead>
      <tbody>
          {filteredFxs.map(fx => (
            <React.Fragment key={fx.id}>
              <tr
                onClick={() => setExpandedRow(expandedRow === fx.id ? null : fx.id)} 
                style={{ cursor: 'pointer' }}>

                <td>{fx.id}</td>
                <td>{fx.strategy}</td>
                <td>{fx.position}</td>
                <td>{fx.symbol}</td>
                <td>{fx.date}</td>
                <td>{fx.volume}</td>
                <td>{fx.openprice}</td>
                <td>{fx.closeprice}</td>
                <td>{fx.pips}</td>
                <td style={{ color: fx.profitloss >= 0 ? 'green' : 'red', fontWeight: 'bold'  }}>
                  {fx.profitloss}</td>
                <td><a href={fx.image} target="_blank" rel="noopener noreferrer">
                    <img style={{ width: '100px' }} src={fx.image} alt="" /></a></td>
              </tr>
              {expandedRow === fx.id && (
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
                      <h5>Details for {fx.symbol}</h5>
                      <p>Strategy: {fx.strategy}</p>
                      <p>Volume: {fx.volume}</p>
                      <p>Price: {fx.openprice}</p>
                      <p>Price: {fx.closeprice}</p>
                      <p>Pips: {fx.pips}</p>
                      <p> Profit/Loss: <span style={{ color: fx.profitloss >= 0 ? 'green' : 'red',
                          fontWeight: 'bold'}}>{fx.profitloss}</span></p>
                      <p>Information: {fx.addinfo}</p>
                    </div>
                    <div style={{ flex: '1', textAlign: 'center' }}>
                      <a href={fx.image} target="_blank" rel="noopener noreferrer">
                         <img style={{ position: 'right', padding: '10px', width: '800px' }} src={fx.image} alt="" /></a>
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

export default FxTrades