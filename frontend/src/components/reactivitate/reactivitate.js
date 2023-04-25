import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavbarComponent from '../navbar/navbar';
import InfoBox from "../infoBox/infoBox";

import React from '../../assets/images/other/Reactivitate.gif';

export default function Reactivitate() {
    return (
        <>
            <NavbarComponent/>
            <Container className="container-xl footer-fix">
                <Row>
                    <Col>
                        <InfoBox information={
                            <>
                                <p className="cuprins-title"><span className="bold-text">Seria de reactivitate:</span></p>
                                <div className="text-center">
                                    <img style={{width: '800px', height: 'auto'}} src={React} alt="Reactivitate"/>
                                </div>
                                <p>Metalele care în seria de activitate se găsesc înaintea hidrogenului joacă rol de anod, iar cele de după
                                    hidrogen joacă rol de catod.
                                </p>
                                <p>În cazul în care cele două metale se găsesc de aceeași parte a hidrogenului atunci metalul mai reactiv va
                                    fi anodul, iar celălalt catodul.
                                </p>
                                <p>Caz particular: deoarece hidrogenul este un gaz, trebuie folosită platina care este înconjurată de hidrogen;
                                    platina va fi utilizată ca electrod al hidrogenului.
                                </p>
                            </>
                        }/>
                    </Col>  
                </Row>
            </Container>
        </>
    )
}