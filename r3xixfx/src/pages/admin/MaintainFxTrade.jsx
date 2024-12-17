import React, { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
import Table from "react-bootstrap/Table";
import "../../css/Tables.css"
import AddFxTrade from './AddFxTrade';
import { BiEditAlt } from 'react-icons/bi';
import "../../css/EditFxTrade.css";


function MaintainFxTrade() {
  const [fxtrade, setFxTrade] = useState([]);
  const [expandedRow, setExpandedRow] = useState(null); // Jälgib, milline rida on avatud
  const [showAddMenu, setShowAddMenu] = useState(false); // Jälgib, kas lisamismenüü on nähtav
  const fxtradeUrl = "https://r3xix-fx-default-rtdb.europe-west1.firebasedatabase.app/fxtrades.json";

  useEffect(() => {
    fetch(fxtradeUrl)
      .then(res => res.json())
      .then(json => setFxTrade(json || []));
  }, []);

  const erase = (index) => {
    const updatedTrades = fxtrade.filter((_, i) => i !== index);
    setFxTrade(updatedTrades);
    fetch(fxtradeUrl, { method: "PUT", body: JSON.stringify(updatedTrades) });
  };

  const handleInputChange = (index, field, value) => {
    const updatedTrades = [...fxtrade];
    updatedTrades[index][field] = value;
    setFxTrade(updatedTrades);
  };

  const saveChanges = () => {
    fetch(fxtradeUrl, { method: "PUT", body: JSON.stringify(fxtrade) });
  };

  return (
    <div className="fxtrade-container">
    <section className="table-header">
      <h1>Maintain Fx Trades</h1>
      <button className="btn-add-trade" onClick={() => setShowAddMenu(!showAddMenu)}>
        {showAddMenu ? "Close Add Menu" : "Add New Trade"}
      </button>
    </section>

    {showAddMenu && (
      <div className="add-menu">
        <AddFxTrade />
      </div>
    )}
      <Table className="custom-table" striped bordered hover variant="light">
        <thead>
          <tr>
            <th>#</th>
            <th >Strategy</th>
            <th>Position</th>
            <th>Symbol</th>
            <th>Date</th>
            <th>Volume lots</th>
            <th>Open price $</th>
            <th>TP price</th>
            <th>Setup image</th>
            <th><MdDelete /></th>
            <th>Edit/Close</th>
          </tr>
        </thead>
        <tbody>
          {fxtrade.map((fx, index) => (
            <React.Fragment key={fx.id}>
              <tr>
                <td>{fx.id}</td>
                <td>{fx.strategy}</td>
                <td>{fx.position}</td>
                <td>{fx.symbol}</td>
                <td>{fx.date}</td>
                <td>{fx.volume}</td>
                <td>{fx.openprice}</td>
                <td>{fx.closeprice}</td>
                <td>
                  <img style={{ width: '100px' }} src={fx.image} alt="" />
                </td>
                <td>
                <MdDelete className="btn-delete" onClick={() => erase(index)} />
                </td>
                <td>
                <BiEditAlt className="editbtn-image"
                    onClick={() => setExpandedRow(expandedRow === index ? null : index)} >{expandedRow === index ? "Close" : "Edit"}</BiEditAlt>
                </td>
              </tr>
              {expandedRow === index && (
                <tr className="editfx-expanded-row">
                  <td colSpan="13">
                    <div className="editfx-expander-content">
                      <div className="editfx-label">
                        Strategy:
                        <input
                          className="editfx-input"
                          type="text"
                          value={fx.strategy}
                          onChange={(e) => handleInputChange(index, 'strategy', e.target.value)}
                        />
                      </div>
                      <div className="editfx-label">
                        Position:
                        <input
                          className="editfx-input"
                          type="text"
                          value={fx.position}
                          onChange={(e) => handleInputChange(index, 'position', e.target.value)}
                        />
                      </div>
                      <div className="editfx-label">
                        Symbol:
                        <input
                          className="editfx-input"
                          type="text"
                          value={fx.symbol}
                          onChange={(e) => handleInputChange(index, 'symbol', e.target.value)}
                        />
                      </div>
                      <div className="editfx-label">
                        Date:
                        <input
                          className="editfx-input"
                          type="date"
                          value={fx.date}
                          onChange={(e) => handleInputChange(index, 'date', e.target.value)}
                        />
                      </div>
                      <div className="editfx-label">
                        Volume lots:
                        <input
                          className="editfx-input"
                          type="text"
                          value={fx.volume}
                          onChange={(e) => handleInputChange(index, 'volume', e.target.value)}
                        />
                      </div>
                      <div className="editfx-label">
                        Open price:
                        <input
                          className="editfx-input"
                          type="text"
                          value={fx.openprice}
                          onChange={(e) => handleInputChange(index, 'openprice', e.target.value)}
                        />
                      </div>
                      <div className="editfx-label">
                        Close price:
                        <input
                          className="editfx-input"
                          type="text"
                          value={fx.closeprice}
                          onChange={(e) => handleInputChange(index, 'closeprice', e.target.value)}
                        />
                      </div>
                    </div>
                    <button onClick={saveChanges} className="editfx-button-save">Save</button>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default MaintainFxTrade;
