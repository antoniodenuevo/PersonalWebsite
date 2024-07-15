// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for client-side navigation
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-left">
        <Link to="/" className="site-title">Antonio De Nuevo</Link>
      </div>
      <div className="nav-center">
        <Link to="/" className="nav-link">Projects</Link>
        <Link to="/info" className="nav-link">Info</Link>
      </div>
      <div className="nav-right">
        <a href="mailto:antoniomdenuevo@gmail.com" className="nav-link">Mail</a>
        <a href="https://instagram.com/antoniodenuevo" className="nav-link">Instagram</a>
      </div>
    </nav>
  );
};

export default Navigation;
