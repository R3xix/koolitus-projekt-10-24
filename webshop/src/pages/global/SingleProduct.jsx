import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import  { useParams } from "react-router-dom"  
// import productsJSON from "../../data/products.json"

function SingleProduct() {
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
    const {productIndex} = useParams(); 
    
    const found = products.find(product => product.id === Number(productIndex));
    // urlist tuleb alati õsna mitte number

    // võtab eelmise info mitte selle mida peaks
    if (loading === true) {
      return <Spinner />
        }
    if (found === undefined) {
    return (<div>
      
      Pärast võib pildi panna
           <div>Toodet ei leitud....</div>

           </div>)
           
      }

  return (
     <div>
        <div >
         
        <img style={{width:"100px"}} src={found.image} alt="" />
        <div> {found.title}</div>
        <div> {found.price}</div>
        <div>{found.description}</div>
        <div>{found.category}</div>
        <div>{found.image}</div>
        <div>Stock: {found.stock}</div>
        <div>Active:{found.active } </div>
        <div>Rate:{found.rating.rate}</div>
        <div>Rating count:{found.rating.count}</div>
        
      </div>
      {!found.active && (
        <div style={{ color: 'black', marginTop: '20px' }}>
          Product is not available!
        </div>
      )}
    </div>
  )
}

export default SingleProduct