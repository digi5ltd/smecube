import React from 'react'

const FeaturesSection = ({features}) => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="relative group h-full">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-pink-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                            <div className="relative bg-white rounded-3xl p-8 border-2 border-gray-100 group-hover:border-transparent shadow-lg group-hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform flex-shrink-0">
                                    {React.cloneElement(feature.icon, { className: 'w-8 h-8 text-white' })}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed flex-grow">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection
