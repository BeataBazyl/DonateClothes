import React from 'react';
import {Link} from 'react-router-dom';

const UpperMenu = () => {
    return (
        <div>
            <Link to="/logowanie/">Zaloguj się</Link>
            <Link to="/rejestracja/">Zarejestruj się</Link>
        </div>
    );
};

export default UpperMenu;