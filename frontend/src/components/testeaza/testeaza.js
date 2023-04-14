import { useState, useEffect } from 'react';

import Latex from 'react-latex';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import NavbarComponent from '../navbar/navbar';

import { SpawnLeftGlass, SpawnRightGlass, VerifyBattery, VerifyPila, SpawnSaltDeck, CheckInputs } from './functions.js';
import './testeaza.css';

import Catod from '../../assets/images/other/Catod.png';
import Anod from '../../assets/images/other/Anod.png';

export default function Testeaza() {
    const [leftGlassName, setLeftGlassName] = useState("");
    const [rightGlassName, setRightGlassName] = useState("");
    const [verifyLeftGlass, setVerifyLeftGlass] = useState("");
    const [verifyRightGlass, setVerifyRightGlass] = useState("");

    const [leftElthPName, setLeftElthPName] = useState("");
    const [rightElthPName, setRightElthPName] = useState("");
    const [verifyLeftElthPName, setVerifyLeftElthPName] = useState("");
    const [verifyRightElthPName, setVerifyRightElthPName] = useState("");

    const [saltDeck, setSaltDeck] = useState("");
    const [verifySaltDeck, setVerifytSaltDeck] = useState("");

    useEffect(()=>{
		setLeftGlassName("Undefined"); setLeftElthPName("Undefined"); setVerifyLeftGlass("Undefined"); setVerifyLeftElthPName("Undefined");
        setRightGlassName("Undefined"); setRightElthPName("Undefined"); setVerifyRightGlass("Undefined"); setVerifyRightElthPName("Undefined");
        setSaltDeck("None"); setVerifytSaltDeck("None");
	}, [])

    return (
        <>
            <NavbarComponent/>
            <Container className="container-xl footer-fix">
                <Row>
                    <Col sm={2}>
                        <div className="menu-selector">
                            <div className="mb-2 text-center pahare-dropdown">
                                <ButtonGroup>
                                    <DropdownButton variant="success" id="dropdown-basic-button" title="Pahare" drop="end">
                                        <Dropdown.Item
                                            onClick={() => {setLeftGlassName(<Latex>$Al(NO_3)_3$</Latex>); setVerifyLeftGlass("Al")}}><Latex>$Al(NO_3)_3$</Latex>
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            onClick={() => {setLeftGlassName(<Latex>$AgNO_3$</Latex>); setVerifyLeftGlass("Ag")}}><Latex>$AgNO_3$</Latex>
                                        </Dropdown.Item>
                                        <Dropdown.Item 
                                            onClick={() => {setLeftGlassName(<Latex>$Cu(NO_3)_2$</Latex>); setVerifyLeftGlass("Cu")}}><Latex>$Cu(NO_3)_2$</Latex>
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            onClick={() => {setLeftGlassName(<Latex>$Sn(NO_3)_2$</Latex>); setVerifyLeftGlass("Sn")}}><Latex>$Sn(NO_3)_2$</Latex>
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            onClick={() => {setLeftGlassName(<Latex>$Ni(NO_3)_2$</Latex>); setVerifyLeftGlass("Ni")}}><Latex>$Ni(NO_3)_2$</Latex>
                                        </Dropdown.Item>
                                    </DropdownButton>
                                </ButtonGroup>
                            </div>
                            <div className="mb-2 text-center placute-dropdown">
                                <ButtonGroup>
                                    <DropdownButton variant="primary" id="dropdown-basic-button" title="Plăcuțe" drop="end">
                                        <Dropdown.Item
                                            onClick={() => {setLeftElthPName(<Latex>$Al\;(Aluminiu)$</Latex>); setVerifyLeftElthPName("Al")}}><Latex>$Al\;(Aluminiu)$</Latex>
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            onClick={() => {setLeftElthPName(<Latex>$Ag\;(Argint)$</Latex>); setVerifyLeftElthPName("Ag")}}><Latex>$Ag\;(Argint)$</Latex>
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            onClick={() => {setLeftElthPName(<Latex>$Mg\;(Magneziu)$</Latex>); setVerifyLeftElthPName("Mg")}}><Latex>$Mg\;(Magneziu)$</Latex>
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            onClick={() => {setLeftElthPName(<Latex>$Cu\;(Cupru)$</Latex>); setVerifyLeftElthPName("Cu")}}><Latex>$Cu\;(Cupru)$</Latex>
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            onClick={() => {setLeftElthPName(<Latex>$Sn\;(Staniu)$</Latex>); setVerifyLeftElthPName("Sn")}}><Latex>$Sn\;(Staniu)$</Latex>
                                        </Dropdown.Item>
                                    </DropdownButton>
                                </ButtonGroup>
                            </div>

                            <div className="mb-2 text-center">
                                <Button variant="secondary" onClick={() => {setSaltDeck("Exist"); setVerifytSaltDeck("Exist")}}>Punte de sare</Button>
                            </div>

                            <div className="text-center">
                                <Button variant="danger" onClick={() => { setLeftGlassName("Undefined"); setLeftElthPName("Undefined"); setSaltDeck("None") }}>Restează</Button>
                            </div>
                        </div>
                    </Col>

                    <Col sm={8}>
                        <div className="work-space-box">
                            <SpawnSaltDeck name={saltDeck}/>
                            <Row className="text-center">
                                <VerifyBattery
                                    glassLeft={leftGlassName} elthPLeft={leftElthPName}
                                    glassRight={rightGlassName} elthPRight={rightElthPName}
                                />
                            </Row>

                            <Row>
                                <Col sm={6}>
                                    <Row>
                                        <Col sm={6} >
                                            <img className="catod" src={Catod} alt="Catod"/>
                                        </Col>
                                        <Col sm={6}>
                                            <img className="anod" src={Anod} alt="Anod"/>
                                        </Col>
                                    </Row>

                                    <div className="glass-box">
                                        <SpawnLeftGlass name={leftGlassName} type={verifyLeftGlass}/>
                                        <VerifyPila verify={leftElthPName} type={"left"}/>
                                    </div>
                                </Col>
                                
                                <Col sm={6}>
                                    <div className="glass-box">
                                        <SpawnRightGlass name={rightGlassName} type={verifyRightGlass}/>
                                        <VerifyPila verify={rightElthPName} type={"right"}/>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={3}>
                                    <div className="pahar-box">Pahar<br/>{leftGlassName}</div>
                                </Col>
                                <Col sm={3}>
                                    <div className="pile-box">Plăcuță<br/>{leftElthPName}</div>
                                </Col>
                                <Col sm={3}>
                                    <div className="pahar-box">Pahar<br/>{rightGlassName}</div>
                                </Col>
                                <Col sm={3}>
                                    <div className="pile-box">Plăcuță<br/>{rightElthPName}</div>
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={6}>
                                    <div className="reset-button">
                                        <Button
                                            onClick={() => {
                                                setLeftGlassName("Undefined"); setLeftElthPName("Undefined");
                                                setRightGlassName("Undefined"); setRightElthPName("Undefined");
                                                setSaltDeck("None");
                                                }
                                            }>
                                            Șterge
                                        </Button>
                                    </div>
                                </Col>
                                
                                <Col sm={6}>
                                    <div className="send-button">
                                    
                                        <Button>
                                            <CheckInputs verify={verifyLeftGlass}/>
                                        </Button>

                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>

                    <Col sm={2}>
                        <div className="menu-selector">
                            <div className="mb-2 text-center pahare-dropdown">
                                <ButtonGroup>
                                <DropdownButton variant="success" id="dropdown-basic-button" title="Pahare" drop="start">
                                <Dropdown.Item
                                            onClick={() => {setRightGlassName(<Latex>$Al(NO_3)_3$</Latex>); setVerifyRightGlass("Al")}}><Latex>$Al(NO_3)_3$</Latex>
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            onClick={() => {setRightGlassName(<Latex>$AgNO_3$</Latex>); setVerifyRightGlass("Ag")}}><Latex>$AgNO_3$</Latex>
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            onClick={() => {setRightGlassName(<Latex>$Mg(NO_3)_2$</Latex>); setVerifyRightGlass("Mg")}}><Latex>$Mg(NO_3)_2$</Latex>
                                        </Dropdown.Item>
                                        <Dropdown.Item 
                                            onClick={() => {setRightGlassName(<Latex>$Cu(NO_3)_2$</Latex>); setVerifyRightGlass("Cu")}}><Latex>$Cu(NO_3)_2$</Latex>
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            onClick={() => {setRightGlassName(<Latex>$Sn(NO_3)_2$</Latex>); setVerifyRightGlass("Sn")}}><Latex>$Sn(NO_3)_2$</Latex>
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            onClick={() => {setRightGlassName(<Latex>$Fe(NO_3)_2$</Latex>); setVerifyRightGlass("Fe")}}><Latex>$Fe(NO_3)_2$</Latex>
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            onClick={() => {setRightGlassName(<Latex>$Ni(NO_3)_2$</Latex>); setVerifyRightGlass("Ni")}}><Latex>$Ni(NO_3)_2$</Latex>
                                        </Dropdown.Item>
                                    </DropdownButton>
                                </ButtonGroup>
                            </div>
                            <div className="mb-2 text-center placute-dropdown">
                                <ButtonGroup>
                                    <DropdownButton variant="primary" id="dropdown-basic-button" title="Plăcuțe" drop="start">
                                    <Dropdown.Item
                                            onClick={() => {setRightElthPName(<Latex>$Al\;(Aluminiu)$</Latex>); setVerifyRightElthPName("Al")}}><Latex>$Al\;(Aluminiu)$</Latex>
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            onClick={() => {setRightElthPName(<Latex>$Ag\;(Argint)$</Latex>); setVerifyRightElthPName("Ag")}}><Latex>$Ag\;(Argint)$</Latex>
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            onClick={() => {setRightElthPName(<Latex>$Mg\;(Magneziu)$</Latex>); setVerifyRightElthPName("Mg")}}><Latex>$Mg\;(Magneziu)$</Latex>
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            onClick={() => {setRightElthPName(<Latex>$Cu\;(Cupru)$</Latex>); setVerifyRightElthPName("Cu")}}><Latex>$Cu\;(Cupru)$</Latex>
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            onClick={() => {setRightElthPName(<Latex>$Sn\;(Staniu)$</Latex>); setVerifyRightElthPName("Sn")}}><Latex>$Sn\;(Staniu)$</Latex>
                                        </Dropdown.Item>
                                    </DropdownButton>
                                </ButtonGroup>
                            </div>
                            <div className="mb-2 text-center">
                                <Button variant="secondary" onClick={() => setSaltDeck("None")}>Sterge puntea</Button>
                            </div>

                            <div className="text-center">
                            <Button variant="danger" onClick={() => { setRightGlassName("Undefined"); setRightElthPName("Undefined"); }}>Resetează</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <br/>
            </Container>
        </>
    )
}