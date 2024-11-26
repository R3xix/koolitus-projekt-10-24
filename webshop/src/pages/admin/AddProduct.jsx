import React, {useRef } from 'react'
import productsFromFile from "../../data/products.json"
import { ToastContainer, toast } from 'react-toastify';

function AddProduct() {

    
    const idRef = useRef();
    const titleRef = useRef();
    const priceRef = useRef();
    const descriptionRef = useRef();
    const categoryRef = useRef(); 
    const imageRef = useRef(); 
    const ratingRef = useRef(); 
    
// products???
// kui lisada siis refreshiga kustub ära ei salvesta

    
    const add = (index) => {
        productsFromFile.push(
            {"id":idRef.current.value,"title":titleRef.current.value, "price":priceRef.current.value, "description": descriptionRef.current.value, 
                "category": categoryRef.current.value, "image": imageRef.current.value, "rating": ratingRef.current.value }
        );
       
        idRef.current.value = "";
        toast.success("Product added!");
    }
  return (
    <div>
        <label >New ID: <input ref={idRef}type="text" /></label>
        <br />
        <label>New product title: <input ref={titleRef }type="text" /></label>
         <br />
        <label>New price: <input ref={priceRef }type="text" /></label><br />
        <label>Description: <input ref={descriptionRef }type="text" /></label><br />
        <label>Category <input ref={categoryRef }type="text" /></label><br />
        <label>New picture: <input ref={imageRef }type="text" /></label><br />
        <label>Kategooria <input ref={ratingRef }type="text" /></label><br />
        <button onClick={add}>Sisesta</button><br /><br />
        <ToastContainer />
    </div>
  )
}

export default AddProduct