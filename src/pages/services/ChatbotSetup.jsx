import React, { useState } from 'react';
import { Link } from "react-router";

const ChatbotSetup = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('messenger');

  const features = [
    {
      icon: "🤖",
      title: "স্বয়ংক্রিয় উত্তর",
      description: "২৪/৭ তাৎক্ষণিক কাস্টমার রেসপন্স"
    },
    {
      icon: "💬",
      title: "স্মার্ট কথোপকথন",
      description: "AI-চালিত প্রাকৃতিক কথোপকথন"
    },
    {
      icon: "🎯",
      title: "লিড জেনারেশন",
      description: "স্বয়ংক্রিয় কাস্টমার তথ্য সংগ্রহ"
    },
    {
      icon: "📊",
      title: "এনালিটিক্স ড্যাশবোর্ড",
      description: "রিয়েল-টাইম চ্যাট রিপোর্ট"
    },
    {
      icon: "🔄",
      title: "মাল্টি-চ্যানেল সাপোর্ট",
      description: "সব প্ল্যাটফর্মে একসাথে কাজ করে"
    },
    {
      icon: "🚀",
      title: "দ্রুত ইন্টিগ্রেশন",
      description: "১ ঘণ্টায় সম্পূর্ণ সেটআপ"
    }
  ];

  const platforms = [
    {
      id: "messenger",
      name: "Facebook Messenger",
      icon: "📘",
      color: "bg-blue-500",
      features: ["অটো রিপ্লাই", "ওয়েলকাম মেসেজ", "কুইক রিপ্লাই বাটন", "মেনু সেটআপ"]
    },
    {
      id: "whatsapp",
      name: "WhatsApp Business",
      icon: "💚",
      color: "bg-green-500",
      features: ["বিজনেস API", "টেমপ্লেট মেসেজ", "মিডিয়া শেয়ারিং", "গ্রুপ ম্যানেজমেন্ট"]
    },
    {
      id: "website",
      name: "Website Chat Widget",
      icon: "🌐",
      color: "bg-purple-500",
      features: ["কাস্টম ডিজাইন", "পপআপ সেটিংস", "ভিজিটর ট্র্যাকিং", "ফর্ম ইন্টিগ্রেশন"]
    },
    {
      id: "instagram",
      name: "Instagram DM",
      icon: "📸",
      color: "bg-pink-500",
      features: ["DM অটোমেশন", "স্টোরি রিপ্লাই", "কমেন্ট রেসপন্স", "লিড ক্যাপচার"]
    }
  ];

  const chatbotTypes = [
    {
      type: "FAQ Bot",
      description: "সাধারণ প্রশ্নের উত্তর",
      useCase: "কাস্টমার সাপোর্ট",
      icon: "❓"
    },
    {
      type: "Lead Generation Bot",
      description: "কাস্টমার তথ্য সংগ্রহ",
      useCase: "সেলস এবং মার্কেটিং",
      icon: "🎯"
    },
    {
      type: "Booking Bot",
      description: "অ্যাপয়েন্টমেন্ট বুকিং",
      useCase: "সার্ভিস বিজনেস",
      icon: "📅"
    },
    {
      type: "E-commerce Bot",
      description: "প্রোডাক্ট সাজেশন ও অর্ডার",
      useCase: "অনলাইন শপ",
      icon: "🛒"
    }
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
        "৭ দিন সাপোর্ট"
      ]
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
        "১ মাস সাপোর্ট"
      ]
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
        "৩ মাস সাপোর্ট"
      ]
    }
  ];

  const setupSteps = [
    {
      step: "১",
      title: "প্ল্যাটফর্ম নির্বাচন",
      description: "কোন প্ল্যাটফর্মে চ্যাটবট চালাতে চান তা বেছে নিন"
    },
    {
      step: "২",
      title: "চ্যাটবট টাইপ সিলেক্ট",
      description: "আপনার ব্যবসার উদ্দেশ্য অনুযায়ী বট টাইপ নির্ধারণ"
    },
    {
      step: "৩",
      title: "কনফিগারেশন",
      description: "মেসেজ, FAQ এবং রেসপন্স সেটআপ করুন"
    },
    {
      step: "৪",
      title: "টেস্টিং ও লঞ্চ",
      description: "চ্যাটবট পরীক্ষা করে লাইভ করুন"
    }
  ];

  const chatbotFeatures = [
    {
      category: "মেসেজ অটোমেশন",
      items: ["ওয়েলকাম মেসেজ", "অটো রিপ্লাই", "অ্যাওয়ে মেসেজ", "ফলো-আপ মেসেজ"]
    },
    {
      category: "ইন্টারঅ্যাক্টিভ উপাদান",
      items: ["কুইক রিপ্লাই বাটন", "মেনু বাটন", "কারাউজেল কার্ড", "ফর্ম ইনপুট"]
    },
    {
      category: "এডভান্স ফিচার",
      items: ["AI রেসপন্স", "ল্যাঙ্গুয়েজ ডিটেকশন", "সেন্টিমেন্ট এনালাইসিস", "লাইভ এজেন্ট হ্যান্ডঅফ"]
    }
  ];

  const designShowcase = [
    {
      title: "মোবাইল-ফ্রেন্ডলি ইন্টারফেস",
      description: "সব ডিভাইসে নিখুঁত প্রদর্শন"
    },
    {
      title: "ব্র্যান্ড কাস্টমাইজেশন",
      description: "আপনার ব্র্যান্ড কালার ও লোগো যুক্ত করুন"
    },
    {
      title: "ইমোজি ও GIF সাপোর্ট",
      description: "এনগেজিং ভিজুয়াল কন্টেন্ট"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 px-2">
              চ্যাটবট সেটআপ সার্ভিস
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-blue-100 max-w-3xl mx-auto px-4">
              আপনার ব্যবসায় ২৪/৭ কাস্টমার সাপোর্ট দিন AI-চালিত স্বয়ংক্রিয় চ্যাটবটের মাধ্যমে। 
              সব প্রধান প্ল্যাটফর্মে সম্পূর্ণ সেটআপ ও কনফিগারেশন।
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition text-sm sm:text-base"
              >
                ফ্রি কনসালটেশন
              </Link>
              <button className="border-2 border-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition text-sm sm:text-base">
                ডেমো দেখুন
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - 2 cards per row on mobile */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800">
            চ্যাটবট সেটআপের সুবিধা
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col h-full bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3 md:mb-4">{feature.icon}</div>
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2 md:mb-3 text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Selection - 2 cards per row on mobile */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-center mb-3 md:mb-4 text-gray-800">
            সব প্রধান প্ল্যাটফর্ম সাপোর্ট
          </h2>
          <p className="text-center text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-4">
            যেকোনো প্ল্যাটফর্মে আপনার চ্যাটবট সেটআপ করুন - একক বা মাল্টি-চ্যানেল
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {platforms.map((platform) => (
              <div
                key={platform.id}
                onClick={() => setSelectedPlatform(platform.id)}
                className={`flex flex-col h-full bg-white p-4 sm:p-5 md:p-6 rounded-xl cursor-pointer border-4 transition transform hover:-translate-y-1 ${
                  selectedPlatform === platform.id
                    ? 'border-blue-500 shadow-xl'
                    : 'border-transparent shadow-md'
                }`}
              >
                <div className="text-center flex-1 flex flex-col">
                  <div className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3 md:mb-4">{platform.icon}</div>
                  <h3 className="font-bold text-sm sm:text-base md:text-lg mb-2 sm:mb-3 md:mb-4 text-gray-800">
                    {platform.name}
                  </h3>
                  <ul className="text-xs sm:text-sm text-gray-600 space-y-1 sm:space-y-2 text-center sm:text-left flex-1">
                    {platform.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center justify-center sm:justify-start gap-2">
                        <span className="text-green-500 flex-shrink-0">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chatbot Types - 2 cards per row on mobile */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800">
            আপনার প্রয়োজন অনুযায়ী চ্যাটবট টাইপ
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {chatbotTypes.map((bot, index) => (
              <div
                key={index}
                className="flex flex-col h-full bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-5 md:p-6 rounded-xl border-2 border-blue-100 hover:border-blue-300 transition"
              >
                <div className="text-center flex-1 flex flex-col">
                  <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 md:mb-4">{bot.icon}</div>
                  <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2 text-gray-800">
                    {bot.type}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3 flex-1">{bot.description}</p>
                  <div className="text-xs bg-blue-100 text-blue-700 px-2 sm:px-3 py-1 rounded-full inline-block mx-auto">
                    {bot.useCase}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Process - 2 cards per row on mobile */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800">
            সেটআপ প্রক্রিয়া
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {setupSteps.map((item, index) => (
              <div key={index} className="relative h-full">
                <div className="flex flex-col h-full bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-lg">
                  <div className="text-center flex-1">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold mx-auto mb-2 sm:mb-3 md:mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2 md:mb-3 text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
                {index < setupSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <div className="text-3xl text-blue-400">→</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chatbot Features Breakdown - 2 cards per row on mobile */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800">
            চ্যাটবট ফিচার ব্রেকডাউন
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {chatbotFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col h-full bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-lg border-t-4 border-blue-500"
              >
                <h3 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl mb-2 sm:mb-3 md:mb-4 text-gray-800 text-center sm:text-left">
                  {feature.category}
                </h3>
                <ul className="space-y-1 sm:space-y-2 md:space-y-3 flex-1">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-center justify-center sm:justify-start gap-2 text-gray-700 text-xs sm:text-sm md:text-base">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Showcase - 2 cards per row on mobile */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800">
            UI ডিজাইন ফিচার
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {designShowcase.map((design, index) => (
              <div
                key={index}
                className="flex flex-col h-full bg-gradient-to-br from-white to-blue-50 p-4 sm:p-6 md:p-8 rounded-xl shadow-md"
              >
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 md:mb-4">🎨</div>
                  <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2 text-gray-800">
                    {design.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">{design.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages - Mobile: 2 cards then 1 full width */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-center mb-3 md:mb-4 text-gray-800">
            সেটআপ প্যাকেজ
          </h2>
          <p className="text-center text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-4">
            আপনার বাজেট এবং প্রয়োজন অনুযায়ী প্যাকেজ বেছে নিন
          </p>
          
          {/* Grid: 2 columns on mobile, 3 on medium+ */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`flex flex-col h-full rounded-xl md:rounded-2xl overflow-hidden ${
                  index === 2 ? 'col-span-2 md:col-span-1' : ''
                } ${
                  pkg.popular ? 'ring-2 sm:ring-4 ring-blue-500 md:transform md:scale-105 shadow-2xl' : 'shadow-xl'
                }`}
              >
                {pkg.popular && (
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-2 font-semibold text-xs sm:text-sm">
                    জনপ্রিয়
                  </div>
                )}
                <div className="flex flex-col flex-1 bg-white p-4 sm:p-6 md:p-8">
                  <div className="text-center">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-gray-800">
                      {pkg.name}
                    </h3>
                    <div className="mb-4 sm:mb-6">
                      <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">
                        ৳{pkg.price}
                      </span>
                      <div className="text-gray-500 text-xs sm:text-sm mt-1">
                        {pkg.duration}
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 sm:space-y-3 mb-5 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base flex-1 text-center sm:text-left">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center sm:justify-start gap-2">
                        <span className="text-green-500 flex-shrink-0">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`block text-center py-2 sm:py-2.5 md:py-3 rounded-lg font-semibold transition text-xs sm:text-sm md:text-base mt-auto ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    এখনই অর্ডার করুন
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 px-2">
            আজই শুরু করুন আপনার চ্যাটবট সেটআপ
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-blue-100 max-w-2xl mx-auto px-4">
            ফ্রি কনসালটেশন বুক করুন এবং জেনে নিন কীভাবে চ্যাটবট আপনার ব্যবসা বাড়াতে পারে
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-50 transition text-sm sm:text-base md:text-lg"
            >
              ফ্রি কনসালটেশন বুক করুন →
            </Link>
            <button className="border-2 border-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition text-sm sm:text-base md:text-lg">
              হোয়াটসঅ্যাপে যোগাযোগ করুন
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChatbotSetup;
