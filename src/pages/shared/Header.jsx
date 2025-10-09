import { Menu, X } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ setMobileMenuOpen, scrolled, mobileMenuOpen }) => {
  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-gradient-to-r from-purple-200/40 via-pink-200/40 to-red-200/40 backdrop-blur-md'
      }`}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-200/20 to-pink-200/20 opacity-50"
        ></div>
        <div className="absolute top-10 left-10 w-40 h-40 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-40 h-40 bg-pink-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 via-pink-500 to-red-600 rounded-2xl flex items-center justify-center transform transition-transform group-hover:rotate-180 duration-500 shadow-lg">
                  <div className="text-white font-bold text-2xl">S</div>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight">
                  <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">sme</span>
                  <span className="text-gray-900">cube</span>
                </span>
                <div className="text-xs text-gray-500 font-medium">Digital Solutions</div>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="px-4 py-2 text-gray-700 hover:text-red-500 transition-colors font-medium rounded-lg hover:bg-red-50/50">
              হোম
            </Link>
            <Link to="/services" className="px-4 py-2 text-gray-700 hover:text-red-500 transition-colors font-medium rounded-lg hover:bg-red-50/50">
              সার্ভিস
            </Link>
            <Link to="/about" className="px-4 py-2 text-gray-700 hover:text-red-500 transition-colors font-medium rounded-lg hover:bg-red-50/50">
              আমাদের সম্পর্কে
            </Link>
            <Link to="/pricing" className="px-4 py-2 text-gray-700 hover:text-red-500 transition-colors font-medium rounded-lg hover:bg-red-50/50">
              প্রাইসিং
            </Link>
            <Link to="/contact" className="px-4 py-2 text-gray-700 hover:text-red-500 transition-colors font-medium rounded-lg hover:bg-red-50/50">
              যোগাযোগ
            </Link>
            <Link to="/login" className="ml-4 bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold">
              ক্লায়েন্ট এরিয়া
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100/50 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 space-y-2 bg-white/95 border-t backdrop-blur-md">
            <Link to="/" className="block px-4 py-3 text-gray-700 hover:bg-red-50/50 hover:text-red-500 rounded-lg transition-colors font-medium">
              হোম
            </Link>
            <Link to="/services" className="block px-4 py-3 text-gray-700 hover:bg-red-50/50 hover:text-red-500 rounded-lg transition-colors font-medium">
              সার্ভিস
            </Link>
            <Link to="/about" className="block px-4 py-3 text-gray-700 hover:bg-red-50/50 hover:text-red-500 rounded-lg transition-colors font-medium">
              আমাদের সম্পর্কে
            </Link>
            <Link to="/pricing" className="block px-4 py-3 text-gray-700 hover:bg-red-50/50 hover:text-red-500 rounded-lg transition-colors font-medium">
              প্রাইসিং
            </Link>
            <Link to="/contact" className="block px-4 py-3 text-gray-700 hover:bg-red-50/50 hover:text-red-500 rounded-lg transition-colors font-medium">
              যোগাযোগ
            </Link>
            <Link to="/login" className="block w-full mt-4 bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all font-semibold text-center">
              ক্লায়েন্ট এরিয়া
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
