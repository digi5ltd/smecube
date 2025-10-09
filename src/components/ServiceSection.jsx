import { ChevronRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const ServiceSection = ({services}) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            আমাদের সেবাসমূহ
          </h2>
          <p className="text-lg text-gray-600">নিচ থেকে সার্ভিস সিলেক্ট করুন</p>
          <p className="text-gray-500 mt-2">
            আপনার ব্যবসার জন্য সম্পূর্ণ ডিজিটাল সমাধান - এক ছাদের নিচে সব সেবা
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Link 
              key={idx}
              to={service.link}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`${service.iconBg} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors`}>
                  {React.cloneElement(service.icon, { className: 'w-10 h-10 text-gray-700 group-hover:text-white transition-colors' })}
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-white transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 group-hover:text-white/90 transition-colors">
                  {service.desc}
                </p>

                <div className="flex items-center text-blue-600 font-semibold group-hover:text-white transition-colors">
                  বিস্তারিত
                  <ChevronRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
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
