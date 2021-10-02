import React from 'react';

const Form = () => {
    return (
        <div className='Form'>
            <div className='FormHeader'>
                <div className='FormuHeaderName'>
                    <h2>Wpisz swoje imię</h2>
                    <input type="text" placeholder="Krzysztof"/>
                </div>
                <div className='FormHeaderMail'>
                    <h2>Wpisz swój email</h2>
                    <input type="text" placeholder="xyz@xyz.pl"/>
                </div>
            </div>
            <div className='FormMessage'>
                <h2>Wpisz swoją wiadomość</h2>
                <textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></textarea>
            </div>
            <button type="submit">Wyślij</button>

        </div>
    );
};

export default Form;