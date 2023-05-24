import Latex from 'react-latex';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import InfoBox from "../infoBox/infoBox";

import PilaL from '../../assets/images/pile/PilaL.jpg';

export default function PilaLenclanche() {
    const twoplus = `$\\! ^{2+}$`; const s = `$_{(s)} \\;$`; const fourplus = `$\\! _4^+$`;

    return (
        <>
            <Container className="container-xl footer-fix">
                <Row>
                    <Col>
                        <InfoBox information={
                            <>
                                <p className="cuprins-title"><span className="bold-text">Pila Lenclanche:</span></p>
                                <p>Cea mai comuna forma de pila galvanica este pila Leclanche inventata de chimistul francez Georges Leclanch
                                    în 1860. In limbaj popular este numita pila uscata sau baterie proiectoare. Pila Leclanche utilizata in
                                    zilele noastre este foarte similara inventiei originale. Electrolitul consta dintr-un amestec de clorura
                                    de amoniu si clorura de zinc facuta pasta. Electrodul negativ este facut din zinc ca si carcasa externa a
                                    pilei, iar electrodul pozitiv, o tija de carbune înconjurata de un amestec de carbon si dioxid de mangan.
                                    Pila Leclanche produce circa 1.5V.
                                </p>
                                <p>Pila Leclanché este frecvent utilizata pentru alimentarea aparatelor de radio cu tranzistori, a lanternelor
                                    de buzunar, la instalatii de semnalizare etc.
                                </p>
                                <p>Reactiile care au loc la electrozi sunt complexe, si se pot reprezenta astfel:</p>
                                <div className="text-center some-space">
                                    <Latex>$(-)\;Zn$</Latex><Latex>{s}</Latex><Latex>$\longrightarrow Zn$</Latex><Latex>{twoplus}</Latex>
                                    <Latex>$+ 2e^-$</Latex>
                                </div>
                                <div className="text-center some-space">
                                    <Latex>$(+)\;2NH$</Latex><Latex>{fourplus}</Latex><Latex>$\;+\;2MnO_2 + 2e^-$</Latex><Latex>$\longrightarrow Mn_2O_3 + H_2O$</Latex>
                                </div>
                                <p>Forta electromotoare a acestei pile este de 1,5 - 1 ,65 V, si scade pe masura ce pila se descarca. In mod
                                    frecvent, se leaga in serie mai multe astfel de baterii.
                                </p>
                                <div className="text-center">
                                    <img src={PilaL} alt="Pila Lenclanche"/>
                                </div>
                                <p>O alta întrebuintare este in bateriile de acumulatoare. Astfel de baterii sunt dezvoltate pentru uz
                                    electric pentru a fi folosite ca nivelatoare de încarcatura, pentru a compensa fluctuatiile momentane de
                                    capacitate ale sistemului. Astfel de baterii ar putea fl instalate aproape de locurile cu cerinte speciale.
                                    Acestea cauzeaza putine probleme de mediu si ocupa putin spatiu.
                                </p>
                            </>
                        }/>
                    </Col>  
                </Row>
            </Container>
        </>
    )
}