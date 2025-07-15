// src/PrivateRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { token } = useContext(AuthContext); // assuming you store token in AuthContext

  if (!token) {
    // if not logged in, redirect to login
    return <Navigate to="/login" replace />;
  }

  return children; // else render the page
};

export default PrivateRoute;
