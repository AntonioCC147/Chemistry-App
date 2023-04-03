import './testeaza.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
                    <Col sm={1}>
                        <div className="menu-selector">
                            A
                            <img src={Ceva} alt="Logo"/>
                        </div>
                    </Col>
                    <Col sm={7}>
                        <div className="work-space">
                            a
                        </div>
                    </Col>  
                </Row>
            </Container>
        </>
    )
}