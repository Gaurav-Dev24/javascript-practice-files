import React, { createContext, useState } from 'react';
import PRODUCTS from '../Products';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    // handler function to add items to cart
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1} ));
    };

    // handler function to remove from cart
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1} ));
    };

    // handler function to update value of cartItems 
    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}));
    }

    // creating a variable object to pass values to context
    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount};
    console.log(cartItems)
  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    );
}

export default ShopContextProvider;