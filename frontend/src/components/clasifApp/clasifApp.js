import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Navbar from "../navbar/navbar";
import InfoBox from "../infoBox/infoBox";

import './clasifApp.css';
import Aplicatii from '../../assets/images/Aplicatii.jpg';

export default function clasifApp() {
    return (
        <>
            <Container className="container-xl footer-fix">
                <Row>
                    <Col sm={4}>
                        <Navbar />
                    </Col>
                    <Col sm={4} className="text-center">
                        <img className="img-fix" src={Aplicatii} alt="Aplicatii"/>
                    </Col>
                    <Col sm={4}>
                        <InfoBox information={
                            <div className="design-container">
                                <p className="cuprins-title">Clasificare:</p>
                                <ul>
                                    <li>Pile primare</li>
                                        <ul>
                                            <li>Pila Daniell</li>
                                            <li>Pila Leclanche</li>
                                            <li>Pila Alcaline</li>
                                            <li>Pila Wenston</li>
                                            <li>Bateria cu mercur</li>
                                        </ul>
                                    <li>Pile secundare, acumulatori</li>
                                    <li>Pile de combustie</li>
                                </ul>
                            </div>
                        }/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}/>
                    <Col sm={4}>
                        <InfoBox information={
                            <div className="design-container"> 
                                <p className="cuprins-title">Aplicații:</p>
                                <ul>
                                    <li>Comunicații</li>
                                    <li>Autoturisme</li>
                                    <li>Calculatoare portabile</li>
                                    <li>Jucării</li>
                                </ul>
                                <p className="">Pilele de combustie încep să devină o alternativă pentru consumul de energie electrică
                                    din zonele rurale, zonele izolate, eliminând reţelele de distribuţie clasice</p>
                            </div>
                        }/>
                    </Col>
                    <Col sm={4}/>
                </Row>
            </Container>
        </>
    )
}