import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavbarComponent from '../navbar/navbar';
import InfoBox from "../infoBox/infoBox";
import LeftBox from '../infoBox/leftBox';

import Aplicatii from '../../assets/images/Aplicatii.jpg';
import './clasifApp.css';

export default function clasifApp() {
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
                    <Col sm={4} className="text-center">
                        <img className="img-fix-app" src={Aplicatii} alt="Aplicatii"/>
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
                                    din zonele rurale, zonele izolate, eliminând reţelele de distribuţie clasice
                                </p>
                            </div>
                        }/>
                    </Col>
                    <Col sm={4}/>
                </Row>
            </Container>
        </>
    )
}