import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

import './navbar.css'

export default function NavbarComponent() {
  const currentPath = window.location.pathname;

  const isCurrentPage = (path) => {
    return currentPath === path ? 'bold-text' : 'nav-text';
  };

  return (
    <Navbar className="navbar-container" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className={isCurrentPage('/')}>Acasă</Nav.Link>
            <Nav.Link href="/functionalitati" className={isCurrentPage('/functionalitati')}>Funcționalități</Nav.Link>
            <Nav.Link href="/clasapp" className={isCurrentPage('/clasapp')}>Clasificare & Aplicații</Nav.Link>
            <Nav.Link href="/elementulgalvanic" className={isCurrentPage('/elementulgalvanic')}>Elementul Galvanic</Nav.Link>
            <Nav.Link href="/acumulatori" className={isCurrentPage('/acumulatori')}>Acumulatori</Nav.Link>
            <Nav.Link href="/reactivitate" className={isCurrentPage('/reactivitate')}>Reactivitate</Nav.Link>
            <NavDropdown className="nav-pile-text" title="Pile">
              <NavDropdown.Item href="/piladanielljacobi" className={isCurrentPage('/piladanielljacobi')}>Pila Daniell-Jacobi</NavDropdown.Item>
              <NavDropdown.Item href="/pilalenclanche" className={isCurrentPage('/pilalenclanche')}>Pila Lenclanche</NavDropdown.Item>
              <NavDropdown.Item href="/pilaalcalina" className={isCurrentPage('/pilaalcalina')}>Pila Alcalină</NavDropdown.Item>
              <NavDropdown.Item href="/pilacombustie" className={isCurrentPage('/pilacombustie')}>Pila de Combustie</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="test-button">
            <Nav>
              <Nav.Link className={isCurrentPage('/testeaza')} href="/testeaza">
                Testează
              </Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
