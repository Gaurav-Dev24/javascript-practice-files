import React, { useContext } from 'react';
import PRODUCTS from '../../Products';
import { ShopContext } from '../../context/ShopContext';
import CartItem from './CartItem';
import "./Cart.css";

const Cart = () => {
  // getting cartItems from context
  const {cartItems} = useContext(ShopContext)
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
          {PRODUCTS.map((product) => {
            if(cartItems[product.id] !==0 ){
              return <CartItem data={product} /> // passing the data prop to CartItem component
            }
            
          })}
      </div>
    </div>
  )
}

export default Cart