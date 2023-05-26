import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import UPBIcon from '../../assets/images/icons/UPBIcon.png';
import ACSIcon from '../../assets/images/icons/ACSIcon.png';

import './footer.css';

export default function Footer() {
    return (
        <div className="text-center p-4 footer">
            <Row>
                <Col sm={1}>
                    <a href="https://acs.pub.ro/" target="blank"><img className="icon-left-img" src={ACSIcon} alt="ACS Icon"/></a>
                </Col>
                <Col sm={10}>
                    <div className="text-align">
                        <p>
                            &copy; {new Date().getFullYear()} Copyright
                            <span style={{margin: 'auto', height: '100px'}}> | </span>
                            <a href="https://github.com/AntonioCC147" target="blank" style={{textDecoration: 'none', color: '#210062', fontWeight: 'bold'}}>
                                Crantea Antonio Cristian
                            </a>
                            , student la "Facultatea de Automatică și Calculatoare"
                        </p>
                        <p>
                            Universitatea Politehnică din București - Sesiunea de Comunicări Științifice
                            <span style={{margin: 'auto', height: '100px'}}> | </span>
                            Mai 2023
                        </p>
                    </div>
                </Col>
                <Col sm={1}>
                    <a href="https://upb.ro/" target="blank"><img className="icon-right-img" src={UPBIcon} alt="UPB Icon"/></a>
                </Col>
            </Row>
        </div>
    )
}
