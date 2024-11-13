import React, { useState } from 'react'
import kasutajadJSON from "../kasutajad.json"

function Kasutajad() {

    const [kasutajad, uuendaKasutajad] = useState(kasutajadJSON.slice());
    const allBack = () => {
        uuendaKasutajad(kasutajadJSON.slice());
    }
    const filterName = () => {
        const result = kasutajad.filter(kasutaja => kasutaja.username.length >= 10 );
        uuendaKasutajad(result);
    }
    const findIndexAndDelete = (kasutaja) => {
         const index = kasutajad.indexOf(kasutaja);
         kasutajad.splice(index, 1);
         uuendaKasutajad(kasutajad.slice());
    }
    const findIndexLucio = () => {
        const index = kasutajad.findIndex(user =>  user.email  === "Lucio_Hettinger@annie.ca");
        alert(index)
    }
    const findFirstNameC = () => {
        const found = kasutajad.find(user => user.name.substring(0,1)=== "C" );
        alert(found.name);
    }
    const sortByLattitude = () => {
        kasutajad.sort((a,b) => a.address.geo.lat.localeCompare(b.address.geo.lat) );
        uuendaKasutajad(kasutajad.slice());
    }
    const filterByLongLattitude = () => {
        const result = kasutajad.filter(user => user.address.geo.lng > 0 );
        uuendaKasutajad(result);
    }
    const sumIds = () => {
        let sum = 0;
        kasutajad.forEach(user => sum = sum + user.id );
        console.log(sum);
    }
    const addToPhoneNumber = () => {
        const result = kasutajad.map(user => ({...user, phone: "000-"+user.phone} ));
        uuendaKasutajad(result);
    }
    const replaceAllWithEmails = () => {
        const result = kasutajad.map(user => user.email);
        alert(result);
    }
    const replaceCatchphraseLetter = () => {
        const result = kasutajad.map(user => (
            {...user, company: {...user.company, catchPhrase: user.company.catchPhrase.replaceAll("a", "e")}}
        ));
        uuendaKasutajad(result);
    }


  return (
    <div>

        <div>{kasutajad.length}</div>
        <button onClick={() => allBack()}>0</button>
        <button onClick={() => filterName()}>1</button>
        <button onClick={() => findIndexLucio()}>3</button>
        <button onClick={() => findFirstNameC()}>4</button>
        <button onClick={() => sortByLattitude()}>5</button>
        <button onClick={() => filterByLongLattitude()}>6</button>
        <button onClick={() => sumIds()}>7</button>
        <button onClick={() => addToPhoneNumber()}>8</button>
        <button onClick={() => replaceAllWithEmails()}>9</button>
        <button onClick={() => replaceCatchphraseLetter()}>10</button>

        <div>{kasutajad.map(kasutaja =>
           <div>
            <div>{kasutaja.id}</div>
            <div>{kasutaja.name}</div>
            <div>{kasutaja.username}</div>
            <div>{kasutaja.email}</div>
            <div>{kasutaja.address.street}</div>
            <div>{kasutaja.address.suite}</div>
            <div>{kasutaja.address.city}</div>
            <div>{kasutaja.address.zipcode}</div>
            <div>{kasutaja.address.geo.lat}</div>
            <div>{kasutaja.address.geo.lng}</div>
            <div>{kasutaja.phone}</div>
            <div>{kasutaja.website}</div>
            <div>{kasutaja.company.name}</div>
            <div>{kasutaja.company.catchPhrase}</div>
            <div>{kasutaja.company.bs}</div>
            <button onClick={() => findIndexAndDelete(kasutaja)}>2</button>
            <br />
            </div>)}</div>
        
        
        </div>
  )
}

export default Kasutajad