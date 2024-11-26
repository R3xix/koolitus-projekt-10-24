import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Avaleht() {
  const [postitused, uuendaPostitused] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => uuendaPostitused(data))
    
  }, []);


  return (
    <div>
      
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmy.alfred.edu%2Fzoom%2F_images%2Ffoster-lake.jpg&f=1&nofb=1&ipt=897de9c1b93ba1ad9e4042dff63936e53885254b248337c942c26ce239d1390a&ipo=images" alt="loodus" width="1260" height="345"/>
       <h1>Nature calling</h1>
       <br />
       Relax and enjoy your journey!
       <br /><br /><br />

       {postitused.map(element => 
       <div>
          <div><i>{element.userId}</i></div> 
          <div><u>{element.id}</u></div>
          <div><b>{element.title}</b></div>
          <div>{element.body}</div>
          <Link to={"/kasutaja-postitus/" + element.userId}>
           <button>Kasutaja postitused</button>
           </Link>
           <Link to={"/vaata-postitus/" + element.Id}>
           <button>Vaata postitust</button>
           </Link>
       </div> 
       )}
       
      
        
        
        
    </div>
  )
}

export default Avaleht