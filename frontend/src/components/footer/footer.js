import { MDBFooter } from 'mdb-react-ui-kit';
import './footer.css';

export default function Footer() {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-left footer'>
            <div className='text-center p-4 footer' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                &copy; {new Date().getFullYear()} Copyright:
                Crantea Antonio Cristian, student la "Facultatea de Automatică și Calculatoare"
            </div>
        </MDBFooter>
    )
}
