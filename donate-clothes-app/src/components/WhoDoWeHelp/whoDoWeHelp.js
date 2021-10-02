import React from 'react';

const WhoDoWeHelp = () => {
    return (
        <div className="whoDoWeHelpContainer">
            <h1>Komu pomagamy?</h1>
            <div className="whoDoWeHelpContainerSmall">
                <h3>Fundacjom</h3>
                <h3>Organizacjom Pozarządowym</h3>
                <h3>Lokalnym zbiórkom</h3>
            </div>
            <div className="whoDoWeHelpContainerText">Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/>
                sed do eiusmod tempor incididunt ut labore et dolore magna<br/>
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</div>
            <div className="whoDoWeHelpContainerSecondSmall">
                <div className="row">
                    <div className="rowLeftSide">
                    <h4>Zbiórka “Lorem Ipsum 1”</h4>
                    <p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                    </div>
                    <div className="rowRightSide">
                        <p>Egestas, sed, tempus</p>
                    </div>
                </div>
                <div className="row">
                    <div className="rowLeftSide">
                    <h4>Zbiórka “Lorem Ipsum 2”</h4>
                    <p>Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</p>
                    </div>
                    <div className="rowRightSide">
                        <p>Ut, aliquam, purus, sit, amet</p>
                    </div>
                </div>
                <div className="row">
                    <div className="rowLeftSide">
                    <h4>Zbiórka “Lorem Ipsum 3”</h4>
                    <p>Scelerisque in dictum non consectetur a erat nam.</p>
                    </div>
                    <div className="rowRightSide">
                        <p>Mi, quis, hendrerit, dolor</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoDoWeHelp;