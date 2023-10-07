import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRouteWrapper = ({ children }) => {
  const userData = JSON.parse(localStorage.getItem('user'));

  if (userData) {
    // User is authenticated, render the child routes
    return children;
  } else {
    // User is not authenticated, redirect to the login page
    return <Navigate to="/login" />;
  }
};

export default PrivateRouteWrapper;
