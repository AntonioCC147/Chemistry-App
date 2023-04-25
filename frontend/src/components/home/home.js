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
                            <p className="cuprins-title">Experiment:</p>
                            <p>
                                <ul>
                                    <li>
                                        Două pahare - Acestea vor fi folosite pentru a conține substanțele necesare pentru generarea energiei electrice.
                                    </li>
                                    <li>
                                        Substanțe - Este nevoie de două substanțe diferite, care să fie capabile să reacționeze chimic și să
                                        producă energie electrică.
                                    </li>
                                    <li>
                                        Punte de sare - Pentru a conecta cele două pahare și pentru a permite fluxul de ioni între ele, este necesară o punte de sare.
                                        Aceasta este de obicei un șervețel de hârtie îmbibat într-o soluție saturată de sare, care este plasat între cele două pahare.
                                    </li>
                                </ul>
                            </p>
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