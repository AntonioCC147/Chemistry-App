import UndefinedGlass from '../../assets/images/pahare/UndefinedGlass.png';

import PaharVerde from '../../assets/images/pahare/PaharVerde.png';
import PaharAlbastru from '../../assets/images/pahare/PaharAlbastru.png';

import SaltyDeck from '../../assets/images/other/SaltyDeck.png';

import Battery from '../../assets/images/other/Battery.png';
import Pile from '../../assets/images/pile/PilaTesteaza.png';

const SpawnLeftGlass = ({ name, type }) => {
    if(name === "Undefined")
        return (
            <img className="chem-glass" src={UndefinedGlass} alt="Undefined Glass"/>
    );
    else if(type === "Al")
        return (
            <img className="chem-glass" src={PaharVerde} alt="Glass"/>
    );
    else
        return (
            <img className="chem-glass" src={PaharVerde} alt="Glass"/>
    )
}

const SpawnRightGlass = ({ name }) => {
    if(name !== "Undefined")
        return (
            <img className="chem-glass" src={PaharAlbastru} alt="Glass"/>
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

const SpawnSaltDeck = ({ name }) => {
    if(name !== "None")
        return ( 
            <img className="spawn-salty-deck" src={SaltyDeck} alt="Punte de sare"/>
        );
}

const CheckInputs = ({ verify }) => {
    if(verify !== "Undefined")
            return (
                <>
                    All is good
                </>
            )
}

export { SpawnLeftGlass, SpawnRightGlass, VerifyBattery, VerifyPila, SpawnSaltDeck, CheckInputs };