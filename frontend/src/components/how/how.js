import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavbarComponent from '../navbar/navbar';
import InfoBox from "../infoBox/infoBox";
import LeftBox from '../infoBox/leftBox';

export default function How() {
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
                                <p className="cuprins-title">Cum funcționează?</p>
                                <p>Nu are importanţă dacă carburantul este lichid sau gazos, trebuie să fie bogat în atomi de hidrogen.
                                    Secretul pilelor de combustie? Să se separe electronul şi protonul fiecărui atom de hidrogen şi apoi să ia un
                                    drum diferit. Dupa ce hidrogenul este extras din carburant, traversează un catalizator care scindează atomii
                                    de hidrogen în electroni şi protoni. Aceste sarcini se îndreaptă spre un electrolit sau o membrană, după tipul
                                    pilei, care nu lasă să treacă decât protonii.
                                </p>
                                <p>Electronii sunt deci excedentari pe una dintre feţele filtrului, care se încarcă negativ. Electrozii, cel mai
                                    adesea din carbon sau siliciu, încadrează filtrul şi recuperează sarcinile electrice. Sunt bornele pilei.
                                    Când circulă curentul, electronii ajung la electrodul pozitiv. Ei se recombină cu protonii şi oxigenul din aer,
                                    formând vapori de apă.
                                </p>
                                <p>Cataliza este însoţită de o puternică degajare de căldură. Bilanţul energetic este repartizat astfel: 40%
                                    electricitate şi 60% căldură. Pilele de combustie oferă simultan electricitate şi căldură. Degajarea căldurii
                                    ridică însă probleme atunci când se doreşte numai obţinerea de energie electrică. Este cazul automobilului.
                                    Deja anumite soluţii de recuperare şi reciclare a căldurii permit obţinerea randamentelor de 80%. Oricare ar fi
                                    randamentul pilelor este deja net superior celui de grupuri electrogene tradiţionale care este de 20%. Ele încep
                                    să ia locul acestora pentru aprovizionarea cu electricitate a zonelor izolate.
                                </p>
                                <p>Aşadar, pilele de combustie permit producerea de electricitate şi căldură cu un randament superior şi slabe
                                    emisii poluante.
                                </p>
                            </>
                        }/>
                    </Col>  
                </Row>
            </Container>
        </>
    )
}