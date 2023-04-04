import { Link } from "react-router-dom";

import '../home/home.css';

export default function Navbar() {
    return (
        <div className="cuprins-box">
            <p className="cuprins-title">Cuprins</p>
            <div className="cuprins-text">
                <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Acasă</Link><br/>
			    <Link to="/introducere" style={{ color: 'inherit', textDecoration: 'none' }}>Introducere</Link><br/>
                <Link to="/elementulgalvanic" style={{ color: 'inherit', textDecoration: 'none' }}>Elementul Galvanic</Link><br/>
                <Link to="/how" style={{ color: 'inherit', textDecoration: 'none' }}>Cum funcționează?</Link><br/>
                <Link to="/clasapp" style={{ color: 'inherit', textDecoration: 'none' }}>Clasificare și Aplicații</Link><br/>
                <Link to="/acumulatori" style={{ color: 'inherit', textDecoration: 'none' }}>Acumulatori</Link><br/>
                <Link to="/cs2" style={{ color: 'inherit', textDecoration: 'none' }}>Coming Soon 2</Link><br/>
                <Link to="/cs3" style={{ color: 'inherit', textDecoration: 'none' }}>Coming Soon 3</Link><br/>
                <Link to="/testeaza" style={{ color: 'red'}}>Verifică (Testează) ce știi</Link>
            </div>
        </div>
    )
}