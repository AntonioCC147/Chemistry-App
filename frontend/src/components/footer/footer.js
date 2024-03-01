import { useEffect, useState } from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Arrow from '../../assets/images/other/Arrow.png';
import UPBIcon from '../../assets/images/icons/UPBIcon.png';
import ACSIcon from '../../assets/images/icons/ACSIcon.png';

import './footer.css';

export default function Footer() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) setShowButton(true);
            else setShowButton(false);
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div>
            <div className="top-button">
                {showButton && (
                    <button style={{background:"transparent", border:"none"}}>
                        <img src={Arrow} onClick={scrollToTop} className="arrow" alt="Arrow"/>
                    </button>
                )}
            </div>
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
                                Universitatea Națională de Știință și Tehnologie Politehnica București - Sesiunea de Comunicări Științifice
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
        </div>
    )
}
