import React from 'react';
import {Link} from 'react-router-dom';

const UpperMenu = () => {
    return (
        <div className="upperNavigation">
            <Link to="/logowanie/">Zaloguj się</Link>
            <Link to="/rejestracja/">Załóż konto</Link>
        </div>
    );
};

export default UpperMenu;