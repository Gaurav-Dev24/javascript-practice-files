import React, { useContext } from "react";
import { ShopContext } from '../../context/ShopContext';
const CartItem = (props) => {
  // receiving the props i.e data from CartItem component which declared in Cart.js
  const { id, productName, productImage, price } = props.data;

  // importing context for input value in cart button
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  return (
    <div className="cartItem card effect">
      <div class="overlay"></div>
      <div className="circle">
        <img src={productImage} alt={productName} />
        <div className="description ">
          <h3>{productName}</h3>
          <span>${price}</span>
          <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
          <button onClick={() => addToCart(id)}> + </button>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default CartItem;
