import React, { useState } from 'react'

function Meist() {

    const [message, maaraMessage] = useState("Vali mõni tegevus");

  
        


  return (
    <div>

        <div>{message}</div>

        <button onClick={() => maaraMessage("Selleks saada meile e-mail jobs@html-css.com")}>Kandideeri tööle</button>
        <button onClick={() => maaraMessage("Meil on 10 töötajat, kelle info ilmub veebilehele lähiajal")}>Vaata meie töötajaid</button>
        <button onClick={() => maaraMessage("Ühenduse võtmiseks mine lehele Kontakt")}>Võta meiega ühendust</button>





       <p

          className="text1" style={{ color: 'blue', fontStyle: 'italic' }}>Welcome to my home
       </p>

       <p
          className="text2">Welcome to my party
       </p>

       <img className="Pilt" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.x-ibkw-Kpzz3LV8WfR0W7QHaEo%26pid%3DApi&f=1&ipt=ffe191378b4286c0da2ebe447be63d90e789fbd5361c9e5cb7272223d5070d83&ipo=images" alt="Beautiful Nature" srcset=""></img>
       <table>
            <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
            </tr>
            <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
            </tr>
            <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
            </tr>
            <tr>
                <td>Ernst Handel</td>
                <td>Roland Mendel</td>
                <td>Austria</td>
            </tr>
            <tr>
                <td>Island Trading</td>
                <td>Helen Bennett</td>
                <td>UK</td>
            </tr>
            <tr>
                <td>Laughing Bacchus Winecellars</td>
                <td>Yoshi Tannamuri</td>
                <td>Canada</td>
            </tr>
            <tr>
                <td>Magazzini Alimentari Riuniti</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
            </tr>
        </table>
 
        
        
        
        </div>
  )
}

export default Meist