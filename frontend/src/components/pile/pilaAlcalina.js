import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import InfoBox from "../infoBox/infoBox";
import LeftBox from '../infoBox/leftBox';

import PilaA from '../../assets/images/pile/PilaA.svg';
import NicVas from '../../assets/images/other/NicVas.jpg';

export default function PilaAlcalina() {
    return (
        <Container className="container-xl footer-fix">
            <Row>
                <Col lg={4}>
                <LeftBox information={
                    <>
                        <p className="cuprins-title"><span className="bold-text">Chiar la noi acasă!</span></p>
                        <p>Nicolae Vasilescu-Karpen, primul rector al Universității Politehnica din București a studiat și realizat pila Karpen.</p>
                    </>
                }/>
                <div className="text-center">
                    <img style={{alignItems: "center", width: "60%", borderRadius: "20px"}} src={NicVas} alt="Nicolae Vasilescu"/>
                </div>
                </Col>
                <Col lg={8}>
                    <InfoBox information={
                        <>
                            <p className="cuprins-title"><span className="bold-text">Pila Alcalină:</span></p>
                            <p>Pilele alcaline sunt de dimensiuni foarte mici. Sunt utilizate la ceasuri, aparate auditive, camere video,
                                minicalculatoare.
                            </p>
                            <div className="text-center">
                                <img  src={PilaA} alt="Pila Alcalina"/>
                            </div>
                            <p className="cuprins-title"><span className="bold-text">Bateria cu Mercur:</span></p>
                            <p>O altă pilă galvanică folosită pe scară largă este bateria cu mercur. Poate lua forma unui
                                disc mic și plat și este folosită în această formă în aparate pentru auz, celule fotoelectrice
                                și ceasuri de mână electrice. Electrodul negativ este din zinc, cel pozitiv din oxid de mercur,
                                iar electrolitul este o soluție de hidroxid de potasiu. Bateria de mercur produce circa 1.34V.
                            </p>
                        </>
                    }/>
                </Col>  
            </Row>
        </Container>
    )
}