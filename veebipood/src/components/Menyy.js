import React from 'react'
import { Link } from "react-router-dom" ;

function Menyy() {
  return (
    <div>


      
       <Link to="/">
       <img className="pilt" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsupercarspro.files.wordpress.com%2F2016%2F05%2Fsports-cars-1.jpg&f=1&nofb=1&ipt=19af6d8b1d1d3a347d8114a06a8613d794f269ff611fa9ee423a857756757a0f&ipo=images" alt="" />
       </Link>
       <br />

       

       <Link to="/osta-kinkekaart">
       <button className="nupp">Mine kinkekaarti ostma</button>
      </Link>

      <Link to="/ostukorv">
        <button className="nupp">Ostukorv</button>
      </Link>

      <Link to="/lisa-toode">
        <button className="nupp">Lisa toode</button>
      </Link>

      <Link to="/seaded">
        <button className="nupp">Seaded</button>
      </Link>
      <Link to="/kalkulaator">
        <button className="nupp">Kalkulaator</button>
        <br /><br />
        <Link to="/tagasiside">
        <button className="nupp">Anna meile tagasisidet</button>
        
      </Link>
      <Link to="/kaart">
        <button className="nupp">Kaart</button>
        
      </Link>
      </Link>
      <Link to="/hinnad">
        <button className="nupp">Hinnad</button>
      </Link>

      <Link to="/tootajad">
        <button className="nupp">Tootajad</button>
      </Link>
      <Link to="/tooted">
        <button className="nupp">Tooted</button>
      </Link>
      <Link to="/autod">
        <button className="nupp">Autod</button>
      </Link>
      <Link to="/kasutajad">
        <button className="nupp">Kasutajad</button>
      </Link>


      <br /><br />
      <Link to="/esindused">
        <button className="nupp">Meie esindused</button>
       </Link>
      <br /><br />
      <Link to="/halda-esindused">
        <button className="nupp">Halda esindused</button>
      </Link>
      <Link to="/halda-hinnad">
        <button className="nupp">Halda hinnad</button>
      </Link>

      <Link to="/halda-tootajad">
        <button className="nupp">Halda tootajad</button>
      </Link>
      <Link to="/halda-tooted">
        <button className="nupp">Halda tooted</button>
      </Link>
      <Link to="/halda-autod">
        <button className="nupp">Halda autod</button>
      </Link>
      <Link to="/halda-kasutajad">
        <button className="nupp">Halda kasutajad</button>
      </Link>












    </div>
  )
}

export default Menyy