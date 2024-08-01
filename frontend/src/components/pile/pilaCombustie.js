import Latex from 'react-latex';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import InfoBox from "../infoBox/infoBox";

export default function PilaCombustie() {
    const frac = `$ \\frac{1}{2} $`;

    return (
        <Container className="container-xl footer-fix">
            <Row>
                <Col>
                    <InfoBox information={
                        <>
                            <p className="cuprins-title"><span className="bold-text">Pila de Combustie:</span></p>
                            <p>În pilele de combustie, procesul de oxido-reducere are loc prin arderea combustibililor
                                (hidrogen, metanol, oxid de carbon, unele hidrocarburi).
                            </p>
                            <p>La anod, denumit și electrod de combustibil, are loc oxidarea combustibililor, proces prin
                                care se eliberează electroni în circuitul exterior.
                            </p>Dificultatea construirii pilelor de acest tip constă în faptul că oxidarea combustibililor
                                necesită temperaturi ridicate, condiții în care containerul și electrozii se corodează.
                                Necesitatea furnizării căldurii pentru a menține pila la temperaturi ridicate scade eficiența
                                utilizării acestui tip de pile. Cea mai cunoscută pilă de combustie este pila hidrogen-oxigen.
                                În această pilă are loc arderea hidrogenului în oxigen (sinteză controlată a apei) în urma
                                căreia se degajă căldură și se eliberează energie electrică.
                            <p>
                            <p>In această pila are loc arderea hidrogenului în oxigen (sinteza controlată a apei) în urma căreia se degajă
                                caldură și se eliberează energie electricä.</p>
                            </p>
                            <p>Hidrogenul (combustibilul) și oxigenul (oxidantul) se introduc în două compartimente diferite,
                                separate de un electrolit. Gazele sunt trecute prin electrozi de cărbune comprimat în care s-au
                                incorporat catalizatorii. Elementul galvanic se reprezintă astfel:
                            </p>
                            <div className="text-center some-space">
                                <Latex>$C/H_2,\;HO^-,\;O_2/C$</Latex>
                            </div>
                            <p>La electrozi se desfășoară reacțiile:</p>
                            <div className="text-center some-space">
                                <Latex>$(-)\;H_2 + 2HO^- \longrightarrow$</Latex><Latex>$\;2H_2O + 2e^-$</Latex>
                            </div>
                            <div className="text-center some-space">
                                <Latex>$(+)\;$</Latex><Latex>{frac}</Latex><Latex>$O_2 + H_2O$</Latex><Latex>$ + 2e^-\longrightarrow 2HO^-$</Latex>
                            </div>
                            <p>Reacția totală este: <Latex>$\;H_2 +$</Latex><Latex>{frac}</Latex><Latex>$O_2 = H_2O$</Latex></p>
                            <p>Pentru funcționarea eficientă a pilei hidrogen-oxigen trebuie îndepărtate apa formată și căldura. În pila
                                pentru fiecare kW ora de energie se produce 1L de apa.
                            </p>
                        </>
                    }/>
                </Col>  
            </Row>
        </Container>
    )
}