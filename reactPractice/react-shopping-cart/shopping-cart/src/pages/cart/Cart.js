import React, { useContext } from "react";
import PRODUCTS from "../../Products";
import { ShopContext } from "../../context/ShopContext";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  // getting cartItems from context
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  // creating a variable for total amount
  let totalAmount = getTotalCartAmount();

  let navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />; // passing the data prop to CartItem component
          }
        })}
      </div>
      {/* If the cart has any items then it will show */}
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: $ {totalAmount} </p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        // Else cart is empty
        <h1>Your Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
