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
      
        { <div className='hide-menu'>
          <div  className="" onClick={toggleMobileMenu}>
          <img src='https://th.bing.com/th/id/OIP.wcIsQYyRoMCA1tCMj0TScQHaHa?w=205&h=205&c=7&r=0&o=5&dpr=1.1&pid=1.7'/>
        </div>
        </div>}
        {userData && <div className="navbar-logo">
          <a href="/">
            <img src={ "./img/new_logo_image.png"} alt="Logo"/>
          </a>
        </div>}

        {!userData && <div className="navbar-logo-start">
          <a href="/">
            <img src={ "./img/new_logo_image.png"} alt="Logo"/>
          </a>
        </div>}

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
           { userData &&  <li className='image-userprofile-div'>
            <UserProfile/>
               </li>
           }
          </ul>
         
        </div>
        {userData && <div  className='hide'>
         <UserProfile/>
        </div>}
      </nav>
     
    </div>
   
    </>
  );
}

export default Navbar;
