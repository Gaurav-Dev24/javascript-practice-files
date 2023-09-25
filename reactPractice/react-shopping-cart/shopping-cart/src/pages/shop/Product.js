import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const Product = (props) => {
  // receiving the props i.e data from product component which is declared in Shop.js
  const { id, productName, productImage, price } = props.data;

  // getting addToCart and cartItems from context
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  return (
    <div className="product">
      <img src={productImage} alt={productName} />

      <div className="description ">
        <h3>{productName}</h3>
        <span>${price}</span>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
};

export default Product;
