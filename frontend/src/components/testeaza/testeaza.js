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

import SpawnGlass from './functions.js';

import './testeaza.css';

export default function Testeaza() {
    const [name, setName] = useState("");
    useEffect(()=>{
		setName("Undefined");
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
                                        <Dropdown.Item eventKey="1" onClick={() => setName("Al")}><Latex>$Al(NO_3)_3$</Latex></Dropdown.Item>
                                        <Dropdown.Item eventKey="2" onClick={() => setName("Ag")}><Latex>$AgNO_3$</Latex></Dropdown.Item>
                                        <Dropdown.Item eventKey="3"><Latex>$Mg(NO_3)_2$</Latex></Dropdown.Item>
                                        <Dropdown.Item eventKey="4"><Latex>$Cu(NO_3)_2$</Latex></Dropdown.Item>
                                        <Dropdown.Item eventKey="5"><Latex>$Sn(NO_3)_2$</Latex></Dropdown.Item>
                                    </DropdownButton>
                                </ButtonGroup>
                            </div>
                            <div className="mb-2 text-center placute-dropdown">
                                <ButtonGroup>
                                    <DropdownButton variant="primary" id="dropdown-basic-button" title="Plăcuțe" drop="end">
                                        <Dropdown.Item eventKey="1"><Latex>$Al\;(Aluminiu)$</Latex></Dropdown.Item>
                                        <Dropdown.Item eventKey="2"><Latex>$Ag\;(Argint)$</Latex></Dropdown.Item>
                                        <Dropdown.Item eventKey="3"><Latex>$Mg\;(Magneziu)$</Latex></Dropdown.Item>
                                        <Dropdown.Item eventKey="4"><Latex>$Cu\;(Cupru)$</Latex></Dropdown.Item>
                                        <Dropdown.Item eventKey="5"><Latex>$Sn\;(Staniu)$</Latex></Dropdown.Item>
                                    </DropdownButton>
                                </ButtonGroup>
                            </div>
                            <div className="mb-2 text-center">
                                <Button variant="secondary">Punte de sare</Button>
                            </div> 

                            <img className="chem-glass" src={LeftGlass} alt="Glass"/>

                            <div className="text-center">
                                <Button variant="danger">Resetează</Button>
                            </div>
                        </div>
                    </Col>
                    

                    <Col sm={8}>
                        <div className="work-space-box">
                            <Row>
                                <Col sm={6}>
                                    <div className="glass-box">
                                        <SpawnGlass name={name}/>
                                    </div>
                                </Col>
                                
                                <Col sm={6}>
                                    <div className="glass-box">
                                        <SpawnGlass name={name}/>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={3}>
                                    <div className="pahar-box">
                                        {name}
                                    </div>
                                </Col>
                                <Col sm={3}>
                                    <div className="pile-box">
                                        {name}
                                    </div>
                                </Col>
                                <Col sm={3}>
                                    <div className="pahar-box">
                                        {name}
                                    </div>
                                </Col>
                                <Col sm={3}>
                                    <div className="pile-box">
                                        {name}
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
                                        <Dropdown.Item eventKey="1"><Latex>$Al(NO_3)_3$</Latex></Dropdown.Item>
                                        <Dropdown.Item eventKey="2"><Latex>$Ag(NO_3)$</Latex></Dropdown.Item>
                                        <Dropdown.Item eventKey="3"><Latex>$Mg(NO_3)_2$</Latex></Dropdown.Item>
                                        <Dropdown.Item eventKey="4"><Latex>$Cu(NO_3)_2$</Latex></Dropdown.Item>
                                        <Dropdown.Item eventKey="5"><Latex>$Sn(NO_3)_2$</Latex></Dropdown.Item>
                                    </DropdownButton>
                                </ButtonGroup>
                            </div>
                            <div className="mb-2 text-center placute-dropdown">
                                <ButtonGroup>
                                    <DropdownButton variant="primary" id="dropdown-basic-button" title="Plăcuțe" drop="start">
                                        <Dropdown.Item eventKey="1"><Latex>$Al\;(Aluminiu)$</Latex></Dropdown.Item>
                                        <Dropdown.Item eventKey="2"><Latex>$Ag\;(Argint)$</Latex></Dropdown.Item>
                                        <Dropdown.Item eventKey="3"><Latex>$Mg\;(Magneziu)$</Latex></Dropdown.Item>
                                        <Dropdown.Item eventKey="4"><Latex>$Cu\;(Cupru)$</Latex></Dropdown.Item>
                                        <Dropdown.Item eventKey="5"><Latex>$Sn\;(Staniu)$</Latex></Dropdown.Item>
                                    </DropdownButton>
                                </ButtonGroup>
                            </div>
                            <div className="mb-2 text-center">
                                <Button variant="secondary">Punte de sare</Button>
                            </div> 

                            <img className="chem-glass" src={RightGlass} alt="Glass"/>

                            <div className="text-center">
                                <Button variant="danger">Resetează</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}