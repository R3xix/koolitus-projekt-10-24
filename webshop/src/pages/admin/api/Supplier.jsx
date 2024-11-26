import React, { useState, useEffect } from 'react'

// tarnija -ke s mulle kaupa müüb
// tarnija hindu meie ei saagi muuta
// tarnija muudab ise hindu vastavalt oma sisetundele
// meie veebipoe omanikena etuleme siia ja vaatame mis on tänane hind

function Supplier() {
    const [products, setProducts] = useState([]);

    // uef --on käivitamise funktsioon ehk kui siis lehele tullakse siis 
    //koheselt selle sisu käivitub ja rohkem see funktsioon ei köäivitu
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
        
    }, []);
    // 7x th 7x td
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Rating rate</th>
                    <th>Rating count</th>
                </tr>
            </thead>

            <tbody>
              {products.map(product =>
             
                <tr key={product.id}>
                    <td><img style={{width:"100px"}} src={product.image} alt="" /></td>
                    <td>{product.title}</td>
                    <td>Price: {product.price}€</td>
                    <td>{product.description}</td>
                    <td>{product.category}</td>
                    <td>Rating: {product.rating.rate}</td>
                    <td>{product.rating.count}</td>
            
                </tr>
                )}
            </tbody>
         </table>
    </div>
  )
}

export default Supplier



