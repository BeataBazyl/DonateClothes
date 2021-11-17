import React from 'react';
import UpperMenu from "../UpperMenu/upperMenu";
import Navigation from "../Navigation/navigation";

const SignIn = () => {
    return (
        <>
            <UpperMenu/>
            <Navigation/>
            <div className="LogContainer">
                <h1>Zarejestruj się</h1>
                <div className="LogContainerSmall">
                    <h2>Email</h2>
                    <input type="email"/>
                    <h2>Hasło</h2>
                    <input type="password"/>
                    <h2>Powtórz hasło</h2>
                    <input type="password"/>
                </div>
                <div className="LogContainerSmall2">
                    <button className="lightButton">Załóż konto</button>
                    <button className="lightButton">Zaloguj się</button>
                </div>
            </div>
        </>
    );
};

export default SignIn;