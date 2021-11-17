import React from 'react';
import Navigation from "../Navigation/navigation";
import Header from "../Header/header";
import ThreeColumns from "../ThreeColumns/threeColumns";
import EasySteps from "../EasySteps/easySteps";
import AboutUs from "../AboutUs/aboutUs";
import WhoDoWeHelp from "../WhoDoWeHelp/whoDoWeHelp";
import ContactForm from "../ContactForm/contactForm";
import UpperMenu from "../UpperMenu/upperMenu";
import Social from "../Social/social";
import {BrowserRouter as Router} from "react-router-dom";

const Home = () => {
    return (
        <>
            <header className="headerContainer">
                <UpperMenu/>
                <Navigation/>
                <Header/>
            </header>
            <ThreeColumns/>
            <EasySteps/>
            <AboutUs/>
            <WhoDoWeHelp/>
            <ContactForm/>
            <Social/>
        </>
    );
};

export default Home;