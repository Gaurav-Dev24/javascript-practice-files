import React from "react";

const CartItem = (props) => {
  // receiving the props i.e data from CartItem component which declared in Cart.js
  const { id, productName, productImage, price } = props.data;
  return (
    <div className="cartItem card effect">
        <div class="overlay"></div>
        <div className="circle">
        <img src={productImage} alt={productName} />
        <div className="description ">
        <h3>{productName}</h3>
        <span>${price}</span>
      </div>
        </div>
      
      
    </div>
  );
};

export default CartItem;
