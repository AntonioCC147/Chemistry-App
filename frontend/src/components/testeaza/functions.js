import { Modal, Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import UndefinedGlass from '../../assets/images/pahare/UndefinedGlass.png';
import PaharVerde from '../../assets/images/pahare/PaharVerde.png';
import PaharAlbastru from '../../assets/images/pahare/PaharAlbastru.png';

import SaltyDeck from '../../assets/images/other/SaltyDeck.png';

import Battery from '../../assets/images/other/Battery.png';
import Pile from '../../assets/images/pile/PilaTesteaza.png';

import ErrorImg from '../../assets/images/modal/ErrorImg.png';
import SuccessImg from '../../assets/images/modal/SuccessImg.png';

import './functions.css';

const SpawnLeftGlass = ({ name, type }) => {
    if(name === "Undefined")
        return (
            <img className="chem-glass" src={UndefinedGlass} alt="Undefined Glass"/>
    );
    else if(type === "Al")
        return (
            <img className="chem-glass" src={PaharVerde} alt="Glass"/>
    );
    else
        return (
            <img className="chem-glass" src={PaharVerde} alt="Glass"/>
    )
}

const SpawnRightGlass = ({ name }) => {
    if(name !== "Undefined")
        return (
            <img className="chem-glass" src={PaharAlbastru} alt="Glass"/>
    );
    else
        return (
            <img className="chem-glass" src={UndefinedGlass} alt="Undefined Glass"/>
    );
}

const VerifyBattery = ({ glassLeft, elthPLeft, glassRight, elthPRight }) => {
    if(glassLeft !== "Undefined" && elthPLeft !== "Undefined" && glassRight !== "Undefined" && elthPRight !== "Undefined")
        return (
            <img className="spawn-battery" src={Battery} alt="Battery"/>
        )
}

const VerifyPila = ({ verify, type }) =>  {
    if(verify !== "Undefined" && type === "left")
        return (
            <img className="spawn-left-pile-box" src={Pile} alt="Pile"/>
        );
    else if(verify !== "Undefined" && type === "right")
        return (
            <img className="spawn-right-pile-box" src={Pile} alt="Pile"/>
        );
}

const SpawnSaltDeck = ({ name }) => {
    if(name !== "None")
        return ( 
            <img className="spawn-salty-deck" src={SaltyDeck} alt="Punte de sare"/>
        );
}

const CheckInputs = ({ show, handleClose, verifyLeftGlass, verifyLeftElthPName, verifyRightGlass, verifyRightElthPName, verifySaltDeck }) => {
    if(verifyLeftGlass === "Undefined" || verifyLeftElthPName === "Undefined" ||
        verifyRightGlass === "Undefined" || verifyRightElthPName === "Undefined" || verifySaltDeck === "None")
            return (
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <Row>
                                <Col sm={2}>
                                    <img className="error-button" src={ErrorImg} alt="Error"/>
                                </Col>
                                <Col sm={10} className="error-message">
                                    Eroare! Ceva nu funcționează!
                                </Col>
                            </Row>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="modal-text">
                        <p>Nu ai conectat toate elementele între ele.</p>
                    </Modal.Body>
                        <Modal.Footer>
                            <Button variant="danger" onClick={handleClose}>
                                Închide
                            </Button>
                        </Modal.Footer>
                </Modal>
            );
    
    else if(
        //Cazul 1
        (verifyLeftGlass === "Ag" && verifyLeftElthPName === "Ag" && ((verifyRightGlass === "Al" && verifyRightElthPName === "Al") ||
        (verifyRightGlass === "Mg" && verifyRightElthPName === "Mg") || (verifyRightGlass === "Cu" && verifyRightElthPName === "Cu") ||
        (verifyRightGlass === "Sn" && verifyRightElthPName === "Sn")))
        
        ||
        //Cazul 2
        (verifyLeftGlass === "Al" && verifyLeftElthPName === "Al" && verifyRightGlass === "Mg" && verifyRightElthPName === "Mg")

        ||
        //Cazul 3
        (verifyLeftGlass === "Cu" && verifyLeftElthPName === "Cu" && ((verifyRightGlass === "Al" && verifyRightElthPName === "Al") ||
        (verifyRightGlass === "Mg" && verifyRightElthPName === "Mg") || (verifyRightGlass === "Sn" && verifyRightElthPName === "Sn")))

        ||
        //Cazul 4
        (verifyLeftGlass === "Sn" && verifyLeftElthPName === "Sn" && ((verifyRightGlass === "Al" && verifyRightElthPName === "Al") ||
        (verifyRightGlass === "Mg" && verifyRightElthPName === "Mg")))
        
        ||
        //Cazul 5
        (verifyLeftGlass === "Ag" && verifyLeftElthPName === "Ag" && ((verifyRightGlass === "Fe" && verifyRightElthPName === "Fe") ||
        (verifyRightGlass === "Ni" && verifyRightElthPName === "Ni")))

        ||
        //Cazul 6
        (verifyLeftGlass === "Cu" && verifyLeftElthPName === "Cu" && ((verifyRightGlass === "Fe" && verifyRightElthPName === "Fe") ||
        (verifyRightGlass === "Ni" && verifyRightElthPName === "Ni")))

        ||
        //Cazul 7
        (verifyLeftGlass === "Sn" && verifyLeftElthPName === "Sn" && ((verifyRightGlass === "Fe" && verifyRightElthPName === "Fe") ||
        (verifyRightGlass === "Ni" && verifyRightElthPName === "Ni")))

        ||
        //Cazul 8
        (verifyLeftGlass === "Ni" && verifyLeftElthPName === "Ni" && verifyRightGlass === "Fe" && verifyRightElthPName === "Fe")
    )
        return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <Row>
                        <Col sm={2}>
                                    <img className="success-button" src={SuccessImg} alt="Success"/>
                                </Col>
                                <Col sm={10} className="success-message">
                                    Felicitări!
                                </Col>
                        </Row>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-text">
                    <p>Toate elementele au fost conectate corect.</p>
                    <p>Valoarea lui EV COMPLETEAZA AICI</p>
                </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={handleClose}>
                            Închide
                        </Button>
                    </Modal.Footer>
            </Modal>
        );

    else
        return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <Row>
                            <Col sm={2}>
                                <img className="error-button" src={ErrorImg} alt="Error"/>
                            </Col>
                            <Col sm={10} className="error-message">
                                Eroare! Ceva nu funcționează!
                            </Col>
                        </Row>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-text">
                    <p>Toate elementele sunt conectate între ele, însă conexiunile sunt greșite.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Închide
                    </Button>
                </Modal.Footer>
            </Modal>
        );
}

export { SpawnLeftGlass, SpawnRightGlass, VerifyBattery, VerifyPila, SpawnSaltDeck, CheckInputs };