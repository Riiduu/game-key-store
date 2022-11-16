import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import './Navbar.css';

const Navbar = (props) => {
    return (
        <div className="Navbar">
            <div className="navbar__options-left">
                <h2 className="navbar__logo">Game Keys</h2>
                <label>{props.profileName || "Guest"}</label>
                <label>Shop</label>
            </div>
            <div className="navbar__options-right">
                {/* Search bar */}
                <div className="navbar__search-bar">
                    {/* Search icon */}
                    <SearchIcon />
                    {/* Input */}
                    <input placeholder="Search" />
                </div>

                {/* Login/Register buttons */}
                <div className="navbar__buttons">
                    <button className="loginButton">Login</button>
                    <button className="registerButton">Register</button>
                </div>
                {/* Shopping cart icon */}
                <ShoppingCartOutlinedIcon className="navbar__shopping-cart-icon" fontSize="large"/>
            </div>
        </div>
    )
}

export default Navbar;