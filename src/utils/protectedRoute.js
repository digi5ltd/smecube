<<<<<<< HEAD
import React, { useContext } from "react";
import { Navigate } from "react-router";
import AuthContext from "../context/AuthContext.jsx";
=======
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext.jsx';
>>>>>>> dbd91fd4fae16a0f5e8cfe5546eebc9184da33ce

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

<<<<<<< HEAD
  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-50">
        Loading...
      </div>
    );
=======
  if (loading) return <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-50">Loading...</div>;
>>>>>>> dbd91fd4fae16a0f5e8cfe5546eebc9184da33ce

  return user ? children : <Navigate to="/login" />;
};

<<<<<<< HEAD
export default ProtectedRoute;
=======
export default ProtectedRoute;
>>>>>>> dbd91fd4fae16a0f5e8cfe5546eebc9184da33ce
