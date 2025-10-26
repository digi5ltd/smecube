import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const FacebookBoosting = () => {
  const [formData, setFormData] = useState({
    budget: "",
    mobile: "",
    pageLink: "",
    postLink: "",
    minAge: "18",
    maxAge: "65",
    location: "",
    days: "1",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("অর্ডার সফলভাবে সাবমিট হয়েছে!");
  };

  const features = [
    {
      icon: (
        <svg
          className="w-10 h-10 text-yellow-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7h20L12 2z" />
          <path d="M2 7v7a10 10 0 0020 0V7" />
        </svg>
      ),
      title: "টার্গেটেড অডিয়েন্স",
      description: "সঠিক কাস্টমারদের কাছে পৌঁছান",
    },
    {
      icon: (
        <svg
          className="w-10 h-10 text-yellow-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M8 15l3-3 2 2 3-3" />
        </svg>
      ),
      title: "এনালিটিক্স রিপোর্ট",
      description: "বিস্তারিত পারফরমেন্স ট্র্যাকিং",
    },
    {
      icon: (
        <svg
          className="w-10 h-10 text-yellow-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 1v22M3 8h18" />
        </svg>
      ),
      title: "বাজেট অপটিমাইজেশন",
      description: "সর্বোচ্চ ROI নিশ্চিত করুন",
    },
    {
      icon: (
        <svg
          className="w-10 h-10 text-yellow-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "দ্রুত রেজাল্ট",
      description: "১-২ দিনে ফলাফল দেখুন",
    },
  ];

  return (
    <div className="font-sans bg-gradient-to-br from-slate-50 via-yellow-50/20 to-white min-h-screen text-gray-800">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap');
        .font-hind {
          font-family: 'Hind Siliguri', sans-serif;
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 pt-32 pb-40 rounded-b-[60px] shadow-lg">
        {/* Decorative blobs */}
        <div className="absolute -top-32 left-10 w-80 h-80 bg-pink-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl"></div>

        {/* Hero Text */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-orange-200 mb-4 font-hind drop-shadow-lg leading-tight">
          ফেসবুক বুস্টিং সেবা
        </h1>
        <p className="text-white/90 text-lg md:text-2xl max-w-2xl mx-auto mb-10 font-hind leading-relaxed">
          আপনার ব্যবসাকে নতুন উচ্চতায় নিয়ে যান — লক্ষ্যভিত্তিক গ্রাহকদের কাছে পৌঁছান সহজেই।
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center z-10">
          <button className="group bg-gradient-to-r from-yellow-500 to-amber-400 text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg shadow-md transition-all flex items-center justify-center gap-3 hover:scale-105 active:scale-95">
            এখনই শুরু করুন
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border-2 border-white/60 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all hover:scale-105">
            বিস্তারিত জানুন
          </button>
        </div>

        {/* Curved Bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="relative block w-[calc(150%+1.3px)] h-[120px]"
          >
            <path
              d="M-9.31,73.65 C149.99,150.00 349.20,-49.98 514.63,93.47 L500.00,150.00 L0.00,150.00 Z"
              className="fill-white"
            ></path>
          </svg>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 font-hind bg-gradient-to-r from-amber-500 to-yellow-400 bg-clip-text text-transparent">
            কেন আমাদের সেবা বেছে নেবেন?
          </h2>

          {/* Updated grid to keep all boxes in one row of squares even on mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 justify-center">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-yellow-50 border border-yellow-200 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 aspect-square flex flex-col items-center justify-center p-5"
              >
                <div className="mb-3">{feature.icon}</div>
                <h3 className="text-lg md:text-xl font-bold mb-1 font-hind text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 font-hind">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-20 bg-gradient-to-b from-yellow-50 to-white">
        <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-lg p-6 md:p-10 rounded-2xl shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 font-hind bg-gradient-to-r from-yellow-500 to-amber-400 bg-clip-text text-transparent">
            Boosting Order Form
          </h2>

          <div className="space-y-4">
            {[
              { name: "budget", label: "বাজেট ($)", placeholder: "উদাহরণ: 10", type: "number" },
              { name: "mobile", label: "মোবাইল নাম্বার", placeholder: "০১৭xxxxxxxx", type: "tel" },
              { name: "pageLink", label: "পেইজ লিংক", placeholder: "https://facebook.com/yourpage", type: "url" },
              { name: "postLink", label: "পোস্ট লিংক", placeholder: "https://facebook.com/yourpage/posts/...", type: "url" },
              { name: "location", label: "লোকেশন", placeholder: "ঢাকা, বাংলাদেশ", type: "text" },
            ].map((field, i) => (
              <div key={i}>
                <label className="block font-semibold mb-1 font-hind text-gray-700">{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-400 focus:outline-none text-gray-800"
                />
              </div>
            ))}

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold mb-1 font-hind text-gray-700">মিনিমাম বয়স</label>
                <input
                  type="number"
                  name="minAge"
                  value={formData.minAge}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1 font-hind text-gray-700">ম্যাক্সিমাম বয়স</label>
                <input
                  type="number"
                  name="maxAge"
                  value={formData.maxAge}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-400 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-1 font-hind text-gray-700">কত দিন</label>
              <select
                name="days"
                value={formData.days}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-400 focus:outline-none"
              >
                <option value="1">১ দিন</option>
                <option value="3">৩ দিন</option>
                <option value="7">৭ দিন</option>
                <option value="14">১৪ দিন</option>
                <option value="30">৩০ দিন</option>
              </select>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-yellow-500 to-amber-400 hover:from-yellow-600 hover:to-amber-500 text-gray-900 font-bold py-3 rounded-xl transition-all hover:scale-105 mt-6"
            >
              অর্ডার করুন →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FacebookBoosting;
