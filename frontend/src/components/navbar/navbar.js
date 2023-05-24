import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './navbar.css';

export default function NavbarComponent() {
  return (
    <Navbar className="navbar-container" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="/" className="navbar-brand"><span className="bold-text">Acasă</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/functionalitati"><span className="nav-text">Funcționalități</span></Nav.Link>
            <Nav.Link href="/clasapp"><span className="nav-text">Clasificare & Aplicații</span></Nav.Link>
            <Nav.Link href="/elementulgalvanic"><span className="nav-text">Elementul Galvanic</span></Nav.Link>
            <Nav.Link href="/acumulatori"><span className="nav-text">Acumulatori</span></Nav.Link>
            <Nav.Link href="/reactivitate"><span className="nav-text">Reactivitate</span></Nav.Link>
            <NavDropdown className="nav-pile-text" title="Pile">
              <NavDropdown.Item href="/piladanielljacobi"><span className="nav-text">Pila Daniell-Jacobi</span></NavDropdown.Item>
              <NavDropdown.Item href="/pilalenclanche"><span className="nav-text">Pila Lenclanche</span></NavDropdown.Item>
              <NavDropdown.Item href="/pilaalcalina"><span className="nav-text">Pila Alcalină</span></NavDropdown.Item>
              <NavDropdown.Item href="/pilacombustie"><span className="nav-text">Pila de Combustie</span></NavDropdown.Item>
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