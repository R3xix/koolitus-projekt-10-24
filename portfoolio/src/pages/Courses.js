import {useState} from 'react'
import Course from '../components/Course' ;
import { Link } from "react-router-dom" ;



function Courses() {

    const [kursus, uuendaKursus] = useState("Valimata")
  return (
    <div>
        <br /><br />
        <Course/>
        <Course/>
        <Course/>

       <div>
         <Link to="/"><button>Tagasi</button></Link>
          <br /><br />
         
       </div>

       <button className={kursus === "udemy" ? "kursus-aktiivne" : "kursus"} onClick={() => uuendaKursus("udemy")}>Udemy</button>
       <button className={kursus === "coursera" ? "kursus-aktiivne" : "kursus"}onClick={() => uuendaKursus("coursera")}>Coursera</button>
       <button className={kursus === "codecademy" ? "kursus-aktiivne" : "kursus"}onClick={() => uuendaKursus("codecademy")}>Codecademy</button>
       <button className={kursus === "udacity" ? "kursus-aktiivne" : "kursus"}onClick={() => uuendaKursus("udacity")}>Udacity</button>
       {kursus === "udemy" && <div>Siin on kirjeldus ( loend ) Udemy.com läbitud kursustest </div> }
       {kursus === "coursera" && <div>Siin on kirjeldus ( loend ) Coursera.com läbitud kursustest </div> }
       {kursus === "codecademy" && <div>Siin on kirjeldus ( loend ) Codecademy.com läbitud kursustest </div> }
       {kursus === "udacity" && <div>Siin on kirjeldus ( loend ) Udacity.com läbitud kursustest </div> }

       
      

    </div>
  )
}

export default Courses