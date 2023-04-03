import './testeaza.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import Latex from 'react-latex';

import Navbar from "../navbar/navbar";

//Images
import Ceva from '../../assets/images/Chem.svg';

export default function Testeaza() {
    return (
        <>
            <Container className="container-xl footer-fix">
                <Row>
                    <Col sm={4}>
                        <Navbar />
                    </Col>
                    <Col sm={2}>
                        <div className="menu-selector">
                            <div className="mb-2 text-center pahare-dropdown">
                                <ButtonGroup>
                                    <DropdownButton variant="success" id="dropdown-basic-button" title="Pahare" drop="end">
                                        <Dropdown.Item eventKey="1"><Latex>$Al(NO_3)_3$</Latex></Dropdown.Item>
                                        <Dropdown.Item eventKey="2"><Latex>$AgNO_3$</Latex></Dropdown.Item>
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

                            <img className="fix-img-testeaza" src={Ceva} alt="Logo"/>

                            <div className="text-center">
                                <Button variant="danger">Resetează</Button>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className="work-space">
                            Work space...
                        </div>
                    </Col>  
                </Row>
            </Container>
        </>
    )
}