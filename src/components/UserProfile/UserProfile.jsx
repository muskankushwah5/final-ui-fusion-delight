import React, { useState } from 'react';
import Modal from './Modal'; // Import your Modal component
import './UserProfile.css'; // Import your CSS for styling
const UserProfile = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const userData = (JSON.parse(localStorage.getItem("user")));
  
    const domain = 'https://fusion-delight-website-server.onrender.com/uploads';
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    return (
      <div className="">
        <div className="" onClick={openModal} style={{width:"100%"}} >
          <img style={{borderRadius:"50%",width:"100px"}}  src={ userData.profileImage ? `${userData.profileImage}` : "./img/placeholder.jpg"} alt="User Profile" />
      </div>
      {isModalOpen && (
        <Modal
          show={isModalOpen}
          handleClose={closeModal}
        />
      )}
      </div>
    );
  };
  
  export default UserProfile;
  