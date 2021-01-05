import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navBar">
             <NavLink  exact to="/" activeClassName="current"> Make Post</NavLink>
             <NavLink to="/posts" activeClassName="current">View Posts</NavLink>
        </nav>
    );
}

export default NavBar;