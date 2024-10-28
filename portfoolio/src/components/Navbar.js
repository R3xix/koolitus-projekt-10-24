import React from 'react'
import { Link } from "react-router-dom" ;

function Navbar() {
  return (
    <div>
         <img className="main-picture" src="https://heyitworks.tech/assets/images/footerbanner.png.webp" alt="footeripilt" /> 
        
        <h1 className='pealkiri'>WELCOME TO MY PERSONAL PAGE</h1>
        <p className='tavatekst'>Lets have some fun</p>

        
        

        
        
        <div className="rectangle"> </div>

        <div className="navigation-pictures">
           <Link className="main-link" to="work">
             <img src="https://i.ytimg.com/vi/RbBkyyUdeC8/maxresdefault.jpg" alt="" />
             <p>Tööde sisu</p>
           </Link>
           <Link className="main-link" to="hobbies">
             <img src="https://t4.ftcdn.net/jpg/03/29/63/93/360_F_329639395_lV57DpZ8K7vHTy74rBwLX4bgB545KyQv.jpg" alt="" />
             <p>Hobide lehele</p>
           </Link>
           <Link className="main-link" to="courses">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLFS6mryqNYfT7iHxYNhUbOlq3GWQ9rmZs7w&s" alt="" />
             <p>Kursuse sisu</p>
           </Link>
           <br />

           
        </div>
        <div className='videod'>
           <iframe className='video' width="560" height="315" src="https://www.youtube.com/embed/v7KiOmP_yNY?si=ddCJC_ibXHkyVHOi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>          
           <div className='video-tekst'> 
            <h1>Video sisu ütleb kõik</h1>
             Mis ma siis teen

           </div>
        </div>

        <a className="facebook" href="https://facebook.com">
          <img className="facebook-button" src="/facebook.png" alt="" />
          <br />
          
        </a>

        
        
        </div>
  )
}

export default Navbar