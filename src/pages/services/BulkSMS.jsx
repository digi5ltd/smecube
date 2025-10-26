import React from 'react';
import { Link } from "react-router";

const BulkSMS = () => {
  const features = [
    {
      icon: "📱",
      title: "ইনস্ট্যান্ট ডেলিভারি",
      description: "সেকেন্ডের মধ্যে হাজারো SMS পাঠান"
    },
    {
      icon: "📊",
      title: "ডিটেইলড রিপোর্ট",
      description: "ডেলিভারি স্ট্যাটাস এবং এনালিটিক্স"
    },
    {
      icon: "👥",
      title: "কন্টাক্ট ম্যানেজমেন্ট",
      description: "গ্রুপ তৈরি এবং কন্টাক্ট সংরক্ষণ"
    },
    {
      icon: "⚡",
      title: "হাই স্পিড",
      description: "প্রতি সেকেন্ডে ১০০+ SMS"
    },
    {
      icon: "🎯",
      title: "পার্সোনালাইজড SMS",
      description: "কাস্টম নাম এবং ভেরিয়েবল সাপোর্ট"
    },
    {
      icon: "🔔",
      title: "শিডিউল SMS",
      description: "ভবিষ্যতের জন্য SMS শিডিউল করুন"
    }
  ];

  const useCases = [
    { icon: "🛒", title: "অফার ও প্রমোশন", description: "বিশেষ অফার কাস্টমারদের কাছে পাঠান" },
    { icon: "📢", title: "নোটিফিকেশন", description: "অর্ডার আপডেট এবং রিমাইন্ডার" },
    { icon: "🗳️", title: "OTP ভেরিফিকেশন", description: "সিকিউর লগিন কোড পাঠান" },
    { icon: "🎉", title: "ইভেন্ট প্রমোশন", description: "ইভেন্ট এবং সেমিনার নোটিস" },
    { icon: "🏦", title: "ব্যাংকিং এলার্ট", description: "ট্রানজেকশন নোটিফিকেশন" },
    { icon: "🏥", title: "অ্যাপয়েন্টমেন্ট", description: "মিটিং এবং অ্যাপয়েন্টমেন্ট রিমাইন্ডার" }
  ];

  const packages = [
    {
      name: "স্টার্টার",
      price: "১,০০০",
      sms: "১,০০০",
      features: [
        "১,০০০ SMS",
        "বেসিক ড্যাশবোর্ড",
        "ডেলিভারি রিপোর্ট",
        "কন্টাক্ট ম্যানেজমেন্ট",
        "ইমেইল সাপোর্ট"
      ]
    },
    {
      name: "বিজনেস",
      price: "৫,০০০",
      sms: "৬,০০০",
      popular: true,
      features: [
        "৬,০০০ SMS (২০% বোনাস)",
        "এডভান্স ড্যাশবোর্ড",
        "পার্সোনালাইজড SMS",
        "API ইন্টিগ্রেশন",
        "শিডিউল SMS",
        "ডিটেইলড এনালিটিক্স",
        "২৪/৭ সাপোর্ট"
      ]
    },
    {
      name: "এন্টারপ্রাইজ",
      price: "২০,০০০",
      sms: "৩০,০০০",
      features: [
        "৩০,০০০ SMS (৫০% বোনাস)",
        "প্রিমিয়াম ড্যাশবোর্ড",
        "মাল্টি-ইউজার এক্সেস",
        "হোয়াইট লেবেল",
        "ডেডিকেটেড সাপোর্ট",
        "কাস্টম ইন্টিগ্রেশন",
        "প্রায়োরিটি ডেলিভারি"
      ]
    }
  ];

  const processSteps = [
    {
      step: "১",
      title: "সাইনআপ",
      description: "অ্যাকাউন্ট তৈরি করুন এবং প্যাকেজ কিনুন"
    },
    {
      step: "২",
      title: "কন্টাক্ট আপলোড",
      description: "এক্সেল/CSV দিয়ে কন্টাক্ট লিস্ট আপলোড করুন"
    },
    {
      step: "৩",
      title: "SMS তৈরি করুন",
      description: "মেসেজ লিখুন এবং পার্সোনালাইজ করুন"
    },
    {
      step: "৪",
      title: "পাঠান",
      description: "এখনই বা শিডিউল করে পাঠান"
    }
  ];

  const stats = [
    { number: "৯৮%", label: "ডেলিভারি রেট" },
    { number: "২ সেকেন্ড", label: "গড় ডেলিভারি টাইম" },
    { number: "১০০+", label: "SMS/সেকেন্ড" },
    { number: "২৪/৭", label: "সাপোর্ট" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              বাল্ক SMS সার্ভিস
            </h1>
            <p className="text-xl mb-8 text-green-100">
              দ্রুত, নির্ভরযোগ্য এবং সাশ্রয়ী বাল্ক SMS সলিউশন। হাজারো কাস্টমারের কাছে একসাথে পৌঁছান মাত্র কয়েক সেকেন্ডে।
            </p>
            <Link
              to="/contact"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
            >
              ফ্রি ট্রায়াল শুরু করুন
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            শক্তিশালী ফিচার সমূহ
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

      {/* Use Cases Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            কোথায় ব্যবহার করবেন?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-lg border border-green-100"
              >
                <div className="text-3xl mb-3">{useCase.icon}</div>
                <h3 className="font-bold mb-2">{useCase.title}</h3>
                <p className="text-sm text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            কীভাবে কাজ করে?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-teal-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            সাশ্রয়ী মূল্যে SMS প্যাকেজ
          </h2>
          <p className="text-center text-gray-600 mb-12">
            কোনো লুকানো খরচ নেই - শুধু আপনার প্রয়োজন অনুযায়ী কিনুন
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-lg p-8 ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-green-600 to-teal-600 text-white shadow-2xl scale-105'
                    : 'bg-gray-50 shadow-md'
                }`}
              >
                {pkg.popular && (
                  <div className="bg-yellow-400 text-green-900 text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                    বেস্ট ভ্যালু
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold">৳{pkg.price}</span>
                </div>
                <div className={`mb-6 text-sm ${pkg.popular ? 'text-green-200' : 'text-gray-600'}`}>
                  {pkg.sms} SMS
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
                      ? 'bg-white text-green-600 hover:bg-gray-100'
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  এখনই কিনুন
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            আজই শুরু করুন বাল্ক SMS মার্কেটিং
          </h2>
          <p className="text-xl mb-8 text-green-100">
            ১০০ টি ফ্রি SMS দিয়ে ট্রায়াল করুন
          </p>
          <Link
            to="/contact"
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
          >
            ফ্রি ট্রায়াল পান →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BulkSMS;
