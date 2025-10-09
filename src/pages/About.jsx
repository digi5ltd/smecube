import React from 'react';
import { Target, Eye, Heart, Users, Award, TrendingUp, Shield, Zap, CheckCircle, Briefcase } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "গ্রাহক সেবা",
      desc: "গ্রাহক সন্তুষ্টি আমাদের প্রথম অগ্রাধিকার",
      gradient: "from-red-500 to-pink-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "মানসম্পন্ন কাজ",
      desc: "প্রতিটি প্রজেক্টে উৎকর্ষতার প্রতিশ্রুতি",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "বিশ্বস্ততা",
      desc: "স্বচ্ছতা এবং সততা আমাদের ভিত্তি",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "দ্রুততা",
      desc: "সময়মতো ডেলিভারি আমাদের বৈশিষ্ট্য",
      gradient: "from-yellow-500 to-orange-600"
    }
  ];

  const stats = [
    { number: "500+", label: "সন্তুষ্ট ক্লায়েন্ট", icon: <Users className="w-6 h-6" /> },
    { number: "1000+", label: "সম্পন্ন প্রজেক্ট", icon: <Target className="w-6 h-6" /> },
    { number: "50+", label: "দক্ষ টিম মেম্বার", icon: <Briefcase className="w-6 h-6" /> },
    { number: "5+", label: "বছরের অভিজ্ঞতা", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  const achievements = [
    "বাংলাদেশের শীর্ষ ১০ ডিজিটাল এজেন্সি",
    "৯৮% গ্রাহক সন্তুষ্টির হার",
    "দেশব্যাপী ৫০০+ সফল প্রজেক্ট",
    "২৪/৭ প্রিমিয়াম সাপোর্ট সেবা",
    "ISO সার্টিফাইড কোয়ালিটি",
    "আন্তর্জাতিক মানের সার্ভিস"
  ];

  const team = [
    { name: "মোঃ রহিম", role: "CEO & Founder", gradient: "from-blue-500 to-cyan-600" },
    { name: "ফাতিমা আক্তার", role: "Creative Director", gradient: "from-purple-500 to-pink-600" },
    { name: "করিম আহমেদ", role: "Lead Developer", gradient: "from-green-500 to-emerald-600" },
    { name: "সাবিনা খানম", role: "Marketing Head", gradient: "from-orange-500 to-red-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              আমাদের সম্পর্কে
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            SMECube একটি অগ্রণী ডিজিটাল সলিউশন প্রদানকারী প্রতিষ্ঠান। আমরা ছোট এবং মাঝারি ব্যবসার জন্য 
            সাশ্রয়ী এবং কার্যকর ডিজিটাল সেবা প্রদান করি যা আপনার ব্যবসাকে নতুন উচ্চতায় নিয়ে যেতে সাহায্য করে।
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-black bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-3xl p-10 text-white shadow-xl">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-black mb-4">আমাদের লক্ষ্য</h2>
            <p className="text-lg leading-relaxed text-white/90">
              বাংলাদেশের প্রতিটি ছোট ও মাঝারি ব্যবসাকে ডিজিটাল প্ল্যাটফর্মে সফল করে তোলা এবং 
              তাদের অনলাইন উপস্থিতি শক্তিশালী করা। আমরা বিশ্বাস করি প্রযুক্তি সবার জন্য সহজলভ্য হওয়া উচিত।
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl p-10 text-white shadow-xl">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-black mb-4">আমাদের দৃষ্টিভঙ্গি</h2>
            <p className="text-lg leading-relaxed text-white/90">
              আগামী পাঁচ বছরে বাংলাদেশের শীর্ষস্থানীয় ডিজিটাল সলিউশন প্রদানকারী হিসেবে 
              নিজেদের প্রতিষ্ঠিত করা এবং আঞ্চলিক বাজারে সম্প্রসারণ করা।
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-4xl font-black text-center mb-12">
            <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              আমাদের মূল্যবোধ
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center text-white mx-auto mb-4`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-3xl p-10 md:p-12 shadow-xl mb-20">
          <h2 className="text-4xl font-black text-center mb-10">
            <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              আমাদের অর্জন
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700 font-medium">{achievement}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <h2 className="text-4xl font-black text-center mb-4">
            <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              আমাদের টিম
            </span>
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            দক্ষ পেশাদারদের একটি নিবেদিত দল
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className={`w-24 h-24 bg-gradient-to-br ${member.gradient} rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold`}>
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-black mb-4">
            আমাদের সাথে কাজ করতে প্রস্তুত?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            আজই শুরু করুন আপনার ডিজিটাল যাত্রা
          </p>
          <button className="bg-white text-red-600 px-10 py-4 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all duration-300">
            যোগাযোগ করুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;