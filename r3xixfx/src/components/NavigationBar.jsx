import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Form} from 'react-bootstrap';




function NavigationBar() {

  
  return (
    <div>
         <Navbar sticky="top" bg="dark" data-bs-theme="dark" >
          <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src="/logo.png" // Asenda oma logo failitee või URL-iga
              alt="Logo"
              width="50"
              height="50"
              className="d-inline-block align-top"
            /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                    <Nav.Link as={Link} to="">Home page</Nav.Link>
                    <Nav.Link as={Link} to="/spot-page">Crypto portfolio</Nav.Link>
                    <Nav.Link as={Link} to="/fx-trades">FX trades</Nav.Link>
                    <Nav.Link as={Link} to="/my-strategies">My strategies</Nav.Link>   
                    <Nav.Link as={Link} to="/best-learning-videos">My videos</Nav.Link>                 

                <NavDropdown title="admin" id="collapsible-nav-dropdown">
                    <NavDropdown.Item as={Link} to="admin/maintain-spot">Maintain spot</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="admin/maintain-fxtrade">Maintain fx trade</NavDropdown.Item>    
                </NavDropdown>  
             </Nav>
            </Navbar.Collapse>
            <Form className="d-flex">
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" searchFilter"
            />
          </Col>
          <Col xs="auto">
            <Button  style={{ backgroundColor: '#444', color: 'white' }} type="submit">Submit</Button>
          </Col>
        
      </Form>
          </Container>
          
    </Navbar>
    </div>
  )
}

export default NavigationBar