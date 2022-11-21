import React, { useState } from 'react';
import InfoModal from './models/InfoModal';
import Navbar from './models/Navbar';

import './App.css';

function App() {
    const [showLogin, setLogin] = useState(false);
    const [showReg, setRegister] = useState(false);

    const handleCloseLogin = () => setLogin(false)
    const handleCloseRegister = () => setRegister(false)

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
            />
            <InfoModal
                type="Register"

                show={showReg}
                handleClose={handleCloseRegister}
            />
        </div>
    );
}

export default App;