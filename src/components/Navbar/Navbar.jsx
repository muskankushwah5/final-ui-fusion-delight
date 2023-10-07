import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Navbar.css'
import UserProfile from '../UserProfile/UserProfile';

const domain = "https://fusion-delight-website-server.onrender.com/uploads"

function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const userData  = (JSON.parse(localStorage.getItem("user")));
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
    <div className="navbar-box">
      <nav className="navbar">
      
        <div ><div style={{left:"40%" }} className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <img src='data:image/jpeg;base64,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'/>
        </div>
        </div>
        <div className="navbar-logo">
          <a href="/">
            <img src={ "./img/logo.jpeg"} alt="Logo" />
          </a>
        </div>
        <div className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="navbar-ul">
           {userData && ( <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
              <a className="welcome-nav-link" href="/">
                Home
              </a>
            </li>)}
            {userData && ( <li className={`nav-item ${location.pathname === '/#menu' ? 'active' : ''}`}>
              <a className="nav-link" href="/#menu">
                Menu
              </a>
            </li>)}
            {userData && ( <li className={`nav-item ${location.pathname === '/reservation' ? 'active' : ''}`}>
              <a className="nav-link" href="/reservation">
                Book 
              </a>
            </li>)}
            {!userData && ( <li className={`nav-item ${location.pathname === '/login' ? 'active' : ''}`}>
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>)}
            {userData && ( <li className={`nav-item ${location.pathname === '/user' ? 'active' : ''}`}>
              <a className="nav-link" href="/user">
                Profile
              </a>
            </li>)}
            <li className='image-userprofile-div'>
            <UserProfile/>
               </li>
          </ul>
         
        </div>
        <div style={{width:"150%",height:"150%"}} className='hide'>
         <UserProfile/>
        </div>
      </nav>
     
    </div>
   
    </>
  );
}

export default Navbar;
