// src/components/Products.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const productsArr = [
  // same products data as you provided
];

function Products() {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {productsArr.map((product) => (
          <div className="col-md-3" key={product.id}>
            <div className="card mb-4">
              <img
                src={product.images[0]}
                className="card-img-top"
                alt={product.title}
                onClick={() => handleProductClick(product)}
                style={{ cursor: 'pointer' }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">₹{product.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
