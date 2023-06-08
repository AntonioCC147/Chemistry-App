import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Logo from './assets/images/icons/Logo.png';

import './App.css';
import './components/home/home.css';
import Acasa from "./components/home/home";
import Functionalitati from './components/functionalitati/functionalitati';
import ClasApp from './components/clasifApp/clasifApp';
import ElemGalv from './components/elemGalv/elemGalv';
import Reactivitate from './components/reactivitate/reactivitate';
import Acumulatori from './components/acumulatori/acumulatori';
import PilaDaniellJacobi from './components/pile/pilaDannielJacobi';
import PilaLenclanche from './components/pile/pilaLenclanche';
import PilaAlcalina from './components/pile/pilaAlcalina';
import PilaCombustie from './components/pile/pilaCombustie';
import Testeaza from './components/testeaza/testeaza';
import Footer from './components/footer/footer';

import NavbarComponent from './components/navbar/navbar';

export default function App() {
  return (
    <div className="background">
      <div className="container-xl">
        <Row className="design-navbar">
          <Col sm={2} className="text-center">
            <a href="/"><img className="logo" src={Logo} alt="Logo"/></a>
          </Col>
          <Col sm={10}>
            <p className="principal-title"><span className="bold-text">Pile Electrice - Aplicație pentru laborator</span></p>
          </Col>
        </Row>
      </div>
      <NavbarComponent/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Acasa/>}></Route>
          <Route path="/functionalitati" element={<Functionalitati/>}></Route>
          <Route path="/clasapp" element={<ClasApp/>}></Route>
          <Route path="/elementulgalvanic" element={<ElemGalv/>}></Route>
          <Route path="/acumulatori" element={<Acumulatori/>}></Route>
          <Route path="/reactivitate" element={<Reactivitate/>}></Route>
          <Route path="/piladanielljacobi" element={<PilaDaniellJacobi/>}></Route>
          <Route path="/pilalenclanche" element={<PilaLenclanche/>}></Route>
          <Route path="/pilaalcalina" element={<PilaAlcalina/>}></Route>
          <Route path="/pilacombustie" element={<PilaCombustie/>}></Route>
          <Route path="/testeaza" element={<Testeaza/>}></Route>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}
