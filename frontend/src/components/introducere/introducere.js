import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Navbar from "../navbar/navbar";
import InfoBox from "../infoBox/infoBox";

import Introd from '../../assets/images/Introducere.jpg';

export default function Introducere() {
    return (
        <>
            <Container className="container-xl footer-fix">
                <Row>
                    <Col sm={4}>
                        <Navbar />
                    </Col>
                    <Col sm={8}>
                        <InfoBox information={
                            <>
                                <div className="text-center"><img src={Introd} alt="Introducere"/></div>
                                <p>Randamentul superior va face din ele mijlocul de producere al energiei electrice privilegiat al secolului.</p>
                                <p>Realizatorii de telefoane mobile sau de microcalculatoare portabile, visează de ani de zile:
                                    pila de combustie ar fi principalul mijloc de a crește autonomia produselor în mod considerabil. Și industria
                                    automobilelor sec interesează de această sursă de energie "curată".
                                </p>
                                <p>Hidrogenul este energia viitorului? Un lucru este sigur: nu există petrol la nesfârșit. Domeniul nuclear este
                                    "dedicat", iar unora le-ar plăcea să renunțe la el.
                                </p>
                                <p>Principalul interes: pilele de combustie nu poluează aproape deloc, pentru că nu ard carburant, ci își recombină
                                    atomii. Singurele lor subproduse sunt apa și dioxidul de carbon, acest ultim element fiind din nefericire
                                    dăunător pentru echilibrul termic al planetei (accentuează efectul de seră). Aceste generatoare electrice sunt
                                    lipsite de elemente mecanice. Sunt deci foarte fliabile și silențioase.
                                </p>
                            </>
                        }/>
                    </Col>  
                </Row>
            </Container>
        </>
    )
}