import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Store from './components/Products';
import About from './components/About';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import ContactUs from './components/ContactUs';

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <CartProvider>
      <Router>
        <Header onCartClick={() => setShowCart(true)} />
        {showCart && <Cart onClose={() => setShowCart(false)} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
