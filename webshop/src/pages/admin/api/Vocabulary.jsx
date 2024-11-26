import React, { useEffect, useState } from 'react'

function Vocabulary() {
    const [vocabulary, setVocabulary] = useState([]);

    useEffect(() => {
        fetch("https://marineregions.org/rest/getGazetteerTypes.json")
        .then(res => res.json() )
        .then(json => setVocabulary(json))
        
    }, []);

    // https://marineregions.org/rest/getGazetteerTypes.json
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>TypeID</th>
                    <th>Type</th>
                    <th>Description</th>
                    
                </tr>
            </thead>

            <tbody>
              {vocabulary.map(vocabular =>
             
                <tr key={vocabular.typeID}>
                    <td>{vocabular.typeID}</td>
                    <td>{vocabular.type}</td>
                    <td>{vocabular.description}</td>
                    
            
                </tr>
                )}
            </tbody>
         </table>
    </div>
  )
}

export default Vocabulary