import React, { useState, useEffect, useRef } from 'react'


function Books() {
    const [books, setBooks] = useState([]);
    const searchRef= useRef();
    const [searchTerm, setSearchTerm] =useState("react");

    useEffect(() => {
        fetch("https://api.itbook.store/1.0/search/" + searchTerm)
        .then(res => res.json() )
        .then(json => setBooks(json.books))
        
    }, [searchTerm]);

    // kui on loogelistest sulgudes siis tagastus kui API lehe avan siis tuleb jäuda
    // [ ] kohani. Uurin kus see on: siisnses näites "books" taga on []

    // https://api.itbook.store/1.0/search/react

    function changeSearchTerm(){
        if (searchRef.current.value.length < 3 ){
            return;
        }
        setSearchTerm(searchRef.current.value);  
       

    }
  return (
    <div>
        {/* <div>{searchTerm}</div> */}

        <input onChange={changeSearchTerm} ref={searchRef} type="text" />
         <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    
                </tr>
            </thead>

            <tbody>
              {books.map(book =>
             
                <tr key={book.isbn13}>
                    <td><img style={{width:"100px"}} src={book.image} alt="" /></td>
                    <td>{book.title}</td>
                    <td>Price: {book.price}€</td>
                    
            
                </tr>
                )}
            </tbody>
         </table>
    </div>
  )
}

export default Books