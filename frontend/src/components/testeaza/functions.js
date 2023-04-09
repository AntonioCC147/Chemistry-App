import LeftGlass from '../../assets/images/PaharVerde.png';
import RightGlass from '../../assets/images/PaharAlbastru.png';

const SpawnLeftGlass = ({ name }) => {
    if(name !== "Undefined")
        return (
            <img className="chem-glass" src={LeftGlass} alt="Glass"/>
    );
    else
    return ( <p>Undefined</p> );
}

const SpawnRightGlass = ({ name }) => {
    if(name !== "Undefined")
        return (
            <img className="chem-glass" src={RightGlass} alt="Glass"/>
    );
    else
    return ( <p>Undefined</p> );
}

export { SpawnLeftGlass, SpawnRightGlass };