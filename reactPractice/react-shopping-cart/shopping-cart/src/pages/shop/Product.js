import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const Product = (props) => {
  const { id, productName, productImage, price } = props.data;
  const {addToCart} = useContext(ShopContext);
  return (
    <div className="product">
      <img src={productImage} alt={productName} />

      <div className="description ">
        <h3>{productName}</h3>
        <span>${price}</span>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>Add To Cart</button>
    </div>
  );
};

export default Product;
