import React from 'react'

function EditProduct() {
    // const {toodeNimi} = useParams();
    // const leitud = tootedJSON[toodeNimi];
    // const nimiRef = useRef();
    // const hindRef = useRef();
    // const piltRef = useRef();
    // const aktiivneRef = useRef();


    // function muuda() {  // kõik ref.current.value kohad on by default sõnad
    //   tootedJSON[toodeNimi] = {
    //     "nimi": nimiRef.current.value,
    //     "hind": Number(hindRef.current.value),
    //     "pilt": piltRef.current.value,
    //     "aktiivne": aktiivneRef.current.checked,
    //   };
    // }
    // kõik kes pole sõna kuju: number või boolean, pean tegema midagi erilist
    // numbri puhul .current.value osas Number() ümber ja
    // checkboxi puhul .current.checked ja defaultChecked htmlis
        

      return (
    <div>
        {/* <label >Nimi</label>
        <input type="text" ref={nimiRef} defaultValue={leitud.nimi} /><br />
        <label >Hind</label>
        <input type="number" ref={hindRef}defaultValue={leitud.hind} /><br />
        <label >Pilt</label>
        <input type="text" ref={piltRef}defaultValue={leitud.pilt} /><br />
        <label >Aktiivne</label><br />
        <input type="checkbox" ref={aktiivneRef} defaultChecked={leitud.aktiivne} /><br />
        <Link to="/halda-tooted">
        <button onClick={muuda}>Muuda</button>
        </Link> */}
    </div>
  )
}

export default EditProduct