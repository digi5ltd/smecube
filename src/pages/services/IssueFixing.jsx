import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import {
  Wrench,
  Clock,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Code,
  Bug,
  Server,
  Database,
  Smartphone,
  Globe,
  Palette,
  TrendingUp,
  ShoppingCart,
  Star,
  Gift,
  Award,
  Calendar,
} from "lucide-react";

const IssueFixing = () => {
  const allServices = [
    {
      category: "ওয়েব ডেভেলপমেন্ট ইস্যু",
      services: [
        {
          icon: <Code className="w-8 h-8" />,
          title: "কোডিং ইরর",
          description: "প্রোগ্রামিং এবং ডেভেলপমেন্ট সমস্যা সমাধান",
          features: [
            "JavaScript Errors",
            "PHP Debugging",
            "Functionality Issues",
            "API Integration",
          ],
        },
        {
          icon: <Server className="w-8 h-8" />,
          title: "সার্ভার ইস্যু",
          description: "হোস্টিং এবং সার্ভার কনফিগারেশন সমস্যা",
          features: [
            "500 Errors",
            "Server Configuration",
            "File Permission",
            "Database Connection",
          ],
        },
        {
          icon: <Database className="w-8 h-8" />,
          title: "ডাটাবেস সমস্যা",
          description: "ডাটাবেস সম্পর্কিত যেকোনো টেকনিক্যাল ইস্যু",
          features: [
            "MySQL Errors",
            "Query Optimization",
            "Data Recovery",
            "Backup Issues",
          ],
        },
        {
          icon: <Bug className="w-8 h-8" />,
          title: "বাগ ফিক্সিং",
          description: "ওয়েবসাইটের যেকোনো বাগ এবং ক্র্যাশ সমস্যা",
          features: [
            "Console Errors",
            "Performance Issues",
            "Compatibility Problems",
            "Debugging",
          ],
        },
      ],
    },
    {
      category: "গ্রাফিক ডিজাইন ইস্যু",
      services: [
        {
          icon: <Palette className="w-8 h-8" />,
          title: "ডিজাইন সমস্যা",
          description: "গ্রাফিক ডিজাইন সম্পর্কিত যেকোনো সমস্যা",
          features: [
            "PSD to HTML",
            "Layout Issues",
            "Color Problems",
            "Font Compatibility",
          ],
        },
        {
          icon: <Smartphone className="w-8 h-8" />,
          title: "রেসপন্সিভ ইস্যু",
          description: "মোবাইল এবং ট্যাবলেট ডিভাইসে ডিজাইন সমস্যা",
          features: [
            "Mobile Layout Fix",
            "Touch Issues",
            "Viewport Problems",
            "Cross-browser Fix",
          ],
        },
        {
          icon: <Zap className="w-8 h-8" />,
          title: "পারফরমেন্স ইস্যু",
          description: "ডিজাইন ফাইল এবং ইমেজ অপ্টিমাইজেশন",
          features: [
            "Image Optimization",
            "File Size Reduction",
            "Loading Speed",
            "Export Issues",
          ],
        },
        {
          icon: <Shield className="w-8 h-8" />,
          title: "ফরম্যাট সমস্যা",
          description: "বিভিন্ন ফরম্যাট এবং সফটওয়্যার ইস্যু",
          features: [
            "File Corruption",
            "Format Conversion",
            "Software Issues",
            "Version Problems",
          ],
        },
      ],
    },
    {
      category: "ডিজিটাল মার্কেটিং ইস্যু",
      services: [
        {
          icon: <TrendingUp className="w-8 h-8" />,
          title: "এডস সমস্যা",
          description: "ফেসবুক, গুগল এডস সম্পর্কিত টেকনিক্যাল ইস্যু",
          features: [
            "Ad Account Issues",
            "Campaign Errors",
            "Tracking Problems",
            "Approval Issues",
          ],
        },
        {
          icon: <Globe className="w-8 h-8" />,
          title: "SEO ইস্যু",
          description: "সার্চ ইঞ্জিন অপ্টিমাইজেশন টেকনিক্যাল সমস্যা",
          features: [
            "Ranking Drop",
            "Indexing Issues",
            "Technical SEO",
            "Analytics Problems",
          ],
        },
        {
          icon: <ShoppingCart className="w-8 h-8" />,
          title: "ই-কমার্স সমস্যা",
          description: "অনলাইন মার্কেটিং এবং সেলস সমস্যা",
          features: [
            "Payment Gateway",
            "Cart Issues",
            "Inventory Sync",
            "Shipping Integration",
          ],
        },
        {
          icon: <Wrench className="w-8 h-8" />,
          title: "টুলস ইস্যু",
          description: "মার্কেটিং টুলস এবং প্ল্যাটফর্ম সমস্যা",
          features: [
            "Tool Integration",
            "API Problems",
            "Data Sync",
            "Automation Issues",
          ],
        },
      ],
    },
  ];

  const technologies = [
    {
      name: "WordPress",
      problems: ["Theme Issues", "Plugin Conflicts", "Update Problems"],
    },
    {
      name: "React.js",
      problems: ["State Issues", "Component Errors", "Build Problems"],
    },
    {
      name: "PHP",
      problems: ["Syntax Errors", "Function Issues", "Version Compatibility"],
    },
    {
      name: "JavaScript",
      problems: [
        "DOM Manipulation",
        "API Integration",
        "Browser Compatibility",
      ],
    },
    {
      name: "CSS",
      problems: ["Layout Breaking", "Animation Issues", "Responsive Problems"],
    },
    {
      name: "Database",
      problems: ["MySQL Errors", "Query Optimization", "Connection Issues"],
    },
  ];

  const processSteps = [
    {
      step: "০১",
      title: "ইস্যু রিপোর্ট করুন",
      description: "আমাদেরকে আপনার সমস্যা বিস্তারিত জানান",
    },
    {
      step: "০২",
      title: "এনালাইসিস",
      description: "আমরা সমস্যার root cause identify করি",
    },
    {
      step: "০৩",
      title: "সোলিউশন",
      description: "দ্রুত এবং কার্যকরী সমাধান প্রদান করি",
    },
    {
      step: "০৪",
      title: "টেস্টিং",
      description: "সমস্যা সম্পূর্ণ সমাধান হয়েছে কিনা verify করি",
    },
  ];

  const pricingPlans = [
    {
      name: "বেসিক ফিক্স",
      price: "২,৫০০",
      duration: "একটি ইস্যু",
      popular: false,
      features: [
        "সিংগেল ইস্যু ফিক্স",
        "২৪-৪৮ ঘন্টার মধ্যে",
        "বেসিক টেস্টিং",
        "৭ দিন সাপোর্ট",
      ],
    },
    {
      name: "স্ট্যান্ডার্ড ফিক্স",
      price: "৫,০০০",
      duration: "মাল্টিপল ইস্যু",
      popular: true,
      features: [
        "৩টি ইস্যু ফিক্স",
        "২৪ ঘন্টার মধ্যে",
        "ফুল টেস্টিং",
        "১৫ দিন সাপোর্ট",
        "Performance Check",
      ],
    },
    {
      name: "প্রিমিয়াম ফিক্স",
      price: "১০,০০০",
      duration: "কম্প্লিট চেকআপ",
      popular: false,
      features: [
        "আনলিমিটেড ইস্যু",
        "১২ ঘন্টার মধ্যে",
        "কম্প্লিট অডিট",
        "৩০ দিন সাপোর্ট",
        "Security Scan",
        "Performance Optimization",
      ],
    },
  ];

  const specialOffers = [
    {
      name: "কম্বো প্যাকেজ",
      originalPrice: "২০,০০০",
      discountPrice: "১৫,০০০",
      discount: "২৫%",
      popular: true,
      icon: <Gift className="w-8 h-8" />,
      features: [
        "ওয়েবসাইট ফিক্স + ডিজাইন",
        "ডিজিটাল মার্কেটিং সাপোর্ট",
        "৩ মাস ফ্রি হোস্টিং",
        "প্রায়োরিটি সাপোর্ট",
        "আনলিমিটেড ইস্যু ফিক্স",
      ],
      description: "সম্পূর্ণ ডিজিটাল সলিউশন একসাথে",
    },
    {
      name: "মাসিক মেইনটেনেন্স",
      originalPrice: "৮,০০০",
      discountPrice: "৫,০০০",
      discount: "৩৮%",
      popular: false,
      icon: <Calendar className="w-8 h-8" />,
      features: [
        "মাসিক ১০টি ইস্যু ফিক্স",
        "রেগুলার আপডেট",
        "সিকিউরিটি মনিটরিং",
        "Performance Optimization",
        "২৪/৭ সাপোর্ট",
      ],
      description: "নিশ্চিন্ত থাকুন মাসজুড়ে",
    },
    {
      name: "ইমার্জেন্সি সাপোর্ট",
      originalPrice: "১২,০০০",
      discountPrice: "৮,০০০",
      discount: "৩৩%",
      popular: false,
      icon: <Zap className="w-8 h-8" />,
      features: [
        "৪ ঘন্টার মধ্যে সোলিউশন",
        "২৪/৭ ইমার্জেন্সি সাপোর্ট",
        "Critical ইস্যু প্রায়োরিটি",
        "ডেডিকেটেড টেকনিশিয়ান",
        "আনলিমিটেড ফিক্স",
      ],
      description: "জরুরী সমস্যার তাৎক্ষণিক সমাধান",
    },
    {
      name: "বিজনেস গ্রোথ প্যাক",
      originalPrice: "৩০,০০০",
      discountPrice: "২২,০০০",
      discount: "২৭%",
      popular: true,
      icon: <TrendingUp className="w-8 h-8" />,
      features: [
        "সম্পূর্ণ ওয়েবসাইট রিভ্যাম্প",
        "ডিজিটাল মার্কেটিং স্ট্র্যাটেজি",
        "SEO অপ্টিমাইজেশন",
        "৬ মাস সাপোর্ট",
        "ফ্রি কনসালটেশন",
      ],
      description: "আপনার ব্যবসার সম্পূর্ণ ট্রান্সফর্মেশন",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="lg:pt-32 pt-5 pb-20 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Wrench className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              টেকনিক্যাল ইস্যু ফিক্সিং সার্ভিস
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              ওয়েব ডেভেলপমেন্ট, গ্রাফিক ডিজাইন, ডিজিটাল মার্কেটিং - যেকোনো
              টেকনিক্যাল সমস্যার পেশাদার সমাধান
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                ইস্যু ফিক্সিং শুরু করুন
              </Link>
              <a
                href="#special-offers"
                className="border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                বিশেষ অফার দেখুন
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                ৯৯%
              </div>
              <div className="text-gray-600">সাকসেস রেট</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-pink-600 mb-2">
                ৮০০+
              </div>
              <div className="text-gray-600">ইস্যু ফিক্সড</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
                ২৪/৭
              </div>
              <div className="text-gray-600">সাপোর্ট</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
                ১ ঘন্টা
              </div>
              <div className="text-gray-600">প্রাথমিক রেসপন্স</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* All Services Section - ডেস্কটপে ৪টি, মোবাইলে ২টি */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              আমাদের ইস্যু ফিক্সিং সার্ভিস
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              ওয়েব ডেভেলপমেন্ট, গ্রাফিক ডিজাইন এবং ডিজিটাল মার্কেটিং - যেকোনো
              টেকনিক্যাল সমস্যার সমাধান
            </p>
          </motion.div>

          <div className="space-y-16">
            {allServices.map((serviceCategory, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
                  {serviceCategory.category}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {serviceCategory.services.map((service, serviceIndex) => (
                    <Tilt
                      key={serviceIndex}
                      options={{ max: 15, scale: 1.05, speed: 400 }}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: serviceIndex * 0.1,
                        }}
                        whileHover={{ scale: 1.03, y: -5 }}
                        className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white mb-4">
                          {service.icon}
                        </div>
                        <h4 className="text-lg font-bold text-gray-800 mb-3">
                          {service.title}
                        </h4>
                        <p className="text-gray-600 mb-4 text-sm">
                          {service.description}
                        </p>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-2 text-xs text-gray-600"
                            >
                              <CheckCircle className="w-3 h-3 text-green-500" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </Tilt>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Section - ডেস্কটপে ৪টি, মোবাইলে ২টি */}
      <section
        id="special-offers"
        className="py-16 bg-gradient-to-br from-purple-50 to-pink-50"
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-4">
              <Award className="w-12 h-12 text-purple-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              বিশেষ প্যাকেজ এবং অফার
            </h2>
            <p className="text-lg text-gray-600">
              সীমিত সময়ের জন্য এক্সক্লুসিভ ডিসকাউন্ট
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialOffers.map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl p-6 ${
                  offer.popular
                    ? "bg-gradient-to-br from-purple-500 to-pink-600 text-white transform lg:scale-105 shadow-2xl"
                    : "bg-white border-2 border-gray-200 shadow-lg"
                }`}
              >
                {offer.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-yellow-400 text-purple-900 px-4 py-1 rounded-full text-sm font-bold inline-block">
                      <Star className="w-6 h-4 inline mr-1" />
                      জনপ্রিয়
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      offer.popular ? "bg-white/20" : "bg-purple-100"
                    }`}
                  >
                    {offer.icon}
                  </div>
                  <div>
                    <h3
                      className={`text-xl font-bold ${
                        offer.popular ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {offer.name}
                    </h3>
                    <p
                      className={`text-sm ${
                        offer.popular ? "text-gray-200" : "text-gray-600"
                      }`}
                    >
                      {offer.description}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold">
                      ৳{offer.discountPrice}
                    </span>
                    <span
                      className={`text-lg line-through ${
                        offer.popular ? "text-gray-300" : "text-gray-400"
                      }`}
                    >
                      ৳{offer.originalPrice}
                    </span>
                    <span
                      className={`px-2 py-1 rounded-full text-sm font-bold ${
                        offer.popular
                          ? "bg-yellow-400 text-purple-900"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {offer.discount} ছাড়
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {offer.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle
                        className={`w-4 h-4 ${
                          offer.popular ? "text-yellow-300" : "text-green-500"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          offer.popular ? "text-gray-100" : "text-gray-700"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3">
                  <Link
                    to="/contact"
                    className={`flex-1 text-center py-3 rounded-full font-bold transition text-sm ${
                      offer.popular
                        ? "bg-white text-purple-600 hover:bg-gray-100"
                        : "bg-purple-500 text-white hover:bg-purple-600"
                    }`}
                  >
                    অর্ডার করুন
                  </Link>
                  <button
                    className={`px-4 py-3 rounded-full font-bold transition text-sm border ${
                      offer.popular
                        ? "border-white text-white hover:bg-white hover:text-purple-600"
                        : "border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white"
                    }`}
                  >
                    বিস্তারিত
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - ডেস্কটপে ৪টি, মোবাইলে ২টি */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              আমাদের কাজের প্রক্রিয়া
            </h2>
            <p className="text-lg text-gray-600">
              সহজ ৪টি ধাপে আপনার যেকোনো সমস্যা সমাধান
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl sm:text-2xl mb-4 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section - ডেস্কটপে ৩টি, মোবাইলে ২টি */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              আমরা যে টেকনোলজিতে কাজ করি
            </h2>
            <p className="text-lg text-gray-600">
              সব ধরনের প্ল্যাটফর্ম এবং টেকনোলজির ইস্যু ফিক্স করি
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  {tech.name}
                </h3>
                <ul className="space-y-2">
                  {tech.problems.map((problem, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      {problem}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              আপনার টেক সমস্যা এখনই সমাধান করুন
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              বিশেষ অফার এবং ফ্রি কনসালটেশন - সীমিত সময়ের জন্য
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base"
              >
                ফ্রি কনসালটেশন নিন
              </Link>
              <a
                href="tel:+880XXXXXXXXX"
                className="border-2 border-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold hover:bg-white hover:text-purple-600 transition-all duration-300 text-sm sm:text-base"
              >
                কল করুন এখনই
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IssueFixing;
