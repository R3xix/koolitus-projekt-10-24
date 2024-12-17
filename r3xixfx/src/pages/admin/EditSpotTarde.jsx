import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Col, Container, Row, Spinner } from 'react-bootstrap';

function EditSpotTarde() {
  const [spots, setSpots] = useState([]);
    const spotsUrl="https://r3xix-fx-default-rtdb.europe-west1.firebasedatabase.app/spotTrade.json"
    
    const {index} = useParams(); // URL parameetri hankimine
    const navigate = useNavigate(); // Navigeerimiseks
    
    const found = spots[index];
    
    const [loading, setLoading] = useState(true);
  
    const idRef = useRef();
    const logoRef = useRef();
    const symbolRef = useRef();
    const dateRef = useRef();
    const timeRef = useRef();
    const tokensRef = useRef();
    const priceRef = useRef();
    const currentPriceRef = useRef();
    const informationRef = useRef();
  
    useEffect(() => {
      fetch(spotsUrl)
        .then(res => res.json())
        .then(json => {
          setSpots(json || []);
          setLoading(false);
        });
    }, []);
  
  
    const edit = () => {
      spots[index] = {
        "id": Number(idRef.current.value),
        "logo": logoRef.current.value,
        "symbol": symbolRef.current.value,
        "date": dateRef.current.value,
        "time": Number(timeRef.current.value),
        "tokens": Number(tokensRef.current.value),
        "price": Number(priceRef.current.value),
        "currentprice": Number(currentPriceRef.current.value),
        "information": informationRef.current.value,
      };
      fetch(spotsUrl, {method:"PUT", body: JSON.stringify(spots)})
      .then(() => navigate('/admin/maintain-spot'));
    };
    if (loading) {
      return <Spinner />;
    }
  
    if (!found) {
      return <div>Trade not found</div>;
    }
  return (
     <div className="container">
          
            {/* {idUnique === false && <div>ID is already in use!</div>} */}
            <br />
            <h2 className="title">Edit spot portfolio</h2>
           
          <div>
          <Container>
          <Row>
            <Col>
            <div className="field">
              <label className="label">ID</label>
              <input  type="text" ref={idRef} defaultValue={found.id} className="input" />
            </div>
            <div className="field">
              <label className="label">Logo</label>
              <input type="text" ref={logoRef} defaultValue={found.logo} className="input" />
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
              <label className="label">Tokens</label>
              <input type="number" ref={tokensRef} defaultValue={found.tokens} className="input" />
            </div>
            <div className="field">
              <label className="label">Open Price</label>
              <input type="number" ref={priceRef} defaultValue={found.price} className="input" />
            </div>
            <div className="field">
              <label className="label">Current Price</label>
              <input type="number" ref={currentPriceRef} defaultValue={found.currentprice} className="input" />
            </div>
            <div className="field">
              <label className="label">Information</label>
              <input type="text" ref={informationRef} defaultValue={found.information} className="input" />
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


export default EditSpotTarde