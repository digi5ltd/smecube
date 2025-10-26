import React, { useState } from 'react';
import { Check, Zap, Crown, Star, ArrowRight, Phone, MessageCircle } from 'lucide-react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const pricingPlans = [
    {
      name: "স্টার্টার",
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
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
      icon: <Star className="w-6 h-6 sm:w-8 sm:h-8" />,
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
      icon: <Crown className="w-6 h-6 sm:w-8 sm:h-8" />,
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
    {
      name: "ফেসবুক বুস্টিং",
      price: "৩,০০০",
      unit: "/মাস",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" fill="white"/>
        </svg>
      )
    },
    {
      name: "গ্রাফিক ডিজাইন প্যাকেজ",
      price: "৫,০০০",
      unit: "/মাস",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7V17L12 22L22 17V7L12 2ZM8 17L12 19L16 17V13L12 15L8 13V17Z" fill="white"/>
        </svg>
      )
    },
    {
      name: "বাল্ক এসএমএস",
      price: "০.২৫",
      unit: "/এসএমএস",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z" fill="white"/>
        </svg>
      )
    },
    {
      name: "চাটবট সেটআপ",
      price: "৮,০০০",
      unit: "/একবার",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 11.5C21 16.1944 16.9706 20 12 20C10.1157 20 8.36842 19.4472 7 18.5833L3 20L4.41667 16C3.55279 14.6316 3 12.8843 3 11C3 6.30558 7.02944 2.5 12 2.5C16.9706 2.5 21 6.30558 21 11.5Z" fill="white"/>
        </svg>
      )
    },
    {
      name: "ডোমেইন রেজিস্ট্রেশন",
      price: "১,২০০",
      unit: "/বছর",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="white"/>
        </svg>
      )
    },
    {
      name: "কন্টেন্ট রাইটিং",
      price: "৫০০",
      unit: "/পোস্ট",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM7 7H17V9H7V7ZM7 11H17V13H7V11ZM7 15H13V17H7V15Z" fill="white"/>
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap');
        .font-hind {
          font-family: 'Hind Siliguri', sans-serif;
        }
      `}</style>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-500 via-pink-600 to-purple-600 text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12">
            <div className="flex-1 text-center md:text-left w-full">
              <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4 md:mb-6 flex justify-center md:justify-start">💰</div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 px-2 font-hind">
                স্বচ্ছ প্রাইসিং প্ল্যান
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-gray-100 px-4 font-hind">
                আপনার ব্যবসার জন্য সঠিক প্যাকেজ নির্বাচন করুন। সকল প্ল্যানে স্বচ্ছ মূল্য, 
                কোন লুকানো খরচ নেই। মাসিক এবং বার্ষিক প্ল্যান উপলব্ধ।
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start px-4">
                <button className="bg-white text-red-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:bg-gray-100 transition text-center text-sm sm:text-base font-hind">
                  ফ্রি ট্রায়াল শুরু করুন →
                </button>
                <button className="border-2 border-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:bg-white hover:text-red-600 transition text-sm sm:text-base font-hind">
                  এক্সপার্ট পরামর্শ
                </button>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 sm:p-6 md:p-8 border border-white/20">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center md:text-left font-hind">আমাদের মূল্য বৈশিষ্ট্য</h3>
                <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                  <li className="flex items-start gap-2 sm:gap-3 justify-center md:justify-start text-center md:text-left">
                    <span className="text-lg sm:text-xl md:text-2xl flex-shrink-0">✅</span>
                    <span className="text-xs sm:text-sm md:text-base font-hind">কোন সেটআপ ফি নেই</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3 justify-center md:justify-start text-center md:text-left">
                    <span className="text-lg sm:text-xl md:text-2xl flex-shrink-0">✅</span>
                    <span className="text-xs sm:text-sm md:text-base font-hind">৭ দিনের মানি ব্যাক গ্যারান্টি</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3 justify-center md:justify-start text-center md:text-left">
                    <span className="text-lg sm:text-xl md:text-2xl flex-shrink-0">✅</span>
                    <span className="text-xs sm:text-sm md:text-base font-hind">যেকোনো সময় প্ল্যান আপগ্রেড</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3 justify-center md:justify-start text-center md:text-left">
                    <span className="text-lg sm:text-xl md:text-2xl flex-shrink-0">✅</span>
                    <span className="text-xs sm:text-sm md:text-base font-hind">২৪/৭ টেকনিক্যাল সাপোর্ট</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        {/* Billing Toggle */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center bg-white rounded-full p-1 shadow-lg mb-6">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-xs sm:text-base font-hind ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              মাসিক
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-xs sm:text-base font-hind ${
                billingCycle === 'yearly'
                  ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              বার্ষিক
              <span className="ml-1 sm:ml-2 text-xs bg-green-500 text-white px-1 sm:px-2 py-0.5 sm:py-1 rounded-full">২০% ছাড়</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards - 2 cards per row on mobile, 3 on larger screens */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-16 md:mb-20">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-gray-100 ${
                plan.name === 'এন্টারপ্রাইজ' ? 'col-span-2 md:col-span-1' : ''
              } ${plan.popular ? 'ring-2 ring-red-500 md:scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-4 py-1.5 rounded-full font-bold text-xs shadow-md font-hind">
                    জনপ্রিয়
                  </div>
                </div>
              )}

              <div className="p-5 sm:p-6 md:p-8">
                {plan.name === 'এন্টারপ্রাইজ' ? (
                  <>
                    <div className="md:hidden flex flex-col sm:flex-row sm:gap-6">
                      {/* Mobile View: Split into two sections */}
                      <div className="flex-1">
                        {/* Icon */}
                        <div className={`w-12 h-12 bg-gradient-to-br ${plan.gradient} rounded-lg flex items-center justify-center text-white mb-4 shadow-md`}>
                          {plan.icon}
                        </div>

                        {/* Plan Name and Description */}
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 font-hind">{plan.name}</h3>
                        <p className="text-sm sm:text-base text-gray-500 mb-4 font-hind">{plan.description}</p>

                        {/* Price */}
                        <div className="mb-4 sm:mb-6">
                          <div className="flex items-end gap-2">
                            <span className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                              ৳{billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                            </span>
                            <span className="text-sm sm:text-base text-gray-500 font-semibold mb-1 font-hind">
                              /{billingCycle === 'monthly' ? 'মাস' : 'বছর'}
                            </span>
                          </div>
                          {billingCycle === 'yearly' && (
                            <p className="text-xs sm:text-sm text-green-600 font-semibold mt-2 font-hind">
                              মাসিক মূল্যে ২০% সাশ্রয়!
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Features */}
                      <div className="flex-1">
                        <div className="space-y-3 mb-6">
                          {plan.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Check className="w-3 h-3 text-green-600" />
                              </div>
                              <span className="text-sm sm:text-base text-gray-600 font-hind">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Desktop View: Standard Layout */}
                    <div className="hidden md:block">
                      {/* Icon */}
                      <div className={`w-12 h-12 bg-gradient-to-br ${plan.gradient} rounded-lg flex items-center justify-center text-white mb-4 shadow-md`}>
                        {plan.icon}
                      </div>

                      {/* Plan Name */}
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 font-hind">{plan.name}</h3>
                      <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-4 font-hind">{plan.description}</p>

                      {/* Price */}
                      <div className="mb-4 sm:mb-6">
                        <div className="flex items-end gap-2">
                          <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                            ৳{billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                          </span>
                          <span className="text-sm sm:text-base md:text-lg text-gray-500 font-semibold mb-1 font-hind">
                            /{billingCycle === 'monthly' ? 'মাস' : 'বছর'}
                          </span>
                        </div>
                        {billingCycle === 'yearly' && (
                          <p className="text-xs sm:text-sm text-green-600 font-semibold mt-2 font-hind">
                            মাসিক মূল্যে ২০% সাশ্রয়!
                          </p>
                        )}
                      </div>

                      {/* Features */}
                      <div className="space-y-3 mb-6">
                        {plan.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-3 h-3 text-green-600" />
                            </div>
                            <span className="text-sm sm:text-base md:text-lg text-gray-600 font-hind">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Button */}
                    <button
                      className={`w-full py-3 sm:py-4 rounded-lg font-bold transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg font-hind ${
                        plan.popular
                          ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      শুরু করুন
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </>
                ) : (
                  <>
                    {/* Icon */}
                    <div className={`w-12 h-12 bg-gradient-to-br ${plan.gradient} rounded-lg flex items-center justify-center text-white mb-4 shadow-md`}>
                      {plan.icon}
                    </div>

                    {/* Plan Name */}
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 font-hind">{plan.name}</h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-4 font-hind">{plan.description}</p>

                    {/* Price */}
                    <div className="mb-4 sm:mb-6">
                      <div className="flex items-end gap-2">
                        <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                          ৳{billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                        </span>
                        <span className="text-sm sm:text-base md:text-lg text-gray-500 font-semibold mb-1 font-hind">
                          /{billingCycle === 'monthly' ? 'মাস' : 'বছর'}
                        </span>
                      </div>
                      {billingCycle === 'yearly' && (
                        <p className="text-xs sm:text-sm text-green-600 font-semibold mt-2 font-hind">
                          মাসিক মূল্যে ২০% সাশ্রয়!
                        </p>
                      )}
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-green-600" />
                          </div>
                          <span className="text-sm sm:text-base md:text-lg text-gray-600 font-hind">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Button */}
                    <button
                      className={`w-full py-3 sm:py-4 rounded-lg font-bold transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg font-hind ${
                        plan.popular
                          ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      শুরু করুন
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Add-on Services - 3 cards per row on mobile */}
        <div className="mb-10 sm:mb-16 md:mb-20">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-2 sm:mb-3 md:mb-4 font-hind">
              অতিরিক্ত সার্ভিস
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 font-hind">আপনার প্যাকেজের সাথে যুক্ত করুন এই সার্ভিসগুলো</p>
          </div>

          {/* Mobile View - 3 cards per row */}
          <div className="md:hidden grid grid-cols-3 gap-3 sm:gap-4">
            {addOnServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 aspect-square flex flex-col justify-center"
              >
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <h3 className="text-sm sm:text-base font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent font-hind">{service.name}</h3>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>
                <div className="flex items-end gap-1">
                  <span className="text-lg sm:text-xl font-black bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">৳{service.price}</span>
                  <span className="text-xs sm:text-sm text-gray-600 font-semibold mb-0.5 sm:mb-1 font-hind">{service.unit}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View - 5 cards per row with logo on top */}
          <div className="hidden md:grid md:grid-cols-5 gap-4 lg:gap-6">
            {addOnServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 aspect-square flex flex-col items-center justify-center text-center"
              >
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center mb-3 lg:mb-4">
                  {service.icon}
                </div>
                <h3 className="text-base lg:text-lg font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-2 lg:mb-3 font-hind leading-tight">
                  {service.name}
                </h3>
                <div className="flex items-end gap-1">
                  <span className="text-xl lg:text-2xl font-black bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">৳{service.price}</span>
                  <span className="text-sm lg:text-base text-gray-600 font-semibold mb-0.5 lg:mb-1 font-hind">
                    {service.unit}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 lg:p-12 mb-10 sm:mb-16 md:mb-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12 font-hind">
            <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              প্ল্যান তুলনা
            </span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-2 sm:py-3 md:py-4 px-2 sm:px-4 font-bold text-gray-900 text-xs sm:text-sm md:text-base font-hind">ফিচার</th>
                  <th className="text-center py-2 sm:py-3 md:py-4 px-2 sm:px-4 font-bold text-gray-900 text-xs sm:text-sm md:text-base font-hind">স্টার্টার</th>
                  <th className="text-center py-2 sm:py-3 md:py-4 px-2 sm:px-4 font-bold text-gray-900 text-xs sm:text-sm md:text-base font-hind">প্রফেশনাল</th>
                  <th className="text-center py-2 sm:py-3 md:py-4 px-2 sm:px-4 font-bold text-gray-900 text-xs sm:text-sm md:text-base font-hind">এন্টারপ্রাইজ</th>
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
                    <td className="py-2 sm:py-3 md:py-4 px-2 sm:px-4 font-semibold text-gray-700 text-xs sm:text-sm md:text-base font-hind">{row.feature}</td>
                    <td className="py-2 sm:py-3 md:py-4 px-2 sm:px-4 text-center text-gray-600 text-xs sm:text-sm md:text-base font-hind">{row.starter}</td>
                    <td className="py-2 sm:py-3 md:py-4 px-2 sm:px-4 text-center text-gray-600 text-xs sm:text-sm md:text-base font-hind">{row.pro}</td>
                    <td className="py-2 sm:py-3 md:py-4 px-2 sm:px-4 text-center text-gray-600 text-xs sm:text-sm md:text-base font-hind">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 lg:p-12 mb-10 sm:mb-16 md:mb-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12 font-hind">
            <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              সাধারণ প্রশ্ন
            </span>
          </h2>
          <div className="space-y-4 sm:space-y-6 max-w-3xl mx-auto">
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
              <div key={index} className="border-b border-gray-200 pb-4 sm:pb-6 last:border-0">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 font-hind">{faq.q}</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed font-hind">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-12 text-center text-white shadow-2xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 font-hind">
            এখনও নিশ্চিত নন?
          </h2>
          <p className="text-sm sm:text-base md:text-xl mb-4 sm:mb-6 md:mb-8 text-white/90 font-hind">
            আমাদের সাথে কথা বলুন এবং পান ফ্রি কনসালটেশন
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="bg-white text-red-600 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base font-hind">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              কল করুন
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-bold border-2 border-white hover:bg-white hover:text-red-600 transition-all duration-300 text-xs sm:text-sm md:text-base font-hind">
              <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 inline mr-1 sm:mr-2" />
              মেসেজ পাঠান
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;