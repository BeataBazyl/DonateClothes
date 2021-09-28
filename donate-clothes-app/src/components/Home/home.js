import React from 'react';
import Navigation from "./Navigation/navigation";
import Header from "./Header/header";
import ThreeColumns from "./ThreeColumns/threeColumns";
import EasySteps from "./EasySteps/easySteps";
import AboutUs from "./AboutUs/aboutUs";
import WhoDoWeHelp from "./WhoDoWeHelp/whoDoWeHelp";
import ContactForm from "./ContactForm/contactForm";

const Home = () => {
    return (
        <>
            <Navigation/>
            <Header/>
            <ThreeColumns/>
            <EasySteps/>
            <AboutUs/>
            <WhoDoWeHelp/>
            <ContactForm/>
        </>
    );
};

export default Home;