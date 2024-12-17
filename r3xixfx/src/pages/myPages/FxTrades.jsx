import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "../../css/Tables.css"


function FxTrades() {
  const [fxs, setFxs] = useState([]);
  const [filterSymbol, setFilterSymbol] = useState("");
  const [filterStrategy, setFilterStrategy] = useState("");
  const [filterPosition, setFilterPosition] = useState("");
  const [expandedRow, setExpandedRow] = useState(null);
  const [activeFilter, setActiveFilter] = useState(null);

  const fxsUrl =
    "https://r3xix-fx-default-rtdb.europe-west1.firebasedatabase.app/fxtrades.json";

  useEffect(() => {
    fetch(fxsUrl)
      .then((res) => res.json())
      .then((json) => setFxs(json || []));
  }, []);

  const calculatePips = (fx) => {
    if (fx.symbol === "EURUSD" || fx.symbol === "GBPUSD") {
      return fx.position === "long"
        ? (fx.closeprice - fx.openprice) * 100000
        : fx.position === "short"
          ? (fx.openprice - fx.closeprice) * 100000
          : 0;
    } else if (fx.symbol === "XAUUSD") {
      return fx.position === "long"
        ? (fx.closeprice - fx.openprice) * 100
        : fx.position === "short"
          ? (fx.openprice - fx.closeprice) * 100
          : 0;
    }
    // Default calculation for future symbols
    return 0;
  };
  const calculateProfitLoss = (fx) => {
    const pips = calculatePips(fx);
    return pips * (fx.volume || 0); // Profit/Loss = Pips * Volume
  };


  // Filtreerimine
  const filteredFxs = fxs.filter((fx) => {
    return (
      (!filterSymbol || fx.symbol === filterSymbol) &&
      (!filterStrategy || fx.strategy === filterStrategy) &&
      (!filterPosition || fx.position === filterPosition)
    );
  })
    .map((fx) => ({
      ...fx,
      pips: calculatePips(fx),
      profitloss: calculateProfitLoss(fx),
    }));

  // Total Pips Sum
  const totalPipsSum = filteredFxs.reduce((sum, fx) => sum + fx.pips, 0);


  // Filtreeritud Profit/Loss summa
  const filteredProfitLossSum = filteredFxs.reduce(
    (total, fx) => total + (fx.profitloss || 0),
    0
  );
  // Filtreerimine
  const strategies = Array.from(new Set(fxs.map((fx) => fx.strategy)));
  const positions = Array.from(new Set(fxs.map((fx) => fx.position)));
  const symbols = Array.from(new Set(fxs.map((fx) => fx.symbol)));

  // Filtreerimine
  const handleFilterToggle = (filter) => {
    setActiveFilter(activeFilter === filter ? null : filter);
  };
  // Filtreerimine
  const handleFilterSelect = (filter, value) => {
    if (filter === "strategy") setFilterStrategy(value);
    if (filter === "position") setFilterPosition(value);
    if (filter === "symbol") setFilterSymbol(value);
    setActiveFilter(null);
  };
  // Filtreerimine
  const renderFilterMenu = (filterType, options) => {
    return (
      activeFilter === filterType && (
        <div className="filter-dropdown">
          <div
            className="filter-option"
            onClick={() => handleFilterSelect(filterType, "")}
          >
            All
          </div>
          {options.map((option) => (
            <div
              key={option}
              className="filter-option"
              onClick={() => handleFilterSelect(filterType, option)}
            >
              {option} </div>))}
        </div>
      ));
  };

  return (
    <div>
      <section className="table-header">
        <h1>Fx Trading Journal</h1>
      </section>

      <Table className="custom-table" striped bordered hover variant="light">
        <thead>
          <tr>
            <th style={{ width: "5%" }}>#</th>
            <th style={{ width: "10%" }}>
              <span className="filter-arrow" onClick={() => handleFilterToggle("strategy")}> ▼</span>
              Strategy
              {renderFilterMenu("strategy", strategies)}
            </th>
            <th style={{ width: "10%" }}>
              <span className="filter-arrow" onClick={() => handleFilterToggle("position")}> ▼</span>
              Position
              {renderFilterMenu("position", positions)}
            </th>
            <th style={{ width: "10%" }}>
              <span className="filter-arrow" onClick={() => handleFilterToggle("symbol")}>  ▼ </span>
              Symbol
              {renderFilterMenu("symbol", symbols)}
            </th>
            <th style={{ width: "10%" }}>Date</th>
            <th style={{ width: "10%" }}>Volume lots</th>
            <th style={{ width: "10%" }}>Open price $</th>
            <th style={{ width: "10%" }}>TP price</th>
            <th style={{ width: "10%" }}>Pips traded</th>
            <th style={{ width: "15%" }}>Profit/loss $</th>
            <th style={{ width: "10%" }}>Setup image</th>
          </tr>
        </thead>
        <tbody>
          {filteredFxs.map((fx) => (
            <React.Fragment key={fx.id}>
              <tr
                onClick={() =>
                  setExpandedRow(expandedRow === fx.id ? null : fx.id)}
                style={{ cursor: "pointer", height: "50px" }}>
                <td>{fx.id}</td>
                <td>{fx.strategy}</td>
                <td>{fx.position}</td>
                <td>{fx.symbol}</td>
                <td>{fx.date}</td>
                <td>{fx.volume}</td>
                <td>{fx.openprice}</td>
                <td>{fx.closeprice}</td>
                <td>{fx.pips.toFixed(0)}</td>
                <td style={{ color: fx.profitloss >= 0 ? "green" : "red", fontWeight: "bold", }}>
                  {fx.profitloss.toFixed(2)}$
                </td>
                <td> <a href={fx.image} target="_blank" rel="noopener noreferrer">
                    <img style={{ width: "50px" }} src={fx.image} alt="" /> </a>
                </td>
              </tr>
              {expandedRow === fx.id && (
                <tr>
                  <td colSpan="11" style={{ backgroundColor: "#f9f9f9" }}>
                    <div className="expanded-row">
                      <div className="expanded-row__text">
                        <h5>Details for {fx.symbol}</h5>
                        <p><strong>Strategy:</strong> {fx.strategy}</p>
                        <p><strong>Position:</strong> {fx.position}</p>
                        <p><strong>Volume:</strong> {fx.volume}</p>
                        <p><strong>Open Price:</strong> {fx.openprice}</p>
                        <p><strong>Close Price:</strong> {fx.closeprice}</p>
                        <p><strong>Pips:</strong> {fx.pips.toFixed(0)}</p>
                        <p>
                          <strong>Profit/Loss:</strong>{" "}
                          <span
                            style={{
                              color: fx.profitloss >= 0 ? "green" : "red",
                              fontWeight: "bold",
                            }}
                          >
                            {fx.profitloss.toFixed(2)}
                          </span>
                        </p>
                        <p><strong>Information:</strong> {fx.addinfo}</p>
                      </div>
                      <div className="expanded-row__image">
                        <img src={fx.image} alt="Setup" />
                      </div>
                    </div>
                  </td>
                </tr>
              )}

            </React.Fragment>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="7" />
            <td>Total Pips:</td>
            <td style={{color: totalPipsSum >= 0 ? "green" : "red",  fontWeight: "bold", textAlign: "center", }}>
              {totalPipsSum.toFixed(2)}
            </td>
            <td/>
          </tr>
          <tr>
            <td colSpan="8" />
            <td>Total Profit/Loss $:</td>
            <td style={{ color: filteredProfitLossSum >= 0 ? "green" : "red",  fontWeight: "bold", textAlign: "center",  }} >
              {filteredProfitLossSum.toFixed(2)}$
            </td>
            <td/>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
}

export default FxTrades;
