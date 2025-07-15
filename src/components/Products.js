import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Products = () => {
  const { addToCart } = useContext(CartContext);

  const products = [
    { id: 1, title: 'Product 1', price: 100 },
    { id: 2, title: 'Product 2', price: 200 },
    // add more as needed
  ];

  return (
    <div className="container mt-5">
      <h2>Products</h2>
      <div className="row">
        {products.map((prod) => (
          <div key={prod.id} className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5>{prod.title}</h5>
                <p>Price: ₹{prod.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => addToCart(prod)}
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
};

export default Products;
