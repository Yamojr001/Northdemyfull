
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute<{ children }> = ({ children }) => {
  const isAuthenticated = localStorage.getItem('admin_token') === 'true';
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
