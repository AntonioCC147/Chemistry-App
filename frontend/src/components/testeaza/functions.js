import UndefinedGlass from '../../assets/images/UndefinedGlass.png';
import LeftGlass from '../../assets/images/PaharVerde.png';
import RightGlass from '../../assets/images/PaharAlbastru.png';

import Battery from '../../assets/images/Battery.png';

const SpawnLeftGlass = ({ name }) => {
    if(name !== "Undefined")
        return (
            <img className="chem-glass" src={LeftGlass} alt="Glass"/>
    );
    else
        return (
            <img className="chem-glass" src={UndefinedGlass} alt="Undefined Glass"/>
    );
}

const SpawnRightGlass = ({ name }) => {
    if(name !== "Undefined")
        return (
            <img className="chem-glass" src={RightGlass} alt="Glass"/>
    );
    else
        return (
            <img className="chem-glass" src={UndefinedGlass} alt="Undefined Glass"/>
    );
}

const VerifyBattery = ({ glassLeft, elthPLeft, glassRight, elthPRight }) => {
    if(glassLeft !== "Undefined" && elthPLeft !== "Undefined" && glassRight !== "Undefined" && elthPRight !== "Undefined")
        return (
            <img className="battery-box" src={Battery} alt="Battery"/>
        )
}

const CheckInputs = ({ verify, glassLeft, elthPLeft, glassRight, elthPRight }) => {
    if(verify === "Exist")
        if(glassLeft !== "Undefined" && elthPLeft !== "Undefined" && glassRight !== "Undefined" && elthPRight !== "Undefined")
            return (
                <>
                    Abc
                </>
            )
}

const SpawnSaltDeck = ({ name }) => {
    if(name === "None")
        return ( <>NONE</>);
        else return ( <>EXIST</>);
}

export { SpawnLeftGlass, SpawnRightGlass, VerifyBattery, SpawnSaltDeck, CheckInputs, };