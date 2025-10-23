import React from "react";
import { motion } from "framer-motion";

const About = () => {
  // SVG Icons
  const icons = {
    heart: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
          4.42 3 7.5 3c1.74 0 3.41.81 
          4.5 2.09C13.09 3.81 14.76 3 
          16.5 3 19.58 3 22 5.42 22 
          8.5c0 3.78-3.4 6.86-8.55 
          11.54L12 21.35z" />
      </svg>
    ),
    award: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
        <path d="M12 2a7 7 0 0 0-7 7c0 
          2.38 1.19 4.47 3 5.74V22l4-2 
          4 2v-7.26A7 7 0 0 0 12 2zm0 
          10a3 3 0 1 1 0-6 3 3 0 0 1 0 
          6z" />
      </svg>
    ),
    shield: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
        <path d="M12 2L4 5v6c0 
          5.55 3.84 10.74 8 12 
          4.16-1.26 8-6.45 
          8-12V5l-8-3z" />
      </svg>
    ),
    zap: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
        <path d="M7 2v10h3v10l7-12h-4l4-8z" />
      </svg>
    ),
    target: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M12 2a10 10 0 1 0 
          10 10A10.011 10.011 0 0 0 
          12 2zm0 18a8 8 0 1 1 8-8 
          8.009 8.009 0 0 1-8 8zm0-14a6 
          6 0 1 0 6 6 6.006 6.006 0 0 
          0-6-6z" />
      </svg>
    ),
  };

  const values = [
    { icon: icons.heart, title: "গ্রাহক সেবা", desc: "গ্রাহক সন্তুষ্টি আমাদের প্রথম অগ্রাধিকার", gradient: "from-red-500 to-pink-600" },
    { icon: icons.award, title: "মানসম্পন্ন কাজ", desc: "প্রতিটি প্রজেক্টে উৎকর্ষতার প্রতিশ্রুতি", gradient: "from-blue-500 to-cyan-600" },
    { icon: icons.shield, title: "বিশ্বস্ততা", desc: "স্বচ্ছতা এবং সততা আমাদের ভিত্তি", gradient: "from-green-500 to-emerald-600" },
    { icon: icons.zap, title: "দ্রুততা", desc: "সময়মতো ডেলিভারি আমাদের বৈশিষ্ট্য", gradient: "from-yellow-500 to-orange-600" },
  ];

  const stats = [
    { number: "500+", label: "সন্তুষ্ট ক্লায়েন্ট", icon: icons.target },
    { number: "1000+", label: "সম্পন্ন প্রজেক্ট", icon: icons.target },
    { number: "50+", label: "দক্ষ টিম মেম্বার", icon: icons.target },
    { number: "5+", label: "বছরের অভিজ্ঞতা", icon: icons.target },
  ];

  const achievements = [
    "বাংলাদেশের শীর্ষ ১০ ডিজিটাল এজেন্সি",
    "৯৮% গ্রাহক সন্তুষ্টির হার",
    "দেশব্যাপী ৫০০+ সফল প্রজেক্ট",
    "২৪/৭ প্রিমিয়াম সাপোর্ট সেবা",
    "ISO সার্টিফাইড কোয়ালিটি",
    "আন্তর্জাতিক মানের সার্ভিস",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              আমাদের সম্পর্কে
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <strong>SMECube</strong> একটি অগ্রণী ডিজিটাল সলিউশন প্রদানকারী প্রতিষ্ঠান, 
            যা বাংলাদেশের ক্ষুদ্র ও মাঝারি ব্যবসাগুলিকে অনলাইন সাফল্যের পথে নিয়ে যাচ্ছে। 
            আমরা ওয়েব ডেভেলপমেন্ট, ডিজিটাল মার্কেটিং, গ্রাফিক ডিজাইন, এবং সোশ্যাল মিডিয়া ব্যবস্থাপনা 
            সহ বিভিন্ন সেবা প্রদান করে থাকি — সবকিছু এক ছাদের নিচে।
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl p-6 flex flex-col justify-center items-center transition-all duration-300 border border-gray-100 aspect-square"
            >
              <div className="relative w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center text-white mb-3 shadow-inner">
                <div className="absolute inset-[3px] bg-white/90 rounded-lg flex items-center justify-center text-gray-800">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-black bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <p className="text-gray-600 font-medium text-center mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-3xl p-10 text-white shadow-xl">
            <h2 className="text-3xl font-black mb-4">আমাদের লক্ষ্য</h2>
            <p className="text-lg leading-relaxed text-white/90">
              বাংলাদেশের প্রতিটি ছোট ও মাঝারি ব্যবসাকে ডিজিটাল প্ল্যাটফর্মে সফল করে তোলা 
              এবং তাদের অনলাইন উপস্থিতি শক্তিশালী করা। আমরা বিশ্বাস করি প্রযুক্তি সবার জন্য সহজলভ্য হওয়া উচিত।
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl p-10 text-white shadow-xl">
            <h2 className="text-3xl font-black mb-4">আমাদের দৃষ্টিভঙ্গি</h2>
            <p className="text-lg leading-relaxed text-white/90">
              আগামী পাঁচ বছরে বাংলাদেশের শীর্ষস্থানীয় ডিজিটাল সলিউশন প্রদানকারী হিসেবে 
              নিজেদের প্রতিষ্ঠিত করা এবং আন্তর্জাতিক মানের সেবা প্রদান করা।
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-4xl font-black text-center mb-12">
            <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              আমাদের মূল্যবোধ
            </span>
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl p-6 flex flex-col justify-center items-center text-center transition-all duration-300 border border-gray-100 aspect-square"
              >
                <div
                  className={`relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center mb-3 shadow-inner`}
                >
                  <div className="absolute inset-[3px] bg-white/90 rounded-lg flex items-center justify-center text-gray-800">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-3xl p-10 md:p-12 shadow-xl mb-20">
          <h2 className="text-4xl font-black text-center mb-10">
            <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              আমাদের অর্জন
            </span>
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((ach, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-700 font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                {ach}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-black mb-4">আমাদের সাথে কাজ করতে প্রস্তুত?</h2>
          <p className="text-xl mb-8 text-white/90">আজই শুরু করুন আপনার ডিজিটাল যাত্রা</p>
          <button className="bg-white text-red-600 px-10 py-4 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all duration-300">
            যোগাযোগ করুন
          </button>
        </div>

      </div>
    </div>
  );
};

export default About;
