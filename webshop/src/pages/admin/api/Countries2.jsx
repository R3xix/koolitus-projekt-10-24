import React, { useEffect, useState } from 'react'

function Countries2() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch("https://www.freetestapi.com/api/v1/countries")
        .then(res => res.json() )
        .then(json => setCountries(json))
        
    }, []);



    // https://www.freetestapi.com/api/v1/countries
  return (
    <div>
         <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Population</th>
                    <th>Land area km2</th>
                    <th>Density</th>
                    <th>Capital</th>
                    <th>Currency</th>
                    <th>Flag</th>
                    
                </tr>
            </thead>

            <tbody>
              {countries.map(country =>
             
                <tr key={country.id}>
                    <td>{country.name}</td>
                    <td>{country.population}</td>
                    <td>{country.land_area}</td>
                    <td>{country.density}</td>
                    <td>{country.capital}</td>
                    <td>{country.currency}</td>
                    <td><img style={{width:"100px"}} src={country.flag} alt="" /></td>
                    
            
                </tr>
                )}
            </tbody>
         </table>
    </div>
  )
}

export default Countries2