import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ElectricCar from '../../assets/images/other/ElectricCar.png';
import PileE1 from '../../assets/images/pile/PileElectrice.svg';

import NavbarComponent from '../navbar/navbar';
import InfoBox from '../infoBox/infoBox';
import LeftBox from '../infoBox/leftBox';

import './home.css';
import '../infoBox/infoBox.css';

export default function Home() {
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
                    <Col sm={8} className="text-center">
                        <img className="img-fix img-mobile" src={PileE1} alt="Pile Electrice 1"/>
                    </Col>
                </Row>
			    <Row>
                    <Col sm={7}>
                        <InfoBox information={
                            <>
                                <p><span className="bold-text">Pilele electrice</span> (celule galvanice sau celule voltaice) sunt celule electrochimice în care reacţii spontane
                                    de oxido-reducere produc energie electrică. Cele două reacţii redox sunt separate, necesitând ca transferul
                                    de electroni să se producă printr-un circuit extern. În acest fel se obţine energia electrică. 
                                </p>
                                <p>Exemple uzuale de celule voltaice sunt bateriile folosite în lanterne, aparate de radio portabile,
                                    echipamente fotografice precum şi numeroase jucării.
                                </p>
                            </>
                        }/>
                        </Col>
                        <Col sm={5}>
                            <Row>
                                <div className="text-center"><img className="img-fix-home img-mobile" src={ElectricCar} alt="Pile Electrice 2"/></div>
                            </Row>
                            
                        </Col>
			    </Row>
            </Container>
        </>
    )
}