import React from 'react';
import { Link } from "react-router";

const BusinessConsulting = () => {
  const services = [
    {
      icon: "📈",
      title: "ব্যবসা পরিকল্পনা",
      description: "কার্যকর ব্যবসা পরিকল্পনা এবং কৌশল উন্নয়ন"
    },
    {
      icon: "💼",
      title: "আর্থিক পরামর্শ",
      description: "বাজেট, বিনিয়োগ এবং আর্থিক ব্যবস্থাপনা"
    },
    {
      icon: "🎯",
      title: "মার্কেট এনালাইসিস",
      description: "বাজার গবেষণা এবং প্রতিযোগী বিশ্লেষণ"
    },
    {
      icon: "⚙️",
      title: "অপারেশন অপটিমাইজেশন",
      description: "ব্যবসায়িক প্রক্রিয়া উন্নতি এবং দক্ষতা বৃদ্ধি"
    },
    {
      icon: "👥",
      title: "মানবসম্পদ উন্নয়ন",
      description: "টিম বিল্ডিং এবং কর্মচারী ব্যবস্থাপনা"
    },
    {
      icon: "🚀",
      title: "বৃদ্ধির কৌশল",
      description: "ব্যবসা সম্প্রসারণ এবং স্কেলিং পরামর্শ"
    }
  ];

  const consultingAreas = [
    {
      category: "স্টার্টআপ কনসালটিং",
      services: ["ব্যবসা মডেল ডিজাইন", "ফান্ডিং স্ট্র্যাটেজি", "পিচ ডেক প্রস্তুতি"]
    },
    {
      category: "ক্ষুদ্র ব্যবসা",
      services: ["অপারেশন সেটআপ", "লাভজনকতা বৃদ্ধি", "খরচ কমানোর কৌশল"]
    },
    {
      category: "মাঝারি ব্যবসা",
      services: ["সম্প্রসারণ পরিকল্পনা", "প্রক্রিয়া অটোমেশন", "টিম স্কেলিং"]
    }
  ];

  const packages = [
    {
      name: "এক্সপ্রেস কনসালটেশন",
      price: "১৫,০০০",
      duration: "১ সেশন",
      features: [
        "২ ঘণ্টার কনসালটেশন",
        "ব্যবসা মূল্যায়ন",
        "সমস্যা চিহ্নিতকরণ",
        "প্রাথমিক সুপারিশ",
        "ফলো-আপ রিপোর্ট"
      ]
    },
    {
      name: "বিজনেস গ্রোথ প্যাকেজ",
      price: "৫০,০০০",
      duration: "১ মাস",
      popular: true,
      features: [
        "সাপ্তাহিক কনসালটেশন",
        "বিস্তারিত ব্যবসা এনালাইসিস",
        "কাস্টম গ্রোথ স্ট্র্যাটেজি",
        "মার্কেট রিসার্চ",
        "ইমপ্লিমেন্টেশন সাপোর্ট",
        "মাসিক রিপোর্ট"
      ]
    },
    {
      name: "কম্প্রিহেন্সিভ কনসালটিং",
      price: "১,৫০,০০০",
      duration: "৩ মাস",
      features: [
        "আনলিমিটেড কনসালটেশন",
        "সম্পূর্ণ ব্যবসা ট্রান্সফর্মেশন",
        "ডেডিকেটেড কনসালটেন্ট",
        "টিম ট্রেনিং",
        "প্রসেস ডকুমেন্টেশন",
        "কোয়ার্টারলি পারফরমেন্স রিভিউ"
      ]
    }
  ];

  const process = [
    {
      step: "১",
      title: "ডিসকভারি মিটিং",
      description: "আপনার ব্যবসা, লক্ষ্য এবং চ্যালেঞ্জ বুঝতে প্রাথমিক আলোচনা"
    },
    {
      step: "২",
      title: "এনালাইসিস ও রিসার্চ",
      description: "গভীর ব্যবসা বিশ্লেষণ এবং মার্কেট রিসার্চ"
    },
    {
      step: "৩",
      title: "স্ট্র্যাটেজি ডেভেলপমেন্ট",
      description: "কাস্টমাইজড ব্যবসায়িক সমাধান এবং কৌশল তৈরি"
    },
    {
      step: "৪",
      title: "ইমপ্লিমেন্টেশন",
      description: "পরিকল্পনা বাস্তবায়ন এবং চলমান সহায়তা"
    }
  ];

  const testimonials = [
    {
      name: "আব্দুল করিম",
      role: "রেস্টুরেন্ট চেইন মালিক",
      text: "SME CUBE এর পরামর্শে আমার ব্যবসা ৩ মাসে ৪০% বৃদ্ধি পেয়েছে। তাদের কৌশল সত্যিই কার্যকর।",
      image: "👨‍💼"
    },
    {
      name: "সাবিনা আক্তার",
      role: "টেক স্টার্টআপ ফাউন্ডার",
      text: "স্টার্টআপ শুরু করার জন্য তাদের গাইডেন্স অমূল্য ছিল। এখন আমরা সফলভাবে চলছি।",
      image: "👩‍💼"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12">
            <div className="flex-1 text-center md:text-left w-full">
              <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4 md:mb-6 flex justify-center md:justify-start">👥</div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 px-2">
                প্রফেশনাল বিজনেস কনসালটিং সার্ভিস
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-gray-100 px-4">
                আপনার ব্যবসাকে সফলতার পথে নিয়ে যান বিশেষজ্ঞ পরামর্শের মাধ্যমে। 
                স্ট্র্যাটেজি থেকে ইমপ্লিমেন্টেশন - সম্পূর্ণ সহায়তা।
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start px-4">
                <Link
                  to="/contact"
                  className="bg-white text-orange-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:bg-gray-100 transition text-center text-sm sm:text-base"
                >
                  ফ্রি কনসালটেশন →
                </Link>
                <button className="border-2 border-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:bg-white hover:text-orange-600 transition text-sm sm:text-base">
                  কেস স্টাডি দেখুন
                </button>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 sm:p-6 md:p-8 border border-white/20">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center md:text-left">আমরা কিভাবে সাহায্য করি</h3>
                <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                  <li className="flex items-start gap-2 sm:gap-3 justify-center md:justify-start text-center md:text-left">
                    <span className="text-lg sm:text-xl md:text-2xl flex-shrink-0">✅</span>
                    <span className="text-xs sm:text-sm md:text-base">ব্যবসায়িক সমস্যা চিহ্নিতকরণ ও সমাধান</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3 justify-center md:justify-start text-center md:text-left">
                    <span className="text-lg sm:text-xl md:text-2xl flex-shrink-0">✅</span>
                    <span className="text-xs sm:text-sm md:text-base">লাভজনকতা বৃদ্ধির কৌশল</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3 justify-center md:justify-start text-center md:text-left">
                    <span className="text-lg sm:text-xl md:text-2xl flex-shrink-0">✅</span>
                    <span className="text-xs sm:text-sm md:text-base">টিম ও প্রসেস অপটিমাইজেশন</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3 justify-center md:justify-start text-center md:text-left">
                    <span className="text-lg sm:text-xl md:text-2xl flex-shrink-0">✅</span>
                    <span className="text-xs sm:text-sm md:text-base">সম্প্রসারণ পরিকল্পনা ও বাস্তবায়ন</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - 2 cards per row on mobile */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
              আমাদের কনসালটিং সার্ভিস
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">সম্পূর্ণ ব্যবসায়িক সহায়তা</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 auto-rows-fr">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col h-full bg-gradient-to-br from-orange-50 to-yellow-50 p-4 sm:p-5 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 md:mb-4">{service.icon}</div>
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800 mb-1 sm:mb-2">{service.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Areas - 2 cards per row on mobile */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
              কনসালটিং এরিয়া
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 px-4">আপনার ব্যবসার ধরন অনুযায়ী বিশেষায়িত সেবা</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 auto-rows-fr">
            {consultingAreas.map((area, index) => (
              <div
                key={index}
                className={`flex flex-col h-full bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border-2 border-orange-100 hover:border-orange-300 transition ${
                  index === 2 ? 'col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="text-center flex-1 flex flex-col">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 md:mb-6">{area.category}</h3>
                  <ul className="space-y-2 md:space-y-3 flex-1 text-center sm:text-left">
                    {area.services.map((service, idx) => (
                      <li key={idx} className="flex items-center gap-2 sm:gap-3 justify-center sm:justify-start">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full flex-shrink-0"></span>
                        <span className="text-xs sm:text-sm md:text-base text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - 2 cards per row on mobile */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
              আমাদের কাজের প্রক্রিয়া
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">সফলতার ৪টি ধাপ</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 auto-rows-fr">
            {process.map((item, index) => (
              <div key={index} className="relative h-full">
                <div className="flex flex-col h-full bg-gradient-to-br from-orange-50 to-yellow-50 p-4 sm:p-5 md:p-6 rounded-xl shadow-lg border-t-4 border-orange-500">
                  <div className="text-center flex-1">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 mx-auto">
                      {item.step}
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800 mb-1 sm:mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600">{item.description}</p>
                  </div>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <span className="text-orange-500 text-3xl">→</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - 2 cards then 1 full width on mobile */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
              প্রাইসিং প্ল্যান
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 px-4">আপনার প্রয়োজন অনুযায়ী প্যাকেজ বেছে নিন</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`flex flex-col h-full rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-8 ${
                  index === 2 ? 'col-span-2 md:col-span-1' : ''
                } ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-orange-500 to-red-600 text-white md:transform md:scale-105 shadow-2xl'
                    : 'bg-white border-2 border-gray-200 shadow-lg'
                }`}
              >
                <div className="text-center flex-1 flex flex-col">
                  {pkg.popular && (
                    <div className="bg-yellow-400 text-orange-900 px-3 md:px-4 py-1 rounded-full text-xs sm:text-sm font-bold inline-block mb-3 md:mb-4 mx-auto">
                      সবচেয়ে জনপ্রিয়
                    </div>
                  )}
                  <h3 className={`text-base sm:text-lg md:text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-gray-800'}`}>
                    {pkg.name}
                  </h3>
                  <div className="mb-4 md:mb-6">
                    <span className="text-xl sm:text-2xl md:text-4xl font-bold">৳{pkg.price}</span>
                    <span className={`text-xs sm:text-sm md:text-base ${pkg.popular ? 'text-gray-200' : 'text-gray-600'}`}>/{pkg.duration}</span>
                  </div>
                  <ul className="space-y-2 md:space-y-3 mb-5 sm:mb-6 md:mb-8 flex-1 text-center sm:text-left text-xs sm:text-sm md:text-base">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start justify-center sm:justify-start gap-2">
                        <span className={`${pkg.popular ? 'text-yellow-300' : 'text-green-500'} flex-shrink-0 mt-0.5`}>✓</span>
                        <span className={`${pkg.popular ? 'text-gray-100' : 'text-gray-700'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`block text-center py-2 sm:py-2.5 md:py-3 rounded-full font-bold transition text-xs sm:text-sm md:text-base mt-auto ${
                      pkg.popular
                        ? 'bg-white text-orange-600 hover:bg-gray-100'
                        : 'bg-orange-500 text-white hover:bg-orange-600'
                    }`}
                  >
                    শুরু করুন
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - 2 cards per row on mobile */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
              ক্লায়েন্ট সাকসেস স্টোরি
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">আমাদের কনসালটিংয়ের ফলাফল</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-8 max-w-4xl mx-auto auto-rows-fr">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col h-full bg-gradient-to-br from-orange-50 to-yellow-50 p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg border-2 border-orange-200"
              >
                <div className="text-center flex-1 flex flex-col">
                  <div className="flex flex-col items-center mb-2 sm:mb-3 md:mb-4">
                    <div className="text-2xl sm:text-3xl md:text-5xl mb-2">{testimonial.image}</div>
                    <div className="flex text-yellow-400 text-xs sm:text-sm md:text-xl">
                      ⭐⭐⭐⭐⭐
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-3 sm:mb-4 md:mb-6 italic leading-relaxed flex-1">"{testimonial.text}"</p>
                  <div className="border-t border-orange-200 pt-2 sm:pt-3 md:pt-4">
                    <div className="font-bold text-gray-800 text-xs sm:text-sm md:text-base">{testimonial.name}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 px-2">
            আজই নিন বিশেষজ্ঞ পরামর্শ
          </h2>
          <p className="text-sm sm:text-base md:text-xl mb-6 md:mb-8 text-gray-100 px-4">
            ৩০ মিনিট ফ্রি কনসালটেশন সেশন বুক করুন
          </p>
          <Link
            to="/contact"
            className="bg-white text-orange-600 px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-gray-100 inline-block transform hover:scale-105 transition"
          >
            ফ্রি কনসালটেশন বুক করুন →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BusinessConsulting;
