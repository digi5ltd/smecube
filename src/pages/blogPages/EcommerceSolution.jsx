import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, Share2, BookOpen, MessageCircle, ShoppingCart, TrendingUp, Users, Shield, Globe, Package } from 'lucide-react';
import RelatedBlogs from '../../components/RelatedBlogs';
const EcommerceSolution = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30 pt-20 pb-20">
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
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold transition-colors"
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
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <ShoppingCart className="w-4 h-4" />
            <span>ই-কমার্স</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            ই-কমার্স সলিউশন: অনলাইন ব্যবসার ভবিষ্যৎ
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span className="font-medium">সারাহ আহমেদ</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>১০ অক্টোবর, ২০২৫</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>৭ মিনিট পড়া</span>
            </div>
          </div>
          
          <div className="w-full h-1 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mb-8"></div>
        </motion.header>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-8"
        >
          <img
            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600&q=80"
            alt="E-commerce Solutions"
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
          <div className="bg-green-50 border-l-4 border-green-500 pl-6 py-4 mb-8 rounded-r-lg">
            <p className="text-green-800 font-semibold text-lg">
              আধুনিক ই-কমার্স প্ল্যাটফর্মের সুবিধা এবং কীভাবে এটি আপনার ব্যবসাকে রূপান্তরিত করতে পারে।
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">ই-কমার্স বিপ্লব</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            গত এক দশকে ই-কমার্স ইন্ডাস্ট্রি বিশ্বব্যাপী একটি বিপ্লব সৃষ্টি করেছে। বাংলাদেশেও অনলাইন শপিং এর 
            জনপ্রিয়তা দিন দিন বাড়ছে, এবং স্মার্ট ব্যবসায়ীরা এই সুযোগ কাজে লাগিয়ে তাদের ব্যবসাকে নতুন উচ্চতায় নিয়ে যাচ্ছেন। ২০২৫ সালে বাংলাদেশের ই-কমার্স মার্কেট ৩ বিলিয়ন ডলার ছাড়িয়ে গেছে।
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-green-100 text-center">
              <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">বিক্রয় বৃদ্ধি</h3>
              <p className="text-gray-600 text-sm">২৪/৭ বিক্রয়ের সুযোগ</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
              <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">গ্রাহক বৃদ্ধি</h3>
              <p className="text-gray-600 text-sm">সারা দেশে গ্রাহক বিস্তার</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100 text-center">
              <Shield className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">নিরাপদ লেনদেন</h3>
              <p className="text-gray-600 text-sm">সিকিউর পেমেন্ট সিস্টেম</p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">ই-কমার্স প্ল্যাটফর্ম টাইপস</h2>

          <h3 className="text-xl font-bold text-gray-800 mb-3">১. রেডিমেড প্ল্যাটফর্ম</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Shopify, WooCommerce এর মতো প্ল্যাটফর্ম যেগুলো প্রি-বিল্ট সলিউশন অফার করে। 
            দ্রুত সেটআপ এবং ইউজার ফ্রেন্ডলি ইন্টারফেস এর জন্য আদর্শ। এই প্ল্যাটফর্মগুলো টেকনিক্যাল নলেজ ছাড়াই ব্যবস্থাপনা করা যায়।
          </p>

          <h3 className="text-xl font-bold text-gray-800 mb-3">২. কাস্টম ডেভেলপমেন্ট</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            আপনার স্পেসিফিক প্রয়োজন অনুযায়ী কাস্টম ডেভেলপড সলিউশন। 
            স্কেলাবিলিটি এবং ইউনিক ফিচার এর জন্য পারফেক্ট। বড় ব্যবসার জন্য এটি সবচেয়ে উপযুক্ত সমাধান।
          </p>

          <h3 className="text-xl font-bold text-gray-800 mb-3">৩. মার্কেটপ্লেস ইন্টিগ্রেশন</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Daraz, Evaly এর মতো এক্সিস্টিং মার্কেটপ্লেসে আপনার প্রোডাক্ট লিস্ট করা। 
            ইন্সট্যান্ট কাস্টমার বেস এর সুবিধা। এটি নতুন ব্যবসায়ীদের জন্য আদর্শ স্টার্টিং পয়েন্ট।
          </p>

          <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-white mb-8">
            <h3 className="text-2xl font-bold mb-4">ই-কমার্স সফলতার মূল উপাদান:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="bg-white text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">①</span>
                <span>ইউজার-ফ্রেন্ডলি ডিজাইন</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-white text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">②</span>
                <span>ফাস্ট লোডিং স্পিড</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-white text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">③</span>
                <span>মোবাইল রেসপনসিভ</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-white text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">④</span>
                <span>সিকিউর পেমেন্ট গেটওয়ে</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-white text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">⑤</span>
                <span>এফিশিয়েন্ট ডেলিভারি সিস্টেম</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">ই-কমার্স সফলতার স্ট্র্যাটেজি</h2>

          <h3 className="text-xl font-bold text-gray-800 mb-3">কন্টেন্ট মার্কেটিং</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            ভ্যালুএবল কন্টেন্ট তৈরি করুন যা আপনার টার্গেট অডিয়েন্সের সমস্যার সমাধান করে। 
            ব্লগ পোস্ট, ভিডিও টিউটোরিয়াল, এবং প্রোডাক্ট গাইডস তৈরি করুন। SEO অপ্টিমাইজড কন্টেন্ট তৈরি করুন যাতে গুগলে র্যাংক করে।
          </p>

          <h3 className="text-xl font-bold text-gray-800 mb-3">সোশ্যাল মিডিয়া মার্কেটিং</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            ফেসবুক, Instagram এ আপনার প্রোডাক্ট প্রমোট করুন। 
            ভিজুয়াল কন্টেন্ট এবং কাস্টমার টেস্টিমোনিয়াল শেয়ার করুন। Influencer মার্কেটিং এর মাধ্যমে আপনার রিচ বাড়ান।
          </p>

          <h3 className="text-xl font-bold text-gray-800 mb-3">এসইও অপ্টিমাইজেশন</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            সার্চ ইঞ্জিনে আপনার ভিজিবিলিটি বাড়ান। প্রোডাক্ট ডেস্ক্রিপশন, 
            মেটা ট্যাগ, এবং টেকনিক্যাল এসইও অপ্টিমাইজ করুন। লোকাল এসইও এর মাধ্যমে আপনার এলাকার গ্রাহকদের টার্গেট করুন।
          </p>

          <h3 className="text-xl font-bold text-gray-800 mb-3">ইমেল মার্কেটিং</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            কাস্টমার রিটেনশন বাড়ান। নিউজলেটার, প্রোমোশনাল অফার, 
            এবং পার্সোনালাইজড রিকমেন্ডেশন সেন্ড করুন। অটোমেটেড ইমেল সিকোয়েন্স সেট আপ করুন।
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
            <h3 className="text-xl font-bold text-blue-800 mb-3">🚀 বাংলাদেশে ই-কমার্স সুযোগ</h3>
            <ul className="text-blue-700 space-y-2">
              <li>• ডিজিটাল বাংলাদেশ এর রূপকল্প বাস্তবায়ন</li>
              <li>• মোবাইল ইন্টারনেট এর ব্যাপক প্রসার</li>
              <li>• তরুণ জনসংখ্যার টেক স্যাভি হওয়া</li>
              <li>• সরকারি ইনিশিয়েটিভ ও সাপোর্ট</li>
              <li>• Cash on Delivery এর জনপ্রিয়তা</li>
              <li>• ডিজিটাল পেমেন্ট সিস্টেমের উন্নয়ন</li>
            </ul>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">ভবিষ্যতের ট্রেন্ড</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            AI-পাওয়ার্ড পার্সোনালাইজেশন, ভয়েস কমার্স, AR/VR এক্সপেরিয়েন্স, 
            এবং সাসটেইনেবল ই-কমার্স হল ভবিষ্যতের মূল ট্রেন্ড। 
            এই ট্রেন্ডস এর সাথে এডজাস্ট করে আপনি আপনার ব্যবসাকে পরবর্তী লেভেলে নিয়ে যেতে পারেন। 
            মোবাইল ফার্স্ট অ্যাপ্রোচ, ভয়েস সার্চ অপ্টিমাইজেশন, এবং AI-বেসড প্রোডাক্ট রিকমেন্ডেশন 
            সিস্টেম ইমপ্লিমেন্ট করুন।
          </p>
        </motion.article>

        {/* Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-white text-center mb-8"
        >
          <h3 className="text-2xl font-bold mb-4">আপনার ই-কমার্স ব্যবসা শুরু করতে চান?</h3>
          <p className="text-green-100 mb-6 text-lg">
            আমাদের এক্সপার্ট টিম আপনাকে এন্ড-টু-এন্ড ই-কমার্স সলিউশন দিতে প্রস্তুত
          </p>
          <Link
            to="/services/ecommerce-solution"
            className="inline-flex items-center gap-3 bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:gap-4"
          >
            ই-কমার্স সার্ভিস দেখুন
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
            <button className="p-3 bg-green-100 text-green-600 rounded-xl hover:bg-green-200 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex items-center gap-2 text-gray-500">
            <MessageCircle className="w-5 h-5" />
            <span>কমেন্ট সেকশন শীঘ্রই আসছে...</span>
          </div>
        </motion.div>
        {/* Related Blogs Section */}
        <RelatedBlogs currentBlogPath="/blogs/business-consulting-guide" />
      </div>
    </div>
  );
};

export default EcommerceSolution;