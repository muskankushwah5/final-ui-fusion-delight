import React, { useState } from 'react';
import styles from './ForgotPassword.module.css';
import { chnagePasswordWithTokenHandler, forgotPasswordHandler } from '../../services/userApi';
import { useNavigate } from 'react-router';

const ForgotPassword = () => {

  
  const navigate = useNavigate();
  const userData = (JSON.parse(localStorage.getItem("user")));
  if(!userData){
    navigate("/login");
  }
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showTokenFields, setShowTokenFields] = useState(false);




  const handleSendToken = () => {

    if(!email){
        alert("Email should be filled");
    }
   else{
    const response = forgotPasswordHandler({email : email})
    .then((res)=>{
        alert("Already sent the token to this email")
    })
    .catch((err)=>{
        alert(err);
    })
}
    setShowTokenFields(true);
  };

  const handleChangePassword = () => {
    if(!email || !token || !newPassword){
        alert("All should be filled");
    }
   else{
    const response = chnagePasswordWithTokenHandler({email : email , token : token , newPassword : newPassword})
    .then((res)=>{
        alert("Updated the password successfully")
        navigate("/login");
    })
    .catch((err)=>{
        alert(err);
    })
}
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src="your-image-url.jpg" alt="Image" className={styles.image} />
      </div>
      <div className={styles.formContainer}>
        <h2>Forgot Password</h2>
        <input
          type="email"
          className={styles.inputField}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {!showTokenFields ? (
          <button className={styles.button} onClick={handleSendToken}>
            Send Token
          </button>
        ) : (
          <>
            <input
              type="text"
              className={styles.inputField}
              placeholder="Enter Token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />
            <input
              type="password"
              className={styles.inputField}
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button className={styles.button} onClick={handleChangePassword}>
              Change Password
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
