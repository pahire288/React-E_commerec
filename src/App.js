import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Cart from './components/Cart';
import Products from './components/Products'; // Assuming Products is your Store
import About from './components/About';
import Home from './components/Home';

function App() {
  const [showCart, setShowCart] = useState(false);

  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  return (
    <Router>
      <Header onCartClick={handleCartClick} />
      {showCart && <Cart />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
