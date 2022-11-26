import React, { useState, useRef } from 'react';

import InfoModal from './models/InfoModal';
import Navbar from './models/Navbar';
import database from './database.json';

import './App.css';

function App() {
    const [showLogin, setLogin] = useState(false);
    const [showReg, setRegister] = useState(false);

    const handleCloseLogin = () => setLogin(false)
    const handleCloseRegister = () => setRegister(false)

    const usernameInput = useRef(null);
    const passwordInput = useRef(null);

    let usrn = usernameInput.current.value;
    let pww = passwordInput.current.value;

    let usernames = ["test"];
    let passwords = ["admin"];

    const loginFunc = () => {
        database.map(account => {
            if (usrn == account.username && pww == account.password) {
                console.log("Success");
                setLogin(false);
                alert("Login Successful");
            }
        })
    }

    const registerFunc = () => {
        let newUsrn = usernameInput.current.value;
        let newPww = passwordInput.current.value;

        usernames.push(newUsrn)
        passwords.push(newPww);

        setRegister(false);
        alert("Register Successful");
    }

    return (
        <div className="App">
            <Navbar
                showLoginModal={() => setLogin(true)}
                showRegModal={() => setRegister(true)}
            />
            <InfoModal
                type="Login"

                show={showLogin}
                handleClose={handleCloseLogin}
                actionFunc={loginFunc}
                username={usernameInput}
                password={passwordInput}
            />
            <InfoModal
                type="Register"

                show={showReg}
                handleClose={handleCloseRegister}
                actionFunc={registerFunc}
                username={usernameInput}
                password={passwordInput}
            />
        </div>
    );
}

export default App;