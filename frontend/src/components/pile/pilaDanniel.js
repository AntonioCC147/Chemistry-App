import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavbarComponent from '../navbar/navbar';
import InfoBox from "../infoBox/infoBox";
import LeftBox from '../infoBox/leftBox';

import PilaD from '../../assets/images/pile/PilaD.jpg';

export default function PilaDaniell() {
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
                                <p className="cuprins-title">Pila Daniell:</p>
                                <p>Valorile seriei de activitate electrica ne sunt date de experimente numite elemente galvanice. În cadrul
                                    elementului galvanic un metal este pus într-o solutie de sare iar alt metal este pus în alta solutie de
                                    sare. Cele doua metale sunt conectate printr-un fir. Amândoua metalele din solutiile de sare sunt în pahare
                                    diferite asa ca trebuie conectate De exemplu putem folosi un fir. Acest ansamblu formeaza un circuit
                                    electric închis. Fiecare dintre paharele cu metal si solutie de sare sunt numite "jumatati de celula".
                                    Aceasta este structura generala a unui element galvanic.
                                </p>
                                <div className="text-center">
                                    <img className="img-fix" src={PilaD} alt="Pila Daniell"/>
                                </div>
                                <p>Vom explica procesul cu ajutorul unui alt element galvanic. Acesta este elementul numit Daniell. Diferenta
                                    e ca acest element foloseste un singur pahar cu un perete despartitor. Acest perete poate fi trecut doar
                                    de ionii solutiei de sare. Solutiile nu pot fi combinate, dar ionii se pot misca. Pentru a face un element
                                    Daniell este important sa folosim substantele potrivite. Folosim Cuprul, pe care trebuie sa-l bagam într-o
                                    solutie de sulfat de cupru, si Zincul, pe care trebuie sa-l bagam într-o solutie de sulfat de zinc. Cele
                                    doua metale trebuie conectate printr-un fir, si acum elementul Daniel este gata. Acum vom explica de ce
                                    "curge" curentul.
                                </p>
                                <p>Putem vedea ca la electrodul de zinc sunt mai multi electroni, pentru ca zincul e mai putin nobil decât
                                    cuprul. Zincul e polul negativ, pe când Cuprul e polul pozitiv. Electronii de pe electrodul de zinc, care
                                    sunt cedati prin procesul de oxidare sunt transferati prin fir pe electrodul de cupru, care este supus
                                    procesului de reducere.
                                </p>
                                <p>La electrodul de zinc se formeaza cationi care trec în solutie. La polul pozitiv cationii de cupru devin
                                    atomi de cupru, care se aseaza pe suprafata electrodului de cupru. Anionii de sulfat, din solutia de
                                    sulfat de cupru, nu gasesc destui cationi de cupru, deoarece acestia au devenit atomi. Astfel ei trec
                                    prin peretele despartitor si în cealalta parte gasesc cationi de zinc. Electrodul de cupru se mareste iar
                                    electrodul de zinc se micsoreaza .Cantitatea de solutie de cupru scade iar cantitatea de solutie de zinc
                                    creste.
                                </p>
                                <p>Observam ca exista un voltmetru în circuitul electric pentru a masura intensitatea curentului dintre cupru
                                    si zinc, intensitate care este de 1.1 volti. Bateriile si acumulatorii nu sunt nimic altceva decât elemente
                                    galvanice. Acest experiment poate fi facut cu multe substante diferite. Când diferenta de potential este mai
                                    mare si intensitatea este mai mare.
                                </p>
                                <p>Acum vom reveni la teorie cu "ajutorul" hidrogenului. Definitia spune ca hidrogenul are o intensitate de 0
                                    volti. Toate celelalte substante din seria de reactivitate sunt puse în relatie cu electronul normal de
                                    hidrogen. Pentru a afla voltajul tuturor substantelor trebuie sa construim un element galvanic care contine
                                    substanta necunoscuta si atomul de hidrogen. Deoarece hidrogenul este un gaz trebuie folosita platina care
                                    este înconjurata de hidrogen; platina va fi utilizata ca electrod al hidrogenului.
                                </p>
                            </>
                        }/>
                    </Col>  
                </Row>
            </Container>
        </>
    )
}