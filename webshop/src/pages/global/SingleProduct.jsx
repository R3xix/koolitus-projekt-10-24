import React from 'react'
import  { useParams } from "react-router-dom"  
import productsJSON from "../../data/products.json"

function SingleProduct() {
    const {productIndex} = useParams(); 
    const found = productsJSON.find(product => product.id === Number(productIndex));
    // urlist tuleb alati õsna mitte number

    // võtab eelmise info mitte selle mida peaks
  return (
    <div>
        <div>

      <img style={{width:"100px"}} src={found.image} alt="" />
      <div> {found.title}</div>
      <div> {found.price}</div>
      <div>{found.description}</div>
      <div>{found.category}</div>
      <div>{found.rating.rate}</div>
      <div>{found.rating.count}</div>
      
      </div>
    </div>
  )
}

export default SingleProduct