import React from 'react'

const LogOut = () => {
    return (
        <>
        <UpperMenu/>
        <Navigation/>
            <div className="LogContainer">
                <h1>Wylogowanie nastąpiło pomyślnie</h1>
                <button className="lightButton">Strona główna</button>
            </div>
        </>
    )
}

export default LogOut
