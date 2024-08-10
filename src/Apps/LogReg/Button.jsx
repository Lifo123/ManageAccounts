import './Button.css'
import { useState } from 'react';
import { registerUser, validateLogin, validateUser } from '@services/manageUserData';


export default function Button({ type }) {
    //States
    const [Msg, setMsg] = useState('');

    //Functions
    const HandleLogin = (e) => {
        let parent = e.target.closest('form');
        let user = parent.querySelector('input[name="username"]').value;
        if (!user) {
            setMsg('Please enter a username');
            return;
        }

        if (!validateUser(user)) {
            setMsg('User doesnt exist');
            return;
        }

        let pass = parent.querySelector('input[name="password"]').value;
        if (!pass) {
            setMsg('Please enter a password');
            return;
        }

        setMsg(validateLogin(user, pass));
    }

    const HandleRegister = (e) => {
        let parent = e.target.closest('form');
        let user = parent.querySelector('input[name="username"]').value;

        if (!user) {
            setMsg('Please enter a username');
            return;
        } else {
            if (validateUser(user)) {
                setMsg('Username already exists');
                return;
            }
        }

        let pass = parent.querySelector('input[name="password"]').value;
        if (!pass) {
            setMsg('Please enter a password');
            return;
        }

        let pass1 = parent.querySelector('input[name="new-password"]').value;
        if (pass !== pass1) {
            setMsg('Passwords dont coincide');
            return;
        }
        setMsg('');

        registerUser(user, pass);

    }

    return (
        <>
            {
                Msg && <p className="logreg-msg text-center fs-1  m-0 pt-1">{Msg}</p>
            }
            <span className="br-4 btn-green btn text-center mt-1 fw-800" onClick={type === "login" ? HandleLogin : HandleRegister}>
                Sign {type === "login" ? "in" : "up"}
            </span>
        </>
    )
}   