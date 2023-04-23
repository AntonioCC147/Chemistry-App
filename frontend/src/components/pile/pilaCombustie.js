import Latex from 'react-latex';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavbarComponent from '../navbar/navbar';
import InfoBox from "../infoBox/infoBox";
import LeftBox from '../infoBox/leftBox';

export default function PilaCombustie() {
    const frac = `$ \\frac{1}{2} $`;

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
                                <p className="cuprins-title">Pila de Combustie:</p>
                                <p>In pilele de combustie procesul de oxido-reducere are loc prin arderea combustibililor (hidrogen, metanol,
                                    oxid de car­bon, unele hidrocarburi).
                                </p>
                                <p>La anod, denumit și electrod de combustibil, are loc oxidarea combustibillor, proces prin care se
                                    elibereaza electroni in circuitul exterior.
                                </p>Dificultatea construirii pilelor de acest tip consta in faptul ca oxidarea combustibililor necesita
                                    temperaturi ridicate, conditii in care containerul si electrozii se corodeaza. Necesitatea furnizarii
                                    caldurii pentru a mentine pila la temperaturi ridicate scade eficienta utilizarii acestui tip de pile.
                                    Cea mai cunoscuta pila de combustie este pila hidrogen-oxigen.
                                <p>
                                <p>In aceasta pila are loc arderea hidrogenului in oxigen (sinteza controlata a apei) in urma careia se degaja
                                    caldura si se elibereaza energie electricä.</p>
                                </p>
                                <p>Hidrogenul (combustibilul) si oxigenul (oxidantul) se introduc in doua compartimente diferite, separate de
                                    un electrolit. Gazele sunt trecute prin electrozi de carbune comprimat in care s-au incorporat catalizatorii.
                                    Elementul galvanic se reprezinta astfel:
                                </p>
                                <div className="text-center some-space">
                                    <Latex>$C/H_2,\;HO^-,\;O_2/C$</Latex>
                                </div>
                                <p>La electrozi se desfasoara reactiile:</p>
                                <div className="text-center some-space">
                                    <Latex>$(-)\;H_2 + 2HO^- \longrightarrow 2H_2O + 2e^-$</Latex>
                                </div>
                                <div className="text-center some-space">
                                    <Latex>$(+)\;$</Latex><Latex>{frac}</Latex><Latex>$O_2 + H_2O + 2e^- \longrightarrow 2HO^-$</Latex>
                                </div>
                                <p>Reactia totala este: <Latex>$\;H_2 +$</Latex><Latex>{frac}</Latex><Latex>$O_2 = H_2O$</Latex></p>
                                <p>Pentru functionarea eficienta a pilei hidrogen-oxigen trebuie indepartate apa formata si caldura. In pila
                                    pentru fiecare kW ora de energie se produce 1L de apa.
                                </p>
                            </>
                        }/>
                    </Col>  
                </Row>
            </Container>
        </>
    )
}