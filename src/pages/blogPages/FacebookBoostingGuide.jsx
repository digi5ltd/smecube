import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, Share2, BookOpen, MessageCircle, Target, TrendingUp, BarChart, Users } from 'lucide-react';

const FacebookBoostingGuide = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            সব ব্লগ দেখুন
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            <span>সোশ্যাল মিডিয়া</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            ফেসবুক বুস্টিং দিয়ে আপনার ব্যবসা বাড়ান
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span className="font-medium">তানভীর হাসান</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>১৫ অক্টোবর, ২০২৫</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>৫ মিনিট পড়া</span>
            </div>
          </div>
          
          <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8"></div>
        </motion.header>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-8"
        >
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600&q=80"
            alt="Facebook Boosting Guide"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl"
          />
        </motion.div>

        {/* Article Content */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="prose prose-lg max-w-none"
        >
          <div className="bg-blue-50 border-l-4 border-blue-500 pl-6 py-4 mb-8 rounded-r-lg">
            <p className="text-blue-800 font-semibold text-lg">
              ফেসবুক বুস্টিং কীভাবে আপনার টার্গেটেড অডিয়েন্সে পৌঁছাতে এবং বিক্রয় বাড়াতে সাহায্য করতে পারে তা জানুন।
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">ফেসবুক বুস্টিং কী?</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            ফেসবুক বুস্টিং হল একটি শক্তিশালী টুল যা আপনার ব্যবসার পোস্টগুলোকে আরও বেশি মানুষের কাছে পৌঁছে দিতে সাহায্য করে। 
            এটি মূলত একটি পেইড প্রমোশন সিস্টেম যার মাধ্যমে আপনি আপনার কন্টেন্টকে স্পেসিফিক অডিয়েন্সের কাছে টার্গেট করতে পারেন।
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
              <Target className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">টার্গেটেড রিচ</h3>
              <p className="text-gray-600 text-sm">সঠিক গ্রাহকের কাছে পৌঁছান</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-green-100 text-center">
              <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">বিক্রয় বৃদ্ধি</h3>
              <p className="text-gray-600 text-sm">সেলস কনভার্শন বাড়ান</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100 text-center">
              <BarChart className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">এনালিটিক্স</h3>
              <p className="text-gray-600 text-sm">রিয়েল-টাইম ট্র্যাকিং</p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">বুস্টিং এর স্টেপ বাই স্টেপ গাইড</h2>
          
          <h3 className="text-xl font-bold text-gray-800 mb-3">স্টেপ ১: সঠিক পোস্ট সিলেক্ট করুন</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            এমন পোস্ট সিলেক্ট করুন যেটা ইতিমধ্যে ভালো এনগেজমেন্ট পেয়েছে। হাই-কোয়ালিটি ইমেজ এবং ক্যাপশন সহ পোস্ট সবচেয়ে ভালো কাজ করে। আপনার পোস্টে ক্লিয়ার ক্যাল টু অ্যাকশন (CTA) থাকা আবশ্যক।
          </p>

          <h3 className="text-xl font-bold text-gray-800 mb-3">স্টেপ ২: টার্গেট অডিয়েন্স সেট করুন</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            বয়স, লোকেশন, ইন্টারেস্ট, এবং বিহেভিয়ার এর উপর ভিত্তি করে আপনার আইডিয়াল কাস্টমার ডিফাইন করুন। কাস্টম অডিয়েন্স তৈরি করতে আপনার বিদ্যমান কাস্টমার ডেটা ব্যবহার করুন।
          </p>

          <h3 className="text-xl font-bold text-gray-800 mb-3">স্টেপ ৩: বাজেট এবং ডিউরেশন সেট করুন</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            আপনার মার্কেটিং বাজেট অনুযায়ী ডেইলি স্পেন্ডিং লিমিট এবং ক্যাম্পেইন ডিউরেশন সেট করুন। ছোট বাজেট দিয়ে শুরু করুন এবং ধীরে ধীরে স্কেল আপ করুন।
          </p>

          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white mb-8">
            <h3 className="text-2xl font-bold mb-4">বুস্টিং এর প্রধান সুবিধাসমূহ:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">✓</span>
                <span>টার্গেটেড অডিয়েন্স রিচ</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">✓</span>
                <span>কস্ট-ইফেক্টিভ মার্কেটিং</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">✓</span>
                <span>রিয়েল-টাইম পারফরম্যান্স ট্র্যাকিং</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">✓</span>
                <span>হাই কনভার্শন রেট</span>
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-3">স্টেপ ৪: পারফরম্যান্স মনিটর করুন</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            রিয়েল-টাইম এনালিটিক্স ট্র্যাক করুন এবং প্রয়োজন অনুযায়ী অ্যাডজাস্টমেন্ট করুন। রিচ, ইংগেজমেন্ট, ক্লিক-থ্রু রেট, এবং কনভার্শন মনিটর করুন।
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-8">
            <h3 className="text-xl font-bold text-yellow-800 mb-3">💡 প্রফেশনাল টিপস</h3>
            <ul className="text-yellow-700 space-y-2">
              <li>• সবসময় A/B টেস্টিং করুন</li>
              <li>• বিভিন্ন টাইম স্লটে টেস্ট করুন</li>
              <li>• আপনার কম্পিটিটর অ্যানালাইসিস করুন</li>
              <li>• রেগুলারলি আপনার স্ট্র্যাটেজি আপডেট করুন</li>
              <li>• মোবাইল ইউজারদের জন্য অপ্টিমাইজ করুন</li>
            </ul>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">কনক্লুশন</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            ফেসবুক বুস্টিং একটি শক্তিশালী টুল যখন সঠিকভাবে ব্যবহার করা হয়। স্ট্র্যাটেজিক অ্যাপ্রোচ এবং কন্টিনিউয়াস 
            অপ্টিমাইজেশনের মাধ্যমে আপনি আপনার ব্যবসার গ্রোথ এক্সপোনেনশিয়ালি বাড়াতে পারেন। মনে রাখবেন, সাকসেসফুল 
            বুস্টিং এর মূল চাবিকাঠি হল টেস্টিং, ট্র্যাকিং এবং অ্যাডজাস্টিং।
          </p>
        </motion.article>

        {/* Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white text-center mb-8"
        >
          <h3 className="text-2xl font-bold mb-4">আপনার ব্যবসার জন্য ফেসবুক বুস্টিং শুরু করতে চান?</h3>
          <p className="text-blue-100 mb-6 text-lg">
            আমাদের এক্সপার্ট টিম আপনাকে প্রফেশনাল ফেসবুক মার্কেটিং সলিউশন দিতে প্রস্তুত
          </p>
          <Link
            to="/services/facebook-boosting"
            className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:gap-4"
          >
            সার্ভিস ডিটেইলস দেখুন
            <ArrowLeft className="w-5 h-5 rotate-180" />
          </Link>
        </motion.div>

        {/* Share Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-between gap-4 py-6 border-t border-gray-200"
        >
          <div className="flex items-center gap-4">
            <span className="text-gray-600 font-medium">শেয়ার করুন:</span>
            <button className="p-3 bg-blue-100 text-blue-600 rounded-xl hover:bg-blue-200 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex items-center gap-2 text-gray-500">
            <MessageCircle className="w-5 h-5" />
            <span>কমেন্ট সেকশন শীঘ্রই আসছে...</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FacebookBoostingGuide;