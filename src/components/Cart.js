import React, { useState } from 'react';

const cartElements = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
  },
];

function Cart({ show, onClose }) {
  const [cartItems, setCartItems] = useState(cartElements);

  const handleRemove = (index) => {
    const updatedCart = cartItems.filter((item, i) => i !== index);
    setCartItems(updatedCart);
  };

  if (!show) return null;

  return (
    <div
      className="position-fixed top-0 end-0 bg-light p-3 border"
      style={{ width: '300px', height: '100%', zIndex: 999 }}
    >
      <h4>Cart</h4>
      <button className="btn-close" onClick={onClose}></button>
      <ul className="list-group mt-3">
        {cartItems.map((item, index) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
            <div>
              <img
                src={item.imageUrl}
                alt={item.title}
                width="50"
                className="me-2"
              />
              <div>{item.title}</div>
              <div>Price: ${item.price}</div>
              <div>Qty: {item.quantity}</div>
            </div>
            <button className="btn btn-danger btn-sm" onClick={() => handleRemove(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
