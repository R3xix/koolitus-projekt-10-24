import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import '../../css/EditFxTrade.css';

function EditFxTrade() {
  const [fxtrade, setFxTrade] = useState([]); // Seisund JSON-i jaoks
  const fxtradeUrl="https://r3xix-fx-default-rtdb.europe-west1.firebasedatabase.app/fxtrades.json"
  const {index} = useParams(); // URL parameetri hankimine
  const navigate = useNavigate(); // Navigeerimiseks
  const found = fxtrade[index];
  const [loading, setLoading] = useState(true);

  const idRef = useRef();
  const strategyRef = useRef();
  const positionRef = useRef();
  const symbolRef = useRef();
  const dateRef = useRef();
  const timeRef = useRef();
  const volumeRef = useRef();
  const openpriceRef = useRef();
  const closepriceRef = useRef();
  const pipsRef = useRef();
  const imageRef = useRef();

  useEffect(() => {
    fetch(fxtradeUrl)
      .then(res => res.json())
      .then(json  => {
        setFxTrade(json || [] )}) //
        setLoading(false)
  }, []);


  const edit = () => {
    fxtrade[index] = {
      "id": Number(idRef.current.value),
      "strategy": strategyRef.current.value,
      "position": positionRef.current.value,
      "symbol": symbolRef.current.value,
      "date": dateRef.current.value,
      "time": Number(timeRef.current.value),
      "volume": Number(volumeRef.current.value),
      "openprice": Number(openpriceRef.current.value),
      "closeprice": Number(closepriceRef.current.value),
      "pips": Number(pipsRef.current.value),
      "image": imageRef.current.value,
    };
    fetch(fxtradeUrl, {method:"PUT", body: JSON.stringify(fxtrade)})
    .then(() => navigate('/admin/maintain-fxtrade'));
  };
  if (loading === true) {
    return <Spinner animation="border" variant="dark" />
      }
  if (found === undefined) {
    return (<div>
           <div>Trade not found</div>

           </div>)
  }

      return (

       <div className="container">
      
        {/* {idUnique === false && <div>ID is already in use!</div>} */}
        <br />
        <h2 className="title">Edit FX Trade</h2>
       
      <div>
      <Container>
      <Row>
        <Col>
        <div className="field">
          <label className="label">ID</label>
          <input  type="text" ref={idRef} defaultValue={found.id} className="input" />
        </div>
        <div className="field">
          <label className="label">Strategy</label>
          <input type="text" ref={strategyRef} defaultValue={found.strategy} className="input" />
        </div>
        <div className="field">
          <label className="label">Position</label>
          <input type="text" ref={positionRef} defaultValue={found.position} className="input" />
        </div>
        <div className="field">
          <label className="label">Symbol</label>
          <input type="text" ref={symbolRef} defaultValue={found.symbol} className="input" />
        </div>
        <div className="field">
          <label className="label">Date</label>
          <input type="date" ref={dateRef} defaultValue={found.date} className="input" />
        </div>
        <div className="field">
          <label className="label">Time</label>
          <input type="number" ref={timeRef} defaultValue={found.time} className="input" />
        </div>
        </Col>
        <Col>
        <div className="field">
          <label className="label">Volume</label>
          <input type="number" ref={volumeRef} defaultValue={found.volume} className="input" />
        </div>
        <div className="field">
          <label className="label">Open Price</label>
          <input type="number" ref={openpriceRef} defaultValue={found.openprice} className="input" />
        </div>
        <div className="field">
          <label className="label">Close Price</label>
          <input type="number" ref={closepriceRef} defaultValue={found.closeprice} className="input" />
        </div>
        <div className="field">
          <label className="label">Pips Earned</label>
          <input type="number" ref={pipsRef} defaultValue={found.pips} className="input" />
        </div>
       
        <div className="field">
          <label className="label">Image</label>
          <input type="text" ref={imageRef} defaultValue={found.image} className="input" />
        </div>
        </Col>
        </Row>
        </Container>
        <button onClick={edit} className="button">Edit</button>
      </div>
        
        {/* <Link to="/admin/maintain-fxtrades">
        
        </Link> */}
       
    </div>
  )
}

export default EditFxTrade