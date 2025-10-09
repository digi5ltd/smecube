import React from "react";
import { Link } from "react-router";

const LandingPage = () => {
  const features = [
    {
      icon: "🎯",
      title: "হাই কনভার্শন ফোকাস",
      description: "ভিজিটরকে কাস্টমারে পরিণত করার জন্য অপটিমাইজড",
    },
    {
      icon: "⚡",
      title: "দ্রুত লোডিং",
      description: "১-২ সেকেন্ডে সম্পূর্ণ পেজ লোড",
    },
    {
      icon: "📱",
      title: "মোবাইল ফ্রেন্ডলি",
      description: "সব ডিভাইসে পারফেক্ট ডিসপ্লে",
    },
    {
      icon: "🔍",
      title: "SEO অপটিমাইজড",
      description: "সার্চ ইঞ্জিনে ভালো র্যাংকিং",
    },
    {
      icon: "🎨",
      title: "আকর্ষণীয় ডিজাইন",
      description: "মডার্ন ও ক্লিন ইউজার ইন্টারফেস",
    },
    {
      icon: "📊",
      title: "এনালিটিক্স ইন্টিগ্রেশন",
      description: "ভিজিটর ট্র্যাকিং এবং রিপোর্টিং",
    },
  ];

  const elements = [
    {
      name: "হিরো সেকশন",
      icon: "🎬",
      description: "আকর্ষণীয় প্রথম ইম্প্রেশন",
    },
    { name: "CTA বাটন", icon: "🔘", description: "ক্লিয়ার কল-টু-অ্যাকশন" },
    { name: "ফিচার সেকশন", icon: "✨", description: "সার্ভিস হাইলাইট" },
    { name: "টেস্টিমোনিয়াল", icon: "💬", description: "কাস্টমার রিভিউ" },
    { name: "কন্টাক্ট ফর্ম", icon: "📝", description: "লিড জেনারেশন" },
    { name: "ফুটার", icon: "🔗", description: "সোশ্যাল এবং লিংকস" },
  ];

  const packages = [
    {
      name: "বেসিক ল্যান্ডিং",
      price: "১০,০০০",
      duration: "১ পেজ",
      features: [
        "১টি সিঙ্গেল পেজ",
        "রেসপন্সিভ ডিজাইন",
        "কন্টাক্ট ফর্ম",
        "বেসিক SEO",
        "হোস্টিং সেটআপ",
        "২ সপ্তাহ সাপোর্ট",
      ],
    },
    {
      name: "প্রফেশনাল",
      price: "২০,০০০",
      duration: "১ পেজ",
      popular: true,
      features: [
        "কাস্টম ডিজাইন",
        "এনিমেশন এফেক্ট",
        "লিড ম্যাগনেট সেটআপ",
        "এডভান্স SEO",
        "গুগল এনালিটিক্স",
        "ইমেইল ইন্টিগ্রেশন",
        "১ মাস সাপোর্ট",
      ],
    },
    {
      name: "এন্টারপ্রাইজ",
      price: "৪০,০০০",
      duration: "মাল্টি-পেজ",
      features: [
        "মাল্টি-স্টেপ ফানেল",
        "প্রিমিয়াম ডিজাইন",
        "A/B টেস্টিং সেটআপ",
        "CRM ইন্টিগ্রেশন",
        "চ্যাটবট ইন্টিগ্রেশন",
        "পেমেন্ট গেটওয়ে",
        "৩ মাস সাপোর্ট",
      ],
    },
  ];

  const processSteps = [
    {
      step: "১",
      title: "রিকোয়ারমেন্ট",
      description: "আপনার লক্ষ্য এবং প্রয়োজনীয়তা বুঝি",
    },
    {
      step: "২",
      title: "ডিজাইন",
      description: "মকআপ এবং প্রোটোটাইপ তৈরি",
    },
    {
      step: "৩",
      title: "ডেভেলপমেন্ট",
      description: "কোডিং এবং ইন্টিগ্রেশন",
    },
    {
      step: "৪",
      title: "লঞ্চ",
      description: "টেস্টিং এবং লাইভ করা",
    },
  ];

  const useCases = [
    "প্রোডাক্ট লঞ্চ ক্যাম্পেইন",
    "সার্ভিস প্রমোশন",
    "ইভেন্ট রেজিস্ট্রেশন",
    "লিড জেনারেশন",
    "ই-বুক/কোর্স সেল",
    "ওয়েবিনার সাইনআপ",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              হাই-কনভার্টিং ল্যান্ডিং পেজ
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              আপনার ব্যবসার জন্য কাস্টম ল্যান্ডিং পেজ যা ভিজিটরকে কাস্টমারে
              পরিণত করে। দ্রুত, আকর্ষণীয় এবং রেজাল্ট ড্রিভেন।
            </p>
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
            >
              ফ্রি কনসালটেশন
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            কেন আমাদের ল্যান্ডিং পেজ?
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

      {/* Elements Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            প্রতিটি ল্যান্ডিং পেজে যা থাকে
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {elements.map((element, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-100"
              >
                <div className="text-3xl mb-3">{element.icon}</div>
                <h3 className="font-bold mb-1">{element.name}</h3>
                <p className="text-sm text-gray-600">{element.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            কীভাবে কাজ করি
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            কোথায় ব্যবহার করবেন?
          </h2>
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg flex items-center"
              >
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span className="font-semibold">{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            সাশ্রয়ী মূল্যে পেশাদার ল্যান্ডিং পেজ
          </h2>
          <p className="text-center text-gray-600 mb-12">
            আপনার প্রয়োজন অনুযায়ী প্যাকেজ বেছে নিন
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-lg p-8 ${
                  pkg.popular
                    ? "bg-gradient-to-br from-blue-600 to-cyan-600 text-white shadow-2xl scale-105"
                    : "bg-white shadow-md"
                }`}
              >
                {pkg.popular && (
                  <div className="bg-yellow-400 text-blue-900 text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                    সবচেয়ে জনপ্রিয়
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">৳{pkg.price}</span>
                  <span
                    className={pkg.popular ? "text-blue-200" : "text-gray-600"}
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
                      ? "bg-white text-blue-600 hover:bg-gray-100"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  এখনই শুরু করুন
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            আপনার বিজনেস গ্রো করার সময় এসেছে
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            ৭ দিনে ডেলিভারি এবং ফ্রি রিভিশন
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
          >
            প্রজেক্ট শুরু করুন →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
