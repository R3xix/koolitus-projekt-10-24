import React, {useEffect, useRef, useState } from 'react'
// import productsJSON from "../../data/products.json"
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import styles from "../../css/MaintainProduts.module.css"
import { Product } from '../../models/Product';



function MaintainProducts() {
    // const [products, setProducts] = useState(productsJSON.slice());
    const productRef = useRef<HTMLInputElement>(null);
    const priceRef = useRef<HTMLInputElement>(null);  
    const pictureRef = useRef<HTMLInputElement>(null); 
    const findRef = useRef<HTMLInputElement>(null); 
    

    const [products, setProducts] = useState<Product[]>([]);
    const productUrl = "https://webshopper1024-default-rtdb.europe-west1.firebasedatabase.app/products.json"

    useEffect(() => {
    fetch(productUrl)
    .then(res => res.json())
    .then(json  => setProducts(json || [ ]) ) //
}, []);
    
    const erase = (index: number) => {
        products.splice(index, 1);
        setProducts(products.slice());
        toast.error("Product deleted")
        
    }
    const empty = ( ) => { 
        setProducts(products.slice());
    }
    const find = ( ) => {
        const refCurrent = findRef.current;
        if (refCurrent === null) {
            console.log("REF JÄI HTMLI PANEMATA!!!")
            return;
        }
        const res = products.filter(product => 
            product.title.toLocaleLowerCase().includes(refCurrent.value.toLocaleLowerCase())
        );
        setProducts(res);
    }
   
  return (
    <div>
         <div>Find product: <input onChange={find} ref={findRef} type="text" /></div>
         <br />
        <div>Total products: {products.length} pcs</div>
        <br />
        <label >New product title: <input ref={productRef}type="text" /></label>
        <br />
        <label>New price: <input ref={priceRef }type="text" /></label>
         <br />
        
        <label>New picture: <input ref={pictureRef }type="text" /></label><br />
        
        
       
        <div><button onClick={empty}>Back to original</button></div><br />
       <table>
            <thead className={styles.thead}>
                <tr>  
                    <th>ID</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Image</th>
                    <th>Stock</th>
                    <th>Active</th>
                    <th>Rating</th> 
                    <th>Rating count</th>
                   
                </tr>
            </thead>
            <tbody>
               {products.map((product, index) => 
                <tr key={product.id} className={product.active ? styles.active  :  styles.inactive}>
                    <td><img style={{width:"100px"}} src={product.image} alt="" /></td>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>{product.description}</td>
                    <td>{product.category}</td>
                    <td>{product.image}</td>
                    <td>{product.stock}</td>
                    <td>{product.active}</td>
                    <td>{product.rating.rate}</td>
                    <td>{product.rating.count}</td>
                   
                    <td><button onClick={() => erase(index)}>x</button></td>
                    <td>
                <Link to={"/edit-products/" + index}>
                <button>Edit</button>
                </Link>
                </td>
                </tr> )}
            </tbody>
        </table>
        <ToastContainer />

    </div>
  )
}

export default MaintainProducts