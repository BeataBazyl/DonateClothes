import React, {useState} from 'react';
import UpperMenu from "../UpperMenu/upperMenu";
import Navigation from "../Navigation/navigation";
import validate from '../Validation/validate';
import useForm from '../Validation/useForm';
// import logInSucess from '../Validation/logInSucess';
// import Form from '../Validation/form';


const Log = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors} = useForm (submitForm,validate);

    return (
        <>
            <UpperMenu/>
            <Navigation/>
            <div className="LogContainer" id="form">
            <form action="" className="form" onSubmit={handleSubmit}>
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
                        value={values.email}
                        onChange={handleChange}
                    />
                   {errors.email && <p>{errors.email}</p>}
                    <label>
                    <h2>Hasło</h2>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                    </label>
                    <label>
                        <h2>Powtórz hasło</h2>
                        <input
                            type="password"
                            name="passwordRep"
                            id="passwordRep"
                            className="form-control"
                            value={values.password2}
                            onChange={handleChange}
                        />
                        {errors.password2 && <p>{errors.password2}</p>}
                    </label>
                </div>
                <div className="LogContainerSmall2">
                    <button className="lightButton">Załóż konto</button>
                    <button
                        type="submit"
                        className="lightButton btn-block btn-danger"
                    >Zaloguj się</button>
                </div>
                </form>
            </div>
        </>
    );
};

export default Log;