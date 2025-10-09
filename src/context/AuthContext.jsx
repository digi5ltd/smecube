// File: src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is already logged in on mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    
    if (token && savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);

  const login = async (userId, otp) => {
    try {
      const res = await api.post('/api/auth/verify-otp', { userId, otp });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      setUser(res.data.user);
      return res.data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const register = async (data) => {
    try {
      const res = await api.post('/api/auth/register', data);
      return res.data.userId;
    } catch (error) {
      console.error('Register error:', error);
      throw error;
    }
  };

  const sendOtp = async (phone) => {
    try {
      const res = await api.post('/api/auth/send-otp', { phone });
      return res.data.userId;
    } catch (error) {
      console.error('Send OTP error:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  const value = {
    user,
    login,
    register,
    sendOtp,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
