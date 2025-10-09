import React from 'react';
import { Link } from "react-router";

const BrandPageSetup = () => {
  const features = [
    {
      icon: "🎨",
      title: "প্রফেশনাল ডিজাইন",
      description: "আকর্ষণীয় প্রোফাইল ও কভার ফটো ডিজাইন"
    },
    {
      icon: "📝",
      title: "কন্টেন্ট রাইটিং",
      description: "এনগেজিং About সেকশন এবং বিবরণ লেখা"
    },
    {
      icon: "⚙️",
      title: "পেজ অপটিমাইজেশন",
      description: "SEO এবং রিচ বৃদ্ধির জন্য অপটিমাইজেশন"
    },
    {
      icon: "🔧",
      title: "সেটিংস কনফিগার",
      description: "সম্পূর্ণ সেটিংস এবং প্রাইভেসি সেটআপ"
    },
    {
      icon: "🤖",
      title: "চ্যাটবট সেটআপ",
      description: "অটো রিপ্লাই এবং মেসেঞ্জার অটোমেশন"
    },
    {
      icon: "📊",
      title: "এনালিটিক্স সেটআপ",
      description: "পেজ ইনসাইট এবং ট্র্যাকিং কনফিগারেশন"
    }
  ];

  const platforms = [
    {
      name: "Facebook",
      icon: "📘",
      services: ["বিজনেস পেজ সেটআপ", "ভেরিফিকেশন", "শপ সেটআপ", "CTA বাটন"]
    },
    {
      name: "Instagram",
      icon: "📸",
      services: ["বিজনেস প্রোফাইল", "হাইলাইটস সেটআপ", "লিংক ইন বায়ো", "শপিং ট্যাগ"]
    },
    {
      name: "LinkedIn",
      icon: "💼",
      services: ["কোম্পানি পেজ", "প্রোডাক্ট শোকেস", "জব পোস্টিং", "এনালিটিক্স"]
    }
  ];

  const packages = [
    {
      name: "বেসিক সেটআপ",
      price: "৩,০০০",
      duration: "১ পেজ",
      features: [
        "১টি প্ল্যাটফর্ম সেটআপ",
        "প্রোফাইল ও কভার ইমেজ",
        "বেসিক About সেকশন",
        "কন্টাক্ট ইনফরমেশন",
        "প্রাইভেসি সেটিংস"
      ]
    },
    {
      name: "প্রফেশনাল সেটআপ",
      price: "৮,০০০",
      duration: "১ পেজ",
      popular: true,
      features: [
        "১টি প্ল্যাটফর্ম সেটআপ",
        "কাস্টম গ্রাফিক ডিজাইন",
        "এনগেজিং কন্টেন্ট রাইটিং",
        "চ্যাটবট সেটআপ",
        "CTA বাটন কনফিগার",
        "এনালিটিক্স সেটআপ",
        "১ সপ্তাহ সাপোর্ট"
      ]
    },
    {
      name: "মাল্টি-প্ল্যাটফর্ম",
      price: "২০,০০০",
      duration: "৩ পেজ",
      features: [
        "৩টি প্ল্যাটফর্ম সেটআপ",
        "প্রিমিয়াম ডিজাইন",
        "ব্র্যান্ডিং কনসিসটেন্সি",
        "ক্রস-পোস্টিং সেটআপ",
        "এডভান্স চ্যাটবট",
        "কন্টেন্ট ক্যালেন্ডার",
        "১ মাস সাপোর্ট"
      ]
    }
  ];

  const setupSteps = [
    {
      step: "১",
      title: "প্রয়োজনীয়তা সংগ্রহ",
      description: "আপনার ব্যবসা সম্পর্কে তথ্য এবং লোগো সংগ্রহ"
    },
    {
      step: "২",
      title: "পেজ তৈরি",
      description: "সম্পূর্ণ পেজ সেটআপ এবং কনফিগারেশন"
    },
    {
      step: "৩",
      title: "ডিজাইন ও কন্টেন্ট",
      description: "গ্রাফিক্স ডিজাইন এবং কন্টেন্ট যুক্ত করা"
    },
    {
      step: "৪",
      title: "অপটিমাইজেশন ও লঞ্চ",
      description: "ফাইনাল চেক এবং পেজ লাইভ করা"
    }
  ];

  const checklist = [
    "পেজ নাম এবং ইউজারনেম ভেরিফিকেশন",
    "প্রোফাইল ও কভার ফটো (১০৮০x১০৮০ এবং ১৬৪০x৮৫৬)",
    "About সেকশন (১৫৫ ক্যারেক্টার সর্ট এবং লং ডেসক্রিপশন)",
    "কন্টাক্ট ইনফরমেশন (ফোন, ইমেইল, ওয়েবসাইট)",
    "ব্যবসার ঠিকানা এবং ম্যাপ লোকেশন",
    "ব্যবসার ধরন এবং ক্যাটাগরি",
    "পেজ CTA বাটন (Learn More, Shop Now, Contact Us)",
    "মেসেঞ্জার অটো রিপ্লাই",
    "পেজ রোল এবং পারমিশন",
    "ইনসাইট এবং এনালিটিক্স এনেবল"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <div className="text-4xl sm:text-5xl md:text-6xl mb-4 md:mb-6">📝</div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 px-2">
              প্রফেশনাল ব্র্যান্ড পেজ সেটআপ সার্ভিস
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-gray-100 max-w-3xl mx-auto px-4">
              Facebook, Instagram এবং LinkedIn-এ আপনার ব্যবসার জন্য সম্পূর্ণ অপটিমাইজড 
              এবং প্রফেশনাল ব্র্যান্ড পেজ তৈরি করি।
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-6 sm:px-8 py-3 md:py-4 rounded-full font-bold hover:bg-gray-100 transition shadow-lg text-sm sm:text-base"
              >
                পেজ সেটআপ শুরু করুন →
              </Link>
              <button className="border-2 border-white px-6 sm:px-8 py-3 md:py-4 rounded-full font-bold hover:bg-white hover:text-blue-600 transition text-sm sm:text-base">
                পোর্টফোলিও দেখুন
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Equal Height Cards */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
              আমাদের সেটআপ সার্ভিস
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">সম্পূর্ণ পেজ সেটআপ সলিউশন</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col h-full bg-gradient-to-br from-cyan-50 to-blue-50 p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{feature.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section - Centered on Mobile */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
              আমরা যে প্ল্যাটফর্মে কাজ করি
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">সব মেজর সোশ্যাল মিডিয়া প্ল্যাটফর্ম</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="flex flex-col h-full bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition border-2 border-gray-100"
              >
                <div className="text-center flex-1 flex flex-col">
                  <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{platform.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">{platform.name}</h3>
                  
                  {/* Centered on mobile, left-aligned on sm+ */}
                  <ul className="space-y-2 sm:space-y-3 text-center sm:text-left">
                    {platform.services.map((service, idx) => (
                      <li key={idx} className="flex items-center justify-center sm:justify-start gap-3">
                        <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                        <span className="text-sm sm:text-base text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Process - Equal Height Cards */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
              সেটআপ প্রক্রিয়া
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">৪টি সহজ ধাপে সম্পূর্ণ সেটআপ</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {setupSteps.map((item, index) => (
              <div key={index} className="relative h-full">
                <div className="flex flex-col h-full bg-gradient-to-br from-cyan-50 to-blue-50 p-5 sm:p-6 rounded-xl shadow-lg border-t-4 border-blue-500">
                  <div className="text-center flex-1">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mb-3 sm:mb-4 mx-auto">
                      {item.step}
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
                  </div>
                </div>
                {index < setupSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <span className="text-blue-500 text-3xl">→</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
              সেটআপ চেকলিস্ট
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">আমরা যা যা করি</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 border-2 border-blue-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {checklist.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-2 sm:p-3 rounded-lg hover:bg-blue-50 transition"
                >
                  <span className="text-green-500 text-lg sm:text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-xs sm:text-sm md:text-base text-left">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Equal Height Cards with Mobile Layout */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
              প্রাইসিং প্ল্যান
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">আপনার প্রয়োজন অনুযায়ী প্যাকেজ</p>
          </div>
          
          {/* Grid: 2 columns on mobile, 3 on medium+ */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`flex flex-col h-full rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-8 ${
                  // Third card spans 2 columns on mobile (full width), 1 on medium+
                  index === 2 ? 'col-span-2 md:col-span-1' : ''
                } ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white md:transform md:scale-105 shadow-2xl'
                    : 'bg-white border-2 border-gray-200 shadow-lg'
                }`}
              >
                <div className="text-center flex-1 flex flex-col">
                  {pkg.popular && (
                    <div className="bg-yellow-400 text-blue-900 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold inline-block mb-3 sm:mb-4 mx-auto">
                      প্রস্তাবিত
                    </div>
                  )}
                  <h3 className={`text-base sm:text-lg md:text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-gray-800'}`}>
                    {pkg.name}
                  </h3>
                  <div className="mb-4 sm:mb-5 md:mb-6">
                    <span className="text-xl sm:text-2xl md:text-4xl font-bold">৳{pkg.price}</span>
                    <span className={`text-xs sm:text-sm ${pkg.popular ? 'text-gray-200' : 'text-gray-600'}`}>/{pkg.duration}</span>
                  </div>
                  <ul className="space-y-2 md:space-y-3 mb-5 sm:mb-6 md:mb-8 flex-1 text-center sm:text-left">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center sm:justify-start gap-2">
                        <span className={`text-sm sm:text-base flex-shrink-0 ${pkg.popular ? 'text-yellow-300' : 'text-green-500'}`}>✓</span>
                        <span className={`text-xs sm:text-sm md:text-base ${pkg.popular ? 'text-gray-100' : 'text-gray-700'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`block text-center py-2 sm:py-2.5 md:py-3 rounded-full font-bold transition text-xs sm:text-sm md:text-base mt-auto ${
                      pkg.popular
                        ? 'bg-white text-blue-600 hover:bg-gray-100'
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                    }`}
                  >
                    অর্ডার করুন
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 px-2">
            আজই তৈরি করুন আপনার প্রফেশনাল ব্র্যান্ড পেজ
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-7 md:mb-8 text-gray-100 px-4">
            ২৪ ঘণ্টায় সম্পূর্ণ সেটআপ এবং ডেলিভারি
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-gray-100 inline-block transform hover:scale-105 transition shadow-lg"
          >
            এখনই অর্ডার করুন →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BrandPageSetup;
