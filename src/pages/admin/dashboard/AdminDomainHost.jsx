import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import heroDomain from "../../../assets/png/domaiinhosting/";

import {
  Plus,
  Trash2,
  Save,
  DollarSign,
  Package,
  Star,
  Edit,
  EyeOff,
  Eye,
  X,
  Briefcase,
} from "lucide-react";
import {
  domainhostFeatureAPI,
  domainhostHeroAPI,
  domainhostPackageAPI,
  domainhostServiceFeatureTitleDescAPI,
} from "../../../services/api";
import dummyIcones, {
  getIconByName,
} from "../../../assets/icones/domainhosting/dummyIcones";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const AdminDomainHost = () => {
  const [heroData, setHeroData] = useState({});
  const [activeTab, setActiveTab] = useState("hero");

  useEffect(() => {
    fetchHeroData();
    fetchPackageData();
    fetchFeatureTitleDescData();
  }, []);

  const fetchHeroData = async () => {
    try {
      const response = await domainhostHeroAPI.getAll();
      console.log(response);

      // const data = await response.json();
      setHeroData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching hero data:", error);
    }
  };

  const [editingHero, setEditingHero] = useState(false);
  // const [showPreview, setShowPreview] = useState(false);

  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "",
  });

  const [animate, setAnimate] = useState(true);
  /* const [sectionData, setSectionData] = useState({
    title: "আমাদের সাম্প্রতিক কাজ",
    subtitle: "বিভিন্ন শিল্পে আমাদের সফলতার গল্প",
  }); */

  // const [editingSection, setEditingSection] = useState(false);
  // const [editingProject, setEditingProject] = useState(null);

  const handleHeroChange = (e) => {
    const { name, value } = e.target;
    setHeroData((prev) => {
      const updated = [...prev]; // copy array
      updated[0] = { ...updated[0], [name]: value }; // update first object
      return updated;
    });
  };

  const saveChangesHeroSection = async () => {
    // console.log(heroData[0]?.id);

    try {
      // Replace with your actual axios call
      const response = await domainhostHeroAPI.update(
        heroData[0]?.id,
        heroData[0]
      );

      console.log("Saving hero data:", response);

      setNotification({
        show: true,
        message: "হিরো সেকশন সফলভাবে আপডেট হয়েছে!",
        type: "success",
      });

      setEditingHero(false);

      setTimeout(() => {
        setNotification({ show: false, message: "", type: "" });
      }, 3000);
    } catch (error) {
      setNotification({
        show: true,
        message: "আপডেট করতে সমস্যা হয়েছে!",
        type: "error",
      });
    }
  };

  const [packages, setPackages] = useState([]);

  const fetchPackageData = async () => {
    try {
      const response = await domainhostPackageAPI.getAll();
      setPackages(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePackageChange = (index, field, value) => {
    const updatedPackages = [...packages];
    updatedPackages[index][field] = value;
    setPackages(updatedPackages);
  };

  const handleFeatureChange = (packageIndex, featureIndex, value) => {
    const updatedPackages = [...packages];
    updatedPackages[packageIndex].features[featureIndex] = value;
    setPackages(updatedPackages);
  };

  const addFeature = (packageIndex) => {
    const updatedPackages = [...packages];
    updatedPackages[packageIndex].features.push("");
    setPackages(updatedPackages);
  };

  const removeFeature = (packageIndex, featureIndex) => {
    const updatedPackages = [...packages];
    updatedPackages[packageIndex].features.splice(featureIndex, 1);
    setPackages(updatedPackages);
  };

  const addPackage = () => {
    setPackages([
      ...packages,
      {
        name: "",
        price: "",
        duration: "মাস",
        popular: false,
        features: [""],
      },
    ]);
  };

  const removePackage = async (id) => {
    console.log(id);

    const updatedPackages = await packages.filter((pkg) => pkg.id !== id);
    console.log(updatedPackages);

    setPackages(updatedPackages);

    try {
      await domainhostPackageAPI.delete(id);
    } catch (error) {
      console.log(error);
    }
  };

  const banglaToEnglish = (num) => {
    const eng = "0123456789";
    const bangla = "০১২৩৪৫৬৭৮৯";
    return num.replace(/[০১২৩৪৫৬৭৮৯]/g, (d) => eng[bangla.indexOf(d)]);
  };

  const handleSubmit = async () => {
    try {
      for (const pkg of packages) {
        const payload = {
          ...pkg,
          features: pkg.features.filter((f) => f.trim() !== ""),
          price: banglaToEnglish(pkg.price),
        };

        if (pkg.id) {
          // update existing
          await domainhostPackageAPI.update(pkg.id, payload);
        } else {
          // create new
          await domainhostPackageAPI.create(payload);
        }
      }

      setNotification({
        show: true,
        message: "প্রাইসিং প্ল্যান সফলভাবে আপডেট হয়েছে!",
        type: "success",
      });

      fetchPackageData(); // refresh after update

      setTimeout(() => {
        setNotification({ show: false, message: "", type: "" });
      }, 3000);
    } catch (error) {
      console.error("Error saving packages:", error);
      setNotification({
        show: true,
        message: "আপডেট করতে সমস্যা হয়েছে!",
        type: "error",
      });
    }
  };

  // Feature section functionality
  // Feature section title and subtitle management
  const [featureTitle, setFeatureTitle] = useState({});
  const [editingFeatureTitle, setEditingFeatureTitle] = useState(false);

  const handleFeatureTitleChange = (e) => {
    const { name, value } = e.target;
    setFeatureTitle((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const fetchFeatureTitleDescData = async () => {
    try {
      const response = await domainhostServiceFeatureTitleDescAPI.getAll();
      console.log(response);
      console.log(typeof response.data);

      const data = Array.isArray(response.data)
        ? response.data[0] || {}
        : response.data;
      setFeatureTitle(data);
      console.log("Fetched feature title data:", data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching feature title data:", error);
    }
  };

  const saveChangesFeatureTitleSection = async () => {
    // console.log(heroData[0]?.id);

    try {
      // Replace with your actual axios call
      /* const response = await domainhostServiceFeatureTitleDescAPI.update(
        featureTitle[0]?.id,
        featureTitle[0]
      );

      setFeatureTitle(response.data); */
      console.log(featureTitle);
      console.log("Feature title ID:", featureTitle.id);
      if (featureTitle.id) {
        // update existing
        await domainhostServiceFeatureTitleDescAPI.update(
          featureTitle.id,
          featureTitle
        );
      } else {
        // create new
        await domainhostServiceFeatureTitleDescAPI.create(featureTitle);
      }

      console.log("Saving feature data:", featureTitle);

      setNotification({
        show: true,
        message: "সার্ভিস ফিচার শিরোনাম ও বিবরণ সফলভাবে আপডেট হয়েছে!",
        type: "success",
      });

      setEditingFeatureTitle(false);

      setTimeout(() => {
        setNotification({ show: false, message: "", type: "" });
      }, 3000);
    } catch (error) {
      setNotification({
        show: true,
        message: "আপডেট করতে সমস্যা হয়েছে!",
        type: "error",
      });
    }
  };

  // Feature section service and feature management
  const [features, setFeatures] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    title: "",
    description: "",
    icon: "domain",
  });
  const [isEditing, setIsEditing] = useState(false);
  // const [showForm, setShowForm] = useState(false);

  /* const handleSubmitFeature = async (e) => {
    e.preventDefault();

    if (isEditing) {
      // Update existing feature
      setFeatures(
        features.map((f) => (f.id === formData.id ? { ...formData } : f))
      );
      console.log("edit features", formData);
    } else {
      // Create new feature
      const newFeature = {
        ...formData,
        // id: Date.now(),
      };
      setFeatures([...features, newFeature]);
      console.log("new features", formData);
    }

    // Reset form
    setFormData({ id: null, icon: "", title: "", description: "" });
    setIsEditing(false);

    // Here you would typically make an API call to your Laravel backend
    // await fetch('/api/features', {
    //   method: isEditing ? 'PUT' : 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // });
  }; */

  const handleSubmitFeature = async (e) => {
    e.preventDefault();

    try {
      if (isEditing) {
        // Update existing feature
        const response = await domainhostFeatureAPI.update(
          formData.id,
          formData
        );

        console.log(formData);

        // Update local state with the response data from API
        setFeatures(
          features.map((f) => (f.id === formData.id ? response.data : f))
        );
        console.log("Feature updated successfully:", response.data);
      } else {
        // Create new feature
        const response = await domainhostFeatureAPI.create(formData);

        // Add new feature to local state with the ID from API response
        setFeatures([...features, response.data]);
        console.log("Feature created successfully:", response.data);
      }

      // Show success notification
      setNotification({
        show: true,
        message: isEditing
          ? "ফিচার সফলভাবে আপডেট হয়েছে!"
          : "ফিচার সফলভাবে তৈরি হয়েছে!",
        type: "success",
      });

      // Reset form
      setFormData({ id: null, icon: "", title: "", description: "" });
      setIsEditing(false);

      // Hide notification after 3 seconds
      setTimeout(() => {
        setNotification({ show: false, message: "", type: "" });
      }, 3000);
    } catch (error) {
      console.error("Error saving feature:", error);

      // Show error notification
      setNotification({
        show: true,
        message: isEditing
          ? "ফিচার আপডেট করতে সমস্যা হয়েছে!"
          : "ফিচার তৈরি করতে সমস্যা হয়েছে!",
        type: "error",
      });
    }
  };

  const handleEdit = (feature) => {
    setFormData(feature);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    setFeatures(features.filter((f) => f.id !== id));

    // API call for deletion
    // await fetch(`/api/features/${id}`, { method: 'DELETE' });
  };

  const handleCancel = () => {
    setFormData({ id: null, icon: "", title: "", description: "" });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-8 px-4">
      <h1 className="text-center mb-8 text-3xl font-bold">
        ডোমেইন ও হোস্টিং অ্যাডমিন প্যানেল
      </h1>

      {/* Notification */}
      {notification.show && (
        <div
          className={`fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-lg ${
            notification.type === "success" ? "bg-green-500" : "bg-red-500"
          } text-white font-medium transform transition-all duration-300 animate-slide-in`}
        >
          {notification.message}
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-xl p-2 mb-6 flex gap-2">
          <button
            onClick={() => setActiveTab("hero")}
            className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === "hero"
                ? "bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-md"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            হিরো সেকশন ম্যানেজমেন্ট
          </button>
          <button
            onClick={() => setActiveTab("pricing")}
            className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === "pricing"
                ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-md"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            প্রাইসিং প্ল্যান আপডেট
          </button>
          <button
            onClick={() => setActiveTab("feature")}
            className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === "feature"
                ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-md"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            ফিচার আপডেট
          </button>
        </div>

        {/* Hero Section Content */}
        {activeTab === "hero" && (
          <div className="min-h-screen py-8 px-4">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  হিরো সেকশন ম্যানেজমেন্ট
                </h1>
                <p className="text-gray-600">
                  ডোমেইন ও হোস্টিং পেজের হিরো সেকশন এডিট করুন
                </p>
              </div>

              <div className="grid gap-6">
                {/* Editor Section */}
                <div className="bg-white rounded-2xl shadow-xl p-6 transform transition-all duration-300 hover:shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                      <Edit className="w-6 h-6 text-blue-500" />
                      এডিট করুন
                    </h2>
                  </div>

                  {editingHero ? (
                    <div className="space-y-5">
                      <div>
                        <label className="block font-semibold mb-2 text-gray-700">
                          টাইটেল
                        </label>
                        <input
                          type="text"
                          name="title"
                          value={heroData[0]?.title}
                          onChange={handleHeroChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300"
                          placeholder="টাইটেল লিখুন"
                        />
                      </div>

                      <div>
                        <label className="block font-semibold mb-2 text-gray-700">
                          বিবরণ
                        </label>
                        <textarea
                          name="description"
                          value={heroData[0]?.description}
                          onChange={handleHeroChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300"
                          rows="4"
                          placeholder="বিবরণ লিখুন"
                        />
                      </div>

                      <div>
                        <label className="block font-semibold mb-2 text-gray-700">
                          ছবির URL
                        </label>
                        <input
                          type="url"
                          name="image"
                          value={heroData[0]?.image}
                          onChange={handleHeroChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300"
                          placeholder="https://example.com/image.jpg"
                        />
                      </div>

                      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-semibold mb-2 text-gray-700">
                            প্রথম বাটন টেক্সট
                          </label>
                          <input
                            type="text"
                            name="cta1"
                            value={heroData[0]?.cta1}
                            onChange={handleHeroChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300"
                            placeholder="বাটন টেক্সট"
                          />
                        </div>
                        <div>
                          <label className="block font-semibold mb-2 text-gray-700">
                            দ্বিতীয় বাটন টেক্সট
                          </label>
                          <input
                            type="text"
                            name="cta2"
                            value={heroData[0]?.cta2}
                            onChange={handleHeroChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300"
                            placeholder="বাটন টেক্সট"
                          />
                        </div>
                      </div> */}

                      <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        <button
                          onClick={saveChangesHeroSection}
                          className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:scale-105 hover:shadow-lg transition-all duration-300 font-semibold"
                        >
                          <Save size={18} /> পরিবর্তন সংরক্ষণ করুন
                        </button>
                        <button
                          onClick={() => setEditingHero(false)}
                          className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 hover:scale-105 transition-all duration-300 font-semibold flex items-center justify-center gap-2"
                        >
                          <X size={18} /> বাতিল করুন
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-2 border-blue-100">
                        <h3 className="font-semibold text-lg text-gray-800 mb-3 flex items-center gap-2">
                          <Eye className="w-5 h-5 text-blue-500" />
                          বর্তমান কন্টেন্ট
                        </h3>
                        <div className="space-y-3 text-gray-700">
                          <div>
                            <span className="font-semibold text-sm text-gray-500">
                              টাইটেল:
                            </span>
                            <p className="mt-1">{heroData[0]?.title}</p>
                          </div>
                          <div>
                            <span className="font-semibold text-sm text-gray-500">
                              বিবরণ:
                            </span>
                            <p className="mt-1">{heroData[0]?.description}</p>
                          </div>
                          {/* <div className="grid grid-cols-2 gap-3">
                            <div>
                              <span className="font-semibold text-sm text-gray-500">
                                বাটন ১:
                              </span>
                              <p className="mt-1">{heroData[0]?.cta1}</p>
                            </div>
                            <div>
                              <span className="font-semibold text-sm text-gray-500">
                                বাটন ২:
                              </span>
                              <p className="mt-1">{heroData[0]?.cta2}</p>
                            </div>
                          </div> */}
                        </div>
                      </div>

                      <button
                        onClick={() => setEditingHero(true)}
                        className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:scale-105 hover:shadow-lg transition-all duration-300 font-semibold"
                      >
                        <Edit size={18} /> এডিট শুরু করুন
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Pricing Section Content */}
        {activeTab === "pricing" && (
          <div className="max-w-7xl mx-auto mt-10">
            {/* Header */}
            <div
              className={`text-center mb-2 transition-all duration-700 ${
                animate
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
            >
              <h1 className="text-3xl font-bold text-gray-800 mb-3">
                প্রাইসিং প্ল্যান আপডেট করুন
              </h1>
              <p className="text-lg text-gray-600">
                আপনার সার্ভিস প্যাকেজ সহজেই পরিচালনা করুন
              </p>
            </div>

            {/* Packages Grid */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {packages?.map((pkg, packageIndex) => (
                  <div
                    key={packageIndex}
                    className={`bg-white rounded-2xl shadow-xl p-6 relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                      pkg.span === 2 ? "lg:col-span-2 xl:col-span-1" : ""
                    }`}
                    style={{
                      animation: `fadeInUp 0.5s ease-out ${
                        packageIndex * 0.1
                      }s both`,
                    }}
                  >
                    {/* Delete Button */}
                    {packages.length > 1 && (
                      <button
                        onClick={() => removePackage(pkg.id)}
                        className="absolute top-4 right-4 p-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-full transition transform hover:scale-110"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}

                    {/* Popular Toggle */}
                    <div className="mb-4 flex items-center gap-2">
                      <input
                        type="checkbox"
                        id={`popular-${packageIndex}`}
                        checked={pkg.popular}
                        onChange={(e) =>
                          handlePackageChange(
                            packageIndex,
                            "popular",
                            e.target.checked
                          )
                        }
                        className="w-4 h-4 text-purple-600 rounded"
                      />
                      <label
                        htmlFor={`popular-${packageIndex}`}
                        className="flex items-center gap-1 text-sm text-gray-700 cursor-pointer"
                      >
                        <Star className="w-4 h-4 text-yellow-500" />
                        প্রস্তাবিত
                      </label>
                    </div>

                    {/* Package Name */}
                    <div className="mb-4">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        প্যাকেজ নাম
                      </label>
                      <input
                        type="text"
                        value={pkg.name}
                        onChange={(e) =>
                          handlePackageChange(
                            packageIndex,
                            "name",
                            e.target.value
                          )
                        }
                        className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition"
                        placeholder="প্যাকেজ নাম লিখুন"
                      />
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        মূল্য (৳)
                      </label>
                      <input
                        type="text"
                        value={pkg.price}
                        onChange={(e) =>
                          handlePackageChange(
                            packageIndex,
                            "price",
                            e.target.value
                          )
                        }
                        className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition"
                        placeholder="মূল্য লিখুন"
                      />
                    </div>

                    {/* Duration */}
                    <div className="mb-4">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        সময়কাল
                      </label>
                      <select
                        value={pkg.duration}
                        onChange={(e) =>
                          handlePackageChange(
                            packageIndex,
                            "duration",
                            e.target.value
                          )
                        }
                        className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition"
                      >
                        <option value="১ মাস">১ মাস</option>
                        <option value="১ বছর">১ বছর</option>
                        <option value="একবার">একবার</option>
                      </select>
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        ফিচার সমূহ
                      </label>
                      <div className="space-y-2">
                        {pkg.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex gap-2 animate-fade-in"
                          >
                            <input
                              type="text"
                              value={feature}
                              onChange={(e) =>
                                handleFeatureChange(
                                  packageIndex,
                                  featureIndex,
                                  e.target.value
                                )
                              }
                              className="flex-1 px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition text-sm"
                              placeholder="ফিচার লিখুন"
                            />
                            {pkg.features.length > 1 && (
                              <button
                                onClick={() =>
                                  removeFeature(packageIndex, featureIndex)
                                }
                                className="p-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg transition transform hover:scale-110"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={() => addFeature(packageIndex)}
                        className="mt-2 w-full py-2 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-lg transition flex items-center justify-center gap-2 text-sm font-medium transform hover:scale-105"
                      >
                        <Plus className="w-4 h-4" />
                        নতুন ফিচার যোগ করুন
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                {/* Add Package Button */}
                <button
                  onClick={addPackage}
                  className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2 mx-auto transform hover:scale-105 flex-1"
                >
                  <Package className="w-5 h-5" />
                  নতুন প্যাকেজ যোগ করুন
                </button>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2 text-lg transform hover:scale-105 flex-1"
                >
                  <Save className="w-6 h-6" />
                  পরিবর্তন সংরক্ষণ করুন
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Feature section content */}
        {activeTab === "feature" && (
          <section className="py-20 mx-auto max-w-7xl px-4">
            {/* Title with CRUD operations mentioned */}
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent py-1.5 mb-4">
                সার্ভিস ফিচার ম্যানেজমেন্ট
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                নতুন ফিচার তৈরি করুন, বিদ্যমান ফিচার এডিট করুন, বা ফিচার ডিলিট
                করুন - সম্পূর্ণ CRUD অপারেশনস
              </p>
            </motion.div>

            {/* Feature section title and description */}
            <div>
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  সার্ভিস ফিচার শিরোনাম ও বিবরণ ম্যানেজমেন্ট
                </h1>
                {/* <p className="text-gray-600">
                  ডোমেইন ও হোস্টিং পেজের হিরো সেকশন এডিট করুন
                </p> */}
              </div>

              <div className="grid gap-6">
                {/* Editor Section */}
                <div className="bg-white rounded-2xl shadow-xl p-6 transform transition-all duration-300 hover:shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                      <Edit className="w-6 h-6 text-blue-500" />
                      এডিট করুন
                    </h2>
                  </div>

                  {editingFeatureTitle ? (
                    <div className="space-y-5">
                      <div>
                        <label className="block font-semibold mb-2 text-gray-700">
                          টাইটেল
                        </label>
                        <input
                          type="text"
                          name="title"
                          value={featureTitle?.title || ""}
                          onChange={handleFeatureTitleChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300"
                          placeholder="টাইটেল লিখুন"
                        />
                      </div>

                      <div>
                        <label className="block font-semibold mb-2 text-gray-700">
                          বিবরণ
                        </label>
                        <textarea
                          name="description"
                          value={featureTitle?.description || ""}
                          onChange={handleFeatureTitleChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300"
                          rows="4"
                          placeholder="বিবরণ লিখুন"
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        <button
                          onClick={saveChangesFeatureTitleSection}
                          className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:scale-105 hover:shadow-lg transition-all duration-300 font-semibold"
                        >
                          <Save size={18} /> পরিবর্তন সংরক্ষণ করুন
                        </button>

                        <button
                          onClick={() => setEditingFeatureTitle(false)}
                          className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 hover:scale-105 transition-all duration-300 font-semibold flex items-center justify-center gap-2"
                        >
                          <X size={18} /> বাতিল করুন
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-2 border-blue-100">
                        <h3 className="font-semibold text-lg text-gray-800 mb-3 flex items-center gap-2">
                          <Eye className="w-5 h-5 text-blue-500" />
                          বর্তমান কন্টেন্ট
                        </h3>
                        <div className="space-y-3 text-gray-700">
                          <div>
                            <span className="font-semibold text-sm text-gray-500">
                              টাইটেল:
                            </span>
                            <p className="mt-1">{featureTitle?.title}</p>
                          </div>
                          <div>
                            <span className="font-semibold text-sm text-gray-500">
                              বিবরণ:
                            </span>
                            <p className="mt-1">{featureTitle?.description}</p>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => setEditingFeatureTitle(true)}
                        className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:scale-105 hover:shadow-lg transition-all duration-300 font-semibold"
                      >
                        <Edit size={18} /> এডিট শুরু করুন
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* service feature management section */}
            <div className="mt-10">
              <h1 className="text-3xl font-bold text-gray-800 mb-10 text-center">
                সার্ভিস ফিচার ম্যানেজমেন্ট
              </h1>
              <div className="grid lg:grid-cols-2 gap-12 ">
                {/* CRUD Form */}
                <motion.div
                  className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 shadow-2xl border border-purple-100"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeIn}
                >
                  <h3 className="text-2xl font-bold text-purple-800 mb-6 text-center">
                    {isEditing
                      ? "ফিচার এডিট করুন ✏️"
                      : "নতুন ফিচার যোগ করুন ➕"}
                  </h3>

                  <form onSubmit={handleSubmitFeature} className="space-y-6">
                    {/* Icon Selection */}
                    <div>
                      <label className="block text-sm font-semibold text-purple-700 mb-2">
                        আইকন সিলেক্ট করুন
                      </label>
                      <select
                        value={formData.icon}
                        onChange={(e) =>
                          setFormData({ ...formData, icon: e.target.value })
                        }
                        className="w-full p-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white"
                        required
                      >
                        <option value="">আইকন সিলেক্ট করুন</option>
                        {Object.keys(dummyIcones).map((iconKey) => (
                          <option key={iconKey} value={iconKey}>
                            {iconKey}
                          </option>
                        ))}
                      </select>

                      {formData.icon && (
                        <div className="mt-3 p-3 bg-white rounded-lg border border-purple-200">
                          <p className="text-sm text-purple-600 mb-2">
                            প্রিভিউ:
                          </p>
                          <div className="text-purple-500">
                            {getIconByName(formData.icon)}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Title Input */}
                    <div>
                      <label className="block text-sm font-semibold text-purple-700 mb-2">
                        টাইটেল
                      </label>
                      <input
                        type="text"
                        value={formData.title}
                        onChange={(e) =>
                          setFormData({ ...formData, title: e.target.value })
                        }
                        className="w-full p-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white"
                        placeholder="ফিচারের টাইটেল লিখুন..."
                        required
                      />
                    </div>

                    {/* Description Input */}
                    <div>
                      <label className="block text-sm font-semibold text-purple-700 mb-2">
                        বর্ণনা
                      </label>
                      <textarea
                        value={formData.description}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            description: e.target.value,
                          })
                        }
                        rows="3"
                        className="w-full p-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white resize-none"
                        placeholder="ফিচারের বিস্তারিত বর্ণনা লিখুন..."
                        required
                      />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      <button
                        type="submit"
                        className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        {isEditing ? "আপডেট করুন 🔄" : "সেভ করুন 💾"}
                      </button>

                      {isEditing && (
                        <button
                          type="button"
                          onClick={handleCancel}
                          className="px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-xl font-semibold hover:from-gray-600 hover:to-gray-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                        >
                          বাতিল ❌
                        </button>
                      )}
                    </div>
                  </form>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  // initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                >
                  {features.map((feature) => (
                    <motion.div
                      key={feature.id}
                      className="p-4 bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-purple-100 cursor-pointer group backdrop-blur-sm relative"
                      variants={scaleIn}
                      whileHover={{ scale: 1.03 }}
                    >
                      {/* Edit/Delete Buttons */}
                      <div className="absolute top-3 right-3 flex gap-2 ">
                        <button
                          onClick={() => handleEdit(feature)}
                          className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600  hover:opacity-100 transition-opacity duration-300"
                          title="Edit"
                        >
                          ✏️
                        </button>
                        <button
                          onClick={() => handleDelete(feature.id)}
                          className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
                          title="Delete"
                        >
                          🗑️
                        </button>
                      </div>

                      <motion.div className="mb-3  transition-transform duration-300 text-purple-500">
                        {dummyIcones[feature.icon]}
                      </motion.div>

                      <h3 className="text-sm lg:text-[16px] font-bold mb-2 text-gray-800 group-hover:text-purple-600 transition-colors">
                        {feature.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed text-[10px] lg:text-sm">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Stats */}
            {/*  <motion.div
              className="mt-12 grid grid-cols-3 gap-6 text-center"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-2xl border border-green-200">
                <div className="text-2xl font-bold text-green-600">
                  {features.length}
                </div>
                <div className="text-sm text-green-700">মোট ফিচার</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-100 p-6 rounded-2xl border border-blue-200">
                <div className="text-2xl font-bold text-blue-600">
                  {Object.keys(dummyIcones).length}
                </div>
                <div className="text-sm text-blue-700">সিলেক্টেবল আইকন</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-100 p-6 rounded-2xl border border-orange-200">
                <div className="text-2xl font-bold text-orange-600">CRUD</div>
                <div className="text-sm text-orange-700">অপারেশনস</div>
              </div>
            </motion.div> */}
          </section>
        )}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AdminDomainHost;
