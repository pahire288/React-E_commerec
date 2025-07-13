import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  const [showCart, setShowCart] = useState(false);

  const handleCartClick = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  return (
    <div>
      <Header onCartClick={handleCartClick} />
      {showCart && <Cart onClose={handleCloseCart} />}
      <Products />
    </div>
  );
}

export default App;
