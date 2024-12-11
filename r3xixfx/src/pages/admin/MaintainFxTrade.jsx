import React, { useEffect, useState } from 'react'
import fxJSON from '../../components/data/fx.json';
import { Link } from 'react-router-dom';

function MaintainFxTrade() {
  const [fxs, setFxs] = useState(fxJSON.slice());

  useEffect(() => {
    fetch(fxJSON)
      .then(res => res.json())
      .then(json  => setFxs(json || [ ]) ) //
  }, []);

  const erase = (fxs) => {
    fxJSON.splice(fxs, 1);
    setFxs(fxJSON.slice());
  }
  return (
    <div>
       <table>


            <thead>
              <tr>  
                <th>#</th>
                <th>Strategy</th>
                <th>Position</th>
                <th>Symbol </th>
                <th>Date</th>
                <th>Volume lots</th>
                <th>Open price $</th>
                <th>TP price</th>
                <th>Pips traded</th>
                <th>Profit/loss $</th>
                <th>Setup image</th>
                <th>X</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              <br />
             <h1>Maintain Fx Trades</h1>
             <br />
               {fxs.map((fx, index) => 
                <tr key={fx.id} >  
                    <td>{fx.id}</td>
                    <td>{fx.strategy}</td>
                    <td>{fx.position}</td>
                    <td>{fx.symbol}</td>
                    <td>{fx.date}</td>
                    <td>{fx.volume}</td>
                    <td>{fx.openprice}</td>
                    <td>{fx.closeprice}</td>
                    <td>{fx.pips}</td>
                    <td>{fx.profitloss}</td>
                    <td> <img style={{ width: '100px' }} src={fx.image} alt="" /></td>
                      
                    <td><button className="btn-delete text-white" onClick={() => erase(index)}>x</button></td>
                    <td>
                    <Link to={"/admin/edit-fxtrade/" + index}>
                       <button className="btn-edit text-white">Edit</button>
                     </Link>
                    </td>
                </tr> )}
            </tbody>
        </table>
    </div>
  )
}

export default MaintainFxTrade