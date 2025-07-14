import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const productsArr = [
  {
    id: 1,
    title: 'Colors',
    price: 100,
    images: [
      'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      'https://via.placeholder.com/150/0000FF/808080?Text=SecondImage',
    ],
    reviews: [
      { user: 'Alice', comment: 'Great quality!' },
      { user: 'Bob', comment: 'Loved it.' },
    ],
  },
  {
    id: 2,
    title: 'Black and white Colors',
    price: 50,
    images: [
      'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      'https://via.placeholder.com/150/FF0000/FFFFFF?Text=SecondImage',
    ],
    reviews: [
      { user: 'Charlie', comment: 'Worth the price.' },
      { user: 'Daisy', comment: 'Nice combination.' },
    ],
  },
  {
    id: 3,
    title: 'Yellow and Black Colors',
    price: 70,
    images: [
      'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      'https://via.placeholder.com/150/FFFF00/000000?Text=SecondImage',
    ],
    reviews: [
      { user: 'Eva', comment: 'Amazing shades!' },
      { user: 'Frank', comment: 'Will buy again.' },
    ],
  },
  {
    id: 4,
    title: 'Blue Color',
    price: 100,
    images: [
      'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
      'https://via.placeholder.com/150/0000FF/FFFFFF?Text=SecondImage',
    ],
    reviews: [
      { user: 'Grace', comment: 'Very premium.' },
      { user: 'Harry', comment: 'Beautiful color.' },
    ],
  }
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
