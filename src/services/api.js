// src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle response errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Unauthorized - clear token and redirect to login
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// ==================== PRICING PLANS API ====================
export const pricingPlansAPI = {
  getAll: () => api.get('/pricing/plans'),
  create: (data) => api.post('/pricing/plans', data),
  update: (id, data) => api.put(`/pricing/plans/${id}`, data),
  delete: (id) => api.delete(`/pricing/plans/${id}`),
};

// ==================== EXTRA SERVICES API ====================
export const extraServicesAPI = {
  getAll: () => api.get('/pricing/services'),
  create: (data) => api.post('/pricing/services', data),
  update: (id, data) => api.put(`/pricing/services/${id}`, data),
  delete: (id) => api.delete(`/pricing/services/${id}`),
};

// ==================== PLAN COMPARISONS API ====================
export const planComparisonsAPI = {
  getAll: () => api.get('/pricing/comparisons'),
  create: (data) => api.post('/pricing/comparisons', data),
  update: (id, data) => api.put(`/pricing/comparisons/${id}`, data),
  delete: (id) => api.delete(`/pricing/comparisons/${id}`),
};

export default api;