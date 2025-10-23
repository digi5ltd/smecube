import React from 'react';
import { Link } from "react-router";

const GraphicDesign = () => {
  const features = [
    {
      icon: "🎨",
      title: "ব্র্যান্ড আইডেন্টিটি",
      description: "লোগো, কালার স্কিম এবং ব্র্যান্ড গাইডলাইন"
    },
    {
      icon: "📱",
      title: "সোশ্যাল মিডিয়া ডিজাইন",
      description: "পোস্ট, ব্যানার এবং কভার ডিজাইন"
    },
    {
      icon: "🖼️",
      title: "প্রিন্ট ডিজাইন",
      description: "ব্রোশিওর, ফ্লায়ার এবং বিজনেস কার্ড"
    },
    {
      icon: "✨",
      title: "ইলাস্ট্রেশন",
      description: "কাস্টম ইলাস্ট্রেশন এবং আইকন ডিজাইন"
    },
    {
      icon: "📦",
      title: "প্যাকেজিং ডিজাইন",
      description: "প্রোডাক্ট প্যাকেজিং এবং লেবেল"
    },
    {
      icon: "🎯",
      title: "ইনফোগ্রাফিক্স",
      description: "ডেটা ভিজুয়ালাইজেশন এবং চার্ট ডিজাইন"
    }
  ];

  const designTools = [
    { name: "Adobe Photoshop", icon: "🖌️", color: "bg-blue-50" },
    { name: "Adobe Illustrator", icon: "✏️", color: "bg-orange-50" },
    { name: "Figma", icon: "🎨", color: "bg-purple-50" },
    { name: "Canva Pro", icon: "🎭", color: "bg-green-50" },
    { name: "Adobe InDesign", icon: "📐", color: "bg-pink-50" },
    { name: "CorelDRAW", icon: "💎", color: "bg-indigo-50" }
  ];

  const packages = [
    {
      name: "বেসিক",
      price: "৩,০০০",
      duration: "৫টি ডিজাইন",
      features: [
        "৫টি সোশ্যাল মিডিয়া পোস্ট",
        "বেসিক এডিটিং",
        "২টি রিভিশন",
        "২৪ ঘণ্টা ডেলিভারি",
        "সোর্স ফাইল"
      ]
    },
    {
      name: "স্ট্যান্ডার্ড",
      price: "৮,০০০",
      duration: "প্যাকেজ",
      popular: true,
      features: [
        "লোগো ডিজাইন (৩টি কনসেপ্ট)",
        "১০টি সোশ্যাল মিডিয়া পোস্ট",
        "বিজনেস কার্ড ডিজাইন",
        "আনলিমিটেড রিভিশন",
        "সোর্স ফাইল সহ সব ফরম্যাট",
        "১ সপ্তাহ সাপোর্ট"
      ]
    },
    {
      name: "প্রিমিয়াম",
      price: "২৫,০০০",
      duration: "সম্পূর্ণ ব্র্যান্ডিং",
      features: [
        "কমপ্লিট ব্র্যান্ড আইডেন্টিটি",
        "লোগো + ব্র্যান্ড গাইডলাইন",
        "৩০টি সোশ্যাল মিডিয়া টেমপ্লেট",
        "ব্রোশিওর ও ফ্লায়ার ডিজাইন",
        "স্টেশনারি ডিজাইন",
        "আনলিমিটেড রিভিশন",
        "১ মাস সাপোর্ট"
      ]
    }
  ];

  const portfolio = [
    { name: "ব্র্যান্ড লোগো", category: "ব্র্যান্ডিং", image: "🏢" },
    { name: "সোশ্যাল মিডিয়া", category: "ডিজিটাল", image: "📱" },
    { name: "প্রিন্ট মেটেরিয়াল", category: "প্রিন্ট", image: "📄" },
    { name: "প্যাকেজিং", category: "প্রোডাক্ট", image: "📦" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 px-2">
              গ্রাফিক ডিজাইন সার্ভিস
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-purple-100 max-w-3xl mx-auto px-4">
              আপনার ব্যবসার জন্য আকর্ষণীয় এবং প্রফেশনাল গ্রাফিক ডিজাইন। লোগো, ব্র্যান্ডিং, সোশ্যাল মিডিয়া এবং প্রিন্ট ডিজাইন সলিউশন।
            </p>
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block text-sm sm:text-base"
            >
              ফ্রি কনসালটেশন
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section - 2 cards per row on mobile */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            আমাদের ডিজাইন সার্ভিস
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col h-full bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-md hover:shadow-xl transition"
              >
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 md:mb-4">{feature.icon}</div>
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Tools - Already 2 columns on mobile */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            আমরা যেসব টুলস ব্যবহার করি
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
            {designTools.map((tool, index) => (
              <div
                key={index}
                className={`${tool.color} p-4 sm:p-5 rounded-lg text-center hover:scale-105 transition flex flex-col items-center justify-center h-full min-h-[100px] sm:min-h-[120px]`}
              >
                <div className="text-2xl sm:text-3xl mb-2">{tool.icon}</div>
                <p className="text-xs sm:text-sm font-semibold">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section - Already 2 columns on mobile */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            আমাদের সাম্প্রতিক কাজ
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {portfolio.map((item, index) => (
              <div
                key={index}
                className="flex flex-col h-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
              >
                <div className="h-40 sm:h-48 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-5xl sm:text-6xl">
                  {item.image}
                </div>
                <div className="p-3 sm:p-4 flex-1 flex flex-col justify-center text-center">
                  <h3 className="font-bold mb-1 text-sm sm:text-base">{item.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Mobile: 2 cards then 1 full width */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-3 md:mb-4">
            আপনার বাজেট অনুযায়ী প্যাকেজ
          </h2>
          <p className="text-center text-gray-600 mb-8 md:mb-12 text-sm sm:text-base px-4">
            সাশ্রয়ী মূল্যে পেশাদার ডিজাইন
          </p>
          
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
                    ? 'bg-gradient-to-br from-purple-600 to-pink-600 text-white md:transform md:scale-105 shadow-2xl'
                    : 'bg-white border-2 border-gray-200 shadow-lg'
                }`}
              >
                <div className="text-center flex-1 flex flex-col">
                  {pkg.popular && (
                    <div className="bg-yellow-400 text-purple-900 text-xs sm:text-sm font-bold px-3 sm:px-4 py-1 rounded-full inline-block mb-3 sm:mb-4 mx-auto">
                      জনপ্রিয়
                    </div>
                  )}
                  <h3 className={`text-base sm:text-lg md:text-2xl font-bold mb-2`}>
                    {pkg.name}
                  </h3>
                  <div className="mb-4 sm:mb-5 md:mb-6">
                    <span className="text-xl sm:text-2xl md:text-4xl font-bold">৳{pkg.price}</span>
                    <div className={`text-xs sm:text-sm ${pkg.popular ? 'text-purple-200' : 'text-gray-600'}`}>
                      /{pkg.duration}
                    </div>
                  </div>
                  
                  <ul className="space-y-2 md:space-y-3 mb-5 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base flex-1 text-center sm:text-left">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center sm:justify-start gap-2">
                        <span className="flex-shrink-0">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`block text-center py-2 sm:py-2.5 md:py-3 rounded-lg font-semibold transition text-xs sm:text-sm md:text-base mt-auto ${
                      pkg.popular
                        ? 'bg-white text-purple-600 hover:bg-gray-100'
                        : 'bg-purple-600 text-white hover:bg-purple-700'
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
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 px-2">
            আপনার ব্র্যান্ডকে আলাদা করুন
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-purple-100 px-4">
            ফ্রি কনসালটেশন এবং ডিজাইন মকআপ পান
          </p>
          <Link
            to="/contact"
            className="bg-white text-purple-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block text-sm sm:text-base"
          >
            এখনই যোগাযোগ করুন →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GraphicDesign;
