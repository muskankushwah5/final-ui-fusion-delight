import React, { useEffect, useRef, useState } from 'react';
import "../../App.css";
import "./CartModal.css";
import CheckoutForm from './CheckoutForm';
import PaymentForm from './CheckoutForm';
import {loadStripe} from '@stripe/stripe-js';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

function AddressModal(props) {

  const { show, handleClose, stripe } = props;
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));
  const [address, setAddress] = useState(cart?.address || "");

  const laneRef = useRef("");
  const areaRef = useRef("");
  const cityRef = useRef("");
  const zipcodeRef = useRef("");

  const [showForm , setShowForm] = useState(false);


  const handleInputHandler = (e) => {
    setAddress(e.target.value);
  }

  const stripeHandler = async () => {
   setShowForm(true);
  }

  const navigate = useNavigate();

  
    // payment integration
    const makePayment = async()=>{
      const stripe = await loadStripe("pk_test_51NxYGfSFxfpHSZoyO1J4kOMqIaOy6occy1711vjI2l3qMh2kooXWIKs9RvrEpLAdixQDLd2jONS4pjitSrupnyKc003XlS9fvF");

      let total = 0;
      cart.map((item,idx)=>{
        total = total + Number(item.prize);
      })

      const lane = laneRef.current.value;
      const area = areaRef.current.value;
      const city = cityRef.current.value;
      const zipcode = zipcodeRef.current.value;

      const enteredAddress = `${laneRef.current.value} ${areaRef.current.value} ${cityRef.current.value} ${zipcodeRef.current.value}`;
      const user = (JSON.parse(localStorage.getItem("user")));
    if(enteredAddress === "" || user.address === ""){
      toast.error("Address needed to be provided!");
    }
    if(!lane || !area || !city || !zipcode){
      toast.error("All address fields must be filled");
    }
    else{
    
      const payload = {
        email : user.email,
        phone : user.phone,
        address : enteredAddress !== ""? enteredAddress : user.address,
        totalPrize : total,
        foodDescription : cart
      }
      const body = {
          products:payload
      }
      const headers = {
          "Content-Type":"application/json"
      }
      toast.loading("Redirecting....");
      const response = await fetch("https://fusion-delight-website-server.onrender.com/api/create-checkout-session",{
          method:"POST",
          headers:headers,
          body:JSON.stringify(body)
      });


      const session = await response.json();
      toast.dismiss();

      const result = stripe.redirectToCheckout({
          sessionId:session.id
      });
      if(result){
        localStorage.setItem("cart","");
        navigate("/user");
      }
      
      if(result.error){
          console.log(result.error);
      }
    }
  }


  return (
    <div className={`modal ${show ? 'show' : ''}`} onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header modal-div">
          <h2>Your Address</h2>
          <span className="close" onClick={handleClose}>&times;</span>
        </div>
        <div style={{ borderWidth: "1px", borderColor: "gray", borderStyle: "solid" }}></div>
        <div className='alert-success'>Provide the address </div>
        <div className="modal-body-input" style={{ borderTopWidth: "1px", borderTopColor: "gray", borderTopStyle: "solid", width: "auto", textAlign: "center" }}>
          <input ref={laneRef} placeholder={ 'Lane No'} onChange={handleInputHandler} aria-label='lane'/>
          <input ref={areaRef} placeholder={ 'Area'} onChange={handleInputHandler} />
          <input ref={cityRef} placeholder={ 'City'} onChange={handleInputHandler} />
          <input ref={zipcodeRef} placeholder={ 'ZipCode'} onChange={handleInputHandler} />
        </div>
       
       
      <div style={{ borderWidth: "1px", borderColor: "gray", borderStyle: "solid" }}></div>
      <div className='modal-button-div-2'>
      <button className='modal-button' onClick={makePayment}>Checkout</button>
      <button className='modal-button' onClick={handleClose}>Cancel</button>
          </div>
      </div>
    </div>
  );
}

// Wrap the component with injectStripe
export default (AddressModal);
