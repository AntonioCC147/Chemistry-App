import Latex from 'react-latex';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavbarComponent from '../navbar/navbar';
import InfoBox from "../infoBox/infoBox";
import LeftBox from '../infoBox/leftBox';

export default function How() {
    const eq2 = `$E=\\varepsilon^++\\varepsilon^-$`;

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
                                <p className="cuprins-title">Caracteristicile funcționale ale pilelor electrice:</p>
                                <p>1. Tensiunea electromotoare (t.e.m) a unui baterii <Latex>$E_b$</Latex> se obţine prin însumarea tensiunilor
                                    electromotoare ale celulelor galvanice individuale legate în serie:</p>
                                <p>
                                    <Row>
                                        <Col sm={6}><span className="left-text"><Latex>$E_b=nE$</Latex></span></Col>
                                        <Col sm={6}><span className="right-text"><Latex>$(1)$</Latex></span></Col>
                                    </Row>
                                </p>
                                <p>unde: <Latex>$n$</Latex> reprezintă numărul elementelor galvanice identice ce alcătuiesc bateria, iar:</p>
                                <p>
                                    <Row>
                                        <Col sm={6}><span className="left-text"><Latex>{eq2}</Latex></span></Col>
                                        <Col sm={6}><span className="right-text"><Latex>$(2)$</Latex></span></Col>
                                    </Row>
                                </p>
                                <p>În cursul generării de curent are loc o deviere de la valoare calculată pe cale termodinamică astfel că la
                                    borne tensiunea este mai mică:</p>
                                <p>
                                    <Row>
                                        <Col sm={6}><span className="left-text"><Latex>$E=E_b+E_p$</Latex></span></Col>
                                        <Col sm={6}><span className="right-text"><Latex>$(3)$</Latex></span></Col>
                                    </Row>
                                </p>
                                <p>unde <Latex>$Ep$</Latex> - reprezintă tensiunea de polarizare.</p>
                                <p>2. Rezistenţa internă totală <Latex>$r_i$</Latex> reprezintă rezistenţa electrică opusă de pilă la trecerea
                                    curentului:</p>
                                <p>
                                    <Row>
                                        <Col sm={6}><span className="left-text"><Latex>$r_i=r_0+r_p$</Latex></span></Col>
                                        <Col sm={6}><span className="right-text"><Latex>$(4)$</Latex></span></Col>
                                    </Row>
                                </p>
                                <p>unde: <Latex>$r_0$</Latex> este suma rezistenţelor electrice a electrozilor şi electrolitului în circuit
                                    inchis <Latex>$(i=0)$</Latex></p>
                                <p>și: <Latex>$r_p$</Latex> reprezintă rezistenţa de polarizare ce este condiţionată de trecerea curentului
                                    care modifică potenţialul electrozilor:</p>
                                <p>
                                    <Row>
                                        <Col sm={6}><span className="left-text"><Latex>$r_p=E_p : I_d$</Latex></span></Col>
                                        <Col sm={6}><span className="right-text"><Latex>$(5)$</Latex></span></Col>
                                    </Row>
                                </p>
                                <p>unde <Latex>$E_p$</Latex> tensiunea de polarizare, <Latex>$I_d$</Latex> curentul de descărcare.</p>
                                <p>3. Capacitatea pilelor electrice reprezintă cantitatea de materie activă ce se poate transforma prin reacţii
                                    chimice redox de la electrozi în energie chimică, fiind exprimată în <Latex>$A$</Latex>∙<Latex>$h$</Latex>.</p>
                                <p>Capacitatea teoretică maximă <Latex>$QT$</Latex> este dată de cantitatea totală de sarcină eliberată în circuitul exterior de
                                    numărul total de moli oxidanţi la trecerea unui curent Id într-un interval de timp.</p>
                                <p>Capacitatea nominală <Latex>$Q_n$</Latex> reprezintă capacitatea practică ce se obţine prin descărcarea acumulatorului.
                                    Numărul de cicluri de încărcare-descărcare depinde de gradul de descărcare: dacă acumulatorul a fost
                                    descărcat în proporţie de 25% numărul de cicluri este de ordinul miilor dar dacă s-au produs descărcări în
                                    proporţie de 75%, numărul de cicluri se reduce la câteva sute.</p>
                                <p>4. Gradul de utilizare:</p>
                                <p>
                                    <Row>
                                        <Col sm={6}><span className="left-text"><Latex>$\eta=(m:M)$</Latex>∙<Latex>$Q_d$</Latex></span></Col>
                                        <Col sm={6}><span className="right-text"><Latex>$(6)$</Latex></span></Col>
                                    </Row>
                                </p>
                                <p>unde: <Latex>$m$</Latex> este masa de substanţa activă iniţială; <Latex>$M$</Latex> este masa de substanţa activă
                                    consumată; <Latex>$Q_d$</Latex> – capacitatea de descărcare.</p>
                                <p>5. Puterea pilelor electrice </p>
                                <p>
                                    <Row>
                                        <Col sm={6}><span className="left-text"><Latex>$P= E_b$</Latex>∙<Latex>$I_d$</Latex></span></Col>
                                    </Row>
                                </p>
                                <p>6. Autodescărcare (A) acumulatorului – reprezintă pierderea iniţială a capacităţii pilei când circuitul
                                    este deschis. Acest proces este provocat de reacţiile chimice nedorite între electrozi şi soluţiile de
                                    electrolit. Autodescărcarea se evaluează cantitativ în procesele pierderii capacităţii în 24 ore.</p>
                                <p>7. Entalpia liberă a unei pile se calculează cu relaţia:</p>
                                <p>
                                    <Row>
                                        <Col sm={6}><span className="left-text"><Latex>$\Delta G^0 = -zFE^0$</Latex></span></Col>
                                        <Col sm={6}><span className="right-text"><Latex>$(7)$</Latex></span></Col>
                                    </Row>
                                </p>
                                <p><Latex>$E$</Latex> – t.e.m; <Latex>$z$</Latex> - z este numărul de electroni în reacţia de la anod şi la
                                    catod; cifra lui Faraday <Latex>$F = 96500As$</Latex>.</p>
                            </>
                        }/>
                    </Col>  
                </Row>
            </Container>
        </>
    )
}