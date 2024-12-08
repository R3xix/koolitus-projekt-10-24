
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


function NavigationBar() {
  return (
    <div>

          
     <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand as={Link} to="/">Webshopper</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                    <Nav.Link as={Link} to="">Home page</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contacts</Nav.Link>
                    <Nav.Link as={Link} to="/shops">Shops</Nav.Link>
                    <Nav.Link as={Link} to="/cart">Cart</Nav.Link>

                <NavDropdown title="admin" id="collapsible-nav-dropdown">
                    <NavDropdown.Item as={Link} to="admin">Admin home</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="admin/add-product">Add products</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="admin/maintain-products">Maintain products</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="admin/maintain-categories">Maintain categories</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="admin/maintain-shops">Maintain shops</NavDropdown.Item>               
                </NavDropdown>
      
                <Nav.Link as={Link} to="login">Login </Nav.Link>
                <Nav.Link as={Link} to="signup">Sign Up</Nav.Link>

             </Nav>
            </Navbar.Collapse>
          </Container>
    </Navbar>



    </div>
  )
}

export default NavigationBar