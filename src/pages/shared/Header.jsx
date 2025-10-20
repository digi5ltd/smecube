
import { Menu } from 'lucide-react'
import React from 'react'

const Header = ({setMobileMenuOpen, scrolled, mobileMenuOpen}) => {
    return (
        <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="flex items-center space-x-3 group cursor-pointer">
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
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        <a href="#home" className="px-4 py-2 text-gray-700 hover:text-red-500 transition-colors font-medium rounded-lg hover:bg-red-50">হোম</a>
                        <a href="#services" className="px-4 py-2 text-gray-700 hover:text-red-500 transition-colors font-medium rounded-lg hover:bg-red-50">সার্ভিস</a>
                        <a href="#pricing" className="px-4 py-2 text-gray-700 hover:text-red-500 transition-colors font-medium rounded-lg hover:bg-red-50">প্রাইসিং</a>
                        <a href="#contact" className="px-4 py-2 text-gray-700 hover:text-red-500 transition-colors font-medium rounded-lg hover:bg-red-50">যোগাযোগ</a>
                        <button className="ml-4 bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold">
                            ক্লায়েন্ট এরিয়া
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
                        {mobileMenuOpen ? <X className="w-6 h-6 text-gray-900" /> : <Menu className="w-6 h-6 text-gray-900" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-6 space-y-2 bg-white border-t">
                        <a href="#home" className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-500 rounded-lg transition-colors font-medium">হোম</a>
                        <a href="#services" className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-500 rounded-lg transition-colors font-medium">সার্ভিস</a>
                        <a href="#pricing" className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-500 rounded-lg transition-colors font-medium">প্রাইসিং</a>
                        <a href="#contact" className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-500 rounded-lg transition-colors font-medium">যোগাযোগ</a>
                        <button className="w-full mt-4 bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all font-semibold">
                            ক্লায়েন্ট এরিয়া
                        </button>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Header
