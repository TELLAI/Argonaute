import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
      <div className='nav-container'>
            <NavLink exact to="/" activeClassName="nav-active">
                Inscription
            </NavLink>
            <NavLink exact to="/list" activeClassName="nav-active">
                Rendu
            </NavLink>
      </div>
    );
};

export default Navbar;