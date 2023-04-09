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

import LeftGlass from '../../assets/images/PaharVerde.png';
import RightGlass from '../../assets/images/PaharAlbastru.png';

import { SpawnLeftGlass, SpawnRightGlass, VerifyBattery, SpawnSaltDeck, CheckInputs } from './functions.js';
import './testeaza.css';

export default function Testeaza() {
    const [leftGlassName, setLeftGlassName] = useState("");
    const [rightGlassName, setRightGlassName] = useState("");

    const [leftElthPName, setLeftElthPName] = useState("");
    const [rightElthPName, setRightElthPName] = useState("");

    const [saltDeck, setSaltDeck] = useState("");

    useEffect(()=>{
		setLeftGlassName("Undefined"); setRightGlassName("Undefined");
        setLeftElthPName("Undefined"); setRightElthPName("Undefined");
        setSaltDeck("None");
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
                                        <Dropdown.Item onClick={() => setLeftGlassName(<Latex>$Al(NO_3)_3$</Latex>)}><Latex>$Al(NO_3)_3$</Latex></Dropdown.Item>
                                        <Dropdown.Item onClick={() => setLeftGlassName(<Latex>$AgNO_3$</Latex>)}><Latex>$AgNO_3$</Latex></Dropdown.Item>
                                        <Dropdown.Item onClick={() => setLeftGlassName(<Latex>$Mg(NO_3)_2$</Latex>)}><Latex>$Mg(NO_3)_2$</Latex></Dropdown.Item>
                                        <Dropdown.Item onClick={() => setLeftGlassName(<Latex>$Cu(NO_3)_2$</Latex>)}><Latex>$Cu(NO_3)_2$</Latex></Dropdown.Item>
                                        <Dropdown.Item onClick={() => setLeftGlassName(<Latex>$Sn(NO_3)_2$</Latex>)}><Latex>$Sn(NO_3)_2$</Latex></Dropdown.Item>
                                    </DropdownButton>
                                </ButtonGroup>
                            </div>
                            <div className="mb-2 text-center placute-dropdown">
                                <ButtonGroup>
                                    <DropdownButton variant="primary" id="dropdown-basic-button" title="Plăcuțe" drop="end">
                                        <Dropdown.Item onClick={() => setLeftElthPName(<Latex>$Al\;(Aluminiu)$</Latex>)}><Latex>$Al\;(Aluminiu)$</Latex></Dropdown.Item>
                                        <Dropdown.Item onClick={() => setLeftElthPName(<Latex>$Ag\;(Argint)$</Latex>)}><Latex>$Ag\;(Argint)$</Latex></Dropdown.Item>
                                        <Dropdown.Item onClick={() => setLeftElthPName(<Latex>$Mg\;(Magneziu)$</Latex>)}><Latex>$Mg\;(Magneziu)$</Latex></Dropdown.Item>
                                        <Dropdown.Item onClick={() => setLeftElthPName(<Latex>$Cu\;(Cupru)$</Latex>)}><Latex>$Cu\;(Cupru)$</Latex></Dropdown.Item>
                                        <Dropdown.Item onClick={() => setLeftElthPName(<Latex>$Sn\;(Staniu)$</Latex>)}><Latex>$Sn\;(Staniu)$</Latex></Dropdown.Item>
                                    </DropdownButton>
                                </ButtonGroup>
                            </div>
                            <div className="mb-2 text-center">
                                <Button variant="secondary" onClick={() => setSaltDeck("Exist")}>Punte de sare</Button>
                            </div> 

                            <img className="chem-glass" src={LeftGlass} alt="Glass"/>

                            <div className="text-center">
                                <Button variant="danger" onClick={() => { setLeftGlassName("Undefined"); setLeftElthPName("Undefined"); setSaltDeck("None") }}>Restează</Button>
                            </div>
                        </div>
                    </Col>
                    

                    <Col sm={8}>
                        <div className="work-space-box">
                            <Row className="text-center">
                                <VerifyBattery
                                    glassLeft={leftGlassName} elthPLeft={leftElthPName}
                                    glassRight={rightGlassName} elthPRight={rightElthPName}
                                />
                            </Row>
                                <CheckInputs
                                    verify={saltDeck}
                                    glassLeft={leftGlassName} elthPLeft={leftElthPName}
                                    glassRight={rightGlassName} elthPRight={rightElthPName}
                                />
                            
                            <Row>
                                <Col sm={6}>
                                    <div className="glass-box">
                                        <SpawnLeftGlass name={leftGlassName}/>
                                    </div>
                                </Col>
                                
                                <Col sm={6}>
                                    <div className="glass-box">
                                        <SpawnRightGlass name={rightGlassName}/>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={3}>
                                    <div className="pahar-box">{leftGlassName}</div>
                                </Col>
                                <Col sm={3}>
                                    <div className="pile-box">{leftElthPName}</div>
                                </Col>
                                <Col sm={3}>
                                    <div className="pahar-box">{rightGlassName}</div>
                                </Col>
                                <Col sm={3}>
                                    <div className="pile-box">{rightElthPName}</div>
                                </Col>
                            </Row>

                            <Row>
                                <div className="text-center">Testeaza</div>
                            </Row>
                        </div>
                    </Col>  


                    <Col sm={2}>
                        <div className="menu-selector">
                            <div className="mb-2 text-center pahare-dropdown">
                                <ButtonGroup>
                                <DropdownButton variant="success" id="dropdown-basic-button" title="Pahare" drop="start">
                                        <Dropdown.Item onClick={() => setRightGlassName(<Latex>$Al(NO_3)_3$</Latex>)}><Latex>$Al(NO_3)_3$</Latex></Dropdown.Item>
                                        <Dropdown.Item onClick={() => setRightGlassName(<Latex>$AgNO_3$</Latex>)}><Latex>$AgNO_3$</Latex></Dropdown.Item>
                                        <Dropdown.Item onClick={() => setRightGlassName(<Latex>$Mg(NO_3)_2$</Latex>)}><Latex>$Mg(NO_3)_2$</Latex></Dropdown.Item>
                                        <Dropdown.Item onClick={() => setRightGlassName(<Latex>$Cu(NO_3)_2$</Latex>)}><Latex>$Cu(NO_3)_2$</Latex></Dropdown.Item>
                                        <Dropdown.Item onClick={() => setRightGlassName(<Latex>$Sn(NO_3)_2$</Latex>)}><Latex>$Sn(NO_3)_2$</Latex></Dropdown.Item>
                                    </DropdownButton>
                                </ButtonGroup>
                            </div>
                            <div className="mb-2 text-center placute-dropdown">
                                <ButtonGroup>
                                    <DropdownButton variant="primary" id="dropdown-basic-button" title="Plăcuțe" drop="start">
                                        <Dropdown.Item onClick={() => setRightElthPName(<Latex>$Al\;(Aluminiu)$</Latex>)}><Latex>$Al\;(Aluminiu)$</Latex></Dropdown.Item>
                                        <Dropdown.Item onClick={() => setRightElthPName(<Latex>$Ag\;(Argint)$</Latex>)}><Latex>$Ag\;(Argint)$</Latex></Dropdown.Item>
                                        <Dropdown.Item onClick={() => setRightElthPName(<Latex>$Mg\;(Magneziu)$</Latex>)}><Latex>$Mg\;(Magneziu)$</Latex></Dropdown.Item>
                                        <Dropdown.Item onClick={() => setRightElthPName(<Latex>$Cu\;(Cupru)$</Latex>)}><Latex>$Cu\;(Cupru)$</Latex></Dropdown.Item>
                                        <Dropdown.Item onClick={() => setRightElthPName(<Latex>$Sn\;(Staniu)$</Latex>)}><Latex>$Sn\;(Staniu)$</Latex></Dropdown.Item>
                                    </DropdownButton>
                                </ButtonGroup>
                            </div>
                            <div className="mb-2 text-center">
                                <Button variant="secondary" onClick={() => setSaltDeck("None")}>Sterge puntea</Button>
                            </div> 

                            <img className="chem-glass" src={RightGlass} alt="Glass"/>

                            <div className="text-center">
                            <Button variant="danger" onClick={() => { setRightGlassName("Undefined"); setRightElthPName("Undefined"); }}>Resetează</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}