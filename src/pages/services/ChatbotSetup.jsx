import React, { useState } from "react";
import { Link } from "react-router";

const ChatbotSetup = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("messenger");

  const features = [
    {
      icon: "🤖",
      title: "স্বয়ংক্রিয় উত্তর",
      description: "২৪/৭ তাৎক্ষণিক কাস্টমার রেসপন্স",
    },
    {
      icon: "💬",
      title: "স্মার্ট কথোপকথন",
      description: "AI-চালিত প্রাকৃতিক কথোপকথন",
    },
    {
      icon: "🎯",
      title: "লিড জেনারেশন",
      description: "স্বয়ংক্রিয় কাস্টমার তথ্য সংগ্রহ",
    },
    {
      icon: "📊",
      title: "এনালিটিক্স ড্যাশবোর্ড",
      description: "রিয়েল-টাইম চ্যাট রিপোর্ট",
    },
    {
      icon: "🔄",
      title: "মাল্টি-চ্যানেল সাপোর্ট",
      description: "সব প্ল্যাটফর্মে একসাথে কাজ করে",
    },
    {
      icon: "🚀",
      title: "দ্রুত ইন্টিগ্রেশন",
      description: "১ ঘণ্টায় সম্পূর্ণ সেটআপ",
    },
  ];

  const platforms = [
    {
      id: "messenger",
      name: "Facebook Messenger",
      icon: "📘",
      color: "bg-blue-500",
      features: [
        "অটো রিপ্লাই",
        "ওয়েলকাম মেসেজ",
        "কুইক রিপ্লাই বাটন",
        "মেনু সেটআপ",
      ],
    },
    {
      id: "whatsapp",
      name: "WhatsApp Business",
      icon: "💚",
      color: "bg-green-500",
      features: [
        "বিজনেস API",
        "টেমপ্লেট মেসেজ",
        "মিডিয়া শেয়ারিং",
        "গ্রুপ ম্যানেজমেন্ট",
      ],
    },
    {
      id: "website",
      name: "Website Chat Widget",
      icon: "🌐",
      color: "bg-purple-500",
      features: [
        "কাস্টম ডিজাইন",
        "পপআপ সেটিংস",
        "ভিজিটর ট্র্যাকিং",
        "ফর্ম ইন্টিগ্রেশন",
      ],
    },
    {
      id: "instagram",
      name: "Instagram DM",
      icon: "📸",
      color: "bg-pink-500",
      features: [
        "DM অটোমেশন",
        "স্টোরি রিপ্লাই",
        "কমেন্ট রেসপন্স",
        "লিড ক্যাপচার",
      ],
    },
  ];

  const chatbotTypes = [
    {
      type: "FAQ Bot",
      description: "সাধারণ প্রশ্নের উত্তর",
      useCase: "কাস্টমার সাপোর্ট",
      icon: "❓",
    },
    {
      type: "Lead Generation Bot",
      description: "কাস্টমার তথ্য সংগ্রহ",
      useCase: "সেলস এবং মার্কেটিং",
      icon: "🎯",
    },
    {
      type: "Booking Bot",
      description: "অ্যাপয়েন্টমেন্ট বুকিং",
      useCase: "সার্ভিস বিজনেস",
      icon: "📅",
    },
    {
      type: "E-commerce Bot",
      description: "প্রোডাক্ট সাজেশন ও অর্ডার",
      useCase: "অনলাইন শপ",
      icon: "🛒",
    },
  ];

  const packages = [
    {
      name: "স্টার্টার",
      price: "৫,০০০",
      duration: "ওয়ান-টাইম সেটআপ",
      features: [
        "১টি প্ল্যাটফর্ম সেটআপ",
        "বেসিক অটো রিপ্লাই",
        "৫টি পর্যন্ত FAQ",
        "ওয়েলকাম মেসেজ",
        "৭ দিন সাপোর্ট",
      ],
    },
    {
      name: "প্রফেশনাল",
      price: "১৫,০০০",
      duration: "ওয়ান-টাইম সেটআপ",
      popular: true,
      features: [
        "২টি প্ল্যাটফর্ম সেটআপ",
        "এডভান্স AI চ্যাটবট",
        "২০টি পর্যন্ত FAQ",
        "লিড জেনারেশন ফর্ম",
        "কাস্টম ডিজাইন",
        "এনালিটিক্স ড্যাশবোর্ড",
        "১ মাস সাপোর্ট",
      ],
    },
    {
      name: "এন্টারপ্রাইজ",
      price: "৩৫,০০০",
      duration: "ওয়ান-টাইম সেটআপ",
      features: [
        "সব প্ল্যাটফর্ম সেটআপ",
        "AI + NLP ইন্টিগ্রেশন",
        "আনলিমিটেড FAQ",
        "মাল্টি-ল্যাঙ্গুয়েজ সাপোর্ট",
        "CRM ইন্টিগ্রেশন",
        "ডেডিকেটেড ম্যানেজার",
        "৩ মাস সাপোর্ট",
      ],
    },
  ];

  const setupSteps = [
    {
      step: "১",
      title: "প্ল্যাটফর্ম নির্বাচন",
      description: "কোন প্ল্যাটফর্মে চ্যাটবট চালাতে চান তা বেছে নিন",
    },
    {
      step: "২",
      title: "চ্যাটবট টাইপ সিলেক্ট",
      description: "আপনার ব্যবসার উদ্দেশ্য অনুযায়ী বট টাইপ নির্ধারণ",
    },
    {
      step: "৩",
      title: "কনফিগারেশন",
      description: "মেসেজ, FAQ এবং রেসপন্স সেটআপ করুন",
    },
    {
      step: "৪",
      title: "টেস্টিং ও লঞ্চ",
      description: "চ্যাটবট পরীক্ষা করে লাইভ করুন",
    },
  ];

  const chatbotFeatures = [
    {
      category: "মেসেজ অটোমেশন",
      items: [
        "ওয়েলকাম মেসেজ",
        "অটো রিপ্লাই",
        "অ্যাওয়ে মেসেজ",
        "ফলো-আপ মেসেজ",
      ],
    },
    {
      category: "ইন্টারঅ্যাক্টিভ উপাদান",
      items: ["কুইক রিপ্লাই বাটন", "মেনু বাটন", "কারাউজেল কার্ড", "ফর্ম ইনপুট"],
    },
    {
      category: "এডভান্স ফিচার",
      items: [
        "AI রেসপন্স",
        "ল্যাঙ্গুয়েজ ডিটেকশন",
        "সেন্টিমেন্ট এনালাইসিস",
        "লাইভ এজেন্ট হ্যান্ডঅফ",
      ],
    },
  ];

  const designShowcase = [
    {
      title: "মোবাইল-ফ্রেন্ডলি ইন্টারফেস",
      description: "সব ডিভাইসে নিখুঁত প্রদর্শন",
    },
    {
      title: "ব্র্যান্ড কাস্টমাইজেশন",
      description: "আপনার ব্র্যান্ড কালার ও লোগো যুক্ত করুন",
    },
    {
      title: "ইমোজি ও GIF সাপোর্ট",
      description: "এনগেজিং ভিজুয়াল কন্টেন্ট",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">চ্যাটবট সেটআপ সার্ভিস</h1>
            <p className="text-xl mb-8 text-blue-100">
              আপনার ব্যবসায় ২৪/৭ কাস্টমার সাপোর্ট দিন AI-চালিত স্বয়ংক্রিয়
              চ্যাটবটের মাধ্যমে। সব প্রধান প্ল্যাটফর্মে সম্পূর্ণ সেটআপ ও
              কনফিগারেশন।
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                ফ্রি কনসালটেশন
              </Link>
              <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                ডেমো দেখুন
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          চ্যাটবট সেটআপের সুবিধা
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Platform Selection */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            সব প্রধান প্ল্যাটফর্ম সাপোর্ট
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            যেকোনো প্ল্যাটফর্মে আপনার চ্যাটবট সেটআপ করুন - একক বা মাল্টি-চ্যানেল
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {platforms.map((platform) => (
              <div
                key={platform.id}
                onClick={() => setSelectedPlatform(platform.id)}
                className={`bg-white p-6 rounded-xl cursor-pointer border-4 transition transform hover:-translate-y-1 ${
                  selectedPlatform === platform.id
                    ? "border-blue-500 shadow-xl"
                    : "border-transparent shadow-md"
                }`}
              >
                <div className="text-center">
                  <div className="text-5xl mb-4">{platform.icon}</div>
                  <h3 className="font-bold text-lg mb-4 text-gray-800">
                    {platform.name}
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {platform.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chatbot Types */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          আপনার প্রয়োজন অনুযায়ী চ্যাটবট টাইপ
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {chatbotTypes.map((bot, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border-2 border-blue-100 hover:border-blue-300 transition"
            >
              <div className="text-4xl mb-4">{bot.icon}</div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">
                {bot.type}
              </h3>
              <p className="text-gray-600 text-sm mb-2">{bot.description}</p>
              <div className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full inline-block">
                {bot.useCase}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Setup Process */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            সেটআপ প্রক্রিয়া
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {setupSteps.map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-lg mb-3 text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  {index < setupSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <div className="text-3xl text-blue-400">→</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Chatbot Features Breakdown */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          চ্যাটবট ফিচার ব্রেকডাউন
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {chatbotFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500"
            >
              <h3 className="font-bold text-xl mb-4 text-gray-800">
                {feature.category}
              </h3>
              <ul className="space-y-3">
                {feature.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Design Showcase */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            UI ডিজাইন ফিচার
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {designShowcase.map((design, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl shadow-md text-center"
              >
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">
                  {design.title}
                </h3>
                <p className="text-gray-600 text-sm">{design.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Packages */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          সেটআপ প্যাকেজ
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          আপনার বাজেট এবং প্রয়োজন অনুযায়ী প্যাকেজ বেছে নিন
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-xl shadow-xl overflow-hidden ${
                pkg.popular ? "ring-4 ring-blue-500 transform scale-105" : ""
              }`}
            >
              {pkg.popular && (
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-2 font-semibold">
                  জনপ্রিয়
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">
                  {pkg.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-blue-600">
                    ৳{pkg.price}
                  </span>
                  <span className="text-gray-500 text-sm ml-2">
                    {pkg.duration}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center py-3 rounded-lg font-semibold transition ${
                    pkg.popular
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  এখনই অর্ডার করুন
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            আজই শুরু করুন আপনার চ্যাটবট সেটআপ
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            ফ্রি কনসালটেশন বুক করুন এবং জেনে নিন কীভাবে চ্যাটবট আপনার ব্যবসা
            বাড়াতে পারে
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition text-lg"
            >
              ফ্রি কনসালটেশন বুক করুন →
            </Link>
            <button className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition text-lg">
              হোয়াটসঅ্যাপে যোগাযোগ করুন
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotSetup;
