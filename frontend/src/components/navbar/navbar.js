import { Link } from "react-router-dom";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../home/home.css';

export default function Navbar() {
    let line = {
        background: '#FFFFFF',
        border: '5px solid #FFFFFF;',

        margin: '0px',
        width: '100%',
        height: '3px',
    };

    return (
        <div className="cuprins-box">
            <p className="cuprins-title">Cuprins</p>
            <Row>
                <Col sm={6}>
                    <div className="cuprins-text">
                        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Acasă</Link><br/><hr style={line}/>
                        <Link to="/how" style={{ color: 'inherit', textDecoration: 'none' }}>Cum funcționează?</Link><br/><hr style={line}/>
                        <Link to="/clasapp" style={{ color: 'inherit', textDecoration: 'none' }}>Clasificare și Aplicații</Link><br/><hr style={line}/>
                        <Link to="/elementulgalvanic" style={{ color: 'inherit', textDecoration: 'none' }}>Elementul Galvanic</Link><br/><hr style={line}/>
                        <Link to="/acumulatori" style={{ color: 'inherit', textDecoration: 'none' }}>Acumulatori</Link><br/><hr style={line}/>
                    </div>
                </Col>
                <Col sm={6}>
                    <div className="cuprins-text">
                        <Link to="/piladaniell" style={{ color: 'inherit', textDecoration: 'none' }}>Pila Daniell</Link><br/><hr style={line}/>
                        <Link to="/pilalenclanche" style={{ color: 'inherit', textDecoration: 'none' }}>Pila Lenclanche</Link><br/><hr style={line}/>
                        <Link to="/pilaalcalina" style={{ color: 'inherit', textDecoration: 'none' }}>Pila Alcalină</Link><br/><hr style={line}/>
                        <Link to="/pilacombustie" style={{ color: 'inherit', textDecoration: 'none' }}>Pila de Combustie</Link><br/><hr style={line}/>
                        <Link to="/reactivitate" style={{ color: 'inherit', textDecoration: 'none' }}>Reactivitate</Link><br/><hr style={line}/>
                    </div>
                </Col>
            </Row>
            <Link to="/testeaza" style={{ color: 'red', textDecoration: 'none' }}>
                <div className="test-button">Testează</div>
            </Link>
        </div>
    )
}