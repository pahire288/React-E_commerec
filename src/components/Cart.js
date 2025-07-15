import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Cart({ onClose }) {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const handleRemove = (item) => {
    if (item._id) {
      removeFromCart(item._id);
    } else {
      alert('Item ID missing, cannot remove');
    }
  };

  return (
    <div style={overlayStyles}>
      <div style={cartStyles}>
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cartItems.map((item, index) => (
              <li key={index} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                {item.images && item.images[0] && (
                  <img src={item.images[0]} alt={item.title} width="50" />
                )}
                <span style={{ marginLeft: '10px', flex: 1 }}>
                  {item.title} - ₹{item.price}
                  {item.quantity && <> x {item.quantity}</>}
                </span>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleRemove(item)}
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
