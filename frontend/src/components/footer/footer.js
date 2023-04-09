import { MDBFooter } from 'mdb-react-ui-kit';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './footer.css';

export default function Footer() {
    return (
        <Row>
            <Col sm={2}>
                a
            </Col>
            <Col sm={8}>
                <MDBFooter bgColor='light' className='text-center text-lg-left footer'>
                    <div className='text-center p-4 footer' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        &copy; {new Date().getFullYear()} Copyright
                            <span style={{margin: 'auto', height: '100px'}}> | </span>
                                Crantea Antonio Cristian, student la "Facultatea de Automatică și Calculatoare"
                            <span style={{margin: 'auto', height: '100px'}}> | </span>
                                Anul I, Grupa 313AA
                    </div>
                </MDBFooter>
            </Col>
            <Col sm={2}>
                b
            </Col>
        </Row>
    )
}
