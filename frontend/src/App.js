import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Logo from './assets/images/Logo.png';

import './App.css';
import Acasa from "./components/home/home";
import How from './components/how/how';
import ClasApp from './components/clasifApp/clasifApp';
import ElemGalv from './components/elemGalv/elemGalv';
import Reactivitate from './components/reactivitate/reactivitate';
import Acumulatori from './components/acumulatori/acumulatori';
import PilaDaniell from './components/pile/pilaDanniel';
import PilaLenclanche from './components/pile/pilaLenclanche';
import PilaAlcalina from './components/pile/pilaAlcalina';
import PilaCombustie from './components/pile/pilaCombustie';
import Testeaza from './components/testeaza/testeaza';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <div className="container-xl">
        <Row className="design-navbar">
          <Col sm={2}>
            <a href="/"><img src={Logo} alt="Logo"/></a>
          </Col>
          <Col sm={10}>
            <p className="principal-title">Pile Electrice</p>
            <p className="secundar-title">- Laborator -</p>
          </Col>
        </Row>
      </div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Acasa/>}></Route>
          <Route path="/how" element={<How/>}></Route>
          <Route path="/clasapp" element={<ClasApp/>}></Route>
          <Route path="/elementulgalvanic" element={<ElemGalv/>}></Route>
          <Route path="/acumulatori" element={<Acumulatori/>}></Route>
          <Route path="/reactivitate" element={<Reactivitate/>}></Route>
          <Route path="/piladaniell" element={<PilaDaniell/>}></Route>
          <Route path="/pilalenclanche" element={<PilaLenclanche/>}></Route>
          <Route path="/pilaalcalina" element={<PilaAlcalina/>}></Route>
          <Route path="/pilacombustie" element={<PilaCombustie/>}></Route>
          <Route path="/testeaza" element={<Testeaza/>}></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
