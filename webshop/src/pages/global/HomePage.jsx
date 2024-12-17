import React, { useState, useRef, useEffect } from 'react'
import { Link } from "react-router-dom"
// import productsFromFile from "../../data/products.json"
// import cartJSON from "../../data/cart.json"
import Dropdown from 'react-bootstrap/Dropdown';
import { ToastContainer, toast } from 'react-toastify';
import Button from '@mui/material/Button';
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from"../../css/HomePage.module.css"

// kui impordin import " .../  läheb üle terve projekti"

function HomePage() {
    // const [products, setProducts] = useState(productsFromFile.slice());
    const [categories, setCategories] = useState([]);
    const categoryUrl = "https://webshopper1024-default-rtdb.europe-west1.firebasedatabase.app/categories.json"

    const findRef = useRef(); 

    const [products, setProducts] = useState([]);
    const productUrl = "https://webshopper1024-default-rtdb.europe-west1.firebasedatabase.app/products.json"

    useEffect(() => {
    fetch(productUrl)
    .then(res => res.json())
    .then(json  => setProducts(json || [ ]) ) //
     }, []);

     useEffect(() => {
      fetch(categoryUrl)
     .then(res => res.json())
     .then(json  => setCategories(json || [ ]) ) //
     }, []);

    
                 // see mis avalehelt tuleb - ilma koguseta
    function addToCart(product) {
        // cartJSON.push(product);
        const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
        const found = cartLS.find(cartProduct => cartProduct.toode.id === product.id)
        if ( found !== undefined) {
             // kui ta juba on olemas siis suurendan kogust
             found.kogus++;
             //product.kogus +=;
             // product.kogus = product.kogus + 1
            
        } else {
            // kui teda pole siis pushin
            cartLS.push({"toode": product, "kogus": 1});
        }

        // cartLS.push(product); // push lisab ühe juurde
        localStorage.setItem("cart", JSON.stringify(cartLS));
        toast.success("Product added successfully!");

        // LocalStorage - sse ARRAY lisamiseks
        // 1. Võtta localStoragest: localStorage.getItem
        // 2. võtta jutumargid maha: JSON.parse()
        // 3. pushida lisatule juurde
        // 4. panna jutumärgid tagasi: JSON.stringify()
        // 5. panna localStoragesse tagasi: localStorage.setItems
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
        setProducts(products.slice())
      }
      const filterCategory = (categoryClicked ) => {
        const result = products.filter(product => product.category === categoryClicked);
        setProducts(result);
      }
        const find = ( ) => {
        const answer = products.filter(product => product.title.toLocaleLowerCase().includes(findRef.current.value.toLocaleLowerCase()) );
        setProducts(answer);
      }

        // // Fetch data from JSON
        // useEffect(() => {
        //   fetch("https://fakestoreapi.com/products") // Replace with your JSON endpoint
        //     .then((response) => response.json())
        //     .then((data) => setProducts(data))
        //     .catch((error) => console.error("Error fetching data:", error));
        // }, []);
     
  return (
    <div>
      
      <div className="carousel-container">
      <Carousel data-bs-theme="dark">
        {products.map((product) => (
          <Carousel.Item key={product.id}>
            <div className="carousel-slide">
              <div className="carousel-image-container">
                <img
                  className="carousel-image"
                  src={product.image}
                  alt={product.title}
                />
              </div>
              {/* Text on the right */}
              <div className="carousel-text">
                <h5>{product.title}</h5>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
        </div>
        <br /><br />
       
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

            <Dropdown.Menu title="Filter: " id="custom-navbar-sort">

              {categories.map(category => 
                <Dropdown.Item onClick={()=> filterCategory(category)} key={category}> {category} </Dropdown.Item>
              )}

                {/* <Dropdown.Item onClick={filterCategory}>Category</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
             </Dropdown.Menu>
        </Dropdown><br /><br />

        <Button variant="outlined" onClick={clear}>Clear filters</Button><br /><br />

        <div>Find product: <input onChange={find} ref={findRef} type="text" /></div>


        <div className={styles.products}>
        {products
          .filter(product => product.active === true )
        .map(product =>
        <div className={styles.product} key={product.id} >
            <img style={{width:"100px"}} src={product.image} alt="" />
            
            <div className={styles.title}>{product.title}</div>
            <div>Price: {product.price}€</div>
            
            
            
            <Button  disabled={product.stock === 0} variant="contained" onClick={() => addToCart(product)}> Add to cart</Button>
           
            <Link to={"/product/" + product.id}>
             <Button variant="outlined" >See product</Button>
             </Link>
             
        </div>
         )} </div>
        <ToastContainer />
    </div>
    </div>
  )
}

export default HomePage