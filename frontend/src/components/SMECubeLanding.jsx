import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram, Youtube, Linkedin ,ChevronDown} from 'lucide-react';

export default function SMECubeLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showUnderline, setShowUnderline] = useState(false);

  const services = [
    { title: 'ফেসবুক\nবোস্টিং', icon: '📱', link: '#facebook' },
    { title: 'ই-কমার্স\nসলুশন', icon: '🛒', link: '#ecommerce' },
    { title: 'ডেভেলপ\nওয়েবসাইট', icon: '💻', link: '#website' },
    { title: 'ডোমেইন\nহোস্টিং', icon: '🌐', link: '#hosting' },
    { title: 'ল্যান্ডিং\nপেজ', icon: '📄', link: '#landing' },
    { title: 'বাল্ক\nএসএমএস', icon: '💬', link: '#sms' },
    { title: 'বিজনেস\nকনসাল্টিং', icon: '📊', link: '#consulting' },
    { title: 'ব্রেন্ড পেইজ\nসেটআপ', icon: '🎯', link: '#brand' },
    { title: 'গ্রাফিক\nডিজাইন', icon: '🎨', link: '#design' },
    { title: 'চ্যাটবট\nসেটআপ', icon: '🤖', link: '#chatbot' },
    { title: 'ইস্যু\nফিক্সিং', icon: '🔧', link: '#fixing' },
    { title: 'বিজনেস\nট্রেইনিং', icon: '📚', link: '#training' }
  ];

  const footerLinks = [
    'হোম',
    'ল্যান্ডিং পেজ',
    'ব্যবসা পরামর্শ',
    'বাল্ক এসএমএস',
    'গ্রাফিক ডিজাইন',
    'সোশ্যাল মিডিয়া সেটআপ',
    'ফেসবুক বিজ্ঞাপন',
    'ওয়েব হোস্টিং'
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowUnderline(true);
    }, 2000); // Start underline after 2 seconds
    const hideTimer = setTimeout(() => {
      setShowUnderline(false);
    }, 4000); // Hide after 4 seconds (2 seconds visible)
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-orange-100 to-blue-200" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap');
        
        * {
          font-family: 'Hind Siliguri', sans-serif;
        }
        .underline-tick {
          position: relative;
          display: inline-block;
        }
        .underline-tick::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: black;
          animation: tickAnimation 2s forwards;
        }
        @keyframes tickAnimation {
          0% { width: 0; }
          50% { width: 100%; }
          100% { width: 0; }
        }
      `}</style>

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-[15%] py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="Logo" className="h-10 w-auto rounded-md" />
            </div>

            {/* Centered Menu */}
            <div className="flex-1 flex justify-center">
              <div className="hidden md:flex items-center space-x-8">
                <a href="#" className="text-2xl text-red-500 hover:text-rose-400 font-semibold transition">হোম</a>
                <a href="#services" className="text-2xl text-red-500 hover:text-rose-400 font-semibold transition">সার্ভিস</a>
                <a href="#ecommerce" className="text-2xl text-red-500 hover:text-rose-400 font-semibold transition">ই-কমার্স সল্যুশন</a>
                <a href="#pricing" className="text-2xl text-red-500 hover:text-rose-400 font-semibold transition">প্রাইসিং</a>
                <a href="#tools" className="text-2xl text-red-500 hover:text-rose-400 font-semibold transition">টুলস</a>
                <a href="#contact" className="text-2xl text-red-500 hover:text-rose-400 font-semibold transition">যোগাযোগ</a>
              </div>
            </div>

            {/* Right-most Button */}
            <div className="hidden md:flex items-center">
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg text-xl hover:shadow-lg transition">
                ক্লাইন্ট এরিয়া
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-600"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 border-t pt-4">
              <a href="#" className="block text-xl text-red-500 hover:text-rose-400 font-medium transition">হোম</a>
              <a href="#services" className="block text-xl text-red-500 hover:text-rose-400 font-medium transition">সার্ভিস</a>
              <a href="#ecommerce" className="block text-xl text-red-500 hover:text-rose-400 font-medium transition">ই-কমার্স সল্যুশন</a>
              <a href="#pricing" className="block text-xl text-red-500 hover:text-rose-400 font-medium transition">প্রাইসিং</a>
              <a href="#tools" className="block text-xl text-red-500 hover:text-rose-400 font-medium transition">টুলস</a>
              <a href="#contact" className="block text-xl text-red-500 hover:text-rose-400 font-medium transition">যোগাযোগ</a>
              <button className="w-full bg-red-500 text-white px-6 py-2 rounded-lg text-xl">
                ক্লাইন্ট এরিয়া
              </button>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-[15%] py-16 md:py-24">
        <div className="text-center max-w-5xl pb-10 mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight pt-5 mb-5">
            <span className="text-black">নিচ থেকে </span>
            <span className="underline-tick text-red-500">সিলেক্ট</span>
            <span className="text-black"> করুন</span>
          </h1>
        </div>
        <section id="services" className="container mx-auto px-[15%] py-2">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {services.map((service, index) => (
              <a
                key={index}
                href={service.link}
                className={`group rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-rose-300 flex flex-col items-center text-center h-full w-full max-w-[180px] ${[
                  'bg-rose-100',
                  'bg-blue-100',
                  'bg-indigo-100',
                  'bg-rose-200',
                  'bg-blue-200',
                  'bg-indigo-200',
                  'bg-rose-100',
                  'bg-blue-100',
                  'bg-indigo-100',
                  'bg-rose-200',
                  'bg-blue-200',
                  'bg-indigo-200'
                ][index % 12]}`}
              >
                <div className="text-5xl md:text-6xl mb-6 transform group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 whitespace-pre-line leading-relaxed">
                  {service.title}
                </h3>
              </a>
            ))}
          </div>
        </section>
      </section>

      {/* Footer */}
      <footer className="bg-blue-200 text-gray-700 py-12">
        <div className="container mx-auto px-[15%]">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Column 1 */}
            <div>
              <div className="flex items-center space-x-2">
                <img src="/logo.png" alt="Logo" className="siz-5 pr-5 pb-5 w-auto rounded-md" />
                </div>
              <p className="text-gray-600 mb-6">
                SME CUBE — আপনার ব্যবসার ডিজিটাল সহযাত্রী। আমরা ছোট ও মাঝারি উদ্যোক্তাদের জন্য আধুনিক, সাশ্রয়ী এবং কার্যকর প্রযুক্তি সমাধান। এক প্ল্যাটফর্মে আপনার ব্যবসার গ্রোথ, মার্কেটিং, অটোমেশন এবং ম্যানেজমেন্ট।
              </p>
              <div className="flex justify-start space-x-4">
                <a href="#" className="bg-gray-200 p-2 rounded-full text-gray-600 hover:text-rose-300 transition">
                  <Facebook size={24} />
                </a>
                <a href="#" className="bg-gray-200 p-2 rounded-full text-gray-600 hover:text-rose-300 transition">
                  <Instagram size={24} />
                </a>
                <a href="#" className="bg-gray-200 p-2 rounded-full text-gray-600 hover:text-rose-300 transition">
                  <Youtube size={24} />
                </a>
                <a href="#" className="bg-gray-200 p-2 rounded-full text-gray-600 hover:text-rose-300 transition">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="bg-gray-200 p-2 rounded-full text-gray-600 hover:text-rose-300 transition">
                  <span className="text-base">Pinterest</span>
                </a>
              </div>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">সার্ভিস সমূহ</h4>
              <div className="grid grid-cols-1 gap-2">
                <p className="text-gray-600 text-sm">ফেসবুক মার্কেটিং</p>
                <p className="text-gray-600 text-sm">ই-কমার্স সলুশন</p>
                <p className="text-gray-600 text-sm">ওয়েবসাইট ডেভোলাপমেন্ট</p>
                <p className="text-gray-600 text-sm">ডোমেইন হোস্টিং</p>
                <p className="text-gray-600 text-sm">ল্যান্ডিং পেইজ ডিজাইন</p>
                <p className="text-gray-600 text-sm">বাল্ক এসএমএস</p>
                <p className="text-gray-600 text-sm">ব্র্যান্ড পেইজ সেটআপ</p>
                <p className="text-gray-600 text-sm">বিজনেস কন্সাল্টিং</p>
                <p className="text-gray-600 text-sm">গ্রাফিক্স ডিজাইন</p>
                <p className="text-gray-600 text-sm">চ্যাটবট অটুমেশন</p>
                <p className="text-gray-600 text-sm">ইস্যু ফিক্সিং</p>
                <p className="text-gray-600 text-sm">বিজনেস ট্রেনিং</p>
              </div>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">গুরুত্বপূর্ণ লিংকসমূহ</h4>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-gray-600 text-sm">ওয়ার্কিং আওয়ারঃ</p>
                  <p className="text-gray-600 text-sm">সকাল ৯ টা থেকে বিকেল ৫ টা</p>
                  <p className="text-gray-600 text-sm">শনি – বৃহস্পতি</p>
                  <p className="text-gray-600 text-sm">সাপোর্ট আওয়ারঃ ২৪/৭</p>
                  <p className="text-gray-600 text-sm">কোম্পানি</p>
                  <p className="text-gray-600 text-sm">এফ এ কিউ</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">যোগাযোগ</p>
                  <p className="text-gray-600 text-sm">টার্মস এন্ড কন্ডিশনস</p>
                  <p className="text-gray-600 text-sm">প্রাইভেসি পলিসি</p>
                  <p className="text-gray-600 text-sm">ক্লাইন্টস</p>
                  <p className="text-gray-600 text-sm">টিউটোরিয়াল</p>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-gray-600 text-sm bg-white fixed bottom-0 left-0 right-0 h-12 flex items-center justify-center">
            ©২০২৫ সকল অধিকার সংরক্ষিত এসএমই কিউব লিমিটেড
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-rose-400 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all"
      >
        <ChevronDown size={24} className="transform rotate-180" />
      </button>
    </div>
  );
}