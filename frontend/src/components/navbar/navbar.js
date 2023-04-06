import { Link } from "react-router-dom";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../home/home.css';

export default function Navbar() {
    return (
        <div className="cuprins-box">
            <p className="cuprins-title">Cuprins</p>
            <Row>
                <Col sm={6}>
                    <div className="cuprins-text">
                        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Acasă</Link><br/>
                        <Link to="/how" style={{ color: 'inherit', textDecoration: 'none' }}>Cum funcționează?</Link><br/>
                        <Link to="/clasapp" style={{ color: 'inherit', textDecoration: 'none' }}>Clasificare și Aplicații</Link><br/>
                        <Link to="/elementulgalvanic" style={{ color: 'inherit', textDecoration: 'none' }}>Elementul Galvanic</Link><br/>
                        <Link to="/acumulatori" style={{ color: 'inherit', textDecoration: 'none' }}>Acumulatori</Link><br/>
                    </div>
                </Col>
                <Col sm={6}>
                    <div className="cuprins-text">
                        <Link to="/piladaniell" style={{ color: 'inherit', textDecoration: 'none' }}>Pila Daniell</Link><br/>
                        <Link to="/pilalenclanche" style={{ color: 'inherit', textDecoration: 'none' }}>Pila Lenclanche</Link><br/>
                        <Link to="/pilaalcalina" style={{ color: 'inherit', textDecoration: 'none' }}>Pila Alcalină</Link><br/>
                        <Link to="/pilacombustie" style={{ color: 'inherit', textDecoration: 'none' }}>Pila de Combustie</Link><br/>
                        <Link to="/reactivitate" style={{ color: 'inherit', textDecoration: 'none' }}>Reactivitate</Link><br/>
                    </div>
                </Col>
            </Row>
            <Link to="/testeaza" style={{ color: 'red', textDecoration: 'none' }}>
                <div className="test-button">Testează</div>
            </Link>
        </div>
    )
}