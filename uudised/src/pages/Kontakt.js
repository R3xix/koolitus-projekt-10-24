import { useState } from 'react'

function Kontakt() {

  const [kontakt, n2itaKontakt] = useState("")
  return (
    <div>
        <div>See on kontaktide leht, nähtav localhost:3000/kontakt aadressil</div>
        <br />
        <div>Sammal Habe</div> 
        <div>Email: sammal@mail.habe</div>
        {/* <div>Mobiil: +1234567</div> */}
        <button onClick={() => n2itaKontakt("+1234567")}>Võta ühendust</button>
        
        <br />
        <br />
        <div>Emmenuel Soolapea</div>
        <div>Email: emmanuel@mail.habe</div>
        {/* <div>Mobiil: +098765443</div> */}
        <button onClick={() => n2itaKontakt("+098765443")}>Võta ühendust</button>
        <br /><br />
        <div>Miranda Olanda</div> 
        <div>Email: miranda@mail.habe</div>
        {/* <div>Mobiil: +87665443</div> */}
        <button onClick={() => n2itaKontakt("+87665443")}>Võta ühendust</button>
        
        <br /><br />
        { kontakt !== "" &&<div>Tema kontakt: {kontakt}</div>}
        
        



        <br />
        <br />
        <div>Võta meiega ühendust ja sa ei kahetse</div>
    </div>
  )
}

export default Kontakt