import React, { useState } from 'react';
import './Modal.css';
import { updateUserHandler } from '../../services/userApi';
import { changePasswordHandler } from '../../../../server/Controller/userController';
import toast from 'react-hot-toast';

function UserPasswordChangeModal(props) {
  

  const { setChange, handleClose } = props;
  
  const userData = (JSON.parse(localStorage.getItem("user")));

  const [password , setPassword] = useState("");
  const [newPassword , setNewPassword] = useState("");
  
  const updateHandler = () =>{

    const id = userData._id;

    const payload = {
      email : userData.email,
      password : password,
      newPassword : newPassword
    };


    toast.loading("Changing the password");
    const response = changePasswordHandler(payload);
    if(!response){
        toast.success("Successfully Updated");
        setChange(false);
    }
    else{
        toast.error("Try Again!!");
    }
    toast.dismiss();
  }

  return (
    <div className={`modal ${show ? 'show' : ''}`} onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-div">
          <h2>Your Profile</h2>
          <span className="close" onClick={handleClose}>&times;</span>
        </div>
        
        <div className="profile-inputs">
          <input type="text"   value={userData.email} />
          <input type="text" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
          <input type="text" onChange={(e)=>setNewPassword(e.target.value)} placeholder="New Password" />
        </div>
        <div className="modal-button-div">
          <button className="modal-button" onClick={updateHandler}>Cancel</button>
          <button className="modal-button-checkout modal-button" onClick={updateHandler}>Update</button>
        </div>
      </div>
    </div>
  );
}

export default UserPasswordChangeModal;
