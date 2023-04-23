import Latex from 'react-latex';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavbarComponent from '../navbar/navbar';
import InfoBox from "../infoBox/infoBox";
import LeftBox from '../infoBox/leftBox';

import PilaD from '../../assets/images/pile/PilaD.png';

export default function PilaDaniellJacobi() {
    const Zn2plus = `$Zn^{2+}$`;
    const Cu2plus = `$Cu^{2+}$`;

    return (
        <>
            <NavbarComponent/>
            <Container className="container-xl footer-fix">
                <Row>
                    <Col sm={4}>
                    <LeftBox information={
                        <>
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
                                <p className="cuprins-title">Pila Daniell-Jacobi:</p>
                                <p>Considerăm o celulă standard formată din două compartimente:</p>
                                <p>
                                    <ul>
                                        <li>o bucată de <Latex>$Cu$</Latex> metalic imersat în <Latex>$1 M CuSO_4$</Latex>;</li>
                                        <li>o bucată de <Latex>$Zn$</Latex> metalic imersat într-o soluție de <Latex>$1 M ZnSO_4$</Latex>;</li>
                                    </ul>
                                </p>
                                <p>Această celulă galvanică este numită pila Daniell-Jacobi.</p>
                                <div className="text-center">
                                    <img className="img-fix" src={PilaD} alt="Pila Daniell"/>
                                </div>
                                <p>Următoarele observaţii experimentale au fost făcute cu privire la această celulă:</p>
                                <p>
                                    1. Tensiunea iniţială este de 1,100 de volţi.<br/>
                                    2. Masa electrodului de zinc scade. Concentraţia de ioni de <Latex>{Zn2plus}</Latex> creşte în soluţia din
                                        jurul electrodului de zinc atunci când celula funcţionează.<br/>
                                    3. Masa electrodului de cupru creşte. Concentraţia de ionilor de <Latex>{Cu2plus}</Latex> în soluţie scade în jurul acestui
                                        electrod când celula funcţionează.<br/>
                                </p>
                                <p>Electrodul de Zn îşi micşorează masa, deoarece o parte din Zn metalic este oxidat la ionii <Latex>{Zn2plus}</Latex>.</p>
                            </>
                        }/>
                    </Col>  
                </Row>
            </Container>
        </>
    )
}