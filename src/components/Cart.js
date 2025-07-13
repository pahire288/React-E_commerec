import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Cart({ onClose }) {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div style={overlayStyles}>
      <div style={cartStyles}>
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} style={{ marginBottom: '10px' }}>
                <img src={item.imageUrl} alt={item.title} width="50" />
                <span style={{ marginLeft: '10px' }}>{item.title}</span> - ₹{item.price} x {item.quantity}
                <button
                  className="btn btn-danger btn-sm"
                  style={{ marginLeft: '10px' }}
                  onClick={() => removeFromCart(item.title)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <button className="btn btn-secondary mt-3" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

const overlayStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 999,
};

const cartStyles = {
  backgroundColor: '#fff',
  padding: '30px',
  borderRadius: '8px',
  maxWidth: '500px',
  width: '90%',
};

export default Cart;
