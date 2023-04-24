import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './navbar.css';

export default function NavbarComponent() {
  return (
    <Navbar className="navbar-container" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="/" className="navbar-brand">Acasă</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
                <span className="navbar-divider" style={{margin: 'auto'}}>|</span>
            <Nav.Link href="/functionalitati">Funcționalități</Nav.Link>
                <span className="navbar-divider" style={{margin: 'auto'}}>|</span>
            <Nav.Link href="/clasapp">Clasificare & Aplicații</Nav.Link>
                <span className="navbar-divider" style={{margin: 'auto'}}>|</span>
            <Nav.Link href="/elementulgalvanic">Elementul Galvanic</Nav.Link>
                <span className="navbar-divider" style={{margin: 'auto'}}>|</span>
            <Nav.Link href="/acumulatori">Acumulatori</Nav.Link>
                <span className="navbar-divider" style={{margin: 'auto'}}>|</span>
            <Nav.Link href="/reactivitate">Reactivitate</Nav.Link>
            <span className="navbar-divider" style={{margin: 'auto'}}>|</span>
            <NavDropdown title="Pile" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/piladanielljacobi">Pila Daniell-Jacobi</NavDropdown.Item>
              <NavDropdown.Item href="/pilalenclanche">Pila Lenclanche</NavDropdown.Item>
              <NavDropdown.Item href="/pilaalcalina">Pila Alcalină</NavDropdown.Item>
              <NavDropdown.Item href="/pilacombustie">Pila de Combustie</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="test-button">
            <Nav>
              <Nav.Link style={{ textAlign: 'center', color: '#210062', fontWeight: 'bold' }} href="/testeaza">
                Testează
              </Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
