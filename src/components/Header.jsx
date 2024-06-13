import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '/src/assets/images/logo.png';

const Nav = () => {
    return (
        <div className='header'>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>  
            <div>
                <ul>
                    <NavLink to="/">
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to="#">
                        <li>A Propos</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Nav;