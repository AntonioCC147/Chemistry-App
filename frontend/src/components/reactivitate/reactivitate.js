import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Navbar from "../navbar/navbar";
import InfoBox from "../infoBox/infoBox";

import React from '../../assets/images/Reactivitate.gif';

export default function Reactivitate() {
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
                                <p className="cuprins-title">Seria de reactivitate:</p>
                                <div className="text-center">
                                    <img className="img-fix" src={React} alt="Reactivitate"/>
                                </div>
                                <p>Metalele care in seria de activitate se gasesc inaintea hidrogenului joaca rol de anod, iar cele de dupa
                                    hidrogen joaca rol de catod.
                                </p>
                                <p>In cazul in care cele doua metale se gasesc de aceeasi parte a hidrogenului atunci metalul mai reactiv va
                                    fi anodul, iar celalalt catodul.
                                    </p>
                                <p>Caz particular: deoarece hidrogenul este un gas trebuie folosita platina care este înconjurata de hidrogen;
                                    platina va fi utilizata ca electrod al hidrogenului.
                                </p>
                            </>
                        }/>
                    </Col>  
                </Row>
            </Container>
        </>
    )
}