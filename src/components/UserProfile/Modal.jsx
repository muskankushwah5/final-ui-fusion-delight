import React, { useRef, useState } from 'react';
import './Modal.css';
import { updateUserHandler , chnagePasswordHandler} from '../../services/userApi';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

const domain = "https://fusion-delight-website-server.onrender.com/uploads"

function UserProfileModal(props) {
  

  const { show, handleClose } = props;
  const [edit , setEdit] = useState(false);

  const fileInputRef = useRef();
  const [Change , setChange] = useState(false);
  
  let userData = (JSON.parse(localStorage.getItem("user")));

  const [name , setName] = useState(userData?.name || "");
  const [phone , setPhone] = useState(userData?.phone || "");
  const [address , setAddress] = useState(userData?.address || "");
  const [email , setEmail] = useState(userData?.email || "");
  
  const [password , setPassword] = useState("");
  const [newPassword , setNewPassword] = useState( "");

  const [selectedFile , setSelectedFile] = useState("");

  const [file,setFile] = useState("");

  const Navigate = useNavigate();


  const handleFileChange = (e) => {

    const file = e.target.files[0];
    setSelectedFile(file);
    setFile(URL.createObjectURL(file));
  }

  const editHandler = () =>{
    setEdit(true);
  }

  const editAndChangeHandler = ()=>{
    setEdit(true);
    setChange(true);
    
  }


  const openFileInput = () => {
    fileInputRef.current.click();
  };

  const updateHandler = () =>{


    if(Change){
      
      if(password === newPassword){
        toast.error("New password can't be same to old one");
      }
      else{
        const payload = {
          email : email,
          password : password,
          newPassword : newPassword
        };
    
        toast.loading("Updating the user Profile");
        const response =chnagePasswordHandler(payload).then((response)=>{
        toast.dismiss();
        toast.success("successfully updated the user Profile");
        localStorage.removeItem("user");
        setEdit(false);
        setChange(false);
        Navigate("/login");
      })
      .catch((err)=>{
        toast.error("Try Again");
      });
      } 
    }
    else{
      const id = userData._id;

      const payload = {
        phone : phone,
        name : name,
        address : address,
        profileImage : selectedFile
      };
  
      toast.loading("Updating the user Profile");
      const response = updateUserHandler(payload,email).then((response)=>{
        toast.dismiss();
        toast.success("Successfully updated");
        
        const data = response.data;
        data.profileImage = `${domain}/${response.data.profileImage}`
        localStorage.removeItem("user");
        userData = data;
        localStorage.setItem("user",JSON.stringify(data));
        setEdit(false);
      })
      .catch((err)=>{
        toast.error("Try Again");
      });
    }
    
  }

  return (
    <>
     <div className={`modal ${show ? 'show' : ''}`} onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-div">
          <h2>Your Profile</h2>
          <span className="close" onClick={handleClose}>&times;</span>
        </div>
        <div className="profile-icon" style={{width:"50%",height:"50%",marginLeft:"24%"}}>
          <label htmlFor="profile-image-upload" className="profile-image-upload-label">
          
            <img
              src={!edit ? userData?.profileImage : file ?  file : userData?.profileImage ? userData.profileImage : './img/placeholder.jpg'}
              alt="User Profile"
              className="profile-image profil`e-icon-img"
            />
           
          </label>
        </div>
        <div style={{fontSize:"12px"}}>
        {!edit &&(
          <div className='button-div-mobile'>
          <button className="edit-button" onClick={editHandler}>Edit</button>
          <button className="edit-button" onClick={editAndChangeHandler}>Change Password</button>
          </div>)}
          </div>
        <div className="profile-inputs">
           <div>
            <input
              type="file"
              accept="image/*"
              onChange={(e)=>handleFileChange(e)}
              ref={fileInputRef}
              style={{ display: 'none' }}
            />

            { (edit && Change=== false) && (<button className="edit-button"  onClick={openFileInput}>Upload Image</button>)}

          </div>
          {!Change && <input type="text"  onChange={(e)=>setName(e.target.value)} 
          value={!edit ? (userData?.name ? userData.name : "Name") : ""}
          placeholder={userData?.name && edit ? userData.name : "Name"}
            disabled={!edit}/>}
          <input type="text"  value = {userData?.email}  disabled={!edit}/>
          {!Change && <input type="text"  value = {userData?.phone} disabled={!edit}/>}
          {!Change && <input type="text"  onChange={(e)=>setAddress(e.target.value)}   
          value={!edit ? (userData?.address ? userData.address : "address") : ""}
          placeholder={userData?.address && edit ? userData.address : "address"}
         disabled={!edit} />}
          {Change && <input type="password"  onChange={(e)=>setPassword(e.target.value)}  placeholder={"Password"} />}
          {Change && <input type="password"  onChange={(e)=>setNewPassword(e.target.value)}  placeholder={"New Password"}/>}
        </div>
        <div className="modal-button-div">
          <button className="modal-button" onClick={handleClose}>Cancel</button>
          {edit &&(<button className="modal-button-checkout modal-button" onClick={updateHandler}>{Change ? "Change" : "Update"}</button>)}
        </div>
      </div>
    </div>
    </>
  );
}

export default UserProfileModal;
