import LeftGlass from '../../assets/images/PaharVerde.png';

const SpawnGlass = ({ name }) => {
    if(name !== "Undefined")
        return (
            <img className="chem-glass" src={LeftGlass} alt="Glass"/>
    );
    else
    return ( <p>Undefined</p> );
}

export default SpawnGlass;
