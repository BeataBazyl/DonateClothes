import React from 'react';
import Form from "../Form/form";
import Social from "../Social/social.js";


const ContactForm = () => {
    return (
        <div className='ContactContainer' id='Contact'>
            <div className='ContactImage'/>
            <div className='ContactHero'>
                <h1>Skontaktuj się z nami</h1>
                <div className='ContactHeroDecoration'/>
                <Form/>
            </div>
        </div>
    );
};

export default ContactForm;