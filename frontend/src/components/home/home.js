import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Images
import PileE from '../../assets/images/PileElectrice.jpg';

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
                    <InfoBox information={
                        <>
                            <p>Va urma...</p>     
                        </>
                    }/>
			    </Row>
            </Container>
        </>
    )
}