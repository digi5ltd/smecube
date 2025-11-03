// src/context/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem('token'));

  const API_URL = 'http://localhost:8000/api';

  // Set axios default headers when token changes
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      localStorage.setItem('token', token);
    } else {
      delete axios.defaults.headers.common['Authorization'];
      localStorage.removeItem('token');
    }
  }, [token]);

  // Check authentication status on mount
  useEffect(() => {
    const checkAuth = async () => {
      const storedToken = localStorage.getItem('token');
      
      if (storedToken) {
        try {
          axios.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
          const response = await axios.get(`${API_URL}/auth/me`);
          
          if (response.data.success) {
            setUser(response.data.user);
            setToken(storedToken);
          } else {
            // Token invalid, clear everything
            logout();
          }
        } catch (error) {
          console.error('Auth check failed:', error);
          logout();
        }
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  /**
   * Send OTP for login
   * @param {string} phone - Phone number
   * @returns {Promise<string>} - Returns user_id
   */
  const sendOtp = async (phone) => {
    try {
      const response = await axios.post(`${API_URL}/auth/send-otp`, { phone });
      
      if (response.data.success) {
        return response.data.user_id;
      } else {
        throw new Error(response.data.message || 'OTP পাঠাতে ব্যর্থ হয়েছে');
      }
    } catch (error) {
      throw error;
    }
  };

  /**
   * Login with OTP
   * @param {string} phone - Phone number
   * @param {string} otp - OTP code
   * @param {string|null} userId - User ID (for registration flow)
   * @returns {Promise<object>} - Returns user object
   */
  const login = async (phone, otp, userId = null) => {
    try {
      const payload = {
        phone,
        otp
      };

      if (userId) {
        payload.user_id = userId;
      }

      const response = await axios.post(`${API_URL}/auth/verify-otp`, payload);

      if (response.data.success) {
        const { user: userData, token: authToken } = response.data;
        
        setUser(userData);
        setToken(authToken);
        
        return userData;
      } else {
        throw new Error(response.data.message || 'লগইন ব্যর্থ হয়েছে');
      }
    } catch (error) {
      throw error;
    }
  };

  /**
/**
 * Register new user (NO OTP - Direct registration)
 * @param {object} userData - User registration data
 * @returns {Promise<object>} - Returns user object
 */
const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    
    if (response.data.success) {
      const { user: userDataResponse, token: authToken } = response.data;
      
      // Set user and token immediately
      setUser(userDataResponse);
      setToken(authToken);
      
      return userDataResponse;
    } else {
      throw new Error(response.data.message || 'রেজিস্ট্রেশন ব্যর্থ হয়েছে');
    }
  } catch (error) {
    throw error;
  }
};
  /**
   * Google Login - Redirects to Google OAuth
   */
  const googleLogin = () => {
    // Redirect to Google OAuth endpoint
    window.location.href = `${API_URL}/auth/google`;
  };

  /**
   * Handle Google OAuth callback
   * This should be called from a callback page if you implement Google OAuth with redirect
   */
  const handleGoogleCallback = async (credential) => {
    try {
      const response = await axios.post(`${API_URL}/auth/google-login`, {
        credential
      });

      if (response.data.success) {
        const { user: userData, token: authToken } = response.data;
        
        setUser(userData);
        setToken(authToken);
        
        return userData;
      } else {
        throw new Error(response.data.message || 'Google লগইন ব্যর্থ হয়েছে');
      }
    } catch (error) {
      throw error;
    }
  };

  /**
   * Admin Login
   * @param {string} phone - Admin phone number
   * @param {string} otp - OTP code
   * @returns {Promise<object>} - Returns admin user object
   */
  const adminLogin = async (phone, otp) => {
    try {
      const response = await axios.post(`${API_URL}/auth/admin/verify-otp`, {
        phone,
        otp
      });

      if (response.data.success) {
        const { user: userData, token: authToken } = response.data;
        
        if (userData.role !== 'admin') {
          throw new Error('আপনি অ্যাডমিন নন');
        }
        
        setUser(userData);
        setToken(authToken);
        
        return userData;
      } else {
        throw new Error(response.data.message || 'অ্যাডমিন লগইন ব্যর্থ হয়েছে');
      }
    } catch (error) {
      throw error;
    }
  };

  /**
   * Logout
   */
  const logout = async () => {
    try {
      // Call backend logout endpoint if token exists
      if (token) {
        await axios.post(`${API_URL}/auth/logout`);
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Clear local state regardless of API call result
      setUser(null);
      setToken(null);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      delete axios.defaults.headers.common['Authorization'];
    }
  };

  /**
   * Update user data
   */
  const updateUser = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const value = {
    // State
    user,
    loading,
    token,
    
    // Computed properties
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin',
    isClient: user?.role === 'client',
    
    // Methods
    sendOtp,
    login,
    register,
    googleLogin,
    handleGoogleCallback,
    adminLogin,
    logout,
    updateUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;