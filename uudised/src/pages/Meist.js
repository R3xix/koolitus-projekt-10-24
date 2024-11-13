import { useState} from 'react'
import tootajadJSON from "../tootajad.json"


function Meist() {

  const [tootajad, uuendaTootajad] = useState(tootajadJSON.slice());
  const [telefoniNr, N2itaTel] =useState("");
  const [valitud, uuendaValitud] =useState("");
  const votaÜhendust = (tootaja ) => {
    N2itaTel(tootaja.telefon);
    uuendaValitud(tootaja.nimi);

  }
  
  
  // const [n2itaTelArvo, muudaN2itaTelArvo] =useState(false);
  // const [n2itaTelEduard, muudaN2itaTelEduard] =useState(false);
  // const [n2itaTelNils, muudaN2itaTelNils] =useState(false);

  return (
    <div>
          <br />
          <div > {tootajad.map(tootaja => 
           <div className={tootaja.nimi === valitud ? "valitud" : undefined}>
           <div>{tootaja.nimi}</div> 
            <div>{tootaja.ala}</div>  
            <button onClick={() => votaÜhendust(tootaja)}>Võta ühendust</button>
          
          </div> )}
        <br /><br />
        { telefoniNr !== "" &&<div> Tema kontakt: {telefoniNr}</div>}
        <div><h1>Meie moto: “Loodus, loovus, liikumine!“</h1> </div>
        <br /><br />
        <img className='looduspilt' src="https://img.freepik.com/premium-psd/flat-design-nature-plant-text-effect_23-2149490913.jpg" alt="nature" />
        <br /><br />
        <div>«Kes me oleme? Kust me tuleme?» on küsimused, millele inimesed on ikka vastust otsinud. Ajaloost, kultuurist, geneetikast. Mineviku parem teadmine aitab mõtestada tänapäeva ning selgelt näha tulevikku. Mida ütlevad teaduse uuemad saavutused ja teooriad inimkonna loo kujunemise kohta?</div>
        <br /><br />
        <br /><br />
        <div>Mida ma tahan ja mida me tahame? Kuidas seda saavutada?
        Teadlik planeerimine on pigem elustiil ja valikute tegemise oskus, kui tavapärane tulevikust unistamine</div>
        <br />
        {/* <div onClick={() => muudaN2itaTelArvo(!n2itaTelArvo)}>Arvo Pärt</div>
        {n2itaTelArvo &&<div>+38469295</div>}
        <div>Uudiste toimetaja</div>
        <br />
        <div onClick={() => muudaN2itaTelEduard(!n2itaTelEduard)}>Eduard Kilu</div>
        {n2itaTelEduard &&<div>+9864296529856</div>}
        <div>Meelelahutaja</div>
        <br />
        <div onClick={() => muudaN2itaTelNils(!n2itaTelNils)}>Nils Haamer</div>
        {n2itaTelNils &&<div>+41740147</div>}
        <div>Koristaja</div> */}
   </div>


    </div>
  )
}

export default Meist