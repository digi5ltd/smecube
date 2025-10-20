import { ChevronRight, Lightbulb } from 'lucide-react'
import React from 'react'

const HeroSection = () => {
    return (
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden" id="home">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="inline-block">
                            <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                                🚀 বাংলাদেশের শীর্ষস্থানীয় ডিজিটাল সেবা
                            </div>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
                            আপনার ব্যবসার
                            <span className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 bg-clip-text text-transparent"> ডিজিটাল </span>
                            রূপান্তর
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            এসএমই কিউব - আপনার সম্পূর্ণ ডিজিটাল সমাধানী। ওয়েবসাইট, ই-কমার্স, মার্কেটিং থেকে শুরু করে ব্যবসায়িক পরামর্শ - সবকিছু এক জায়গায়।
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="group bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold text-lg flex items-center">
                                শুরু করুন
                                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 font-semibold text-lg">
                                আরও জানুন
                            </button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap items-center gap-8 pt-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-blue-400 to-purple-500"></div>
                                ))}
                                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-900 flex items-center justify-center text-white text-xs font-bold">
                                    +500
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center space-x-1">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <span key={i} className="text-yellow-400 text-xl">★</span>
                                    ))}
                                </div>
                                <p className="text-sm text-gray-600 font-medium">500+ সন্তুষ্ট ক্লায়েন্ট</p>
                            </div>
                        </div>
                    </div>

                    {/* Hero Image/Animation */}
                    <div className="relative">
                        <div className="relative z-10">
                            <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-6 transform hover:scale-105 transition-transform duration-500">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center">
                                            <Lightbulb className="w-7 h-7 text-white" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-lg">স্মার্ট সলিউশন</div>
                                            <div className="text-sm text-gray-500">আধুনিক প্রযুক্তি</div>
                                        </div>
                                    </div>
                                    <div className="text-3xl font-black bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                                        98%
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="font-medium">ওয়েব ডেভেলপমেন্ট</span>
                                            <span className="text-red-500 font-bold">95%</span>
                                        </div>
                                        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-gradient-to-r from-red-500 to-pink-600 rounded-full w-[95%]"></div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="font-medium">ডিজিটাল মার্কেটিং</span>
                                            <span className="text-blue-500 font-bold">88%</span>
                                        </div>
                                        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-[88%]"></div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="font-medium">গ্রাফিক ডিজাইন</span>
                                            <span className="text-purple-500 font-bold">92%</span>
                                        </div>
                                        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-[92%]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl blur-2xl opacity-50 animate-pulse"></div>
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl blur-2xl opacity-50 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
