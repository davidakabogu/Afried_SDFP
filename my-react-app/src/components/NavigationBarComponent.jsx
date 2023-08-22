/* eslint-disable no-unused-vars */
import React from 'react';

const NavigationBarComponent = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src="./airbnbLogo.png" alt="Airbnb" />
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search" />
                <button>Search</button>
            </div>
            <div className='airbnb-your-home'>
                <button>Airbnb your home</button>
            </div>
            <div className="language-currency">
                <button>Language/Currency</button>
            </div>
            <div className="user-login">
                <button>Login</button>
            </div>
        </nav>
    );
};

export default NavigationBarComponent;
