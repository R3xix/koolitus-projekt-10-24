import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';

function HomePage() {
  return (
    <div>
      
       <Container>
      <Row className="px-4 my-5">
        <Col sm={7}><Image src="https://images.cnbctv18.com/wp-content/uploads/2022/09/cryptocurrency-2.jpg?impolicy=website&width=640&height=360" fluid rounded className=""/></Col>
        <Col sm={5}>
        <h1 class="font-weigh-light">Crypto world</h1>
        <p class="mt-4" >Cryptocurrency is a digital payment system that doesn't 
          rely on banks to verify transactions. It’s a peer-to-peer 
          system that can enable anyone anywhere to send and receive payments. 
          Instead of being physical money carried around and exchanged in the real world, 
          cryptocurrency payments exist purely as digital entries to an online database describing 
          specific transactions. When you transfer cryptocurrency funds, the transactions are recorded 
          in a public ledger. Cryptocurrency is stored in digital wallets.</p>
          <Button variant="light">Go to crypto</Button>
          </Col>
      </Row>
      <Row>
         <Card className="text-center bg-secondary text-white my-5 py-1">
            <p><Card.Body>This is some text within a card body.</Card.Body></p>
          </Card>
      </Row>
      <Row>
      <Col>
         <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src="https://www.t4trade.com/wp-content/uploads/2022/12/trade-forex-guide.png"
             className="card-img-custom" />
             <Card.Body>
             <h1><Card.Title>Card Title</Card.Title></h1>
             <Card.Text>
             Bla bla bla bla bla blabla blablablablablablabla bla  bla bla bla bla blabla 
             </Card.Text>
            <Button variant="light">Go .....</Button>
            </Card.Body>
          </Card>
      </Col>
      <Col>
         <Card style={{ width: '18rem', heigth: "50rem" }}>
             <Card.Img variant="top" src="https://simplyethical.com/wp-content/uploads/2024/09/SE-20240917-Markets-in-September.jpg" 
             className="card-img-custom"/>
             <Card.Body>
             <h1><Card.Title>Card Title</Card.Title></h1>
             <Card.Text>
             Bla bla bla bla bla blabla blablablablablablabla bla  bla bla bla bla blabla 
             </Card.Text>
            <Button variant="light">Go .....</Button>
            </Card.Body>
          </Card>
      </Col>
      <Col>
         <Card style={{ width: '18rem' }}>

             <Card.Img variant="top" src="https://img.freepik.com/free-photo/confident-handsome-hispanic-financial-broker-showing-fist-computer-screen-while-trading-from-home_662251-757.jpg"
              className="card-img-custom"/>
             <Card.Body>
             <h1><Card.Title>Card Title</Card.Title></h1>
             <Card.Text>
               Bla bla bla bla bla blabla blablablablablablabla bla  bla bla bla bla blabla 
             </Card.Text>
            <Button variant="light">Go ......</Button>
            </Card.Body>
          </Card>
      </Col>
      </Row>
    </Container>
    <footer class="py-3 my-5 bg-dark">
      <Container className="px-4">
        <p class="text-center text-white">Copyright &copy; R3xix Fx 2024</p>

      </Container>
    </footer>
    </div>
  )
}

export default HomePage