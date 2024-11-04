import React, { useState } from 'react'

function Books() {
    const [books, muudaBooks] =  useState(["The Great Gatsby", "War and Peace", "Ham let", "MobyDick", 
        "Kevade", "Mees"]);
    const sorteeriAZ = ( ) => {
        books.sort((a, b) => a.localeCompare(b, "et"));
        muudaBooks(books.slice());           
    }
    const sorteeriZA = ( ) => {
        books.sort((a, b) => b.localeCompare(a, "et"));
        muudaBooks(books.slice());
    }
    const sorteeriPikkus = ( ) => {
        books.sort((a, b) => a.length - b.length);
        muudaBooks(books.slice());
    }
    const sorteeriTeineTäht = ( ) => {
        books.sort((a, b) => a[1].localeCompare(b[1], "et"));
        muudaBooks(books.slice());
    }
    const sorteeriSõnadeArv = ( ) => {
        books.sort((a, b) => a.split(" ").length-b.split(" ").length);
        muudaBooks(books.slice());
    }
    const sorteeriEelviimanetaht = ( ) => {
        books.sort((a, b) => a[a.length-2].localeCompare(b[b.length-2]), "");
        muudaBooks(books.slice());
    }
    const FiltreeriTheAlgavad = ( ) => {
        const vastus = books.filter(book => book.startsWith("The"));
        muudaBooks(vastus);
    }
    const FiltreeriAndSisaldavad = ( ) => {
    const vastus = books.filter(book => book.includes("and"));
    muudaBooks(vastus);
    }
    const Filtreeri10tahteSõnas = ( ) => {
        const vastus = books.filter(book => book.length >10);
        muudaBooks(vastus);
    }
    const FiltreeriAlla7Tähte = ( ) => {
        const vastus = books.filter(book => book.length <7);
        muudaBooks(vastus);
    }
    const Filtreeri3plussSõna = ( ) => {
        const vastus = books.filter(book => book.split(" ").length >=3);
        muudaBooks(vastus);
    }
    const FiltreeriEelviimC = ( ) => {
        const vastus = books.filter(book => book[book.length - 2] === "c");
        muudaBooks(vastus);
    }



    const reset = ( ) => {
        
        muudaBooks(["The Great Gatsby", "War and Peace", "Ham let", "MobyDick", 
        "Kevade", "Mees"]);
    }



    

  return (
    <div>
        
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <button onClick={sorteeriPikkus}>Sorteeri sõnade pikkus</button>
        <button onClick={sorteeriTeineTäht}>Sorteeri teine täht</button>
        <button onClick={sorteeriSõnadeArv}>Sorteeri sõnade arv</button>
        <button onClick={sorteeriEelviimanetaht}>Sorteeri eelviimane täht</button>
        <br />
       <br />
        <button onClick={FiltreeriTheAlgavad}>Filtreeri The algavad</button>
        <button onClick={FiltreeriAndSisaldavad}>Filtreeri And sisaldavad</button>
        <button onClick={Filtreeri10tahteSõnas}>Filtreeri 10 tähte sõnas</button>
        <button onClick={FiltreeriAlla7Tähte}>Filtreeri alla 7 tähte sõnas</button>
        <button onClick={Filtreeri3plussSõna}>Filtreeri 3+ sõnad</button>
        <button onClick={FiltreeriEelviimC}>Filtreeri eelviimane täht C</button>
        <br /><br />
        <button onClick={reset}>Reset</button>


       {books.map(book =><div>{book}</div>)} 
        
        
        </div>
  )
}

export default Books