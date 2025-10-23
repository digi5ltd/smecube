import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Save, Trash2, Plus, Edit, Image as ImageIcon } from 'lucide-react';

const AdminFacebookBoosting = () => {
  // State for hero section
  const [heroData, setHeroData] = useState({
    title: 'ফেসবুক বুস্টিং সেবা',
    description: 'আপনার ব্যবসাকে নতুন উচ্চতায় নিয়ে যান — লক্ষ্যভিত্তিক গ্রাহকদের কাছে পৌঁছান সহজেই।',
    cta1: 'এখনই শুরু করুন',
    cta2: 'বিস্তারিত জানুন',
    image: 'https://images.unsplash.com/photo-1611162617210-7d15d3a03e1d?w=1200&h=400&fit=crop',
  });

  // State for features
  const [features, setFeatures] = useState([
    {
      id: 1,
      title: 'টার্গেটেড অডিয়েন্স',
      description: 'সঠিক কাস্টমারদের কাছে পৌঁছান',
      icon: '<path d="M12 2L2 7h20L12 2z" /><path d="M2 7v7a10 10 0 0020 0V7" />',
    },
    {
      id: 2,
      title: 'এনালিটিক্স রিপোর্ট',
      description: 'বিস্তারিত পারফরমেন্স ট্র্যাকিং',
      icon: '<circle cx="12" cy="12" r="9" /><path d="M8 15l3-3 2 2 3-3" />',
    },
    {
      id: 3,
      title: 'বাজেট অপটিমাইজেশন',
      description: 'সর্বোচ্চ ROI নিশ্চিত করুন',
      icon: '<path d="M12 1v22M3 8h18" />',
    },
    {
      id: 4,
      title: 'দ্রুত রেজাল্ট',
      description: '১-২ দিনে ফলাফল দেখুন',
      icon: '<path d="M13 10V3L4 14h7v7l9-11h-7z" />',
    },
  ]);

  // State for form labels
  const [formLabels, setFormLabels] = useState([
    { id: 1, name: 'budget', label: 'বাজেট ($)', placeholder: 'উদাহরণ: 10', type: 'number' },
    { id: 2, name: 'mobile', label: 'মোবাইল নাম্বার', placeholder: '০১৭xxxxxxxx', type: 'tel' },
    { id: 3, name: 'pageLink', label: 'পেইজ লিংক', placeholder: 'https://facebook.com/yourpage', type: 'url' },
    { id: 4, name: 'postLink', label: 'পোস্ট লিংক', placeholder: 'https://facebook.com/yourpage/posts/...', type: 'url' },
    { id: 5, name: 'location', label: 'লোকেশন', placeholder: 'ঢাকা, বাংলাদেশ', type: 'text' },
    { id: 6, name: 'minAge', label: 'মিনিমাম বয়স', placeholder: '', type: 'number' },
    { id: 7, name: 'maxAge', label: 'ম্যাক্সিমাম বয়স', placeholder: '', type: 'number' },
    { id: 8, name: 'days', label: 'কত দিন', placeholder: '', type: 'select' },
  ]);

  // State for editing
  const [editingHero, setEditingHero] = useState(false);
  const [editingFeature, setEditingFeature] = useState(null);
  const [editingLabel, setEditingLabel] = useState(null);

  // Handle hero section update
  const handleHeroChange = (e) => {
    setHeroData({ ...heroData, [e.target.name]: e.target.value });
  };

  // Handle feature CRUD
  const addFeature = () => {
    const newFeature = {
      id: features.length + 1,
      title: '',
      description: '',
      icon: '',
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

  // Handle form label CRUD
  const addFormLabel = () => {
    const newLabel = {
      id: formLabels.length + 1,
      name: '',
      label: '',
      placeholder: '',
      type: 'text',
    };
    setFormLabels([...formLabels, newLabel]);
    setEditingLabel(newLabel.id);
  };

  const updateFormLabel = (id, updatedData) => {
    setFormLabels(formLabels.map((l) => (l.id === id ? { ...l, ...updatedData } : l)));
    setEditingLabel(null);
  };

  const deleteFormLabel = (id) => {
    setFormLabels(formLabels.filter((l) => l.id !== id));
  };

  // Save changes (mock API call)
  const saveChanges = () => {
    console.log('Saving changes:', { heroData, features, formLabels });
    alert('Changes saved successfully!');
    setEditingHero(false);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen font-hind">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap');
        .font-hind {
          font-family: 'Hind Siliguri', sans-serif;
        }
      `}</style>

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-6 sm:mb-8 md:mb-10 font-hind bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
        Facebook Boosting Admin Panel
      </h1>

      {/* Hero Section Editor */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 sm:mb-10 md:mb-12 bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 font-hind text-gray-800">Hero Section</h2>
        {editingHero ? (
          <div className="space-y-4 sm:space-y-6">
            <div>
              <label className="block font-semibold mb-1 sm:mb-2 font-hind text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                value={heroData.title}
                onChange={handleHeroChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 sm:mb-2 font-hind text-gray-700">Description</label>
              <textarea
                name="description"
                value={heroData.description}
                onChange={handleHeroChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300"
                rows="4"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 sm:mb-2 font-hind text-gray-700">Image URL</label>
              <input
                type="url"
                name="image"
                value={heroData.image}
                onChange={handleHeroChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300"
                placeholder="https://example.com/image.jpg"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold mb-1 sm:mb-2 font-hind text-gray-700">CTA 1</label>
                <input
                  type="text"
                  name="cta1"
                  value={heroData.cta1}
                  onChange={handleHeroChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1 sm:mb-2 font-hind text-gray-700">CTA 2</label>
                <input
                  type="text"
                  name="cta2"
                  value={heroData.cta2}
                  onChange={handleHeroChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={saveChanges}
                className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                <Save size={18} /> Save Changes
              </button>
              <button
                onClick={() => setEditingHero(false)}
                className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 hover:scale-105 transition-all duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="mb-4">
              <h3 className="font-semibold text-lg font-hind text-gray-700">Preview</h3>
              <img
                src={heroData.image}
                alt="Hero"
                className="w-full h-40 object-cover rounded-lg mb-4"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'https://via.placeholder.com/1200x400?text=Hero+Image';
                }}
              />
              <p className="text-xl font-bold font-hind text-gray-900">{heroData.title}</p>
              <p className="text-gray-600 font-hind">{heroData.description}</p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4">
                <button className="bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 px-4 py-2 rounded-lg font-hind font-semibold hover:scale-105 transition-all duration-300">
                  {heroData.cta1}
                </button>
                <button className="border-2 border-gray-200 text-gray-700 px-4 py-2 rounded-lg font-hind font-semibold hover:bg-gray-50 hover:scale-105 transition-all duration-300">
                  {heroData.cta2}
                </button>
              </div>
            </div>
            <button
              onClick={() => setEditingHero(true)}
              className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              <Edit size={18} /> Edit Hero
            </button>
          </div>
        )}
      </motion.section>

      {/* Features Editor */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8 sm:mb-10 md:mb-12 bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold font-hind text-gray-800">Features</h2>
          <button
            onClick={addFeature}
            className="mt-2 sm:mt-0 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            <Plus size={18} /> Add Feature
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="border border-gray-200 p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300"
            >
              {editingFeature === feature.id ? (
                <div className="space-y-4">
                  <div>
                    <label className="block font-semibold mb-1 font-hind text-gray-700">Title</label>
                    <input
                      type="text"
                      value={feature.title}
                      onChange={(e) => updateFeature(feature.id, { ...feature, title: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1 font-hind text-gray-700">Description</label>
                    <input
                      type="text"
                      value={feature.description}
                      onChange={(e) => updateFeature(feature.id, { ...feature, description: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1 font-hind text-gray-700">Icon SVG Path</label>
                    <textarea
                      value={feature.icon}
                      onChange={(e) => updateFeature(feature.id, { ...feature, icon: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300"
                      rows="3"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <button
                      onClick={() => updateFeature(feature.id, feature)}
                      className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:scale-105 hover:shadow-lg transition-all duration-300"
                    >
                      <Save size={18} /> Save
                    </button>
                    <button
                      onClick={() => setEditingFeature(null)}
                      className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 hover:scale-105 transition-all duration-300"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => deleteFeature(feature.id)}
                      className="bg-gradient-to-r from-red-500 to-rose-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:scale-105 hover:shadow-lg transition-all duration-300"
                    >
                      <Trash2 size={18} /> Delete
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d={feature.icon} />
                    </svg>
                    <h3 className="font-semibold text-lg font-hind text-gray-800">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 font-hind text-sm">{feature.description}</p>
                  <p className="text-gray-500 font-hind text-xs">Icon SVG: {feature.icon}</p>
                  <button
                    onClick={() => setEditingFeature(feature.id)}
                    className="mt-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:scale-105 hover:shadow-lg transition-all duration-300"
                  >
                    <Edit size={18} /> Edit
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Form Labels Editor */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8 sm:mb-10 md:mb-12 bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold font-hind text-gray-800">Form Labels</h2>
          <button
            onClick={addFormLabel}
            className="mt-2 sm:mt-0 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            <Plus size={18} /> Add Form Label
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {formLabels.map((label) => (
            <motion.div
              key={label.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="border border-gray-200 p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300"
            >
              {editingLabel === label.id ? (
                <div className="space-y-4">
                  <div>
                    <label className="block font-semibold mb-1 font-hind text-gray-700">Name</label>
                    <input
                      type="text"
                      value={label.name}
                      onChange={(e) => updateFormLabel(label.id, { ...label, name: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1 font-hind text-gray-700">Label</label>
                    <input
                      type="text"
                      value={label.label}
                      onChange={(e) => updateFormLabel(label.id, { ...label, label: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1 font-hind text-gray-700">Placeholder</label>
                    <input
                      type="text"
                      value={label.placeholder}
                      onChange={(e) => updateFormLabel(label.id, { ...label, placeholder: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1 font-hind text-gray-700">Type</label>
                    <select
                      value={label.type}
                      onChange={(e) => updateFormLabel(label.id, { ...label, type: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300"
                    >
                      <option value="text">Text</option>
                      <option value="number">Number</option>
                      <option value="tel">Telephone</option>
                      <option value="url">URL</option>
                      <option value="select">Select</option>
                    </select>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <button
                      onClick={() => updateFormLabel(label.id, label)}
                      className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:scale-105 hover:shadow-lg transition-all duration-300"
                    >
                      <Save size={18} /> Save
                    </button>
                    <button
                      onClick={() => setEditingLabel(null)}
                      className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 hover:scale-105 transition-all duration-300"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => deleteFormLabel(label.id)}
                      className="bg-gradient-to-r from-red-500 to-rose-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:scale-105 hover:shadow-lg transition-all duration-300"
                    >
                      <Trash2 size={18} /> Delete
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg font-hind text-gray-800">{label.label}</h3>
                  <p className="text-gray-600 font-hind text-sm">Name: {label.name}</p>
                  <p className="text-gray-600 font-hind text-sm">Placeholder: {label.placeholder}</p>
                  <p className="text-gray-600 font-hind text-sm">Type: {label.type}</p>
                  <button
                    onClick={() => setEditingLabel(label.id)}
                    className="mt-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:scale-105 hover:shadow-lg transition-all duration-300"
                  >
                    <Edit size={18} /> Edit
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default AdminFacebookBoosting;