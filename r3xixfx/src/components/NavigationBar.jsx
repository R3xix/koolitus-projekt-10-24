import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



function NavigationBar() {

  
  return (
    <div>
         <Navbar bg="dark" data-bs-theme="dark">
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

                <NavDropdown title="admin" id="collapsible-nav-dropdown">
                    <NavDropdown.Item as={Link} to="admin">Admin home</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="admin/add-fxtrade">Add fx trade</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="admin/add-spottrade">Add spot trade</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="admin/add-strategy">Add strategy</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="admin/maintain-spot">Maintain spot</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="admin/maintain-fxtrade">Maintain fx trade</NavDropdown.Item>    
                </NavDropdown>  
                <Nav.Link as={Link} to="/about-me">Who am I?</Nav.Link>
             </Nav>
            </Navbar.Collapse>
            
          </Container>
          
    </Navbar>
    </div>
  )
}

export default NavigationBar