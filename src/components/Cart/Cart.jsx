import React from 'react';

function CartIcon({ cartItem }) {
  // Check if cartItem length is greater than 0
  // const hasItems = (JSON.parse(localStorage.getItem("cart")));

  return (
    <div
    >
     <div style={{width:"100px"}}></div>
      <span className="badge badge-notify my-cart-badge"></span>
    </div>
  );
}

export default CartIcon;
