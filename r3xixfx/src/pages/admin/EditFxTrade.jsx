import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import fxJSON from '../../components/data/fx.json';
import NavigationBar from '../../components/NavigationBar';
import { Col, Container, Row } from 'react-bootstrap';

function EditFxTrade() {
  const [fxs, setFxs] = useState([]); // Seisund JSON-i jaoks
  const { fxIndex } = useParams(); // URL parameetri hankimine
  const fxsLS = JSON.parse(localStorage.getItem("fxTrades")) || [] ;
  const navigate = useNavigate(); // Navigeerimiseks

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
  const profitlossRef = useRef();
  const imageRef = useRef();

  // useEffect(() => {
  //   const savedFxs = JSON.parse(localStorage.getItem('fxTrades'));
  //   console.log('Loaded from localStorage:', savedFxs);
  //   if (savedFxs) {
  //     setFxs(savedFxs);
  //   } else {
  //     setFxs(fxJSON.slice());
  //   }
  // }, []);

  // if (!fxs || fxs.length === 0) {
  //   return <div>Loading...</div>;
  // }

  const found = fxs[Number(fxIndex)];
  if (!found) {
    return <div>Trade not found</div>;
  }

  const edit = () => {
    const updatedFxs = [...fxs];
    updatedFxs[fxIndex] = {
      id: Number(idRef.current.value),
      strategy: strategyRef.current.value,
      position: positionRef.current.value,
      symbol: symbolRef.current.value,
      date: dateRef.current.value,
      time: Number(timeRef.current.value),
      volume: Number(volumeRef.current.value),
      openprice: Number(openpriceRef.current.value),
      closeprice: Number(closepriceRef.current.value),
      pips: Number(pipsRef.current.value),
      profitloss: Number(profitlossRef.current.value),
      image: imageRef.current.value,
    };

    localStorage.setItem('fxTrades', JSON.stringify(updatedFxs)); // Salvestamine
    setFxs(updatedFxs); // React seisundi värskendamine
    navigate('/admin/maintain-fxtrade');
  };


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
          <input type="text" ref={idRef} defaultValue={found.id} className="input" />
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
          <label className="label">Profit/Loss</label>
          <input type="number" ref={profitlossRef} defaultValue={found.profitloss} className="input" />
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
        
        {/* <Link to="/admin/maintain-products">
        
        </Link> */}
       
    </div>
  )
}

export default EditFxTrade