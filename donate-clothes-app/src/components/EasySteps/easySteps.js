import React from 'react';
import {Link} from 'react-router-dom';
import iconOne from "../../assets/Icon.png";
import iconTwo from "../../assets/Icon2.png";
import iconThree from "../../assets/Icon3.png";
import iconFour from "../../assets/Icon4.png";

const EasySteps = () => {
    return (
        <div id="steps" className="fourStepsContainerBig">
            <h1>Wystarczą 4 proste kroki</h1>
            <div className="fourStepsContainerSmall">
                    <div className="fourStepsSectionSmall">
                        <img src={iconOne} alt="Icon-1"/>
                        <p>Wybierz rzeczy</p>
                        <hr className="fourStepsLine"/>
                        <p>ubrania, zabawki, <br/> sprzęt i inne</p>
                    </div>
                    <div className="fourStepsSectionSmall">
                        <img src={iconTwo} alt="Icon-2"/>
                        <p>Spakuj je</p>
                        <hr className="fourStepsLine"/>
                        <p>skorzystaj z <br/> worków na śmieci</p>
                    </div>
                    <div className="fourStepsSectionSmall">
                        <img src={iconThree} alt="Icon-3"/>
                        <p>Zdecyduj komu <br/> chcesz pomóc</p>
                        <hr className="fourStepsLine"/>
                        <p>wybierz zaufane <br/> miejsce</p>
                    </div>
                    <div className="fourStepsSectionSmall">
                        <img src={iconFour} alt="Icon-4"/>
                        <p>Zamów kuriera</p>
                        <hr className="fourStepsLine"/>
                        <p>kurier przyjedzie <br/> w dogodnym terminie</p>
                    </div>
            </div>
                <Link to="/logowanie/">
                    <button className="lightButton">ODDAJ RZECZY</button>
                </Link>
        </div>
    );
};

export default EasySteps;