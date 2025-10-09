import { ChevronRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const ServiceSection = ({services}) => {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-block bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg mb-10">
                        আমাদের সেবাসমূহ
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900">
                        নিচ থেকে <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">সার্ভিস</span> সিলেক্ট করুন
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        আপনার ব্যবসার জন্য সম্পূর্ণ ডিজিটাল সমাধান - এক ছাদের নিচে সব সেবা
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {services.map((service, idx) => (
                        <Link 
                            key={idx} 
                            to={service.path}
                            className="block"
                        >
                            <div className="group relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border border-gray-100 hover:border-transparent hover:-translate-y-2">
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                <div className="relative z-10 space-y-4">
                                    <div className={`inline-flex items-center justify-center w-20 h-20 ${service.iconBg} rounded-2xl group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                                        {React.cloneElement(service.icon, { className: 'w-10 h-10 text-gray-700 group-hover:text-white transition-colors' })}
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-600 group-hover:text-white/90 transition-colors leading-relaxed">
                                        {service.desc}
                                    </p>

                                    <div className="flex items-center text-red-500 group-hover:text-white font-semibold pt-2">
                                        বিস্তারিত
                                        <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServiceSection
