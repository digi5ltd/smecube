import React, { useEffect, useState } from "react";
import { domainhostFeatureAPI } from "../services/api";
import iconMap from "../assets/icones/domainhosting/dummyIcones";

const AdmDomHostFeature = () => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    icon: "",
  });

  // Fetch all features
  const fetchFeatures = async () => {
    try {
      setLoading(true);
      const response = await domainhostFeatureAPI.getAll();
      setFeatures(response.data.data || response.data);
    } catch (error) {
      console.error("Error fetching features:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeatures();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      icon: "",
    });
    setEditingId(null);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.description || !formData.icon) {
      alert("Please fill all fields");
      return;
    }

    try {
      if (editingId) {
        // Update existing feature
        await domainhostFeatureAPI.update(editingId, formData);
      } else {
        // Create new feature
        await domainhostFeatureAPI.create(formData);
      }

      resetForm();
      fetchFeatures(); // Refresh the list
    } catch (error) {
      console.error("Error saving feature:", error);
      alert("Error saving feature");
    }
  };

  // Edit feature
  const handleEdit = (feature) => {
    setFormData({
      title: feature.title,
      description: feature.description,
      icon: feature.icon,
    });
    setEditingId(feature.id);
  };

  // Delete feature
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this feature?")) {
      return;
    }

    try {
      await domainhostFeatureAPI.delete(id);
      fetchFeatures(); // Refresh the list
    } catch (error) {
      console.error("Error deleting feature:", error);
      alert("Error deleting feature");
    }
  };

  // Cancel editing
  const handleCancel = () => {
    resetForm();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-10 text-center">
        সার্ভিস ফিচার ম্যানেজমেন্ট
      </h1>

      {/* Add/Edit Form */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">
          {editingId ? "ফিচার পরিবর্তন করুন" : "ফিচার যোগ করুন"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              টাইটেল
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="ফিচার টাইটেল লিখুন"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              বিবরণ
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="ফিচার বিবরণ লিখুন"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              আইকন
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                name="icon"
                value={formData.icon}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select an icon</option>
                {Object.keys(iconMap).map((iconKey) => (
                  <option key={iconKey} value={iconKey}>
                    {iconKey}
                  </option>
                ))}
              </select>

              {/* Icon Preview */}
              {formData.icon && iconMap[formData.icon] && (
                <div className="flex items-center justify-center p-4 border border-gray-300 rounded-md bg-gray-50">
                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      {React.cloneElement(iconMap[formData.icon], {
                        className: "w-12 h-12 text-blue-600",
                      })}
                    </div>
                    <span className="text-sm text-gray-600">
                      {formData.icon}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex space-x-3">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {editingId ? "ফিচার পরিবর্তন করুন" : "ফিচার যোগ করুন"}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                বাতিল
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Features List */}
      <div className="bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold p-6 border-b">ফিচার লিস্ট</h2>

        {loading ? (
          <div className="p-6 text-center">Loading...</div>
        ) : features.length === 0 ? (
          <div className="p-6 text-center text-gray-500">No features found</div>
        ) : (
          <div className="divide-y">
            {features.map((feature) => (
              <div key={feature.id} className="p-6 hover:bg-gray-50">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {feature.icon && iconMap[feature.icon] ? (
                        React.cloneElement(iconMap[feature.icon], {
                          className: "w-8 h-8 text-blue-600",
                        })
                      ) : (
                        <div className="w-8 h-8 bg-gray-300 rounded"></div>
                      )}
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mt-1">
                        {feature.description}
                      </p>
                      <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded mt-2">
                        {feature.icon}
                      </span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(feature)}
                      className="px-3 py-1 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600 focus:outline-none"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(feature.id)}
                      className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdmDomHostFeature;
