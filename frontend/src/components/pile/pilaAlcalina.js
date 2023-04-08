import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavbarComponent from '../navbar/navbar';
import InfoBox from "../infoBox/infoBox";
import LeftBox from '../infoBox/leftBox';

import PilaA from '../../assets/images/PilaA.svg';

export default function PilaAlcalina() {
    return (
        <>
            <NavbarComponent/>
            <Container className="container-xl footer-fix">
                <Row>
                    <Col sm={4}>
                    <LeftBox information={
                        <>
                            <p className="cuprins-title">Lore Ipsum:</p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                            of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                            PageMaker including versions of Lorem Ipsum.
                        </>
                    }/>
                    </Col>
                    <Col sm={8}>
                        <InfoBox information={
                            <>
                                <p className="cuprins-title">Pila Alcalină:</p>
                                <p>Pilele alcaline sunt de dimensiuni foarte mici. Sunt utilizate la ceasuri, aparate auditive, camere video,
                                    minicalculatoare.
                                </p>
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
                                    Electrodul negativ este din zinc, cel pozitiv din oxid de mercur, iar electrolitul este o solutie de
                                    hidroxid de potasiu. Bateria de mercur produce circa 1.34V.
                                </p>
                            </>
                        }/>
                    </Col>  
                </Row>
            </Container>
        </>
    )
}