import { useState} from 'react'

function Kontakt() {
    const [aadress, maaraAadress] = useState("Tallinn");
    const [telefon, maaraTelefon] = useState("5512345");
    const [email, maaraEmail] = useState("bla@bla.com");
    const [ingliseKeelne, muudaIngliseKeelne] = useState("ei");

    const maaraInglise = () => {
        maaraAadress("London");
        maaraTelefon("12312412");
        maaraEmail("london@london.com");
        muudaIngliseKeelne("jah");

    }
  return (
    <div>
        <div>{aadress}</div>
        <div>{telefon}</div>
        <div>{email}</div><br />
        <button onClick={maaraInglise}>Muuda inglise keelseks</button><br />

        { ingliseKeelne === "jah"  &&  <div> Leht on inglise keelne</div> }

       


        
    </div>
  )
}

export default Kontakt