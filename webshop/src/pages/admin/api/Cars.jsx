import React, { useEffect, useState } from 'react'

function Cars() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch("https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit=100")
        .then(res => res.json() )
        .then(json => setCars(json.results))
        
    }, []);

    // https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit=100
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Model</th>
                    <th>Year</th>
                    
                </tr>
            </thead>

            <tbody>
              {cars.map(car =>
             
                <tr key={car.model}>
                    <td>{car.make}</td>
                    <td>{car.model}</td>
                    <td>Year: {car.year}</td>
                    
            
                </tr>
                )}
            </tbody>
         </table>
    </div>
  )
}

export default Cars