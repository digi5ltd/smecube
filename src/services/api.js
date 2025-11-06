import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Pricing Plans API
export const pricingPlansAPI = {
  getAll: () => api.get("/pricing-plans"),
  getOne: (id) => api.get(`/pricing-plans/${id}`),
  create: (data) => api.post("/pricing-plans", data),
  update: (id, data) => api.put(`/pricing-plans/${id}`, data),
  delete: (id) => api.delete(`/pricing-plans/${id}`),
};

// Extra Services API
export const extraServicesAPI = {
  getAll: () => api.get("/extra-services"),
  getOne: (id) => api.get(`/extra-services/${id}`),
  create: (data) => api.post("/extra-services", data),
  update: (id, data) => api.put(`/extra-services/${id}`, data),
  delete: (id) => api.delete(`/extra-services/${id}`),
};

// Plan Comparisons API
export const planComparisonsAPI = {
  getAll: () => api.get("/plan-comparisons"),
  getOne: (id) => api.get(`/plan-comparisons/${id}`),
  create: (data) => api.post("/plan-comparisons", data),
  update: (id, data) => api.put(`/plan-comparisons/${id}`, data),
  delete: (id) => api.delete(`/plan-comparisons/${id}`),
};

// Webdev Hero API
export const webdevHeroAPI = {
  getAll: () => api.get("/webdev-hero"),
  getOne: (id) => api.get(`/webdev-hero/${id}`),
  create: (data) => api.post("/webdev-hero", data),
  update: (id, data) => api.put(`/webdev-hero/${id}`, data),
  delete: (id) => api.delete(`/webdev-hero/${id}`),
};

// Webdev Portfolio API
export const webdevPortfolioAPI = {
  getAll: () => api.get("/webdev-portfolios"),
  getOne: (id) => api.get(`/webdev-portfolios/${id}`),
  create: (data) => api.post("/webdev-portfolios", data),
  update: (id, data) => api.put(`/webdev-portfolios/${id}`, data),
  delete: (id) => api.delete(`/webdev-portfolios/${id}`),
};

// Wevdev Packages API
export const webdevPackagesApi = {
  getAll: () => api.get("/webdev-packages"),
  getOne: (id) => api.get(`/webdev-packages/${id}`),
  create: (data) => api.post(`/webdev-packages`, data),
  update: (id, data) => api.put(`/webdev-packages/${id}`, data),
  delete: (id) => api.delete(`/webdev-packages/${id}`),
};

// Domain Hosting Hero API
export const domainhostHeroAPI = {
  getAll: () => api.get("/domain-host-hero"),
  getOne: (id) => api.get(`/domain-host-hero/${id}`),
  create: (data) => api.post("/domain-host-hero", data),
  update: (id, data) => api.put(`/domain-host-hero/${id}`, data),
  delete: (id) => api.delete(`/domain-host-hero/${id}`),
};

// Domain Hosting Packages API
export const domainhostPackageAPI = {
  getAll: () => api.get("/domain-host-packages"),
  getOne: (id) => api.get(`/domain-host-packages/${id}`),
  create: (data) => api.post(`/domain-host-packages`, data),
  update: (id, data) => api.put(`/domain-host-packages/${id}`, data),
  delete: (id) => api.delete(`/domain-host-packages/${id}`),
};

export default api;
