import React, { useState, useEffect } from 'react'

function Books2() {
    const [books, setBooks] = useState<{isbn13: string, cover_image:string, title:string, publication_year: number}[]>([]);

    useEffect(() => {
        fetch("https://www.freetestapi.com/api/v1/books")
        .then(res => res.json() )
        .then(json => setBooks(json))
        
    }, []);


    // https://www.freetestapi.com/api/v1/books
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Publication year</th>
                    
                </tr>
            </thead>

            <tbody>
              {books.map(book =>
             
                <tr key={book.isbn13}>
                    <td><img style={{width:"100px"}} src={book.cover_image} alt="" /></td>
                    <td>{book.title}</td>
                    <td>Year: {book.publication_year}</td>
                    
            
                </tr>
                )}
            </tbody>
         </table>
    </div>
  )
}

export default Books2