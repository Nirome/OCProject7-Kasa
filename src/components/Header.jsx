import React from "react";
import { NavLink } from "react-router-dom";
import logo from "/src/assets/images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div>
        <ul>
          <NavLink  to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            <li>Accueil</li>
          </NavLink>
          <NavLink  to="/about" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            <li>A Propos</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Header;
