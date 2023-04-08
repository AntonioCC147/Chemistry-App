import Latex from 'react-latex';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import LeftBox from '../infoBox/leftBox';
import NavbarComponent from '../navbar/navbar';
import './testeaza.css';

//Images
import Ceva from '../../assets/images/Chem.svg';

export default function Testeaza() {
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