import Latex from 'react-latex';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import InfoBox from "../infoBox/infoBox";
import LeftBox from '../infoBox/leftBox';

import ElemGalvBattery from '../../assets/images/other/ElemGalvBattery.png';
import '../home/home.css';

export default function elemGalv() {
    const arrowminus = `$\\; \\xrightarrow[]{-2e^-} \\;$`;
    const arrowplus = `$\\; \\xrightarrow[]{+2e^-} \\;$`;
    const arrowsimple = `$\\; \\xrightarrow[]{} \\;$`;
    const twoplus = `$\\! ^{2+}$`;
    const s = `$\\! _{(s)}$`; const aq = `$\\! _{(aq)}$`;

    return (
        <>
            <Container className="container-xl footer-fix">
                <Row>
                    <Col sm={4}>
                        <LeftBox information={
                            <>
                                <p className="cuprins-title"><span className="bold-text">Știai că...?</span></p>
                                <p>Celulele de combustie nu necesită reîncărcare, în ele se introduc substanţele chimice de fiecare dată când
                                    se foloseşte electricitatea. Acestea sunt mult prea costisitoare pentru aplicaţiile uzuale şi sunt folosite
                                    doar în unele staţii spaţiale.
                                </p>
                            </>
                        }/>
                        <div className="text-center">
                            <img style={{margin: "20px", width: "80%"}} className="img-galv" src={ElemGalvBattery} alt="Baterie"/>
                        </div>
                    </Col>
                    <Col sm={8}>
                        <InfoBox information={
                            <>
                                <p className="cuprins-title"><span className="bold-text">Elementul Galvanic:</span></p>
                                <p>Pilele electrochimice (sau pilele galvanice) sunt sisteme în care energia chimică este transformată în energie electrică.</p>
                                <p><span className="bold-text">Componenta:</span></p>
                                <ul>
                                    <li>2 electrozi (două semicelule);</li>
                                    <li>punte de sare;</li>
                                    <li>volmetru;</li>
                                    <li>conductor metalic exterior;</li>
                                </ul>
                                <p><span className="bold-text">Electrodul:</span> la nivelul lui are loc oxidarea (în cazul anodului) sau reducerea (în cazul catodului).
                                    Combinările dintre metalele care sunt folosite drept electrozi sunt date de <u>seria de reactivitate</u>.
                                </p>
                                <p><span className="bold-text">Anodul </span>- electrodul de <Latex>$Zn$</Latex>:</p>
                                <div className="text-center">
                                    <Latex>$Zn^\circ$</Latex><Latex>{s}</Latex><Latex>{arrowminus}</Latex><Latex>Zn</Latex><Latex>{twoplus}</Latex><Latex>{aq}</Latex>
                                </div>
                                <ul>
                                    <li>masa electrodului de Zn scade;</li>
                                    <li>concentrația ionilor de Zn<sup>2+</sup> în soluție crește;</li>
                                    <li>ionii Cl<sup>-</sup> (din puntea de sare) se orientează spre această semicelulă spre a compensa nivelul
                                        ridicat al sarcinilor pozitive;
                                    </li>
                                </ul>
                                <p><span className="bold-text">Catodul </span>- electrodul de <Latex>$Cu$</Latex>:</p>
                                <div className="text-center">
                                    <Latex>$Cu$</Latex><Latex>{twoplus}</Latex><Latex>{aq}</Latex><Latex>{arrowplus}</Latex><Latex>$Cu^\circ$</Latex><Latex>{s}</Latex>
                                </div>
                                <ul>
                                    <li>masa plăcuței de Cu crește;</li>
                                    <li>concentrația ionilor sulfat (SO<sub>4</sub>)<sup>2-</sup> din soluție crește;</li>
                                    <li>ionii K<sup>+</sup> din puntea de sare se organizează spre această semicelulă spre a compensa nivelul
                                        ridicat al sarcinilor negative;
                                    </li>
                                </ul>
                                <p><span className="bold-text">Reacția globală generatoare de curent:</span></p>
                                <div className="text-center">
                                    <Latex>$Zn^\circ + Cu$</Latex><Latex>{twoplus}</Latex><Latex>{arrowsimple}</Latex><Latex>$Zn$</Latex><Latex>{twoplus}</Latex><Latex>$+ Cu^\circ$</Latex>
                                </div>
                                <p><span className="bold-text">Puntea de sare: </span>are rolul de a asigura neutralitatea soluțiilor sărurilor celor două metale care joacă
                                    rol de electrozi.
                                </p>
                                <p><span className="bold-text">Volmetru: </span>demonstrează diferența de potențial dintre cele două semicelule.</p>
                                <p><span className="bold-text">Conductorul metalic exterior:</span> asigură transportul electronilor între cele două semicelule.</p>
                            </>
                        }/>
                    </Col>  
                </Row>
            </Container>
        </>
    )
}