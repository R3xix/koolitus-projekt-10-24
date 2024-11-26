import React, { useState, useEffect } from 'react'

function SupplierEscuela() {
    const [products, setProducts] = useState([]);

    // uef --on käivitamise funktsioon ehk kui siis lehele tullakse siis 
    //koheselt selle sisu käivitub ja rohkem see funktsioon ei köäivitu
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
        
    }, []);
  return (
    <div>
       <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Category name</th>
                    <th>Image</th>
                    <th>Price</th>
                    
                </tr>
            </thead>

            <tbody>
              {products.map(product =>
             
                <tr key={product.id}>
                    <td><img style={{width:"100px"}}  src={product.images[0]} alt="" /></td>
                    <td>{product.title}</td>
                    <td>{product.category.name}</td>
                    <td><img style={{width:"100px"}} src={product.category.image} alt="" /></td>
                    <td>{product.price}€</td>
                    
                    
            
                </tr>
                )}
            </tbody>
         </table>
    </div>
  )
}

export default SupplierEscuela