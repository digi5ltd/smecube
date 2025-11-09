// components/OrderProcessAdmin.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { domainhostOrderProcessAPI } from "../services/api";

const AdmDomHostOrderProc = () => {
  const [steps, setSteps] = useState([]);
  const [formData, setFormData] = useState({
    step: "",
    title: "",
    description: "",
    order: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchSteps();
  }, []);

  const fetchSteps = async () => {
    try {
      const response = await domainhostOrderProcessAPI.getAll();
      setSteps(response.data);
    } catch (error) {
      showNotification("ডেটা লোড করতে সমস্যা হয়েছে", "error");
      console.error("Fetch error:", error);
    }
  };

  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(
      () => setNotification({ show: false, message: "", type: "" }),
      3000
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (editingId) {
        console.log("🔄 Updating step with ID:", editingId);
        console.log("📤 Data being sent:", formData);

        const response = await domainhostOrderProcessAPI.update(
          editingId,
          formData
        );
        console.log("✅ Update response:", response);

        showNotification("ধাপ সফলভাবে আপডেট করা হয়েছে", "success");
      } else {
        console.log("🆕 Creating new step");
        console.log("📤 Data being sent:", formData);

        const response = await domainhostOrderProcessAPI.create(formData);
        console.log("✅ Create response:", response);

        showNotification("ধাপ সফলভাবে যোগ করা হয়েছে", "success");
      }

      resetForm();
      fetchSteps();
    } catch (error) {
      console.error("❌ Error details:", error);
      console.error("❌ Error response:", error.response);
      showNotification(
        error.response?.data?.message || "অপারেশন ব্যর্থ হয়েছে",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (step) => {
    setFormData({
      step: step.step,
      title: step.title,
      description: step.description,
      order: step.order,
    });
    setEditingId(step.id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("আপনি কি নিশ্চিত এই আইটেমটি মুছতে চান?")) return;

    try {
      console.log("🗑️ Deleting step with ID:", id);

      const response = await domainhostOrderProcessAPI.delete(id);
      console.log("✅ Delete response:", response);

      showNotification("ধাপ সফলভাবে মুছে ফেলা হয়েছে", "success");

      // Update local state immediately
      setSteps((steps) => steps.filter((step) => step.id !== id));
    } catch (error) {
      console.error("❌ Delete error:", error);
      console.error("❌ Delete error response:", error.response);
      showNotification(
        error.response?.data?.message || "মুছতে সমস্যা হয়েছে",
        "error"
      );
    }
  };

  const resetForm = () => {
    setFormData({
      step: "",
      title: "",
      description: "",
      order: "",
    });
    setEditingId(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Notification */}
        <AnimatePresence>
          {notification.show && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
                notification.type === "success"
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              {notification.message}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Header */}
        <div className="text-center mb-8">
          <motion.h1
            className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            অর্ডার প্রসেস এডমিন প্যানেল
          </motion.h1>
          <p className="text-gray-600 mt-2">ধাপগুলি ম্যানেজ করুন</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {editingId ? "ধাপ এডিট করুন" : "নতুন ধাপ যোগ করুন"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ধাপ নম্বর *
                </label>
                <input
                  type="text"
                  value={formData.step}
                  onChange={(e) =>
                    setFormData({ ...formData, step: e.target.value })
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="যেমন: ১, ২, ৩..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  শিরোনাম *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="বাংলায় শিরোনাম লিখুন"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  বর্ণনা *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  rows="3"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="বাংলায় বিস্তারিত বর্ণনা লিখুন"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ক্রম *
                </label>
                <input
                  type="number"
                  value={formData.order}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      order: parseInt(e.target.value) || "",
                    })
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="ধাপের ক্রমিক নম্বর"
                  required
                  min="1"
                />
              </div>

              <div className="flex space-x-4 pt-4">
                <motion.button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 px-6 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading
                    ? "প্রসেসিং..."
                    : editingId
                    ? "আপডেট করুন"
                    : "যোগ করুন"}
                </motion.button>

                {editingId && (
                  <motion.button
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    বাতিল
                  </motion.button>
                )}
              </div>
            </form>
          </motion.div>

          {/* List Section */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">সকল ধাপ</h2>

            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-full flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {step.description}
                        </p>
                        <div className="flex items-center space-x-4 mt-1">
                          <span className="text-xs text-gray-500">
                            ক্রম: {step.order}
                          </span>
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              step.is_active
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {step.is_active ? "সক্রিয়" : "নিষ্ক্রিয়"}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <motion.button
                        onClick={() => handleEdit(step)}
                        className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                          />
                        </svg>
                      </motion.button>

                      <motion.button
                        onClick={() => handleDelete(step.id)}
                        className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}

              {steps.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  কোনো ধাপ যোগ করা হয়নি
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AdmDomHostOrderProc;
