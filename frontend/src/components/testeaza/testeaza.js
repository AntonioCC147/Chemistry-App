import Latex from 'react-latex';
import { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import NavbarComponent from '../navbar/navbar';
import InfoBox from '../infoBox/infoBox';
import LeftBox from '../infoBox/leftBox';

import { SpawnLeftGlass, SpawnRightGlass, VerifyBattery, VerifyPila, SpawnSaltDeck, CheckInputs } from './functions.js';

import Catod from '../../assets/images/other/Catod.png';
import Anod from '../../assets/images/other/Anod.png';

import Experiment1 from '../../assets/images/other/Experiment1.png';
import Experiment2 from '../../assets/images/other/Experiment2.png';

import './testeaza.css';

export default function Testeaza() {
    const isMobile = window.innerWidth < 1000;

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

    const [showModal, setShowModal] = useState(false);
    const handleButtonClick = () => {
        CheckInputs(verifyLeftGlass);
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };

    const potential = `$\\; \\varepsilon^{0}(V) \\;$`;
    const Al = `$\\; \\Large{\\varepsilon_{Al^{3+}/Al}^{0}}\\;$`;
    const Ag = `$\\; \\Large{\\varepsilon_{Ag^+/Ag}^{0}} \\;$`;
    const Mg = `$\\; \\Large{\\varepsilon_{Mg^{2+}/Mg}^{0}} \\;$`;
    const Cu = `$\\; \\Large{\\varepsilon_{Cu^{2+}/Cu}^{0}} \\;$`;
    const Sn = `$\\; \\Large{\\varepsilon_{Sn^{2+}/Sn}^{0}} \\;$`;
    const Fe = `$\\; \\Large{\\varepsilon_{Fe^{2+}/Fe}^{0}} \\;$`;
    const Ni = `$\\; \\Large{\\varepsilon_{Ni^{2+}/Ni}^{0}} \\;$`;

    if(!isMobile)
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
                                                onClick={() => {setLeftGlassName(<Latex>$MgNO_3$</Latex>); setVerifyLeftGlass("Mg")}}><Latex>$MgNO_3$</Latex>
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
                                            <Dropdown.Item
                                                onClick={() => {setLeftElthPName(<Latex>$Ni\;(Nichel)$</Latex>); setVerifyLeftElthPName("Ni")}}><Latex>$Ni\;(Nichel)$</Latex>
                                            </Dropdown.Item>
                                        </DropdownButton>
                                    </ButtonGroup>
                                </div>

                                <div className="mb-2 text-center">
                                    <Button variant="secondary" onClick={() => {setSaltDeck("Exist"); setVerifytSaltDeck("Exist")}}>Punte de sare</Button>
                                </div>

                                <div className="text-center">
                                    <img className="experiment1" src={Experiment1} alt="Experiment"/>
                                </div>

                                <div className="text-center">
                                    <Button variant="danger" onClick={() => {
                                            setLeftGlassName("Undefined"); setVerifyLeftGlass("Undefined");
                                            setLeftElthPName("Undefined"); setVerifyLeftElthPName("Undefined");
                                            setSaltDeck("None"); setVerifytSaltDeck("None");
                                        }
                                    }>Restează</Button>
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
                                        <div className="text-center">
                                            <Button variant="danger" className="reset-button"
                                                onClick={() => {
                                                    setLeftGlassName("Undefined"); setVerifyLeftGlass("Undefined");
                                                    setLeftElthPName("Undefined"); setVerifyLeftElthPName("Undefined");
                                                    setRightGlassName("Undefined"); setVerifyRightGlass("Undefined");
                                                    setRightElthPName("Undefined"); setVerifyRightElthPName("Undefined");
                                                    setSaltDeck("None"); setVerifytSaltDeck("None");
                                                    }
                                                }>
                                                Șterge
                                            </Button>
                                        </div>
                                    </Col>
                                    
                                    <Col sm={6}>
                                        <div className="text-center">
                                            <Button onClick={handleButtonClick} variant="success" className="send-button">Verifică</Button>
                                            <CheckInputs
                                                show={showModal}
                                                handleClose={handleCloseModal}
                                                verifyLeftGlass={verifyLeftGlass} verifyLeftElthPName={verifyLeftElthPName}
                                                verifyRightGlass={verifyRightGlass} verifyRightElthPName={verifyRightElthPName}
                                                verifySaltDeck={verifySaltDeck}
                                            />
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
                                            <Dropdown.Item
                                                onClick={() => {setRightElthPName(<Latex>$Fe\;(Fier)$</Latex>); setVerifyRightElthPName("Fe")}}><Latex>$Fe\;(Fier)$</Latex>
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                onClick={() => {setRightElthPName(<Latex>$Ni\;(Nichel)$</Latex>); setVerifyRightElthPName("Ni")}}><Latex>$Ni\;(Nichel)$</Latex>
                                            </Dropdown.Item>
                                        </DropdownButton>
                                    </ButtonGroup>
                                </div>
                                <div className="mb-2 text-center">
                                    <Button variant="secondary" onClick={() => {setSaltDeck("None"); setVerifytSaltDeck("None")}}>Sterge puntea</Button>
                                </div>

                                <div className="text-center">
                                    <img className="experiment2" src={Experiment2} alt="Experiment"/>
                                </div>

                                <div className="text-center">
                                <Button variant="danger" onClick={() => {
                                        setRightGlassName("Undefined"); setVerifyRightGlass("Undefined");
                                        setRightElthPName("Undefined"); setVerifyRightElthPName("Undefined");
                                        setSaltDeck("None"); setVerifytSaltDeck("None");
                                    }
                                }>Resetează</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col sm={4}>
                            <LeftBox information={
                                <>
                                    <p className="cuprins-title">Potențiale standard (V) / <Latex>{potential}</Latex></p>
                                    <p className="potentiale">
                                        <Latex>{Al}</Latex><Latex>$=-1.66$</Latex><br/>
                                        <Latex>{Ag}</Latex><Latex>$=0.79$</Latex><br/>
                                        <Latex>{Mg}</Latex><Latex>$=-2.37$</Latex><br/>
                                        <Latex>{Cu}</Latex><Latex>$=-0.34$</Latex><br/>
                                        <Latex>{Sn}</Latex><Latex>$=-0.14$</Latex><br/>
                                        <Latex>{Fe}</Latex><Latex>$=-0.44$</Latex><br/>
                                        <Latex>{Ni}</Latex><Latex>$=-0.25$</Latex>
                                    </p>
                                </>
                            }/>
                        </Col>
                        <Col sm={8}>
                            <InfoBox information={
                                <>
                                    <p className="cuprins-title">Lore Ipsum</p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                        and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                                        leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                        with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </p>
                                </>
                            }/>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    else
        return (
            <LeftBox information={
                <>
                    Ne pare rău, însă te aflii pe un ecran prea mic pentru a putea efectua acest experiment!
                </>
            }/>
        )
}