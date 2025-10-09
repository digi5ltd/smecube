import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const BusinessTraining = () => {
  const stats = [
    { number: "৫০০+", label: "ট্রেইন্ড উদ্যোক্তা" },
    { number: "৯৫%", label: "সফলতা হার" },
    { number: "৩০+", label: "রিয়েল লাইভ সেশন" },
    { number: "২৪/৭", label: "সাপোর্ট" },
  ];

  const features = [
    {
      icon: "🎓",
      title: "প্র্যাক্টিক্যাল ট্রেইনিং",
      description: "লাইভ উদাহরণের মাধ্যমে বাস্তবভিত্তিক শিক্ষা।",
    },
    {
      icon: "📈",
      title: "বিজনেস গ্রোথ স্ট্রাটেজি",
      description: "বিক্রয় বৃদ্ধি ও ব্র্যান্ড উন্নয়নের কৌশল শেখানো হয়।",
    },
    {
      icon: "💼",
      title: "রিয়েল প্রজেক্ট ওয়ার্ক",
      description: "নিজস্ব প্রজেক্টে কাজ করে হ্যান্ডস-অন এক্সপেরিয়েন্স নিন।",
    },
    {
      icon: "🤝",
      title: "মেন্টরশিপ সাপোর্ট",
      description: "অভিজ্ঞ মেন্টরদের মাধ্যমে গাইডলাইন ও সহায়তা।",
    },
    {
      icon: "🌐",
      title: "ডিজিটাল মার্কেটিং বেসিক",
      description: "Facebook Ads, Google Ads, SEO সহ ডিজিটাল দক্ষতা অর্জন।",
    },
    {
      icon: "🏆",
      title: "সার্টিফিকেট প্রদান",
      description: "ট্রেইনিং শেষে সার্টিফিকেট প্রদান করা হয়।",
    },
  ];

  const steps = [
    { step: "১", title: "রেজিস্ট্রেশন", desc: "অনলাইন ফর্ম পূরণ করে যোগ দিন।" },
    {
      step: "২",
      title: "লাইভ ক্লাস শুরু",
      desc: "মেন্টরদের সাথে রিয়েল সেশন।",
    },
    { step: "৩", title: "প্রজেক্ট এক্সিকিউশন", desc: "বাস্তব প্রজেক্টে কাজ।" },
    {
      step: "৪",
      title: "সার্টিফিকেট ও সাপোর্ট",
      desc: "সম্পন্ন করার পর সার্টিফিকেট।",
    },
  ];

  const packages = [
    {
      name: "বেসিক ট্রেইনিং",
      price: "২,০০০",
      duration: "১ মাস",
      features: [
        "বেসিক বিজনেস স্ট্রাকচার",
        "ডিজিটাল মার্কেটিং ধারণা",
        "প্রজেক্ট অ্যাসাইনমেন্ট",
        "ইমেইল সাপোর্ট",
      ],
    },
    {
      name: "প্রো ট্রেইনিং",
      price: "৫,০০০",
      duration: "২ মাস",
      popular: true,
      features: [
        "অ্যাডভান্স মার্কেটিং মডিউল",
        "লাইভ বিজনেস কনসাল্টেশন",
        "প্রজেক্ট ওয়ার্ক গাইডেন্স",
        "১-অন-১ মেন্টর সেশন",
        "২৪/৭ সাপোর্ট",
      ],
    },
    {
      name: "এন্টারপ্রাইজ কোর্স",
      price: "১০,০০০",
      duration: "৩ মাস",
      features: [
        "কাস্টমাইজড বিজনেস প্ল্যানিং",
        "টিম ম্যানেজমেন্ট ট্রেইনিং",
        "রিয়েল ক্লায়েন্ট প্রজেক্ট",
        "ডেডিকেটেড মেন্টরশিপ",
        "সার্টিফিকেট ও প্রোমোশনাল সাপোর্ট",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-700 via-blue-600 to-cyan-500 text-white py-28 overflow-hidden">
        {/* Decorative Gradient Glow */}
        <div className="absolute inset-0">
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-indigo-400 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-cyan-400 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg"
          >
            বিজনেস ট্রেইনিং প্রোগ্রাম
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-xl md:text-2xl mb-10 text-blue-100 max-w-3xl mx-auto leading-relaxed"
          >
            আপনার উদ্যোক্তা যাত্রা শুরু করুন বাস্তবভিত্তিক বিজনেস ট্রেইনিংয়ের
            মাধ্যমে।
          </motion.p>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Link
              to="/contact"
              className="bg-white text-indigo-700 px-10 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-indigo-50 hover:shadow-lg transition-all duration-300"
            >
              এখনই রেজিস্ট্রেশন করুন →
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#dbeafe,_transparent_40%)]"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.08, rotate: 1 }}
                transition={{ duration: 0.6, delay: i * 0.15, type: "spring" }}
                className="bg-white/80 backdrop-blur-lg border border-indigo-100 shadow-md rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium text-lg tracking-wide">
                  {stat.label}
                </div>
                <div className="mt-3 w-12 h-1 mx-auto bg-gradient-to-r from-indigo-600 to-purple-500 rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            কোর্সের বিশেষ ফিচার
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* Process */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">কীভাবে কাজ করে?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="p-6"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-indigo-600 to-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  {s.step}
                </div>
                <h3 className="font-bold mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* Packages */}
      <div className="py-16 bg-gradient-to-br from-indigo-50 to-blue-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            আমাদের ট্রেইনিং প্যাকেজ
          </h2>
          <p className="text-center text-gray-600 mb-12">
            আপনার প্রয়োজন অনুযায়ী প্যাকেজ নির্বাচন করুন।
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className={`rounded-lg p-8 transition-all ${
                  pkg.popular
                    ? "bg-gradient-to-br from-indigo-600 to-blue-600 text-white shadow-2xl scale-105"
                    : "bg-white shadow-md"
                }`}
              >
                {pkg.popular && (
                  <div className="bg-yellow-400 text-indigo-900 text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                    জনপ্রিয়
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold">৳{pkg.price}</span>
                </div>
                <div
                  className={`mb-6 text-sm ${
                    pkg.popular ? "text-blue-100" : "text-gray-600"
                  }`}
                >
                  সময়কাল: {pkg.duration}
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center py-3 rounded-lg font-semibold transition ${
                    pkg.popular
                      ? "bg-white text-indigo-600 hover:bg-gray-100"
                      : "bg-indigo-600 text-white hover:bg-indigo-700"
                  }`}
                >
                  এখনই রেজিস্ট্রেশন করুন
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* CTA */}
      <div className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          আপনার ব্যবসার পরবর্তী ধাপ এখান থেকেই শুরু করুন!
        </h2>
        <p className="text-xl mb-8 text-blue-100">
          অভিজ্ঞ মেন্টরের সহায়তায় আজই নিজের ব্যবসাকে আরও শক্তিশালী করুন।
        </p>
        <Link
          to="/contact"
          className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          ফ্রি পরামর্শ নিন →
        </Link>
      </div>
    </div>
  );
};

export default BusinessTraining;
