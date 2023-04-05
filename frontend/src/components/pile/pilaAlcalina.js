import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Navbar from "../navbar/navbar";
import InfoBox from "../infoBox/infoBox";

import PilaA from '../../assets/images/PilaA.jpg';

export default function PilaAlcalina() {
    return (
        <>
            <Container className="container-xl footer-fix">
                <Row>
                    <Col sm={4}>
                        <Navbar />
                    </Col>
                    <Col sm={8}>
                        <InfoBox information={
                            <>
                                <p className="cuprins-title">Pila Alcalină:</p>
                                <p>Pilele alcaline sunt de dimensiuni foarte mici. Sunt utilizate la ceasuri, aparate auditive, camere video, minicalculatoare.</p>
                                <div className="text-center">
                                    <img className="img-fix" src={PilaA} alt="Pila Alcalina"/>
                                </div>
                                <p className="cuprins-title">Pila Voltaică (Wentston):</p>
                                <p>Pila voltaica standard, numita pila Wentston, a folosit la definirea voltului ca unitate de masura.
                                    Aceasta are poli din amalgam de cadmiu si sulfat de mercur si ca electrolit sulfat de cadmiu.
                                </p>
                                <p className="cuprins-title">Bateria cu Mercur:</p>
                                <p>O alta pila galvanica folosita pe scara larga este bateria cu mercur. Poate lua forma unui disc mic si plat
                                    si este folosita în aceasta forma în aparate pentru auz, celule fotoelectrice si ceasuri de mana electrice.
                                    Electrodul negativ este din zinc, cel pozitiv din oxid de mercur, iar electrolitul este o solutie de hidroxid
                                    de potasiu. Bateria de mercur produce circa 1.34V.
                                </p>
                            </>
                        }/>
                    </Col>  
                </Row>
            </Container>
        </>
    )
}