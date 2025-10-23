import React, { useState, useEffect } from "react";
import { ArrowRight, ArrowUp, ChevronLeft, ChevronRight, Sparkles, Zap, Shield, Globe, Rocket, Eye, Clock, TrendingUp, ChevronRight as ChevronRightIcon } from "lucide-react";

const pageData = {
  features: [
    {
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />,
      title: "হাই-স্পিড ওয়েবসাইট",
      description: "ব্লিটজ-ফাস্ট লোডিং স্পিড...",
      gradient: "from-blue-500 to-cyan-600",
      iconBg: "bg-blue-100"
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />,
      title: "এডভান্স সিকিউরিটি",
      description: "SSL প্রোটেকশন এবং..",
      gradient: "from-green-500 to-emerald-600",
      iconBg: "bg-green-100"
    },
    {
      icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />,
      title: "গ্লোবাল রেসপন্সিভ",
      description: "সব ডিভাইসে পারফেক্ট...",
      gradient: "from-purple-500 to-pink-600",
      iconBg: "bg-purple-100"
    },
    {
      icon: <Rocket className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />,
      title: "সেলস বুস্ট",
      description: "কনভার্সন রেট বাড়ানোর...",
      gradient: "from-orange-500 to-red-600",
      iconBg: "bg-orange-100"
    },
    {
      icon: <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />,
      title: "মডার্ন ডিজাইন",
      description: "কাস্টমাইজড এবং ব্র্যান্ডেড...",
      gradient: "from-yellow-500 to-amber-600",
      iconBg: "bg-yellow-100"
    },
    {
      icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />,
      title: "২৪/৭ সাপোর্ট",
      description: "রাউন্ড-দ্য-ক্লক...",
      gradient: "from-indigo-500 to-blue-600",
      iconBg: "bg-indigo-100"
    },
  ],
  clients: [
    { name: "Rokomari", domain: "rokomari.com" },
    { name: "Grameenphone", domain: "grameenphone.com" },
    { name: "bKash", domain: "bkash.com" },
    { name: "Daraz", domain: "daraz.com.bd" },
    { name: "Pathao", domain: "pathao.com" },
    { name: "Shopify", domain: "shopify.com" },
    { name: "Unilever", domain: "unilever.com" },
    { name: "Google", domain: "google.com" }
  ],
  processSteps: [
    {
      step: "০১",
      title: "কন্সাল্টেশন",
      description: "আপনার বিজনেস নিডস...",
      gradient: "from-red-500 to-pink-600",
      iconBg: "bg-red-100"
    },
    {
      step: "০২",
      title: "ডিজাইন ক্রিয়েশন",
      description: "ইউনিক এবং ব্র্যান্ড-অ্যালাইনড...",
      gradient: "from-blue-500 to-cyan-600",
      iconBg: "bg-blue-100"
    },
    {
      step: "০৩",
      title: "ডেভেলপমেন্ট",
      description: "এডভান্স টেকনোলজি...",
      gradient: "from-green-500 to-emerald-600",
      iconBg: "bg-green-100"
    },
    {
      step: "০৪",
      title: "লঞ্চ সাপোর্ট",
      description: "লাইভ করার পর কন্টিনিউয়াস...",
      gradient: "from-purple-500 to-pink-600",
      iconBg: "bg-purple-100"
    },
  ],
  demoProjects: [
    {
      title: "ফ্যাশন ই-কমার্স",
      description: "মডার্ন ফ্যাশন রিটেইল স্টোর",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      title: "ইলেকট্রনিক্স শপ",
      description: "ইলেকট্রনিক গ্যাজেটস অনলাইন স্টোর",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=400&fit=crop",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      title: "ফুড ডেলিভারি",
      description: "রেস্টুরেন্ট ফুড অর্ডারিং সিস্টেম",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop",
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "বুক স্টোর",
      description: "অনলাইন বুক শপিং প্লাটফর্ম",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop",
      gradient: "from-emerald-500 to-green-600"
    },
    {
      title: "হেলথ কেয়ার",
      description: "মেডিকেল প্রোডাক্টস ই-কমার্স",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=400&fit=crop",
      gradient: "from-teal-500 to-blue-600"
    },
    {
      title: "হোম ডেকোর",
      description: "হোম ডেকোরেশন প্রোডাক্টস স্টোর",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
      gradient: "from-amber-500 to-yellow-600"
    },
    {
      title: "জুয়েলারি স্টোর",
      description: "প্রিমিয়াম জুয়েলারি কালেকশন",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "স্পোর্টস শপ",
      description: "স্পোর্টস ইকুইপমেন্ট স্টোর",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=400&fit=crop",
      gradient: "from-red-500 to-orange-600"
    },
  ]
};

