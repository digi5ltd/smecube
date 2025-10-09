import React from "react";
import { Link } from "react-router";

const GraphicDesign = () => {
  const features = [
    {
      icon: "🎨",
      title: "ব্র্যান্ড আইডেন্টিটি",
      description: "লোগো, কালার স্কিম এবং ব্র্যান্ড গাইডলাইন",
    },
    {
      icon: "📱",
      title: "সোশ্যাল মিডিয়া ডিজাইন",
      description: "পোস্ট, ব্যানার এবং কভার ডিজাইন",
    },
    {
      icon: "🖼️",
      title: "প্রিন্ট ডিজাইন",
      description: "ব্রোশিওর, ফ্লায়ার এবং বিজনেস কার্ড",
    },
    {
      icon: "✨",
      title: "ইলাস্ট্রেশন",
      description: "কাস্টম ইলাস্ট্রেশন এবং আইকন ডিজাইন",
    },
    {
      icon: "📦",
      title: "প্যাকেজিং ডিজাইন",
      description: "প্রোডাক্ট প্যাকেজিং এবং লেবেল",
    },
    {
      icon: "🎯",
      title: "ইনফোগ্রাফিক্স",
      description: "ডেটা ভিজুয়ালাইজেশন এবং চার্ট ডিজাইন",
    },
  ];

  const designTools = [
    { name: "Adobe Photoshop", icon: "🖌️", color: "bg-blue-50" },
    { name: "Adobe Illustrator", icon: "✏️", color: "bg-orange-50" },
    { name: "Figma", icon: "🎨", color: "bg-purple-50" },
    { name: "Canva Pro", icon: "🎭", color: "bg-green-50" },
    { name: "Adobe InDesign", icon: "📐", color: "bg-pink-50" },
    { name: "CorelDRAW", icon: "💎", color: "bg-indigo-50" },
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
        "সোর্স ফাইল",
      ],
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
        "১ সপ্তাহ সাপোর্ট",
      ],
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
        "১ মাস সাপোর্ট",
      ],
    },
  ];

  const portfolio = [
    { name: "ব্র্যান্ড লোগো", category: "ব্র্যান্ডিং", image: "🏢" },
    { name: "সোশ্যাল মিডিয়া", category: "ডিজিটাল", image: "📱" },
    { name: "প্রিন্ট মেটেরিয়াল", category: "প্রিন্ট", image: "📄" },
    { name: "প্যাকেজিং", category: "প্রোডাক্ট", image: "📦" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              গ্রাফিক ডিজাইন সার্ভিস
            </h1>
            <p className="text-xl mb-8 text-purple-100">
              আপনার ব্যবসার জন্য আকর্ষণীয় এবং প্রফেশনাল গ্রাফিক ডিজাইন। লোগো,
              ব্র্যান্ডিং, সোশ্যাল মিডিয়া এবং প্রিন্ট ডিজাইন সলিউশন।
            </p>
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
            >
              ফ্রি কনসালটেশন
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            আমাদের ডিজাইন সার্ভিস
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Design Tools */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            আমরা যেসব টুলস ব্যবহার করি
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {designTools.map((tool, index) => (
              <div
                key={index}
                className={`${tool.color} p-4 rounded-lg text-center hover:scale-105 transition`}
              >
                <div className="text-3xl mb-2">{tool.icon}</div>
                <p className="text-sm font-semibold">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            আমাদের সাম্প্রতিক কাজ
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {portfolio.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
              >
                <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-6xl">
                  {item.image}
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            আপনার বাজেট অনুযায়ী প্যাকেজ
          </h2>
          <p className="text-center text-gray-600 mb-12">
            সাশ্রয়ী মূল্যে পেশাদার ডিজাইন
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-lg p-8 ${
                  pkg.popular
                    ? "bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-2xl scale-105"
                    : "bg-gray-50 shadow-md"
                }`}
              >
                {pkg.popular && (
                  <div className="bg-yellow-400 text-purple-900 text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                    জনপ্রিয়
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">৳{pkg.price}</span>
                  <span
                    className={
                      pkg.popular ? "text-purple-200" : "text-gray-600"
                    }
                  >
                    /{pkg.duration}
                  </span>
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
                      ? "bg-white text-purple-600 hover:bg-gray-100"
                      : "bg-purple-600 text-white hover:bg-purple-700"
                  }`}
                >
                  অর্ডার করুন
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            আপনার ব্র্যান্ডকে আলাদা করুন
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            ফ্রি কনসালটেশন এবং ডিজাইন মকআপ পান
          </p>
          <Link
            to="/contact"
            className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
          >
            এখনই যোগাযোগ করুন →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GraphicDesign;
