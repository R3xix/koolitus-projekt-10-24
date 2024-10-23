import { useState} from 'react'


function Meist() {

  const [n2itaTelArvo, muudaN2itaTelArvo] =useState(false);
  const [n2itaTelEduard, muudaN2itaTelEduard] =useState(false);
  const [n2itaTelNils, muudaN2itaTelNils] =useState(false);

  return (
    <div>
        <br /><br />
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
        <div onClick={() => muudaN2itaTelArvo(!n2itaTelArvo)}>Arvo Pärt</div>
        {n2itaTelArvo &&<div>+38469295</div>}
        <div>Uudiste toimetaja</div>
        <br />
        <div onClick={() => muudaN2itaTelEduard(!n2itaTelEduard)}>Eduard Kilu</div>
        {n2itaTelEduard &&<div>+9864296529856</div>}
        <div>Meelelahutaja</div>
        <br />
        <div onClick={() => muudaN2itaTelNils(!n2itaTelNils)}>Nils Haamer</div>
        {n2itaTelNils &&<div>+41740147</div>}
        <div>Koristaja</div>



    </div>
  )
}

export default Meist