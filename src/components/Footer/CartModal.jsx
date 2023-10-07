import React, { useEffect, useState } from 'react';

import "../../App.css";
import "./CartModal.css";
function Modal(props) {
  const { show, handleClose,checkoutWithCartHandler, title, content } = props; 
  const [cart , setCart] = useState((JSON.parse(localStorage.getItem("cart"))) || null);
  const [totalPrize , setTotalPrize] = useState(0);

  useEffect(()=>{
    let temp =0;
    cart?.map((item,index)=>{
      temp = temp + item.prize ;
    })
    setTotalPrize(temp);

  },[cart]);
  console.log(cart,"cart");
  const handleDecrease = (idx)=>{
    const temp = cart.filter((item,index)=>{
      if(index === idx){
        item.prize = Math.floor(item.prize - ((item.prize / item.Quantity )));
        
        item.Quantity = item.Quantity - 1;
      }
      if(item.Quantity > 0)
      {  return item;
      }
    })

    localStorage.setItem("cart",(JSON.stringify(temp)));
   setCart(temp);
  }

  const handleIncrease = (idx)=>{
    const temp = cart.filter((item,index)=>{
      if(index === idx){
        item.prize = Math.floor(item.prize +  (item.prize / item.Quantity ));
        item.Quantity = item.Quantity + 1;
      }
      return item;
    })
    localStorage.setItem("cart",(JSON.stringify(temp)));
    setCart(temp);
  } 

  return (
    <div className={`modal ${show ? 'show' : ''}`} onClick={handleClose}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <div className="modal-header modal-div">
          <h2>Your Cart</h2>
          <span className="close" onClick={handleClose}>&times;</span>
        </div>
        <div className="modal-content-main-div" style={{borderWidth:"1px",borderColor:"gray",borderStyle:"solid"}}></div>
        { !cart ? 
          <div className='alert-danger'>Your Cart is Empty</div>
         : 
         <div><div className='alert-success'>Your Cart </div>  
        {cart?.map((item,index)=>{
          return <div className="modal-body" style={{borderTopWidth:"1px",borderTopColor:"gray",borderTopStyle:"solid"}}>
          <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
          <div> <h2>{item.foodTitle}</h2></div>
              <div style={{display:"flex",flexDirection:"row"}} className='buttons-of-item'>
          <button  onClick={()=>handleDecrease(index)}>-</button>
          <label>{item.Quantity}</label>
          <button className='buttons-of-item' onClick={()=>handleIncrease(index)}>+</button>
          </div>
          </div>
          { item.foodChoices.choice_type && <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
          <h5>{item.foodChoices.choice_type}</h5>
          <h5>${item.foodChoices.choice_prize}</h5>
          
      </div>}
          <div style={{display:"flex",flexDirection:"row"}}>
         
          <h6>{item.foodCuisine} cuisine  {item.foodDish} type</h6>
      </div>
          <div style={{display:"flex",flexDirection:"row",fontSize:"small"}}>
            Total cost : ${item.prize}
          </div>
        </div>})}
        <div className="modal-body" style={{borderTopWidth:"1px",borderTopColor:"gray",borderTopStyle:"solid",width:"auto",textAlign:"center"}}>
          Total Prize : $ {totalPrize}
        </div>
        </div>}
        <div style={{borderWidth:"1px",borderColor:"gray",borderStyle:"solid"}}></div>
        <div className='modal-button-div'>
            <button className='modal-button' onClick={handleClose}>Cancel</button>
            <button className='modal-button-checkout modal-button' onClick={checkoutWithCartHandler} disabled={!cart}>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
