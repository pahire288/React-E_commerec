// src/components/ProductPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';

function ProductPage() {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="container mt-5">
      <h2>{product.title}</h2>
      <h4>Price: ₹{product.price}</h4>
      <div className="row">
        {product.images.map((img, idx) => (
          <div className="col-md-3" key={idx}>
            <img
              src={img}
              alt={`${product.title} ${idx}`}
              className="img-fluid mb-3"
            />
          </div>
        ))}
      </div>
      <h5>Reviews:</h5>
      <ul>
        {product.reviews.map((review, idx) => (
          <li key={idx}>
            <strong>{review.user}</strong>: {review.comment}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductPage;
