import React from 'react';
import { Link } from 'react-router-dom';
import logo_dark from '../../assets/logo-dark.ico';
import logo_light from '../../assets/logo-light.ico';
import search_light from '../../assets/search-light.png';
import search_dark from '../../assets/search-dark.png';
import toggle_light from '../../assets/toggle-light.png';
import toggle_dark from '../../assets/toggle-dark.png';
import './navbar.css';

const Navbar = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="navbar">
      <Link to="/"><img
        src={theme === 'light' ? logo_light : logo_dark}
        alt="logo"
        className="logo"
      /></Link>
      <div className="search-box">
        <img
          src={theme === 'light' ? search_light : search_dark}
          alt=""
          className="search-icon"
        />
        <input
          type="text"
          placeholder="Want to learn?"
          className="input-holder"
        />
      </div>
      <ul className="nav-list">
        <li><Link to="/" className="nav-options">Courses</Link></li>
        <li><Link to="/" className="nav-options">About Us</Link></li>
        <li><Link to="/" className="nav-options">Contact Us</Link></li>
        <li id='sign-in'><Link to="/sign-in" className="nav-options">Sign In</Link></li>
        <li><button id="create-account-button"><Link to="/sign-up" className="nav-options">Create Account</Link></button></li>
      </ul>
      <img
        src={theme === 'light' ? toggle_light : toggle_dark}
        alt="toggle-icon"
        className="toggle-icon"
        onClick={toggle_mode}
      />
    </div>
  );
};

export default Navbar;
