import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Instagram, 
  Youtube, 
  Linkedin, 
  Twitter,
  Mail, 
  Phone, 
  MapPin,
  Send,
  ChevronUp,
  Heart
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top functionality
  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
    alert('ধন্যবাদ! আপনার সাবস্ক্রিপশন সফল হয়েছে।');
  };

  const services = [
    { name: 'ফেসবুক বুস্টিং', path: '/services/facebook-boosting' },
    { name: 'ই-কমার্স সলুশন', path: '/services/ecommerce-solution' },
    { name: 'ওয়েবসাইট ডেভেলপমেন্ট', path: '/services/web-development' },
    { name: 'ল্যান্ডিং পেজ', path: '/services/landing-page' },
    { name: 'বাল্ক এসএমএস', path: '/services/bulk-sms' },
    { name: 'গ্রাফিক ডিজাইন', path: '/services/graphic-design' }
  ];

  const quickLinks = [
    { name: 'হোম', path: '/' },
    { name: 'আমাদের সম্পর্কে', path: '/about' },
    { name: 'সেবাসমূহ', path: '/services' },
    { name: 'ব্লগ', path: '/blog' },
    { name: 'যোগাযোগ', path: '/contact' },
    { name: 'লগইন', path: '/login' }
  ];

  const socialLinks = [
    { 
      icon: <Facebook className="w-5 h-5" />, 
      url: 'https://facebook.com/smecube',
      name: 'Facebook',
      color: 'hover:bg-blue-600'
    },
    { 
      icon: <Instagram className="w-5 h-5" />, 
      url: 'https://instagram.com/smecube',
      name: 'Instagram',
      color: 'hover:bg-pink-600'
    },
    { 
      icon: <Youtube className="w-5 h-5" />, 
      url: 'https://youtube.com/@smecube',
      name: 'YouTube',
      color: 'hover:bg-red-600'
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      url: 'https://linkedin.com/company/smecube',
      name: 'LinkedIn',
      color: 'hover:bg-blue-700'
    },
    { 
      icon: <Twitter className="w-5 h-5" />, 
      url: 'https://twitter.com/smecube',
      name: 'Twitter',
      color: 'hover:bg-sky-500'
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500"></div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">S</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                SME CUBE
              </span>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              আপনার ব্যবসাকে ডিজিটাল যুগে এগিয়ে নিয়ে যেতে আমরা প্রদান করি সম্পূর্ণ ডিজিটাল মার্কেটিং সলুশন।
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="tel:+8801234567890" 
                className="flex items-center text-gray-300 hover:text-red-400 transition-colors group"
              >
                <Phone className="w-5 h-5 mr-3 text-red-400 group-hover:scale-110 transition-transform" />
                <span>+880 1234-567890</span>
              </a>
              <a 
                href="mailto:info@smecube.com" 
                className="flex items-center text-gray-300 hover:text-red-400 transition-colors group"
              >
                <Mail className="w-5 h-5 mr-3 text-red-400 group-hover:scale-110 transition-transform" />
                <span>info@smecube.com</span>
              </a>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-red-400 flex-shrink-0 mt-1" />
                <span>ঢাকা, বাংলাদেশ</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">দ্রুত লিংক</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-red-400 transition-colors inline-flex items-center group"
                  >
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">আমাদের সেবা</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-red-400 transition-colors inline-flex items-center group"
                  >
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">নিউজলেটার</h3>
            <p className="text-gray-300 mb-4 text-sm">
              আমাদের সর্বশেষ আপডেট এবং অফার পেতে সাবস্ক্রাইব করুন
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="mb-6">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="আপনার ইমেইল"
                  required
                  className="flex-1 px-4 py-2.5 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  <Send className="w-4 h-4 mr-2" />
                  সাবমিট
                </button>
              </div>
            </form>

            {/* Social Links */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white">সোশ্যাল মিডিয়া</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} SME CUBE. সর্বস্বত্ব সংরক্ষিত।
            </p>
            
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <Link to="/privacy-policy" className="hover:text-red-400 transition-colors">
                প্রাইভেসি পলিসি
              </Link>
              <span className="text-slate-600">|</span>
              <Link to="/terms-conditions" className="hover:text-red-400 transition-colors">
                শর্তাবলী
              </Link>
            </div>

            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500 fill-current animate-pulse" /> in Bangladesh
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-40"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