const EcommerceSolution = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, Math.ceil(pageData.demoProjects.length / 4) - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const formatTitle = (title) => {
    const words = title.split(' ');
    if (words.length > 2) {
      const mid = Math.ceil(words.length / 2);
      return (
        <>
          {words.slice(0, mid).join(' ')}<br />
          {words.slice(mid).join(' ')}
        </>
      );
    }
    return title;
  };

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap');
        .font-hind {
          font-family: 'Hind Siliguri', sans-serif;
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-pink-800 to-red-900 pt-0">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-lg text-white rounded-full text-lg font-semibold border border-white/20 mb-8">
              <Sparkles className="w-5 h-5" />
              <span className="font-hind">প্রিমিয়াম ই-কমার্স সলিউশন</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-yellow-200 to-amber-200 bg-clip-text text-transparent">
                ডিজিটাল ই-কমার্স
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-2xl mx-auto font-hind">
              <span className="font-semibold text-white">আপনার বিজনেসকে নেক্সট লেভেলে নিয়ে যান</span>
              <br />
              মডার্ন, ফাস্ট এবং হাই-কনভার্সন ই-কমার্স এক্সপেরিয়েন্স
            </p>

            <div className="grid grid-cols-3 gap-3 max-w-2xl mx-auto mb-8">
              {[
                { number: '৫০০+', label: 'সফল প্রজেক্ট' },
                { number: '৯৯%', label: 'সন্তুষ্টি' },
                { number: '২৪/৭', label: 'সাপোর্ট' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20"
                >
                  <div className="text-lg md:text-xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-white/80 text-xs font-hind">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full">
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-6 md:bottom-10 z-20 w-[90%] max-w-3xl">
          <div className="bg-white rounded-3xl shadow-2xl backdrop-blur-md border border-gray-100 px-4 py-4  md:px-6 md:py-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button className="group bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 px-6 py-3 rounded-2xl font-bold text-lg shadow-md transition-all flex items-center justify-center gap-3 hover:scale-105 active:scale-95 w-full sm:w-auto">
              <span className="font-hind">ফ্রী প্রোজেক্ট কন্সাল্ট</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="group border-2 border-gray-200 text-gray-700 bg-white px-6 py-3 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto">
              <span className="font-hind">ভিউ পোর্টফোলিও</span>
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 px-3 sm:px-4 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 space-y-3 sm:space-y-4">
            <div className="inline-block bg-gradient-to-r from-red-500 to-pink-600 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg mb-2 sm:mb-6 lg:mb-10">
              আমাদের বৈশিষ্ট্য
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-8 mt-6 px-4">
              কেন আমাদের <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">সমাধান</span> বেছে নিবেন?
            </h2>
            <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-3xl mb-4 mx-auto px-4">
              আধুনিক প্রযুক্তি এবং অভিজ্ঞতার সমন্বয়ে তৈরি আপনার ব্যবসার জন্য পারফেক্ট ই-কমার্স সমাধান
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            {pageData.features.map((feature, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-xl p-3 sm:p-4 aspect-square hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden border border-gray-100 hover:border-transparent hover:-translate-y-1 h-full flex flex-col items-center justify-center text-center"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <div className="relative z-10 flex flex-col items-center justify-center space-y-2 sm:space-y-3 h-full px-1">
                  <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 ${feature.iconBg} rounded-lg sm:rounded-xl group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                    {React.cloneElement(feature.icon, { 
                      className: `w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-gray-700 group-hover:text-white transition-colors` 
                    })}
                  </div>
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-900 group-hover:text-white transition-colors leading-tight">
                    {formatTitle(feature.title)}
                  </h3>
                  <p className="hidden md:block text-xs lg:text-sm text-gray-600 group-hover:text-white/90 transition-colors leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="hidden md:flex items-center text-red-500 group-hover:text-white font-semibold pt-1 text-xs lg:text-sm">
                    বিস্তারিত
                    <ChevronRightIcon className="w-3 h-3 lg:w-4 lg:h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 px-3 sm:px-4 lg:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 space-y-3 sm:space-y-4">
            <div className="inline-block bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg mb-10 mt-8 sm:mb-6 lg:mb-10">
              আমাদের কাজের প্রক্রিয়া
            </div>
            <h2 className="text-2xl mb-8  sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 px-4">
              সহজ এবং <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">স্ট্রেইটফরওয়ার্ড</span> প্রক্রিয়া
            </h2>
            <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-3xl  mx-auto px-4">
              আপনার ডিজিটাল বিজনেস জার্নি শুরু হোক সহজ এবং পরিকল্পিত প্রক্রিয়ায়
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
              {pageData.processSteps.map((step, idx) => (
                <div key={idx} className="relative">
                  <div
                    className="group relative bg-white rounded-xl p-3 sm:p-4 aspect-square hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden border border-gray-100 hover:border-transparent hover:-translate-y-1 h-full flex flex-col items-center justify-center text-center"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                    <div className="relative z-10 flex flex-col items-center justify-center space-y-2 sm:space-y-3 h-full px-1">
                      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-gray-900 group-hover:text-white transition-colors">
                        {step.step}
                      </div>
                      <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-900 group-hover:text-white transition-colors leading-tight">
                        {formatTitle(step.title)}
                      </h3>
                      <p className="hidden md:block text-xs lg:text-sm text-gray-600 group-hover:text-white/90 transition-colors leading-relaxed">
                        {step.description}
                      </p>
                      <div className="hidden md:flex items-center text-blue-500 group-hover:text-white font-semibold pt-1 text-xs lg:text-sm">
                        জানুন
                        <ChevronRightIcon className="w-3 h-3 lg:w-4 lg:h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>

                  {idx < pageData.processSteps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 px-3 sm:px-4 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 space-y-3 sm:space-y-4">
            <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg mb-4 sm:mb-6 lg:mb-10">
              আমাদের ডেমো প্রজেক্ট
            </div>
            <h2 className="text-2xl sm:text-3xl mb-8 mt-4 md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 px-4">
              একনজরে <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">আমাদের কাজ</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              বিভিন্ন ইন্ডাস্ট্রির জন্য তৈরি আমাদের সফল ই-কমার্স প্রজেক্টস
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-3 gap-2 lg:hidden">
              {pageData.demoProjects.slice(0, 6).map((project, i) => (
                <div
                  key={i}
                  className="group relative bg-white rounded-xl overflow-hidden hover:shadow transition-all duration-300 aspect-square border border-gray-200"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300 z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent text-white z-20">
                    <h3 className="text-[10px] font-bold leading-tight">
                      {formatTitle(project.title)}
                    </h3>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-1">
                      <Eye className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden lg:block relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {Array.from({ length: Math.ceil(pageData.demoProjects.length / 4) }).map((_, slideIndex) => (
                    <div key={slideIndex} className="min-w-full grid grid-cols-4 gap-4">
                      {pageData.demoProjects.slice(slideIndex * 4, (slideIndex + 1) * 4).map((project, i) => (
                        <div
                          key={i}
                          className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 aspect-square border border-gray-200"
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white z-20">
                            <h3 className="text-base font-bold mb-1 leading-tight">
                              {formatTitle(project.title)}
                            </h3>
                            <p className="text-xs opacity-90 line-clamp-2 font-hind">
                              {project.description}
                            </p>
                          </div>
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                            <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                              <Eye className="w-5 h-5 text-white" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-xl hover:bg-white transition-all hover:scale-110 active:scale-95 disabled:opacity-30 border border-gray-300 text-gray-700"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentSlide >= Math.ceil(pageData.demoProjects.length / 4) - 1}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-xl hover:bg-white transition-all hover:scale-110 active:scale-95 disabled:opacity-30 border border-gray-300 text-gray-700"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="flex justify-center gap-2 mt-6">
                {Array.from({ length: Math.ceil(pageData.demoProjects.length / 4) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      currentSlide === index ? 'w-6 bg-gradient-to-r from-purple-500 to-pink-600' : 'w-2 bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl my-12 mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-sm inline-block bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-1 mb-5 rounded-full font-semibold mb-12">সম্মানিত ক্লায়েন্ট</h3>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900">
              <span className="bg-gradient-to-r m-10 from-purple-600 to-pink-600 bg-clip-text text-transparent">
                আমাদের বিশ্বস্ত ব্র্যান্ড পার্টনার
              </span>
            </h2>
            <p className="text-sm mb-10 text-gray-600 mt-8">নিচে কয়েকটি পরিচিত ব্র্যান্ড — যারা আমাদের উপর বিশ্বাস স্থাপন করেছেন</p>
          </div>

          <div className="mt-8 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 items-center justify-items-center">
            {pageData.clients.map((client, i) => (
              <a
                key={i}
                href={`https://${client.domain}`}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col sm:flex-row items-center justify-center gap-2 bg-white rounded-lg p-2 sm:p-3 w-full max-w-[150px] sm:max-w-[220px] shadow-sm hover:shadow-md transition"
              >
                <img
                  src={`https://logo.clearbit.com/${client.domain}`}
                  alt={client.name}
                  className="h-6 sm:h-8 md:h-10 object-contain"
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = `https://via.placeholder.com/120x40?text=${encodeURIComponent(client.name)}`; }}
                />
                <span className="text-xs sm:text-sm font-semibold text-gray-700 text-center sm:text-left">{client.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            আপনার ডিজিটাল বিজনেস শুরু করুন আজই!
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-hind">
            বিনামূল্যে কন্সাল্টেশন নিয়ে আপনার ই-কমার্স জার্নি শুরু করুন
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl transition-all flex items-center justify-center gap-3 hover:scale-105 hover:shadow-3xl active:scale-95">
              <span className="font-hind">ফ্রী কন্সাল্টেশন বুক করুন</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="group border-2 border-white/40 backdrop-blur-lg text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all hover:scale-105 active:scale-95">
              <span className="font-hind">কল ব্যাক রিকোয়েস্ট</span>
            </button>
          </div>
        </div>
      </section>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 z-50"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default EcommerceSolution;