import React, { createContext, useState, useEffect, useContext } from 'react';
import { getCartItems, addToCart as addToCartAPI } from '../services/cartService';
import { AuthContext } from './AuthContext';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const { user } = useContext(AuthContext);

  // Fetch cart items on mount if user is logged in
  useEffect(() => {
    const fetchItems = async () => {
      if (user && user.email) {
        const items = await getCartItems(user.email);
        setCartItems(items);
      }
    };
    fetchItems();
  }, [user]);

  const addToCart = async (product) => {
    if (user && user.email) {
      await addToCartAPI(product, user.email);
      setCartItems((prev) => [...prev, product]); // update local state for instant UI feedback
    } else {
      alert('Please log in to add items to cart');
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
