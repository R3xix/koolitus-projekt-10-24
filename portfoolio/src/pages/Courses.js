import React from 'react'
import Course from '../components/Course' ;
import { Link } from "react-router-dom" ;



function Courses() {
  return (
    <div>
        <br /><br />
        <Course/>
        <Course/>
        <Course/>

       <div>
         <Link to="/"><button>Tagasi</button></Link>
         <div>Kursuse sisu</div>
       </div>

      

    </div>
  )
}

export default Courses