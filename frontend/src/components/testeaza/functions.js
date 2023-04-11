import UndefinedGlass from '../../assets/images/pahare/UndefinedGlass.png';
import LeftGlass from '../../assets/images/pahare/PaharVerde.png';
import RightGlass from '../../assets/images/pahare/PaharAlbastru.png';

import SaltyDeck from '../../assets/images/other/SaltyDeck.png';

import Battery from '../../assets/images/other/Battery.png';
import Pile from '../../assets/images/pile/PilaTesteaza.png';

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
            <img className="spawn-battery" src={Battery} alt="Battery"/>
        )
}

const VerifyPila = ({ verify, type }) =>  {
    if(verify !== "Undefined" && type === "left")
        return (
            <img className="spawn-left-pile-box" src={Pile} alt="Pile"/>
        );
    else if(verify !== "Undefined" && type === "right")
        return (
            <img className="spawn-right-pile-box" src={Pile} alt="Pile"/>
        );
}

const CheckInputs = ({ verify, glassLeft, elthPLeft, glassRight, elthPRight }) => {
    if(verify === "Exist")
        if(glassLeft !== "Undefined" && elthPLeft !== "Undefined" && glassRight !== "Undefined" && elthPRight !== "Undefined")
            return (
                <>
                    All is good
                </>
            )
}

const SpawnSaltDeck = ({ name }) => {
    if(name !== "None")
        return ( 
            <img className="spawn-salty-deck" src={SaltyDeck} alt="Punte de sare"/>
        );
}

export { SpawnLeftGlass, SpawnRightGlass, VerifyBattery, VerifyPila, SpawnSaltDeck, CheckInputs };