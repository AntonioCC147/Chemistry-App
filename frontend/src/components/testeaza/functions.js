import LeftGlass from '../../assets/images/PaharVerde.png';

const SpawnGlass = ({ name }) => {
    if(name !== "Undefined")
        return (
            <img className="chem-glass" src={LeftGlass} alt="Glass"/>
    );
}

export default SpawnGlass;
