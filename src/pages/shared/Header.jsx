// src/pages/shared/Header.jsx
import { Menu, X, LogOut } from "lucide-react";
import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";  // Fixed: Two levels up

const Header = ({ setMobileMenuOpen, scrolled, mobileMenuOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAdmin, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate('/');
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white md:bg-white/95 md:backdrop-blur-sm"
      }`}
      style={{ width: "100%" }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-2 z-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl md:text-2xl">S</span>
              </div>
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                SME CUBE
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-semibold transition-all duration-300 hover:text-red-500 ${
                location.pathname === "/" ? "text-red-500" : "text-gray-700"
              }`}
            >
              হোম
            </Link>
            <Link
              to="/services"
              className={`font-semibold transition-all duration-300 hover:text-red-500 ${
                location.pathname === "/services" ? "text-red-500" : "text-gray-700"
              }`}
            >
              সার্ভিস
            </Link>
            <Link
              to="/blogs"
              className={`font-semibold transition-all duration-300 hover:text-red-500 ${
                location.pathname === "/blogs" ? "text-red-500" : "text-gray-700"
              }`}
            >
              ব্লগ
            </Link>
            <Link
              to="/tools"
              className={`font-semibold transition-all duration-300 hover:text-red-500 ${
                location.pathname === "/tools" ? "text-red-500" : "text-gray-700"
              }`}
            >
              টুলস
            </Link>
            <Link
              to="/about"
              className={`font-semibold transition-all duration-300 hover:text-red-500 ${
                location.pathname === "/about" ? "text-red-500" : "text-gray-700"
              }`}
            >
              আমাদের সম্পর্কে
            </Link>
            <Link
              to="/pricing"
              className={`font-semibold transition-all duration-300 hover:text-red-500 ${
                location.pathname === "/pricing" ? "text-red-500" : "text-gray-700"
              }`}
            >
              প্রাইসিং
            </Link>
            <Link
              to="/contact"
              className={`font-semibold transition-all duration-300 hover:text-red-500 ${
                location.pathname === "/contact" ? "text-red-500" : "text-gray-700"
              }`}
            >
              যোগাযোগ
            </Link>

            {/* Auth-based navigation */}
            {user ? (
              <>
                {isAdmin && (
                  <Link
                    to="/admin/dashboard"
                    className={`font-semibold transition-all duration-300 hover:text-red-500 ${
                      location.pathname.startsWith("/admin") ? "text-red-500" : "text-gray-700"
                    }`}
                  >
                    ড্যাশবোর্ড
                  </Link>
                )}
                {!isAdmin && (
                  <Link
                    to="/client/dashboard"
                    className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    ক্লায়েন্ট স্পেস
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-gray-700 hover:text-red-500 font-semibold transition-all duration-300"
                >
                  <LogOut className="w-5 h-5" />
                  লগআউট
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                লগইন
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden z-50 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <>
            <div className="md:hidden fixed inset-0 top-[80px] bg-white z-40 transition-all duration-300 overflow-y-auto">
              <div className="relative flex flex-col items-center pt-6 pb-12 space-y-4 px-4">
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xl font-semibold transition-all duration-300 hover:text-red-500 ${
                    location.pathname === "/" ? "text-red-500" : "text-gray-700"
                  }`}
                >
                  হোম
                </Link>
                <Link
                  to="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xl font-semibold transition-all duration-300 hover:text-red-500 ${
                    location.pathname === "/services" ? "text-red-500" : "text-gray-700"
                  }`}
                >
                  সার্ভিস
                </Link>
                <Link
                  to="/blogs"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xl font-semibold transition-all duration-300 hover:text-red-500 ${
                    location.pathname === "/blogs" ? "text-red-500" : "text-gray-700"
                  }`}
                >
                  ব্লগ
                </Link>
                <Link
                  to="/tools"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xl font-semibold transition-all duration-300 hover:text-red-500 ${
                    location.pathname === "/tools" ? "text-red-500" : "text-gray-700"
                  }`}
                >
                  টুলস
                </Link>
                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xl font-semibold transition-all duration-300 hover:text-red-500 ${
                    location.pathname === "/about" ? "text-red-500" : "text-gray-700"
                  }`}
                >
                  আমাদের সম্পর্কে
                </Link>
                <Link
                  to="/pricing"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xl font-semibold transition-all duration-300 hover:text-red-500 ${
                    location.pathname === "/pricing" ? "text-red-500" : "text-gray-700"
                  }`}
                >
                  প্রাইসিং
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xl font-semibold transition-all duration-300 hover:text-red-500 ${
                    location.pathname === "/contact" ? "text-red-500" : "text-gray-700"
                  }`}
                >
                  যোগাযোগ
                </Link>

                {/* Auth-based mobile navigation */}
                {user ? (
                  <>
                    {isAdmin && (
                      <Link
                        to="/admin/dashboard"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-xl font-semibold transition-all duration-300 hover:text-red-500 ${
                          location.pathname.startsWith("/admin") ? "text-red-500" : "text-gray-700"
                        }`}
                      >
                        ড্যাশবোর্ড
                      </Link>
                    )}
                    {!isAdmin && (
                      <Link
                        to="/client/dashboard"
                        onClick={() => setMobileMenuOpen(false)}
                        className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                      >
                        ক্লায়েন্ট স্পেস
                      </Link>
                    )}
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 text-xl font-semibold text-gray-700 hover:text-red-500 transition-all duration-300"
                    >
                      <LogOut className="w-6 h-6" />
                      লগআউট
                    </button>
                  </>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    লগইন
                  </Link>
                )}
              </div>
            </div>

            {/* Optional overlay */}
            <div
              className="fixed inset-0 bg-black/30 z-30 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;