import React from 'react';

import './styles/Navbar.css';

const Navbar = (props) => {
    return (
        <div className='Navbar'>
            <label>Game Key Store</label>
            <div className="Navbar__buttons">
                <button onClick={props.showLoginModal}>Login</button>
                <button onClick={props.showRegModal}>Register</button>
            </div>
        </div>
    )
};

export default Navbar;