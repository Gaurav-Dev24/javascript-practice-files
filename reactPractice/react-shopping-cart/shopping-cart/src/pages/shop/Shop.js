import React from 'react';
import PRODUCTS from "../../Products";
import Product from './Product';
import "./Shop.css";

const Shop = () => {
  return (
    <div className="shop">
        <div className="shopTitle">
            <h1>Dev Tech Shop</h1>
        </div>
        <div className="products ">
            {PRODUCTS.map((product) => (
              <Product data={product}/> //passing data prop to Product component
            ))}
        </div>
    </div>
  )
}

export default Shop