// import React, { useState, useEffect } from 'react'

function Electricity() {
    // const [prices, setPrice] = useState([]);

    // useEffect(() => {
    //     fetch('https://dashboard.elering.ee/api/nps/price')
    //         .then(res=>res.json())
    //         .then(json=>setPrice(json.data))

    //     }, []);
    
  return (
    <div>
      
      {/* {prices ? (
        Object.keys(prices).map((country) => (
          <div key={country}>
            <h3>{country.toUpperCase()}</h3>
            <table border="1" style={{ marginBottom: '20px', width: '100%' }}>
              <thead>
                <tr>
                  <th>Timestamp</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {prices[country].map((entry) => (
                  <tr key={entry.timestamp}>
                    <td>{new Date(entry.timestamp * 1000).toLocaleString()}</td>
                    <td>{entry.price} €</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )} */}
    </div>
  );
}

export default Electricity