// src/services/ecommerceService.js
const API_BASE = 'http://localhost:8000/api';

export const ecommerceService = {
  // Get all page data for client
  async getPageData() {
    const response = await fetch(`${API_BASE}/ecommerce/page-data`);
    return response.json();
  },

  // Hero Section
  async getHero() {
    const response = await fetch(`${API_BASE}/admin/ecommerce/hero`);
    return response.json();
  },

  async updateHero(heroData) {
    const response = await fetch(`${API_BASE}/admin/ecommerce/hero`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(heroData),
    });
    return response.json();
  },

  // Features
  async getFeatures() {
    const response = await fetch(`${API_BASE}/admin/ecommerce/features`);
    return response.json();
  },

  async createFeature(featureData) {
    const response = await fetch(`${API_BASE}/admin/ecommerce/features`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(featureData),
    });
    return response.json();
  },

  async updateFeature(id, featureData) {
    const response = await fetch(`${API_BASE}/admin/ecommerce/features/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(featureData),
    });
    return response.json();
  },

  async deleteFeature(id) {
    await fetch(`${API_BASE}/admin/ecommerce/features/${id}`, {
      method: 'DELETE',
    });
  },

  // Process Steps
  async getProcessSteps() {
    const response = await fetch(`${API_BASE}/admin/ecommerce/process-steps`);
    return response.json();
  },

  async createProcessStep(stepData) {
    const response = await fetch(`${API_BASE}/admin/ecommerce/process-steps`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(stepData),
    });
    return response.json();
  },

  async updateProcessStep(id, stepData) {
    const response = await fetch(`${API_BASE}/admin/ecommerce/process-steps/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(stepData),
    });
    return response.json();
  },

  async deleteProcessStep(id) {
    await fetch(`${API_BASE}/admin/ecommerce/process-steps/${id}`, {
      method: 'DELETE',
    });
  },

  // Demo Projects
  async getDemoProjects() {
    const response = await fetch(`${API_BASE}/admin/ecommerce/demo-projects`);
    return response.json();
  },

  async createDemoProject(projectData) {
    const response = await fetch(`${API_BASE}/admin/ecommerce/demo-projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(projectData),
    });
    return response.json();
  },

  async updateDemoProject(id, projectData) {
    const response = await fetch(`${API_BASE}/admin/ecommerce/demo-projects/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(projectData),
    });
    return response.json();
  },

  async deleteDemoProject(id) {
    await fetch(`${API_BASE}/admin/ecommerce/demo-projects/${id}`, {
      method: 'DELETE',
    });
  },

  // Clients
  async getClients() {
    const response = await fetch(`${API_BASE}/admin/ecommerce/clients`);
    return response.json();
  },

  async createClient(clientData) {
    const response = await fetch(`${API_BASE}/admin/ecommerce/clients`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(clientData),
    });
    return response.json();
  },

  async updateClient(id, clientData) {
    const response = await fetch(`${API_BASE}/admin/ecommerce/clients/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(clientData),
    });
    return response.json();
  },

  async deleteClient(id) {
    await fetch(`${API_BASE}/admin/ecommerce/clients/${id}`, {
      method: 'DELETE',
    });
  },
};