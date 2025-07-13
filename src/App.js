import { useState } from 'react';
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
      <Products />
      <Cart show={showCart} onClose={handleCloseCart} />
    </div>
  );
}

export default App;
