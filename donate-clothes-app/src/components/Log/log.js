import React, {useState} from 'react';
import UpperMenu from "../UpperMenu/upperMenu";
import Navigation from "../Navigation/navigation";


const validate = form => {
    if(!form.email) {
        return "adres e-mail jest wymagany"
    }
    else if (!/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i.test(form.email)) {
        return "błędny adres email"
    }

    if(!form.name) {
        return "Imię jest wymagane"
    } else if (form.name.length < 2) {
        return "Imię jest za krótkie"
    }

    if(!form.password) {
        return "Hasło jest wymagane"
    } else if (form.name.length < 5) {
        return "Hasło jest za krótkie"
    }

    if(form.passwordRep !== form.password) {
        return "Hasła nie są identyczne"
    }

    return null
}

const Log = () => {
    const [error, setError] = useState(null);
    const [form, setForm] = useState({
        email: "",
        password: "",
        passwordRep: ""
    });

    const updateField = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        const errorMsg = validate(form)
        if(errorMsg) {
            setError(errorMsg)
            console.log("błąd")
            return
        }
        console.log("form submitted", form)
    }

    return (
        <>
            <UpperMenu/>
            <Navigation/>
            <div className="LogContainer" id="form">
                {/*{error && <ErrorMessage text={error}/>}*/}
                <h1>Zaloguj się</h1>
                <div className="LogContainerSmall">
                    <label>
                    <h2>Email</h2>
                    </label>
                    <input
                        className="form-control"
                        type="email"
                        name="email"
                        id="email"
                        onChange={updateField}
                    />
                    <label>
                    <h2>Hasło</h2>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                        onChange={updateField}
                    />
                    </label>
                    <label>
                        <h2>Powtórz hasło</h2>
                        <input
                            type="password"
                            name="passwordRep"
                            id="passwordRep"
                            className="form-control"
                            onChange={updateField}
                        />
                    </label>
                </div>
                <div className="LogContainerSmall2">
                    <button className="lightButton">Załóż konto</button>
                    <button
                        type="submit"
                        className="lightButton btn-block btn-danger"
                        onClick={handleSubmit}
                    >Zaloguj się</button>
                </div>
            </div>
        </>
    );
};

export default Log;