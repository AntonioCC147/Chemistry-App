import Latex from 'react-latex';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import InfoBox from "../infoBox/infoBox";

import PilaL from '../../assets/images/pile/PilaL.jpg';

export default function PilaLenclanche() {
    const twoplus = `$\\! ^{2+}$`; const s = `$_{(s)} \\;$`; const fourplus = `$\\! _4^+$`;

    return (
        <Container className="container-xl footer-fix">
            <Row>
                <Col>
                    <InfoBox information={
                        <>
                            <p className="cuprins-title"><span className="bold-text">Pila Lenclanche:</span></p>
                            <p>Cea mai comună formă de pilă galvanică este pila Leclanché inventată de chimistul francez
                                Georges Leclanché în 1860. În limbaj popular, este numită pila uscată sau baterie
                                proiectoare. Pila Leclanché utilizată în zilele noastre este foarte similară invenției
                                originale. Electrolitul constă dintr-un amestec de clorură de amoniu și clorură de zinc
                                făcută pastă. Electrodul negativ este făcut din zinc ca și carcasă externă a pilei, iar
                                electrodul pozitiv, o tijă de cărbune înconjurată de un amestec de carbon și dioxid de
                                mangan. Pila Leclanché produce circa 1.5V.
                            </p>
                            <p>Pila Leclanché este frecvent utilizată pentru alimentarea aparatelor de radio cu tranzistori,
                                a lanternelor de buzunar, la instalații de semnalizare etc.
                            </p>
                            <p>Reacțiile care au loc la electrozi sunt complexe, și se pot reprezenta astfel:</p>
                            <div className="text-center some-space">
                                <Latex>$(-)\;Zn$</Latex><Latex>{s}</Latex><Latex>$\longrightarrow Zn$</Latex><Latex>{twoplus}</Latex>
                                <Latex>$+ 2e^-$</Latex>
                            </div>
                            <div className="text-center some-space">
                                <Latex>$(+)\;2NH$</Latex><Latex>{fourplus}</Latex><Latex>$\;+\;2MnO_2 + 2e^-$</Latex><Latex>$\longrightarrow Mn_2O_3 + H_2O$</Latex>
                            </div>
                            <p>Forța electromotoare a acestei pile este de 1,5 - 1,65 V și scade pe măsură ce pila se
                                descarcă. În mod frecvent, se leagă în serie mai multe astfel de baterii.
                            </p>
                            <div className="text-center">
                                <img src={PilaL} alt="Pila Lenclanche"/>
                            </div>
                            <p>O altă întrebuințare este în bateriile de acumulatori. Astfel de baterii sunt dezvoltate
                                pentru uz electric pentru a fi folosite ca nivelatoare de încărcătură, pentru a compensa
                                fluctuațiile momentane de capacitate ale sistemului. Astfel de baterii ar putea fi instalate
                                aproape de locurile cu cerințe speciale. Acestea cauzează puține probleme de mediu și ocupă
                                puțin spațiu.
                            </p>
                        </>
                    }/>
                </Col>  
            </Row>
        </Container>
    )
}