import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavbarComponent from '../navbar/navbar';
import InfoBox from "../infoBox/infoBox";
import LeftBox from '../infoBox/leftBox';

import React from '../../assets/images/Reactivitate.gif';

export default function Reactivitate() {
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