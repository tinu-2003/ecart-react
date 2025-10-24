import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Landingpage from '../pages/Landingpage';
import Prouduct from '../pages/Prouduct';

export default function Header() {
  return (
<>
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
              <Container>
                <Navbar.Brand href="#home">E-cart</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                      <Nav.Link href="/">Home</Nav.Link >
                        <Nav.Link href="/prouduct">View-Products</Nav.Link>
               
                    
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </div>
</>
  )
}
