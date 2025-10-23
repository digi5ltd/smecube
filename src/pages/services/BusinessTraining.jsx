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

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  return (
    <div className="font-sans text-gray-800 bg-gradient-to-br from-sky-50 via-purple-50 to-pink-50 min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
        className="relative bg-gradient-to-br from-indigo-700 via-blue-600 to-cyan-500 text-white py-28 overflow-hidden h-[80vh] flex flex-col justify-center items-center"
      >
        {/* Decorative Gradient Glow */}
        <div className="max-w-6xl mx-auto px-4">
          {/* <div className="absolute inset-0">
            <div className="absolute -top-32 -left-32 w-80 h-80 bg-indigo-400 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-cyan-400 rounded-full blur-3xl opacity-20"></div>
          </div> */}

          <div className="relative max-w-6xl px-6 text-center flex flex-col items-center justify-center">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="text-3xl lg:text-5xl font-extrabold mb-6 drop-shadow-lg mt-16 sm:mt-0"
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

            <div
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
            </div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 mx-auto max-w-6xl px-[10%]">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent py-1.5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          কোর্সের বিশেষ ফিচার
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="p-6 bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100/50 cursor-pointer group backdrop-blur-sm"
              variants={scaleIn}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <motion.div
                className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                whileHover={{
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.5 },
                }}
              >
                {f.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                {f.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-sky-50/50 to-blue-50/50">
        <div className="mx-auto max-w-6xl px-[15%] text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent py-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            কীভাবে কাজ করে?
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {steps.map((s, i) => (
              <motion.div
                key={i}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-blue-100/50 group"
                variants={slideIn}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-sky-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-md">
                  {s.step}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {s.desc}
                </p>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-sky-600 rounded-full mt-4 mx-auto group-hover:w-16 transition-all duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Packages */}
      <div className="py-16 bg-gradient-to-br from-indigo-50 to-blue-100">
        <div className="py-20 mx-auto max-w-6xl px-[15%]">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent py-2">
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
                className={`rounded-lg p-3 transition-all ${
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
                <h3 className="text-2xl md:text-lg font-bold mb-2">
                  {pkg.name}
                </h3>
                <div className="mb-2">
                  <span className="text-4xl md:text-2xl font-bold">
                    ৳{pkg.price}
                  </span>
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
                  className={`block text-center p-2 rounded-lg font-semibold transition ${
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
      <section className="py-20 mx-auto max-w-6xl px-[15%]">
        <motion.div
          className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-3xl p-12 text-center shadow-2xl"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            আপনার ব্যবসার পরবর্তী ধাপ এখান থেকেই শুরু করুন!
          </h3>
          <p className="text-purple-100 text-xl mb-8 max-w-2xl mx-auto">
            অভিজ্ঞ মেন্টরের সহায়তায় আজই নিজের ব্যবসাকে আরও শক্তিশালী করুন।
          </p>
          <motion.button
            className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-12 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ফ্রী কন্সাল্টেশন বুক করুন
          </motion.button>
        </motion.div>
      </section>

      {/* <div className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-center">
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
      </div> */}
    </div>
  );
};

export default BusinessTraining;
