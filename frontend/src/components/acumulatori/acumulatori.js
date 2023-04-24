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
                                <p className="cuprins-title">Pastila de știință...</p>
                                <p>Acumulatorii sunt celule electrochimice care pot acumula energie electrică sub formă de energie chimică.
                                    De aceea ei trebuiesc întâi "încărcaţi" pentru a putea livra mai târziu energie electrică sub formă de
                                    curent continuu. Un acumulator descărcat se poate reîncărca; această succesiune încărcare - descărcare se
                                    numeşte ciclu.
                                </p>
                                <p>Acumulatorul Nichel-Cadmiu:
                                    <ul>
                                        <li>Inventat în 1899 de suedezul Waldemar Jugner</li>
                                        <li>Prezintă efect de memorie</li>
                                        <li>Utilizează materiale cu grad de toxicitate mare</li>
                                        <li>S-a produs în cantități de peste 1,5 miliarde de bucăți pe an</li>
                                        <li>A fost foarte populară până la sfârșitul anilor 1990, iar producția lor este restricționată în prezent în toate piețele mari</li>
                                    </ul>
                                </p>
                            </>
                        }/>
                        <img style={{margin: "auto", width: "450px"}} src={Battery1} alt="Baterie"/>
                        <img style={{margin: "auto", marginTop: "20%", width: "450px"}} src={Battery2} alt="Baterie"/>
                    </Col>
                    <Col sm={8}>
                        <InfoBox information={
                            <>
                                <p className="cuprins-title">Acumulatori acizi:</p>
                                <p>Acumulatorul cu plumb este o pila cu electrolit lichid realizat pentru prima oara, in anul 1859, de
                                    inginerul francez Gaston Planté.
                                </p>
                                <p>Electrodul negativ este format dintr-un gratar de plumb cu ochiurile umplute cu plumb spongios, iar
                                    electrodul pozitiv este construit tot dintr-un gratar de plumb cu ochiurile umplute cu dioxid de plumb.
                                    Electrolitul este acid sulfuric de concentratie 38% (p = 1,29 g/cm 3) pentru acumulatorul incarcat.
                                </p>
                                <p>În timpul funcționării acumulatorului, când acesta debiteaza curent electric, la cei doi electrozi au loc
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
                                <p>Reacția totală presupune transformarea <Latex>$Pb$</Latex> și a <Latex>$PbO_2$</Latex> în
                                    <Latex>$PbSO_4$</Latex> prin consumarea acidului sulfuric.</p>
                                <div className="text-center some-space">
                                    <Latex>$Pb + PbO_2 + 4H^+ + 2SO$</Latex><Latex>{fourtwominus}</Latex><Latex>$\longrightarrow 2PbSO_4 + 2H_2O$</Latex>
                                </div>
                                <p>La ambii electrozi se formeaza PbSO 4 insolubil, care aderă la plăci, se sulfatează. Granulele fine de PbSO
                                    4 formate initial se măresc în timpul funcționării, astfel încât randamentul acumulatorului scade.
                                </p>
                                <p>Se poate constata daca un acumulator este incarcat sau nu prin masurarea concentratiei acidului sulfuric,
                                    mai precis prin determinarea densitatii solutiei.
                                </p>
                                <p>Acumulatorul poate fi reîncărcat prin conectarea acestuia la o sursa de curent continuu astfel, încât
                                    curentul debitat de sursa sa aibă sens opus celui debitat de acumulator; la electrozi se produc astfel
                                    reacțiile inverse celor indicate.
                                </p>T.e.m. a unei celule este de aproximativ 2V. Frecvent se utilizează acumulatori construiți din șase sau
                                    douăsprezece celule legate în serie pentru a produce 12V sau 24V.
                                <p className="cuprins-title some-space">Acumulatori alcani:</p>
                                <p><b>Pila Edison:</b></p>
                                <p>Un alt acumulator mult folosit este bateria alcalina sau acumulatorul nichel - fier, dezvoltată de inventatorul
                                    american Thomas Edison în 1-900. Este alcătuită dintr-un electrod negativ din fier, cel pozitiv din oxid de
                                    nichel si electrolitul este o soluție de hidroxid de potasiu. Are dezavantajul de a emana hidrogen în timpul
                                    încărcării.
                                </p>
                                <p>Aceast acumulator este folosit în principal în aplicații în industria grea. Bateria Edison funcționeaza bine
                                    timp de 10 ani și produce circa 1.15V.
                                </p>
                                <p><b>Acumulatorul Nichel-Cadmiu:</b></p>
                                <p>O baterie alcalină similara bateriei Edison este celula nichel-cadmiu sau bateria de cadmiu, în care
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