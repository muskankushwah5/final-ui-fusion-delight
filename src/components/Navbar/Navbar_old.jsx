import React from 'react';

import { useLocation } from 'react-router-dom';
import "../../App.css";
import UserProfile from '../UserProfile/UserProfile';

function Navbar() {
  const location = useLocation();
  return (
    <div className='navbar-box' style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
    <nav className="navbar navbar-expand-md navbar-light fixed-top bg-white" style={{color:"orangered"}}>
      <a className="navbar-brand" href="/">
        <img src="./img/logo.jpeg" alt="Logo" style={{maxWidth: '100%'}} />
      </a>
      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-ul">
          <li className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>
            <a className="nav-link-first" href="/">
              Welcome
            </a>
          </li>
          <li className={`nav-item ${location.pathname === "/#menu" ? "active" : ""}`}>
            <a className="nav-link" href="/#menu">
              Menu
            </a>
          </li>
          <li className={`nav-item ${location.pathname === "/reservation" ? "active" : ""}`}>
            <a className="nav-link" href="/reservation">
              Book Table
            </a>
          </li>
          <li className={`nav-item ${location.pathname === "/login" ? "active" : ""}`}>
            <a className="nav-link" href="/login">
              Login
            </a>
          </li>
          <li className={`nav-item ${location.pathname === "/article" ? "active" : ""}`}>
            <a className="nav-link" href="/article">
              Article
            </a>
          </li>
          </ul>
      </div>
    </nav>
    <div >
      <UserProfile/>
      </div>
    </div>
  );
}

export default Navbar;
