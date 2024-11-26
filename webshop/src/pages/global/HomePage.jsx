import React, { useState, useRef } from 'react'
import { Link } from "react-router-dom"
import productsFromFile from "../../data/products.json"
import cartJSON from "../../data/cart.json"
import Dropdown from 'react-bootstrap/Dropdown';
import { ToastContainer, toast } from 'react-toastify';
import Button from '@mui/material/Button';

function HomePage() {
    const [products, setProducts] = useState(productsFromFile.slice());
    const findRef = useRef(); 
    
    
    function addToCart(product) {
        cartJSON.push(product);
        toast.success("Product added successfully!");
      }
      const sortAZ = ( ) => {
        products.sort((a, b) => a.title.localeCompare(b.title, "en"));
        setProducts(products.slice());
      }
      const sortZA = ( ) => {
        products.sort((a, b) => b.title.localeCompare(a.title, "en"));
          setProducts(products.slice());
      }
      const priceLowHigh = ( ) => {
        products.sort((a, b) =>  a.price - b.price);
          setProducts(products.slice());
      }
      const priceHighLow = ( ) => {
        products.sort((a, b) => b.price - a.price);
          setProducts(products.slice());
      }
      const ratingLowHigh = ( ) => {
        products.sort((a, b) => b.rating.rate - a.rating.rate);
          setProducts(products.slice());
      }
      const ratingHighLow = ( ) => {
        products.sort((a, b) => a.rating.rate - b.rating.rate);
          setProducts(products.slice());
      }
      const clear = ( ) => { 
        setProducts(productsFromFile.slice())
      }
      const filterCategory = ( ) => {
        const vastus = products.filter(product => product.category.valueOf("men's clothing"));
        setProducts(vastus);
      }
      
        const find = ( ) => {
        const answer = productsFromFile.filter(product => product.title.toLocaleLowerCase().includes(findRef.current.value.toLocaleLowerCase()) );
        setProducts(answer);
      }
     
  return (
    <div>

        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Sorteeri
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={sortAZ}>A-Z</Dropdown.Item>
                <Dropdown.Item onClick={sortZA}>Z-A</Dropdown.Item>
                <Dropdown.Item onClick={priceLowHigh}>Price L-H</Dropdown.Item>
                <Dropdown.Item onClick={priceHighLow}>Price H-L</Dropdown.Item>
                <Dropdown.Item onClick={ratingLowHigh}>Rating H-L</Dropdown.Item>
                <Dropdown.Item onClick={ratingHighLow}>Rating L-H</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown><br /><br />
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Filtreeri 
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={filterCategory}>Category</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
             </Dropdown.Menu>
        </Dropdown><br /><br />

        <Button variant="outlined" onClick={clear}>Clear filters</Button><br /><br />

        <div>Find product: <input onChange={find} ref={findRef} type="text" /></div>


        
        {products
          .filter(product => product.active === true )
        .map(product =>
        <div key={product.id}>
            <img style={{width:"100px"}} src={product.image} alt="" />
            
            <div>{product.title}</div>
            <div>Price: {product.price}€</div>
            <div>{product.category}</div>
            <div>Rating: {product.rating.rate}</div>
            <div>{product.rating.count}</div>
            <Button  disabled={product.stock === 0} variant="contained" onClick={() => addToCart(product)}> Add to cart</Button>
           
            <Link to={"/product/" + product.id}>
             <Button variant="outlined" >See product</Button>
             </Link>
        </div>
         )}
          <ToastContainer />
    </div>
  )
}

export default HomePage