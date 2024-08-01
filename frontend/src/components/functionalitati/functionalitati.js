import Latex from 'react-latex';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import InfoBox from "../infoBox/infoBox";
import LeftBox from '../infoBox/leftBox';

import GIF from '../../assets/images/other/GIF.gif';
import '../home/home.css';

export default function Functionalitati() {
    const eq2 = `$E=\\varepsilon^++\\varepsilon^-$`;

    return (
        <Container className="container-xl footer-fix">
            <Row>
                <Col lg={4}>
                <LeftBox information={
                    <>
                        <p className="cuprins-title"><span className="bold-text">Află ceva nou!</span></p>
                        <p>Ca urmare a diversității echipamentelor alimentate, pilele trebuie să răspundă unor diverse cerințe în ceea ce
                            privește capacitatea, tensiunea și curentul de scurtcircuit.
                        </p>
                        <p>Acest lucru se reflectă în dimensiunile și forma acestora, precum și în construcția și tipul materialului
                            folosit pentru fabricarea electrozilor și electrolitului.
                        </p>
                        <p>Și astfel survine întrebarea prin ce se deosebesc diferitele „baterii” și cum să le folosim corect?</p>
                    </>
                }/>
                <img style={{marginTop: "20px", marginLeft: "5px", width: "100%", height: "150px", borderRadius: "20px"}} className="img-functionalitati" src={GIF} alt="GIF"/>
                </Col>
                <Col lg={8}>
                    <InfoBox information={
                        <>
                            <p className="cuprins-title"><span className="bold-text">Caracteristicile funcționale ale pilelor electrice:</span></p>
                            <p><span className="bold-text">1. Tensiunea electromotoare</span> (t.e.m) a unui baterii <Latex>$E_b$</Latex> se obţine prin însumarea tensiunilor
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
                            <p><span className="bold-text">2. Rezistenţa internă totală</span> <Latex>$r_i$</Latex> reprezintă rezistenţa electrică opusă de pilă la trecerea
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
                            <p><span className="bold-text">3. Capacitatea pilelor electrice</span> reprezintă cantitatea de materie activă ce se poate transforma prin reacţii
                                chimice redox de la electrozi în energie chimică, fiind exprimată în <Latex>$A$</Latex>∙<Latex>$h$</Latex>.</p>
                            <p>Capacitatea teoretică maximă <Latex>$QT$</Latex> este dată de cantitatea totală de sarcină eliberată în circuitul exterior de
                                numărul total de moli oxidanţi la trecerea unui curent Id într-un interval de timp.</p>
                            <p>Capacitatea nominală <Latex>$Q_n$</Latex> reprezintă capacitatea practică ce se obţine prin descărcarea acumulatorului.
                                Numărul de cicluri de încărcare-descărcare depinde de gradul de descărcare: dacă acumulatorul a fost
                                descărcat în proporţie de 25% numărul de cicluri este de ordinul miilor dar dacă s-au produs descărcări în
                                proporţie de 75%, numărul de cicluri se reduce la câteva sute.</p>
                            <p><span className="bold-text">4. Gradul de utilizare:</span></p>
                            <p>
                                <Row>
                                    <Col sm={6}><span className="left-text"><Latex>$\eta=(m:M)$</Latex>∙<Latex>$Q_d$</Latex></span></Col>
                                    <Col sm={6}><span className="right-text"><Latex>$(6)$</Latex></span></Col>
                                </Row>
                            </p>
                            <p>unde: <Latex>$m$</Latex> este masa de substanţa activă iniţială; <Latex>$M$</Latex> este masa de substanţa activă
                                consumată; <Latex>$Q_d$</Latex> – capacitatea de descărcare.</p>
                            <p><span className="bold-text">5. Puterea pilelor electric:</span></p>
                            <p>
                                <Row>
                                    <Col sm={6}><span className="left-text"><Latex>$P= E_b$</Latex>∙<Latex>$I_d$</Latex></span></Col>
                                </Row>
                            </p>
                            <p><span className="bold-text">6. Autodescărcare (A) acumulatorului</span> – reprezintă pierderea iniţială a capacităţii pilei când circuitul
                                este deschis. Acest proces este provocat de reacţiile chimice nedorite între electrozi şi soluţiile de
                                electrolit. Autodescărcarea se evaluează cantitativ în procesele pierderii capacităţii în 24 ore.</p>
                            <p><span className="bold-text">7. Entalpia liberă a unei pile se calculează cu relaţia:</span></p>
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
    )
}