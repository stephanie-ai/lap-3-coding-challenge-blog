import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const NavBar = () => {
    return (
        <nav className="navBar">
            <h1 className="sitename">BlogSpace</h1>
            <div className="navBtns">
             <NavLink className="btns"  exact to="/" activeClassName="current"> Make Post</NavLink>
             <NavLink className="btns" to="/posts" activeClassName="current">View Posts</NavLink>
            </div>
        </nav>
    );
}

export default NavBar;