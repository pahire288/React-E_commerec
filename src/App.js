import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import ProductPage from './components/ProductPage'; // Import
import Login from './pages/Login'; // ✅ added Login import
import PrivateRoute from './PrivateRoute'; // ✅ import PrivateRoute



function App() {
  const [showCart, setShowCart] = useState(false);

  const handleCartClick = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);

  return (
    <CartProvider>
      <Router>
        <Header onCartClick={handleCartClick} />
        {showCart && <Cart onClose={handleCloseCart} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<ProductPage />} /> {/* Add this */}
                  <Route path="/login" element={<Login />} /> {/* ✅ added Login route */}
                   <Route
            path="/store"
            element={
              <PrivateRoute>
                <Products />
              </PrivateRoute>
            }
          />

        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
