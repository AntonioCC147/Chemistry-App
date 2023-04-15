import Latex from 'react-latex';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavbarComponent from '../navbar/navbar';
import InfoBox from "../infoBox/infoBox";
import LeftBox from '../infoBox/leftBox';

import Battery1 from '../../assets/images/other/Battery1.png';
import Battery2 from '../../assets/images/other/Battery2.png';

export default function Acumulatori() {
    const s = `$_{(s)} \\;$`; const twos = `$_{2(s)} \\;$`; const fours = `$_{4(s)} \\;$`;
    const fourtwominus = `$_4^{2-} \\;$`;

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
                        <img style={{margin: "auto", width: "450px"}} src={Battery1} alt="Baterie"/>
                        <img style={{margin: "auto", marginTop: "50%", width: "450px"}} src={Battery2} alt="Baterie"/>
                    </Col>
                    <Col sm={8}>
                        <InfoBox information={
                            <>
                                <p className="cuprins-title">Acumulatori:</p>
                                <p>Acumulatorul cu plumb este o pila cu electrolit lichid realizat pentru prima oara, in anul 1859, de
                                    inginerul francez Gaston Planté.
                                </p>
                                <p>Electrodul negativ este format dintr-un gratar de plumb cu ochiurile umplute cu plumb spongios, iar
                                    electrodul pozitiv este construit tot dintr-un gratar de plumb cu ochiurile umplute cu dioxid de plumb.
                                    Electrolitul este acid sulfuric de concentratie 38% (p = 1,29 g/cm 3) pentru acumulatorul incarcat.
                                </p>
                                <p>In timpul functionarii acumulatorului, când acesta debiteaza curent electric, la cei doi electrozi au loc
                                    procesele care pot fi reprezentate prin ecuatiile:
                                </p>
                                <div className="text-center some-space">
                                    <Latex>$(+)\;PbO$</Latex><Latex>{twos}</Latex><Latex>$+\;SO$</Latex><Latex>{fourtwominus}</Latex>
                                    <Latex>$+\;4H^+ + 2e^- \longrightarrow PbSO$</Latex><Latex>{fours}</Latex><Latex>$+2H_2O$</Latex>
                                </div>
                                <div className="text-center some-space">
                                    <Latex>$(-)\;Pb$</Latex><Latex>{s}</Latex><Latex>$+\;SO$</Latex><Latex>{fourtwominus}</Latex>
                                    <Latex>$\longrightarrow PbSO$</Latex><Latex>{fours}</Latex><Latex>$+2e^-$</Latex>
                                </div>
                                <p>Reactia totala presupune transformarea Pb si a Pb0 2 in PbSO 4 prin consumarea acidului sulfuric.</p>
                                <div className="text-center some-space">
                                    <Latex>$Pb + PbO_2 + 4H^+ + 2SO$</Latex><Latex>{fourtwominus}</Latex><Latex>$\longrightarrow 2PbSO_4 + 2H_2O$</Latex>
                                </div>
                                <p>La ambii electrozi se formeaza PbSO 4 insolubil, care adera la placi, se sulfateaza. Granulele fine de PbSO
                                    4 formate initial se maresc in timpul functionarii, astfel incat randamentul acumulatorului scade.
                                </p>
                                <p>Se poate constata daca un acumulator este incarcat sau nu prin masurarea concentratiei acidului sulfuric,
                                    mai precis prin determinarea densitatii solutiei.
                                </p>
                                <p>Acumulatorul poate fi reincarcat prin conectarea acestuia la o sursa de curent continuu astfel, incât
                                    curentul debitat de sursa sa aibä sens opus celui debitat de acumulator; la electrozi se produc astfel
                                    reactiile inverse celor indicate.
                                </p>F.e.m. a unei cebule este de aproximativ 2V. Frecvent se utilizeaza baterii formate din trei sau sase
                                celule legate in serie pentru a produce 6 V sau 12 V.
                                <p>In afara acumulatorilor cu plumb se utilizeaza acumulatoare alcaline de tip Ni-Fe si Ni- Cd. Acestea
                                    prezintä avantajul ca permit desfasurarea unui numär mare de descarcári - incarcari fara deteriorarea
                                    placilor.
                                </p>
                                <p className="cuprins-title">Bateria de acid de plumb:</p>
                                <p>Acumulatorul care poate fi reîncarcat prin inversarea reactiei chimice, a fost inventat in 1859 de
                                    fizicianul francez Gaston Plante. Bateria lui Plante era una din acid de plumb, un tip larg folosit astazi.
                                </p>
                                <p>Bateria de acid de plumb, care consta din trei sau sase baterii conectate în serie, este folosita la
                                    automobile, camioane si alte vehicule, marele ei avantaj este ca poate transmite un curent puternic de
                                    electricitate pentru a porni un motor, insa se descarca repede. Electrolitul este o solutie diluata de
                                    acid sulfuric, electrodul negativ este din plumb si cel pozitiv din dioxid de plumb.
                                </p>
                                <p>Bateria de acid de plumb are o functionare buna timp de aproape 4 ani si produce 2V pe celula.</p>
                                <p className="cuprins-title">Bateria Edison:</p>
                                <p>Un alt acumulator mult folosit este bateria alcalina sau bateria nichel - fier, dezvoltata de inventatorul
                                    american Thomas Edison în 1 900. Electrodul negativ din fier, cel pozitiv din oxid de nichel si electrolitul
                                    este o solutie de hidroxid de potasiu. Are dezavantajul de a emana hidrogen in timpul încarcarii.
                                </p>
                                <p>Aceasta baterie este folosita în principal in aplicatii în industria grea. Bateria Edison functioneaza bine
                                    timp de 10 ani si produce circa 1.15V.
                                </p>
                                <p>O baterie alcalina similara bateriei Edison este celula nichel-cadmiu sau bateria de cadmiu, în care
                                    electrodul de fier este înlocuit cu unul din cadmiu. Functioneaza timp de 25 de ani si produce circa
                                    1.15 V.
                                </p>
                                <p>Un numar de noi tipuri de baterii a fost creat pentru utilizarea în vehiculele electrice. Versiuni
                                    imbunatatite ale bateriilor de stocare conventionale au fost dezvoltate pentru masini electrice, dar
                                    au dezavantajele de a avea fie o raza scurta sau cost ridicat, fie greutate mare sau probleme legate
                                    de mediu. Baterii avansate care par promitatoare pentru utilizatea în vehicule electrice sunt cele litiu
                                    - sulfat de fier, zinc - clor, natriu - sulf, nichel-hidrura de metal.
                                </p>
                            </>
                        }/>
                    </Col>  
                </Row>
            </Container>
        </>
    )
}