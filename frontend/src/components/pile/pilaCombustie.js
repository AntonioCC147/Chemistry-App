import Latex from 'react-latex';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import InfoBox from "../infoBox/infoBox";

export default function PilaCombustie() {
    const frac = `$ \\frac{1}{2} $`;

    return (
        <>
            <Container className="container-xl footer-fix">
                <Row>
                    <Col>
                        <InfoBox information={
                            <>
                                <p className="cuprins-title"><span className="bold-text">Pila de Combustie:</span></p>
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
                                    <Latex>$(-)\;H_2 + 2HO^- \longrightarrow$</Latex><Latex>$\;2H_2O + 2e^-$</Latex>
                                </div>
                                <div className="text-center some-space">
                                    <Latex>$(+)\;$</Latex><Latex>{frac}</Latex><Latex>$O_2 + H_2O$</Latex><Latex>$ + 2e^-\longrightarrow 2HO^-$</Latex>
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