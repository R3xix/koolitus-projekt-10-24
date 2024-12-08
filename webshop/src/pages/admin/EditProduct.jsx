import React, { useEffect, useRef, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
// import productsJSON from "../../data/products.json"

function EditProduct() {
     const [products, setProducts] = useState([]);
     const productUrl = "https://webshopper1024-default-rtdb.europe-west1.firebasedatabase.app/products.json"
     const [loading, setLoading] = useState(true);
     useEffect(() => {
     fetch(productUrl)
     .then(res => res.json())
     .then(json  => {
       setProducts(json || [ ])
       setLoading(false)
     } ) //
 }, []);

  const [idUnique, setIdUnique] = useState(true);

  function checkIdUniqueness (){

    // .filter ---küsida kas  .length on 0
    // .find ---küsida kas undefined
    //  .findIndex --- küsida kas ID on -1 (see tähistab programmeerimises et indexit ei leitud)
    // .find l olemas eriomades kui ta leiab kellegi siis tsüklit ei jätkata
    // 25000 toodet ----- teen.filter siis ta teeb alati lõpuni välja
    // 2500 toodet ---- teen.find ja leitakse 01ndana

    const result = products.filter(product => product.id === Number(idRef.current.value) )
       if (result.length === 0) {
       setIdUnique(true);

      } else {setIdUnique(false)}
    
    // const found = productsJSON.find(product => product.id === Number(idRef.current.value) )
    //   if (found === undefined) {
    //     setIdUnique(true);

    //   } else {setIdUnique(false)}


  }
    const {index} = useParams();
    const found = products[index];
    const idRef = useRef();
    const priceRef = useRef();
    const descriptionRef = useRef();
    const categoryRef = useRef();
    const imageRef = useRef();
    const stockRef = useRef();
    const activeRef = useRef();
    const ratingRateRef = useRef();
    const ratingCountRef = useRef();
    const navigate = useNavigate(); // Reactis ilma refreshita urli vahetuseks Javascriptis
    


    function edit() {  // kõik ref.current.value kohad on by default sõnad
      products[index] = {
        "id": Number(idRef.current.value),
        "price": Number(priceRef.current.value),
        "description": descriptionRef.current.value,
        "category": categoryRef.current.value,
        "image": imageRef.current.value,
        "stock": Number(stockRef.current.value),
        "active": activeRef.current.checked,
        "rating":{
          "rate": Number(ratingRateRef.current.value),
          "count": Number(ratingCountRef.current.value),}
      };
      fetch(productUrl, {method:"PUT", body: JSON.stringify(products)})
        .then(() => navigate("/admin/maintain-products"));
    }
    // Link ---htmlis (töötab alati, aga Reactis sees)
    // a href= ---- htmlis (töötab alati, suunab rakendusest välja)
    // const navigate = useNavigate() navigate("/uus-url") ---JS. Reacti siseseks liikumiseks
    // window.location.href = "http//www.bla.bla"  JS. suunab rakendusest välja


    // kõik kes pole sõna kuju: number või boolean, pean tegema midagi erilist
    // numbri puhul .current.value osas Number() ümber ja
    // checkboxi puhul .current.checked ja defaultChecked htmlis

    // .
    if (loading === true) {
      return <Spinner />
        }
    if (found === undefined) {
      return (<div>Pärast võib pildi panna
             <div>Toodet ei leitud....</div>
  
             </div>)
             
        }

      return (
    <div>
        {idUnique === false && <div>Kellelgi teisel on juba sama ID olemas</div>}
        <label >ID</label>
        <input onChange={checkIdUniqueness}type="text" ref={idRef} defaultValue={found.id} /><br />
        <label >Price</label>
        <input type="number" ref={priceRef}defaultValue={found.price} /><br />
        <label >Description</label>
        <input type="text" ref={descriptionRef}defaultValue={found.description} /><br />
        <label >Category</label>
        <input type="text" ref={categoryRef}defaultValue={found.category} /><br />
        <label >Image</label>
        <input type="text" ref={imageRef}defaultValue={found.image} /><br />
        <label >Stock</label>
        <input type="text" ref={stockRef}defaultValue={found.stock} /><br />
        <label >Active</label><br />
        <input type="checkbox" ref={activeRef} defaultChecked={found.active} /><br />
        <label >Rate</label>
        <input type="number" ref={ratingRateRef}defaultValue={found.rating.rate} /><br />
        <label >Rating count</label>
        <input type="number" ref={ratingCountRef}defaultValue={found.rating.count} /><br />
        <button onClick={edit}>Edit</button>
        
        {/* <Link to="/admin/maintain-products">
        
        </Link> */}
    </div>
  )
}

export default EditProduct