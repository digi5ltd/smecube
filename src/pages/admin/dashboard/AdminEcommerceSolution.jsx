import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Save, Trash2, Plus, Edit, Zap, Shield, Globe, Rocket, Sparkles, Clock } from 'lucide-react';

// Icon mapping for dynamic rendering
const iconMap = {
  Zap,
  Shield,
  Globe,
  Rocket,
  Sparkles,
  Clock,
};

const AdminEcommerceSolution = () => {
  // State for hero section
  const [heroData, setHeroData] = useState({
    title: 'ডিজিটাল ই-কমার্স',
    subtitle: 'প্রিমিয়াম ই-কমার্স সলিউশন',
    description: 'আপনার বিজনেসকে নেক্সট লেভেলে নিয়ে যান\nমডার্ন, ফাস্ট এবং হাই-কনভার্সন ই-কমার্স এক্সপেরিয়েন্স',
    cta1: 'ফ্রী প্রোজেক্ট কন্সাল্ট',
    cta2: 'ভিউ পোর্টফোলিও',
    stats: [
      { number: '৫০০+', label: 'সফল প্রজেক্ট' },
      { number: '৯৯%', label: 'সন্তুষ্টি' },
      { number: '২৪/৭', label: 'সাপোর্ট' },
    ],
  });

  // State for features
  const [features, setFeatures] = useState([
    {
      id: 1,
      title: 'হাই-স্পিড ওয়েবসাইট',
      description: 'ব্লিটজ-ফাস্ট লোডিং স্পিড...',
      icon: 'Zap',
      gradient: 'from-blue-500 to-cyan-600',
      iconBg: 'bg-blue-100',
    },
    {
      id: 2,
      title: 'এডভান্স সিকিউরিটি',
      description: 'SSL প্রোটেকশন এবং...',
      icon: 'Shield',
      gradient: 'from-green-500 to-emerald-600',
      iconBg: 'bg-green-100',
    },
    {
      id: 3,
      title: 'গ্লোবাল রেসপন্সিভ',
      description: 'সব ডিভাইসে পারফেক্ট...',
      icon: 'Globe',
      gradient: 'from-purple-500 to-pink-600',
      iconBg: 'bg-purple-100',
    },
    {
      id: 4,
      title: 'সেলস বুস্ট',
      description: 'কনভার্সন রেট বাড়ানোর...',
      icon: 'Rocket',
      gradient: 'from-orange-500 to-red-600',
      iconBg: 'bg-orange-100',
    },
    {
      id: 5,
      title: 'মডার্ন ডিজাইন',
      description: 'কাস্টমাইজড এবং ব্র্যান্ডেড...',
      icon: 'Sparkles',
      gradient: 'from-yellow-500 to-amber-600',
      iconBg: 'bg-yellow-100',
    },
    {
      id: 6,
      title: '২৪/৭ সাপোর্ট',
      description: 'রাউন্ড-দ্য-ক্লক...',
      icon: 'Clock',
      gradient: 'from-indigo-500 to-blue-600',
      iconBg: 'bg-indigo-100',
    },
  ]);

  // State for process steps
  const [processSteps, setProcessSteps] = useState([
    {
      id: 1,
      step: '০১',
      title: 'কন্সাল্টেশন',
      description: 'আপনার বিজনেস নিডস...',
      gradient: 'from-red-500 to-pink-600',
      iconBg: 'bg-red-100',
    },
    {
      id: 2,
      step: '০২',
      title: 'ডিজাইন ক্রিয়েশন',
      description: 'ইউনিক এবং ব্র্যান্ড-অ্যালাইনড...',
      gradient: 'from-blue-500 to-cyan-600',
      iconBg: 'bg-blue-100',
    },
    {
      id: 3,
      step: '০৩',
      title: 'ডেভেলপমেন্ট',
      description: 'এডভান্স টেকনোলজি...',
      gradient: 'from-green-500 to-emerald-600',
      iconBg: 'bg-green-100',
    },
    {
      id: 4,
      step: '০৪',
      title: 'লঞ্চ সাপোর্ট',
      description: 'লাইভ করার পর কন্টিনিউয়াস...',
      gradient: 'from-purple-500 to-pink-600',
      iconBg: 'bg-purple-100',
    },
  ]);

  // State for demo projects
  const [demoProjects, setDemoProjects] = useState([
    {
      id: 1,
      title: 'ফ্যাশন ই-কমার্স',
      description: 'মডার্ন ফ্যাশন রিটেইল স্টোর',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop',
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      id: 2,
      title: 'ইলেকট্রনিক্স শপ',
      description: 'ইলেকট্রনিক গ্যাজেটস অনলাইন স্টোর',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=400&fit=crop',
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      id: 3,
      title: 'ফুড ডেলিভারি',
      description: 'রেস্টুরেন্ট ফুড অর্ডারিং সিস্টেম',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop',
      gradient: 'from-orange-500 to-red-600',
    },
    {
      id: 4,
      title: 'বুক স্টোর',
      description: 'অনলাইন বুক শপিং প্লাটফর্ম',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop',
      gradient: 'from-emerald-500 to-green-600',
    },
    {
      id: 5,
      title: 'হেলথ কেয়ার',
      description: 'মেডিকেল প্রোডাক্টস ই-কমার্স',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=400&fit=crop',
      gradient: 'from-teal-500 to-blue-600',
    },
    {
      id: 6,
      title: 'হোম ডেকোর',
      description: 'হোম ডেকোরেশন প্রোডাক্টস স্টোর',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
      gradient: 'from-amber-500 to-yellow-600',
    },
    {
      id: 7,
      title: 'জুয়েলারি স্টোর',
      description: 'প্রিমিয়াম জুয়েলারি কালেকশন',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      id: 8,
      title: 'স্পোর্টস শপ',
      description: 'স্পোর্টস ইকুইপমেন্ট স্টোর',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=400&fit=crop',
      gradient: 'from-red-500 to-orange-600',
    },
  ]);

  // State for clients
  const [clients, setClients] = useState([
    { id: 1, name: 'Rokomari', domain: 'rokomari.com' },
    { id: 2, name: 'Grameenphone', domain: 'grameenphone.com' },
    { id: 3, name: 'bKash', domain: 'bkash.com' },
    { id: 4, name: 'Daraz', domain: 'daraz.com.bd' },
    { id: 5, name: 'Pathao', domain: 'pathao.com' },
    { id: 6, name: 'Shopify', domain: 'shopify.com' },
    { id: 7, name: 'Unilever', domain: 'unilever.com' },
    { id: 8, name: 'Google', domain: 'google.com' },
  ]);

  // State for editing
  const [editingHero, setEditingHero] = useState(false);
  const [editingFeature, setEditingFeature] = useState(null);
  const [editingProcessStep, setEditingProcessStep] = useState(null);
  const [editingDemoProject, setEditingDemoProject] = useState(null);
  const [editingClient, setEditingClient] = useState(null);

  // Handle hero section update
  const handleHeroChange = (e) => {
    setHeroData({ ...heroData, [e.target.name]: e.target.value });
  };

  // Handle hero stats update
  const handleStatChange = (index, field, value) => {
    const updatedStats = [...heroData.stats];
    updatedStats[index] = { ...updatedStats[index], [field]: value };
    setHeroData({ ...heroData, stats: updatedStats });
  };

  // Handle feature CRUD
  const addFeature = () => {
    const newFeature = {
      id: features.length + 1,
      title: '',
      description: '',
      icon: 'Zap',
      gradient: 'from-blue-500 to-cyan-600',
      iconBg: 'bg-blue-100',
    };
    setFeatures([...features, newFeature]);
    setEditingFeature(newFeature.id);
  };

  const updateFeature = (id, updatedData) => {
    setFeatures(features.map((f) => (f.id === id ? { ...f, ...updatedData } : f)));
    setEditingFeature(null);
  };

  const deleteFeature = (id) => {
    setFeatures(features.filter((f) => f.id !== id));
  };

  // Handle process step CRUD
  const addProcessStep = () => {
    const newStep = {
      id: processSteps.length + 1,
      step: `০${processSteps.length + 1}`,
      title: '',
      description: '',
      gradient: 'from-blue-500 to-cyan-600',
      iconBg: 'bg-blue-100',
    };
    setProcessSteps([...processSteps, newStep]);
    setEditingProcessStep(newStep.id);
  };

  const updateProcessStep = (id, updatedData) => {
    setProcessSteps(processSteps.map((s) => (s.id === id ? { ...s, ...updatedData } : s)));
    setEditingProcessStep(null);
  };

  const deleteProcessStep = (id) => {
    setProcessSteps(processSteps.filter((s) => s.id !== id));
  };

  // Handle demo project CRUD
  const addDemoProject = () => {
    const newProject = {
      id: demoProjects.length + 1,
      title: '',
      description: '',
      image: '',
      gradient: 'from-blue-500 to-cyan-600',
    };
    setDemoProjects([...demoProjects, newProject]);
    setEditingDemoProject(newProject.id);
  };

  const updateDemoProject = (id, updatedData) => {
    setDemoProjects(demoProjects.map((p) => (p.id === id ? { ...p, ...updatedData } : p)));
    setEditingDemoProject(null);
  };

  const deleteDemoProject = (id) => {
    setDemoProjects(demoProjects.filter((p) => p.id !== id));
  };

  // Handle client CRUD
  const addClient = () => {
    const newClient = {
      id: clients.length + 1,
      name: '',
      domain: '',
    };
    setClients([...clients, newClient]);
    setEditingClient(newClient.id);
  };

  const updateClient = (id, updatedData) => {
    setClients(clients.map((c) => (c.id === id ? { ...c, ...updatedData } : c)));
    setEditingClient(null);
  };

  const deleteClient = (id) => {
    setClients(clients.filter((c) => c.id !== id));
  };

  // Save changes (mock API call)
  const saveChanges = () => {
    console.log('Saving changes:', { heroData, features, processSteps, demoProjects, clients });
    alert('Changes saved successfully!');
    setEditingHero(false);
  };

  // Icon options for features
  const iconOptions = ['Zap', 'Shield', 'Globe', 'Rocket', 'Sparkles', 'Clock'];

  return (
    <div className="p-6 md:p-10 bg-gray-100 min-h-screen font-hind">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap');
        .font-hind {
          font-family: 'Hind Siliguri', sans-serif;
        }
      `}</style>

      <h1 className="text-3xl font-bold text-gray-800 mb-8 font-hind">Ecommerce Solution Admin Panel</h1>

      {/* Hero Section Editor */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-12 bg-white p-6 rounded-2xl shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-4 font-hind text-gray-700">Hero Section</h2>
        {editingHero ? (
          <div className="space-y-4">
            <div>
              <label className="block font-semibold mb-1 font-hind">Title</label>
              <input
                type="text"
                name="title"
                value={heroData.title}
                onChange={handleHeroChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 font-hind">Subtitle</label>
              <input
                type="text"
                name="subtitle"
                value={heroData.subtitle}
                onChange={handleHeroChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 font-hind">Description</label>
              <textarea
                name="description"
                value={heroData.description}
                onChange={handleHeroChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                rows="4"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold mb-1 font-hind">CTA 1</label>
                <input
                  type="text"
                  name="cta1"
                  value={heroData.cta1}
                  onChange={handleHeroChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1 font-hind">CTA 2</label>
                <input
                  type="text"
                  name="cta2"
                  value={heroData.cta2}
                  onChange={handleHeroChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold font-hind">Stats</h3>
              {heroData.stats.map((stat, index) => (
                <div key={index} className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold mb-1 font-hind">Number</label>
                    <input
                      type="text"
                      value={stat.number}
                      onChange={(e) => handleStatChange(index, 'number', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1 font-hind">Label</label>
                    <input
                      type="text"
                      value={stat.label}
                      onChange={(e) => handleStatChange(index, 'label', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <button
                onClick={saveChanges}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600"
              >
                <Save size={18} /> Save
              </button>
              <button
                onClick={() => setEditingHero(false)}
                className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-4">
              <h3 className="font-semibold font-hind">Preview</h3>
              <p className="text-lg font-bold font-hind">{heroData.subtitle}</p>
              <p className="text-xl font-bold font-hind">{heroData.title}</p>
              <p className="text-gray-600 font-hind whitespace-pre-line">{heroData.description}</p>
              <div className="flex gap-4 mt-2">
                <button className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-hind">{heroData.cta1}</button>
                <button className="border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-hind">{heroData.cta2}</button>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-4">
                {heroData.stats.map((stat, index) => (
                  <div key={index} className="bg-gray-100 p-2 rounded-lg text-center">
                    <p className="font-bold font-hind">{stat.number}</p>
                    <p className="text-sm text-gray-600 font-hind">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() => setEditingHero(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600"
            >
              <Edit size={18} /> Edit Hero
            </button>
          </div>
        )}
      </motion.section>

      {/* Features Editor */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-12 bg-white p-6 rounded-2xl shadow-md"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold font-hind text-gray-700">Features</h2>
          <button
            onClick={addFeature}
            className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-600"
          >
            <Plus size={18} /> Add Feature
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature) => (
            <div key={feature.id} className="border border-gray-200 p-4 rounded-lg">
              {editingFeature === feature.id ? (
                <div className="space-y-4">
                  <div>
                    <label className="block font-semibold mb-1 font-hind">Title</label>
                    <input
                      type="text"
                      value={feature.title}
                      onChange={(e) => updateFeature(feature.id, { ...feature, title: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1 font-hind">Description</label>
                    <input
                      type="text"
                      value={feature.description}
                      onChange={(e) => updateFeature(feature.id, { ...feature, description: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1 font-hind">Icon</label>
                    <select
                      value={feature.icon}
                      onChange={(e) => updateFeature(feature.id, { ...feature, icon: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                    >
                      {iconOptions.map((icon) => (
                        <option key={icon} value={icon}>{icon}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block font-semibold mb-1 font-hind">Gradient</label>
                    <input
                      type="text"
                      value={feature.gradient}
                      onChange={(e) => updateFeature(feature.id, { ...feature, gradient: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                      placeholder="e.g., from-blue-500 to-cyan-600"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1 font-hind">Icon Background</label>
                    <input
                      type="text"
                      value={feature.iconBg}
                      onChange={(e) => updateFeature(feature.id, { ...feature, iconBg: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                      placeholder="e.g., bg-blue-100"
                    />
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={() => updateFeature(feature.id, feature)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600"
                    >
                      <Save size={18} /> Save
                    </button>
                    <button
                      onClick={() => setEditingFeature(null)}
                      className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => deleteFeature(feature.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-red-600"
                    >
                      <Trash2 size={18} /> Delete
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`inline-flex items-center justify-center w-10 h-10 ${feature.iconBg} rounded-lg`}>
                      {iconMap[feature.icon] ? (
                        React.createElement(iconMap[feature.icon], { className: 'w-6 h-6 text-gray-700' })
                      ) : (
                        <span className="text-gray-500">No Icon</span>
                      )}
                    </div>
                    <h3 className="font-semibold font-hind">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 font-hind">{feature.description}</p>
                  <p className="text-gray-600 font-hind">Gradient: {feature.gradient}</p>
                  <p className="text-gray-600 font-hind">Icon Background: {feature.iconBg}</p>
                  <button
                    onClick={() => setEditingFeature(feature.id)}
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600"
                  >
                    <Edit size={18} /> Edit
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.section>

      {/* Process Steps Editor */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-12 bg-white p-6 rounded-2xl shadow-md"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold font-hind text-gray-700">Process Steps</h2>
          <button
            onClick={addProcessStep}
            className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-600"
          >
            <Plus size={18} /> Add Process Step
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {processSteps.map((step) => (
            <div key={step.id} className="border border-gray-200 p-4 rounded-lg">
              {editingProcessStep === step.id ? (
                <div className="space-y-4">
                  <div>
                    <label className="block font-semibold mb-1 font-hind">Step Number</label>
                    <input
                      type="text"
                      value={step.step}
                      onChange={(e) => updateProcessStep(step.id, { ...step, step: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1 font-hind">Title</label>
                    <input
                      type="text"
                      value={step.title}
                      onChange={(e) => updateProcessStep(step.id, { ...step, title: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1 font-hind">Description</label>
                    <input
                      type="text"
                      value={step.description}
                      onChange={(e) => updateProcessStep(step.id, { ...step, description: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1 font-hind">Gradient</label>
                    <input
                      type="text"
                      value={step.gradient}
                      onChange={(e) => updateProcessStep(step.id, { ...step, gradient: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                      placeholder="e.g., from-blue-500 to-cyan-600"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1 font-hind">Icon Background</label>
                    <input
                      type="text"
                      value={step.iconBg}
                      onChange={(e) => updateProcessStep(step.id, { ...step, iconBg: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                      placeholder="e.g., bg-blue-100"
                    />
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={() => updateProcessStep(step.id, step)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600"
                    >
                      <Save size={18} /> Save
                    </button>
                    <button
                      onClick={() => setEditingProcessStep(null)}
                      className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => deleteProcessStep(step.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-red-600"
                    >
                      <Trash2 size={18} /> Delete
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="font-semibold font-hind">{step.step} - {step.title}</h3>
                  <p className="text-gray-600 font-hind">{step.description}</p>
                  <p className="text-gray-600 font-hind">Gradient: {step.gradient}</p>
                  <p className="text-gray-600 font-hind">Icon Background: {step.iconBg}</p>
                  <button
                    onClick={() => setEditingProcessStep(step.id)}
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600"
                  >
                    <Edit size={18} /> Edit
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.section>

      {/* Demo Projects Editor */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-12 bg-white p-6 rounded-2xl shadow-md"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold font-hind text-gray-700">Demo Projects</h2>
          <button
            onClick={addDemoProject}
            className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-600"
          >
            <Plus size={18} /> Add Demo Project
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {demoProjects.map((project) => (
            <div key={project.id} className="border border-gray-200 p-4 rounded-lg">
              {editingDemoProject === project.id ? (
                <div className="space-y-4">
                  <div>
                    <label className="block font-semibold mb-1 font-hind">Title</label>
                    <input
                      type="text"
                      value={project.title}
                      onChange={(e) => updateDemoProject(project.id, { ...project, title: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1 font-hind">Description</label>
                    <input
                      type="text"
                      value={project.description}
                      onChange={(e) => updateDemoProject(project.id, { ...project, description: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1 font-hind">Image URL</label>
                    <input
                      type="url"
                      value={project.image}
                      onChange={(e) => updateDemoProject(project.id, { ...project, image: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1 font-hind">Gradient</label>
                    <input
                      type="text"
                      value={project.gradient}
                      onChange={(e) => updateDemoProject(project.id, { ...project, gradient: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                      placeholder="e.g., from-blue-500 to-cyan-600"
                    />
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={() => updateDemoProject(project.id, project)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600"
                    >
                      <Save size={18} /> Save
                    </button>
                    <button
                      onClick={() => setEditingDemoProject(null)}
                      className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => deleteDemoProject(project.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-red-600"
                    >
                      <Trash2 size={18} /> Delete
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <img src={project.image} alt={project.title} className="w-full h-32 object-cover rounded-lg mb-2" />
                  <h3 className="font-semibold font-hind">{project.title}</h3>
                  <p className="text-gray-600 font-hind">{project.description}</p>
                  <p className="text-gray-600 font-hind">Gradient: {project.gradient}</p>
                  <button
                    onClick={() => setEditingDemoProject(project.id)}
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600"
                  >
                    <Edit size={18} /> Edit
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.section>

      {/* Clients Editor */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-12 bg-white p-6 rounded-2xl shadow-md"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold font-hind text-gray-700">Clients</h2>
          <button
            onClick={addClient}
            className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-600"
          >
            <Plus size={18} /> Add Client
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {clients.map((client) => (
            <div key={client.id} className="border border-gray-200 p-4 rounded-lg">
              {editingClient === client.id ? (
                <div className="space-y-4">
                  <div>
                    <label className="block font-semibold mb-1 font-hind">Name</label>
                    <input
                      type="text"
                      value={client.name}
                      onChange={(e) => updateClient(client.id, { ...client, name: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1 font-hind">Domain</label>
                    <input
                      type="text"
                      value={client.domain}
                      onChange={(e) => updateClient(client.id, { ...client, domain: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                    />
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={() => updateClient(client.id, client)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600"
                    >
                      <Save size={18} /> Save
                    </button>
                    <button
                      onClick={() => setEditingClient(null)}
                      className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => deleteClient(client.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-red-600"
                    >
                      <Trash2 size={18} /> Delete
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <img
                      src={`https://logo.clearbit.com/${client.domain}`}
                      alt={client.name}
                      className="h-8 object-contain"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = `https://via.placeholder.com/120x40?text=${encodeURIComponent(client.name)}`;
                      }}
                    />
                    <h3 className="font-semibold font-hind">{client.name}</h3>
                  </div>
                  <p className="text-gray-600 font-hind">Domain: {client.domain}</p>
                  <button
                    onClick={() => setEditingClient(client.id)}
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600"
                  >
                    <Edit size={18} /> Edit
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default AdminEcommerceSolution;