import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Images
import PileE from '../../assets/images/PileElectrice.jpg';
import Introd from '../../assets/images/Introducere.jpg';

//Pages
import './home.css';
import '../infoBox/infoBox.css';
import Navbar from "../navbar/navbar";
import InfoBox from '../infoBox/infoBox';

export default function Home() {
    return (
        <>
            <Container className="container-xl footer-fix">
                <Row>
                    <Col sm={4}>
                        <Navbar />
                    </Col>
                    <Col sm={8} className="text-center">
                        <img className="img-fix" src={PileE} alt="Pile Electrice"/>
                    </Col>
                </Row>
			    <Row>
                    <Col sm={7}>
                        <InfoBox information={
                            <>
                                
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
                        <Col sm={5}>
                            <div className="text-center"><img src={Introd} alt="Introducere"/></div>
                        </Col>
			    </Row>
            </Container>
        </>
    )
}