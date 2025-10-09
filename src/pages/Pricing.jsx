import React, { useState } from 'react';
import { Check, Zap, Crown, Star, ArrowRight, Phone } from 'lucide-react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const pricingPlans = [
    {
      name: "স্টার্টার",
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-600",
      monthlyPrice: "৫,০০০",
      yearlyPrice: "৫০,০০০",
      description: "ছোট ব্যবসার জন্য আদর্শ",
      features: [
        "১টি ওয়েবসাইট/পেজ",
        "বেসিক ডিজাইন",
        "৫ GB হোস্টিং",
        "SSL সার্টিফিকেট",
        "মাসিক সাপোর্ট",
        "১টি ইমেইল একাউন্ট",
        "মোবাইল রেসপন্সিভ"
      ],
      popular: false
    },
    {
      name: "প্রফেশনাল",
      icon: <Star className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-600",
      monthlyPrice: "১০,০০০",
      yearlyPrice: "১,০০,০০০",
      description: "বাড়ন্ত ব্যবসার জন্য সেরা",
      features: [
        "৩টি ওয়েবসাইট/পেজ",
        "প্রিমিয়াম ডিজাইন",
        "২০ GB হোস্টিং",
        "SSL সার্টিফিকেট",
        "২৪/৭ সাপোর্ট",
        "৫টি ইমেইল একাউন্ট",
        "SEO অপটিমাইজেশন",
        "সোশ্যাল মিডিয়া ইন্টিগ্রেশন",
        "মাসিক রিপোর্ট"
      ],
      popular: true
    },
    {
      name: "এন্টারপ্রাইজ",
      icon: <Crown className="w-8 h-8" />,
      gradient: "from-orange-500 to-red-600",
      monthlyPrice: "২০,০০০",
      yearlyPrice: "২,০০,০০০",
      description: "বড় প্রতিষ্ঠানের জন্য",
      features: [
        "আনলিমিটেড ওয়েবসাইট/পেজ",
        "কাস্টম ডিজাইন",
        "৫০ GB হোস্টিং",
        "SSL সার্টিফিকেট",
        "প্রাইয়োরিটি ২৪/৭ সাপোর্ট",
        "আনলিমিটেড ইমেইল",
        "অ্যাডভান্স SEO",
        "ই-কমার্স ফিচার",
        "ডেডিকেটেড ম্যানেজার",
        "সাপ্তাহিক রিপোর্ট",
        "ফ্রি মেইনটেনেন্স"
      ],
      popular: false
    }
  ];

  const addOnServices = [
    { name: "ফেসবুক বুস্টিং", price: "৩,০০০", unit: "/মাস" },
    { name: "গ্রাফিক ডিজাইন প্যাকেজ", price: "৫,০০০", unit: "/মাস" },
    { name: "বাল্ক এসএমএস", price: "০.২৫", unit: "/এসএমএস" },
    { name: "চাটবট সেটআপ", price: "৮,০০০", unit: "/একবার" },
    { name: "ডোমেইন রেজিস্ট্রেশন", price: "১,২০০", unit: "/বছর" },
    { name: "কন্টেন্ট রাইটিং", price: "৫০০", unit: "/পোস্ট" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              প্রাইসিং প্ল্যান
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            আপনার ব্যবসার জন্য সঠিক প্যাকেজ নির্বাচন করুন। সকল প্ল্যানে স্বচ্ছ মূল্য, কোন লুকানো খরচ নেই
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white rounded-full p-1 shadow-lg">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              মাসিক
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                billingCycle === 'yearly'
                  ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              বার্ষিক
              <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">২০% ছাড়</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                plan.popular ? 'ring-4 ring-red-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                    জনপ্রিয়
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${plan.gradient} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                  {plan.icon}
                </div>

                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-end gap-2">
                    <span className="text-5xl font-black bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                      ৳{billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="text-gray-600 font-semibold mb-2">
                      /{billingCycle === 'monthly' ? 'মাস' : 'বছর'}
                    </span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <p className="text-sm text-green-600 font-semibold mt-2">
                      মাসিক মূল্যে ২০% সাশ্রয়!
                    </p>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <button
                  className={`w-full py-4 rounded-xl font-bold transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  শুরু করুন
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add-on Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4">
              <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                অতিরিক্ত সার্ভিস
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              আপনার প্যাকেজের সাথে যুক্ত করুন এই সার্ভিসগুলো
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOnServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{service.name}</h3>
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex items-end gap-1">
                  <span className="text-3xl font-black text-gray-900">৳{service.price}</span>
                  <span className="text-gray-600 font-semibold mb-1">{service.unit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-20">
          <h2 className="text-4xl font-black text-center mb-12">
            <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              প্ল্যান তুলনা
            </span>
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-bold text-gray-900">ফিচার</th>
                  <th className="text-center py-4 px-4 font-bold text-gray-900">স্টার্টার</th>
                  <th className="text-center py-4 px-4 font-bold text-gray-900">প্রফেশনাল</th>
                  <th className="text-center py-4 px-4 font-bold text-gray-900">এন্টারপ্রাইজ</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'ওয়েবসাইট সংখ্যা', starter: '১টি', pro: '৩টি', enterprise: 'আনলিমিটেড' },
                  { feature: 'হোস্টিং স্পেস', starter: '৫ GB', pro: '২০ GB', enterprise: '৫০ GB' },
                  { feature: 'ইমেইল একাউন্ট', starter: '১টি', pro: '৫টি', enterprise: 'আনলিমিটেড' },
                  { feature: 'সাপোর্ট', starter: 'মাসিক', pro: '২৪/৭', enterprise: 'প্রাইয়োরিটি ২৪/৭' },
                  { feature: 'SEO', starter: '✗', pro: '✓', enterprise: '✓ অ্যাডভান্স' },
                  { feature: 'ই-কমার্স', starter: '✗', pro: '✗', enterprise: '✓' }
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 font-semibold text-gray-700">{row.feature}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{row.starter}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{row.pro}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-20">
          <h2 className="text-4xl font-black text-center mb-12">
            <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              সাধারণ প্রশ্ন
            </span>
          </h2>

          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                q: 'কি কি পেমেন্ট মেথড গ্রহণ করেন?',
                a: 'আমরা বিকাশ, নগদ, রকেট এবং ব্যাংক ট্রান্সফার গ্রহণ করি।'
              },
              {
                q: 'রিফান্ড পলিসি কি?',
                a: 'প্রথম ৭ দিনের মধ্যে সম্পূর্ণ রিফান্ড পাবেন যদি সন্তুষ্ট না হন।'
              },
              {
                q: 'প্ল্যান আপগ্রেড করা যাবে?',
                a: 'হ্যাঁ, যেকোনো সময় আপনার প্ল্যান আপগ্রেড বা ডাউনগ্রেড করতে পারবেন।'
              },
              {
                q: 'সেটআপ ফি আছে কি?',
                a: 'না, কোন সেটআপ ফি নেই। শুধুমাত্র মাসিক বা বার্ষিক চার্জ প্রযোজ্য।'
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-black mb-4">
            এখনও নিশ্চিত নন?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            আমাদের সাথে কথা বলুন এবং পান ফ্রি কনসালটেশন
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-4 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              কল করুন
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold border-2 border-white hover:bg-white hover:text-red-600 transition-all duration-300">
              মেসেজ পাঠান
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;