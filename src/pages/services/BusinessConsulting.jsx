import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, Target, TrendingUp, Shield, Clock, Award, Phone, Mail, MapPin } from 'lucide-react';

const BusinessConsulting = () => {
  const [activeTab, setActiveTab] = useState('strategy');

  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'ব্যবসায়িক কৌশল',
      description: 'আপনার ব্যবসার জন্য কাস্টমাইজড কৌশলগত পরিকল্পনা এবং রোডম্যাপ তৈরি',
      features: ['বাজার বিশ্লেষণ', 'প্রতিযোগিতা মূল্যায়ন', 'কৌশলগত পরিকল্পনা']
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'বাজার উন্নয়ন',
      description: 'আপনার পণ্য ও সেবার জন্য নতুন বাজার ও গ্রাহক খুঁজে বের করুন',
      features: ['বাজার গবেষণা', 'গ্রাহক প্রোফাইলিং', 'বিক্রয় কৌশল']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'ঝুঁকি ব্যবস্থাপনা',
      description: 'ব্যবসায়িক ঝুঁকি চিহ্নিতকরণ এবং ব্যবস্থাপনা কৌশল',
      features: ['ঝুঁকি মূল্যায়ন', 'সতর্কতা পরিকল্পনা', 'বিমা কৌশল']
    }
  ];

  const processSteps = [
    {
      step: '০১',
      title: 'পরামর্শ সেশন',
      description: 'বিনামূল্যে প্রাথমিক পরামর্শ এবং প্রয়োজনীয়তা বিশ্লেষণ'
    },
    {
      step: '০২',
      title: 'কৌশল উন্নয়ন',
      description: 'আপনার ব্যবসার জন্য কাস্টমাইজড কৌশল ও পরিকল্পনা তৈরি'
    },
    {
      step: '০৩',
      title: 'বাস্তবায়ন',
      description: 'পরিকল্পনা বাস্তবায়ন এবং নিয়মিত মনিটরিং'
    },
    {
      step: '০৪',
      title: 'ফলাফল মূল্যায়ন',
      description: 'কর্মক্ষমতা ট্র্যাকিং এবং প্রয়োজনীয় সমন্বয়'
    }
  ];

  const stats = [
    { number: '500+', label: 'সন্তুষ্ট ক্লায়েন্ট' },
    { number: '95%', label: 'সাফল্যের হার' },
    { number: '15+', label: 'বছরের অভিজ্ঞতা' },
    { number: '50+', label: 'বিশেষজ্ঞ টিম' }
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap');
        .english-text {
          font-family: 'Akceler Alter', sans-serif;
        }
        .gradient-overlay {
          background: linear-gradient(135deg, rgba(128, 0, 0, 0.95) 0%, rgba(114, 47, 55, 0.95) 100%);
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 pt-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-6"
              >
                <span className="px-4 py-2 bg-rose-500/20 text-rose-300 rounded-full text-sm font-semibold border border-rose-400/30">
                  বিশেষজ্ঞ ব্যবসায়িক পরামর্শ
                </span>
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                ব্যবসায়িক পরামর্শ
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400 mt-2">
                  সেবা
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl mb-8 text-gray-300 leading-relaxed">
                আপনার ব্যবসাকে নতুন উচ্চতায় নিয়ে যান আমাদের বিশেষজ্ঞ পরামর্শদাতাদের সাথে
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {stats.slice(0, 2).map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                  >
                    <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(244, 63, 94, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-gradient-to-r from-red-500 to-rose-500 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-3 shadow-2xl transition-all"
                >
                  বিনামূল্যে পরামর্শ বুক করুন
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
                >
                  আরও জানুন
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/image-1.png" 
                  alt="Business Consulting" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-full h-96 bg-gradient-to-br from-red-500/20 to-rose-500/20 flex items-center justify-center rounded-2xl"><div class="text-white text-center"><div class="text-6xl mb-4">📊</div><div class="text-xl">Business Growth</div></div></div>';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 to-transparent"></div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl max-w-xs"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-red-500 to-rose-500 w-12 h-12 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">15+</div>
                    <div className="text-gray-600 text-sm">বছরের অভিজ্ঞতা</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white relative">
        <div className="px-[15%] relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-rose-100 text-rose-500 rounded-full text-sm font-semibold mb-4"
            >
              আমাদের সেবাসমূহ
            </motion.span>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              আমাদের পরামর্শ সেবাসমূহ
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              আমরা আপনার ব্যবসার সকল দিক কভার করি সম্পূর্ণ পরামর্শ সেবা দিয়ে
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)' }}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/5 to-rose-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <div className="text-red-600 mb-6 bg-gradient-to-br from-red-100 to-rose-100 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-red-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23e11d48' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="px-[15%] relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-white text-red-600 rounded-full text-sm font-semibold mb-4 shadow-sm"
            >
              কাজের প্রক্রিয়া
            </motion.span>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              আমাদের কাজের প্রক্রিয়া
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              সহজ এবং কার্যকরী ধাপে আপনার ব্যবসার উন্নয়ন
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 h-full relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-500/10 to-rose-500/10 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="text-6xl font-bold bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent mb-6">
                      {step.step}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 z-20">
                    <ArrowRight className="w-8 h-8 text-red-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-red-600 via-rose-600 to-red-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="px-[15%] text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              আপনার ব্যবসার রূপান্তর শুরু করুন
            </h2>
            <p className="text-xl text-red-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              আজই আমাদের বিশেষজ্ঞ দলের সাথে কথা বলুন এবং দেখুন কিভাবে আমরা আপনার ব্যবসাকে নতুন উচ্চতায় নিয়ে যেতে পারি
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(255, 255, 255, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white text-red-600 px-10 py-5 rounded-full font-semibold text-lg shadow-2xl hover:shadow-white/30 transition-all flex items-center justify-center gap-3"
              >
                বিনামূল্যে পরামর্শ নিন
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                আমাদের কাজ দেখুন
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BusinessConsulting;