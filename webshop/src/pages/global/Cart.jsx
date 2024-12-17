import React, { useContext, useState } from 'react'  // node module
import { Link } from 'react-router-dom' // node module
// import cartJSON from "../../data/cart.json" // meie fail
import Button from '@mui/material/Button'; // node module
import ParcelMachines from '../../components/cart/ParcelMachines';
import Payment from '../../components/cart/Payment';
import styles from "../../css/Cart.module.css"; // leiandit ei pea panema .js failidele
import { CartSumContext } from '../../store/CartSumContext';
// ülejäänutele peab kirjutama faili laiendi lõppu .json . css  . svg  .png

function Cart() {
        const [products, setProducts] = useState(JSON.parse(localStorage.getItem("cart"))|| [] ) ;
        const {setCartSum} = useContext(CartSumContext);
         
        function eraseByOne (index) {
          products.splice(index, 1);
            setProducts(products.slice());
            localStorage.setItem("cart", JSON.stringify(products));
            setCartSum(sumPrice())
      
         }
         function emptyCart () {
          products.splice(0); 
            setProducts(products.slice()); // htmli uuendamiseks
            localStorage.setItem("cart", JSON.stringify(products)); // salvestamiseks
            setCartSum(sumPrice())
         }
         const sumPrice = ( ) => {
          let sum = 0;
          products.forEach(product => sum = sum + product.toode.price * product.kogus);
          return sum;
         }
        //  const sumPcs = ( ) => {
        //     let sum = 0;
        //     products.forEach(product => sum = sum += product.id);
        //     return sum;
        //  }   
        const sumQuantity = ( ) => {
          let sum = 0;
          products.forEach(product => sum = sum + product.kogus);
          return sum;
         }
        const decreaseQuantity = (product) => {
          product.kogus--;
          if (product.kogus === 0) {
            const index = products.indexOf(product);
            eraseByOne(index);
          }
          setProducts(products.slice()); // htmli uuendamiseks
          localStorage.setItem("cart", JSON.stringify(products));
          setCartSum(sumPrice())
        }
        const increaseQuantity = (product) => {
          product.kogus++;
          setProducts(products.slice()); // htmli uuendamiseks
          localStorage.setItem("cart", JSON.stringify(products));
          setCartSum(sumPrice())
        }
  return (
    <div>

       {products.length > 0 && 
        <>

        <Button variant="contained" onClick={emptyCart} >Clear</Button>
        <div>Different products:{products.length} pcs</div>
        <div>Total products:{sumQuantity()} pcs</div>
        </>}
      
      {products.map(product => 
      <div className={styles.product} key={product.toode.id}>
        <span className={styles.product__left}>
        <img  className={styles.image} src={product.toode.image}  alt="" />
            <div className={styles.title}>{product.toode.title}</div>
            </span>
            <span className={styles.product__right}>
              <button onClick={() => decreaseQuantity(product)}>-</button>
            <div className={styles.quantity}>{product.kogus}tk</div>
            <button onClick={() => increaseQuantity(product)}>+</button>
            <div className={styles.price}>{product.toode.price.toFixed(2)}€</div>
            </span>
       

        <Button className={styles.button} variant="outlined" onClick={() =>eraseByOne(product.toode)}>x</Button>
      </div>
    
    )}
    
    {/* <div>Total products: {sumPcs()} pcs</div><br />
       */}
      {products.length === 0 &&<div>Cart is empty: <Link to="/">
      Go to Home Page
      </Link></div>} 
      
      {products.length > 0 && 
      <>
      <div>Total price €: {sumPrice().toFixed(2)} €</div><br />
      
      <ParcelMachines/>
      <Payment sum={sumPrice().toFixed(2)}/>
      </>}
    </div>
  )
}

export default Cart