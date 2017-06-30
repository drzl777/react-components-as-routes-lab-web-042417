import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li><NavLink to='/'><h3>Home</h3></NavLink></li>
        <li><NavLink to='/movies'><h3>Movies</h3></NavLink></li>
        <li><NavLink to='/directors'><h3>Directors</h3></NavLink></li>
        <li><NavLink to='/actors'><h3>Actors</h3></NavLink></li>
      </ul>

    </div>
  );
};

export default NavBar;
