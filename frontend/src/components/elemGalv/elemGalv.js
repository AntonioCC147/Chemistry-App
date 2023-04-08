import Latex from 'react-latex';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavbarComponent from '../navbar/navbar';
import InfoBox from "../infoBox/infoBox";
import LeftBox from '../infoBox/leftBox';

export default function elemGalv() {
    const arrowminus = `$\\; \\xrightarrow[]{-2e^-} \\;$`;
    const arrowplus = `$\\; \\xrightarrow[]{+2e^-} \\;$`;
    const arrowsimple = `$\\; \\xrightarrow[]{} \\;$`;
    const twoplus = `$\\! ^{2+}$`;
    const s = `$\\! _{(s)}$`; const aq = `$\\! _{(aq)}$`;

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
                    <Col sm={8}>
                        <InfoBox information={
                            <>
                                <p className="cuprins-title">Elementul Galvanic:</p>
                                <p>Pilele electrochimice (sau pilele galvanice) sunt sisteme în care energia chimică este transformată în energie electrică.</p>
                                <p><b>Componenta:</b></p>
                                <ul>
                                    <li>2 electrozi (două semicelule);</li>
                                    <li>punte de sare;</li>
                                    <li>volmetru;</li>
                                    <li>conductor metalic exterior;</li>
                                </ul>
                                <p><b>Electrodul:</b> la nivelul lui are loc oxidarea (în cazul anodului) sau reducerea (în cazul catodului).
                                    Combinările dintre metalele care sunt folosite drept electrozi sunt date de <u>seria de reactivitate</u>.
                                </p>
                                <p><b>Anodul </b>- electronul de <Latex>$Zn$</Latex>:</p>
                                <div className="text-center">
                                    <Latex>$Zn^\circ$</Latex><Latex>{s}</Latex><Latex>{arrowminus}</Latex><Latex>Zn</Latex><Latex>{twoplus}</Latex><Latex>{aq}</Latex>
                                </div>
                                <ul>
                                    <li>masa electronului de Zn scade;</li>
                                    <li>concentrația ionilor de Zn<sup>2+</sup> în soluție creste;</li>
                                    <li>ionii Cl<sup>-</sup> (din puncte de sare) se orientează spre această semicelulă spre a compensa nivelul
                                        ridicat al sarcinilor pozitive;
                                    </li>
                                </ul>
                                <p><b>Catodul </b>- electronul de <Latex>$Cu$</Latex>:</p>
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
                                <p><b>Reacția globală generatoare de curent:</b></p>
                                <div className="text-center">
                                    <Latex>$Zn^\circ + Cu$</Latex><Latex>{twoplus}</Latex><Latex>{arrowsimple}</Latex><Latex>$Zn$</Latex><Latex>{twoplus}</Latex><Latex>$+ Cu^\circ$</Latex>
                                </div>
                                <p><b>Puntea de sare: </b>are rolul de a asigura neutralitatea soluțiilor sărurilor celor două metale care joacă
                                    rol de electrozi.
                                </p>
                                <p><b>Volmetru: </b>demonstrează diferența de potențial dintre cele două semicelule.</p>
                                <p><b>Conductorul metalic exterior:</b> asigură transportul electronilor între cele două semicelule.</p>
                            </>
                        }/>
                    </Col>  
                </Row>
            </Container>
        </>
    )
}