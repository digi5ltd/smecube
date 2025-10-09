import React from "react";
import { Link } from "react-router";

const EcommerceSolution = () => {
  const features = [
    {
      icon: "🛒",
      title: "সম্পূর্ণ অনলাইন স্টোর",
      description: "প্রোডাক্ট ম্যানেজমেন্ট থেকে চেকআউট",
    },
    {
      icon: "💳",
      title: "পেমেন্ট গেটওয়ে",
      description: "bKash, Nagad, Card ইন্টিগ্রেশন",
    },
    {
      icon: "📦",
      title: "ইনভেন্টরি ম্যানেজমেন্ট",
      description: "স্টক ট্র্যাকিং ও অর্ডার ম্যানেজমেন্ট",
    },
    {
      icon: "📱",
      title: "মোবাইল রেসপন্সিভ",
      description: "সব ডিভাইসে পারফেক্ট ডিসপ্লে",
    },
    {
      icon: "🔐",
      title: "সিকিউর চেকআউট",
      description: "SSL সার্টিফিকেট ও ডেটা এনক্রিপশন",
    },
    {
      icon: "📊",
      title: "সেলস এনালিটিক্স",
      description: "বিস্তারিত বিক্রয় রিপোর্ট",
    },
  ];

  const platforms = [
    {
      name: "WooCommerce",
      description: "WordPress ভিত্তিক সলিউশন",
      icon: "🛍️",
      features: ["ফ্রি প্ল্যাটফর্ম", "হাজারো প্লাগইন", "SEO ফ্রেন্ডলি"],
    },
    {
      name: "Shopify",
      description: "অল-ইন-ওয়ান ই-কমার্স",
      icon: "🏪",
      features: ["হোস্টেড সলিউশন", "সহজ সেটআপ", "২৪/৭ সাপোর্ট"],
    },
    {
      name: "Custom Solution",
      description: "কাস্টম ডেভেলপমেন্ট",
      icon: "⚙️",
      features: ["ফুল কন্ট্রোল", "ইউনিক ফিচার", "স্কেলেবল"],
    },
  ];

  const packages = [
    {
      name: "স্টার্টার",
      price: "২৫,০০০",
      duration: "একবার",
      features: [
        "৫০টি পর্যন্ত প্রোডাক্ট",
        "বেসিক ডিজাইন",
        "১টি পেমেন্ট গেটওয়ে",
        "মোবাইল রেসপন্সিভ",
        "৩ মাস সাপোর্ট",
      ],
    },
    {
      name: "প্রফেশনাল",
      price: "৫০,০০০",
      duration: "একবার",
      popular: true,
      features: [
        "আনলিমিটেড প্রোডাক্ট",
        "কাস্টম ডিজাইন",
        "৩টি পেমেন্ট গেটওয়ে",
        "ইনভেন্টরি ম্যানেজমেন্ট",
        "SEO অপটিমাইজেশন",
        "৬ মাস সাপোর্ট",
      ],
    },
    {
      name: "এন্টারপ্রাইজ",
      price: "১,০০,০০০+",
      duration: "কাস্টম",
      features: [
        "সব প্রফেশনাল ফিচার",
        "মাল্টি ভেন্ডর সাপোর্ট",
        "কাস্টম ফিচার",
        "API ইন্টিগ্রেশন",
        "ডেডিকেটেড সার্ভার",
        "১ বছর সাপোর্ট",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="text-6xl mb-6">🛒</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ই-কমার্স ওয়েবসাইট ডেভেলপমেন্ট
            </h1>
            <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
              আপনার পণ্য অনলাইনে বিক্রয় করুন একটি পেশাদার ই-কমার্স ওয়েবসাইটের
              মাধ্যমে। আমরা তৈরি করি সম্পূর্ণ ফিচার সম্পন্ন অনলাইন স্টোর।
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition"
              >
                প্রজেক্ট শুরু করুন →
              </Link>
              <a
                href="#demo"
                className="border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-green-600 transition"
              >
                ডেমো দেখুন
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              আমাদের ই-কমার্স ফিচার
            </h2>
            <p className="text-lg text-gray-600">সব কিছু যা আপনার দরকার</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              আমরা যে প্ল্যাটফর্মে কাজ করি
            </h2>
            <p className="text-lg text-gray-600">
              আপনার পছন্দের প্ল্যাটফর্ম বেছে নিন
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition border-2 border-gray-100"
              >
                <div className="text-5xl mb-4">{platform.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {platform.name}
                </h3>
                <p className="text-gray-600 mb-6">{platform.description}</p>
                <ul className="space-y-2">
                  {platform.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <span className="text-green-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              প্রাইসিং প্ল্যান
            </h2>
            <p className="text-lg text-gray-600">
              আপনার ব্যবসার জন্য সঠিক প্যাকেজ
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  pkg.popular
                    ? "bg-gradient-to-br from-green-500 to-teal-600 text-white transform scale-105 shadow-2xl"
                    : "bg-white border-2 border-gray-200 shadow-lg"
                }`}
              >
                {pkg.popular && (
                  <div className="bg-yellow-400 text-green-900 px-4 py-1 rounded-full text-sm font-bold inline-block mb-4">
                    সবচেয়ে জনপ্রিয়
                  </div>
                )}
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    pkg.popular ? "text-white" : "text-gray-800"
                  }`}
                >
                  {pkg.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">৳{pkg.price}</span>
                  <span
                    className={pkg.popular ? "text-gray-200" : "text-gray-600"}
                  >
                    /{pkg.duration}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span
                        className={
                          pkg.popular ? "text-yellow-300" : "text-green-500"
                        }
                      >
                        ✓
                      </span>
                      <span
                        className={
                          pkg.popular ? "text-gray-100" : "text-gray-700"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center py-3 rounded-full font-bold transition ${
                    pkg.popular
                      ? "bg-white text-green-600 hover:bg-gray-100"
                      : "bg-green-500 text-white hover:bg-green-600"
                  }`}
                >
                  অর্ডার করুন
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            আজই শুরু করুন আপনার অনলাইন ব্যবসা
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            ফ্রি কনসালটেশন এবং ওয়েবসাইট প্ল্যানিং সেশন
          </p>
          <Link
            to="/contact"
            className="bg-white text-green-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 inline-block transform hover:scale-105 transition"
          >
            ফ্রি কনসালটেশন নিন →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EcommerceSolution;
