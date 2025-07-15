import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import { CartProvider } from './context/CartContext'; // import
import { AuthProvider } from './context/AuthContext'; // import AuthProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>   {/* Wrap in AuthProvider first */}
      <CartProvider> {/* Then wrap in CartProvider */}
        <App />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
