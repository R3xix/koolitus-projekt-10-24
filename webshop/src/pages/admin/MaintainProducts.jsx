import React, {useRef, useState } from 'react'
import productsJSON from "../../data/products.json"
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

function MaintainProducts() {
    const [products, setProducts] = useState(productsJSON.slice());
    const productRef = useRef();
    const priceRef = useRef();  
    const pictureRef = useRef(); 
    const findRef = useRef(); 
    

    
    
    const erase = (index) => {
        products.splice(index, 1);
        setProducts(products.slice());
        toast.error("Product deleted")
    }
    const empty = ( ) => { 
        setProducts(productsJSON.slice());
    }
    const find = ( ) => {
        
        const res = productsJSON.filter(product => 
            product.title.toLocaleLowerCase().includes(findRef.current.value.toLocaleLowerCase())
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
            <thead>
                <tr>  
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th>Rate count</th> 
                    <th>Delete</th>
                    <th>Change</th>
                </tr>
            </thead>
            <tbody>
               {products.map((product, index) => 
                <tr key={product.id} className={product.active ? "active"  :  "inactive"}>
                    <td><img style={{width:"100px"}} src={product.image} alt="" /></td>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>{product.category}</td>
                    <td>{product.stock}</td>
                    <td>{product.rating.rate}</td>
                    <td>{product.rating.count}</td>
                   
                    <td><button onClick={() => erase(index)}>x</button></td>
                    <td>
                <Link to={"/edit-products/" + index}>
                <button>Change</button>
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