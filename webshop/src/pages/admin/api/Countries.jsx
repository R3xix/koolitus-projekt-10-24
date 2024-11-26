import React, { useEffect, useState } from 'react'

function Countries() {

    const [countries, setCountries] = useState([]);
    
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all?fields=name")
        .then(res => res.json() )
        .then(json => setCountries(json))
        
    }, []);

    // https://restcountries.com/v3.1/all?fields=name
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Country name</th>
                    <th>Country name official</th>
                    <th>Publication year</th>
                    
                </tr>
            </thead>

            <tbody>
              {countries.map(country =>
             
                <tr key={country.common}>
                    <td>{country.name.common}</td>
                    <td>{country.name.official}</td>
                    <td>{country.name.nativeName}</td>
                   
                    
            
                </tr>
                )}
            </tbody>
         </table>
    </div>
  )
}

export default Countries