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
      
        <div ><div style={{left:"40%" }} className="" onClick={toggleMobileMenu}>
          <img src='./img/bar.png'/>
        </div>
        </div>
        <div className="navbar-logo">
          <a href="/">
            <img src={ "./img/new_logo_image.png"} alt="Logo"/>
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
