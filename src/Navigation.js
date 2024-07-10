import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-left">
        <Link to="/" className="site-title">antonio de nuevo</Link>
      </div>
      <div className="nav-center">
        <Link to="/" className="nav-link">projects</Link>
        {/* <Link to="/research" className="nav-link">research</Link> */}
        <Link to="/info" className="nav-link">info</Link>
      </div>
      <div className="nav-right">
        <a href="mailto:your-email@example.com" className="nav-link">mail</a>
        <a href="https://www.instagram.com/yourprofile" className="nav-link">instagram</a>
      </div>
    </nav>
  );
};

export default Navigation;
