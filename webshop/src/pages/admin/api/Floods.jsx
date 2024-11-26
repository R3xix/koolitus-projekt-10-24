import React, { useEffect, useState } from 'react'

function Floods() {
    const [floods, setFloods] = useState([]);

    useEffect(() => {
        fetch("https://environment.data.gov.uk/flood-monitoring/id/floods")
        .then(res => res.json() )
        .then(json => setFloods(json.items))
        
    }, []);


   //  https://environment.data.gov.uk/flood-monitoring/id/floods
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Flood area ID</th>
                    <th>Description</th>
                    <th>County</th>
                    <th>Polygon</th>
                    <th>Message</th>
                    
                </tr>
            </thead>

            <tbody>
              {floods.map(flood =>
             
                <tr key={flood.floodAreaID}>
                    <td>{flood.floodAreaID}</td>
                    <td>{flood.description}</td>
                    <td>{flood.floodArea.county}</td>
                    <td>{flood.floodArea.polygon}</td>
                    <td>{flood.message}</td>
                    
            
                </tr>
                )}
            </tbody>
         </table>
    </div>
  )
}

export default Floods