import React from 'react'
import Hobby from '../components/Hobby' ;
import { Link } from "react-router-dom" ;

function Hobbies() {
  return (
    <div> 
        <Hobby/>
        <Hobby/>
        <Hobby/>
        
      <div>
         <Link to="/"><button>Tagasi</button></Link>
         <div>Hobide sisu</div>
       </div>
       
    </div>
  )
}

export default Hobbies