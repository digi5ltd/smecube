import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, Search, Calendar, User, Folder, Clock, BookOpen, MessageCircle } from "lucide-react";

const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeFilter, setActiveFilter] = useState("all");

  // Sample blog posts data with working image URLs
  const blogPosts = [
    {
      id: 1,
      title: "ফেসবুক বুস্টিং দিয়ে আপনার ব্যবসা বাড়ান",
      excerpt: "ফেসবুক বুস্টিং কীভাবে আপনার টার্গেটেড অডিয়েন্সে পৌঁছাতে এবং বিক্রয় বাড়াতে সাহায্য করতে পারে তা জানুন।",
      category: "সোশ্যাল মিডিয়া",
      date: "১৫ অক্টোবর, ২০২৫",
      author: "তানভীর হাসান",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80",
      path: "/blogs/facebook-boosting-guide",
      readTime: "৫ মিনিট",
      featured: true
    },
    {
      id: 2,
      title: "ই-কমার্স সলিউশন: অনলাইন ব্যবসার ভবিষ্যৎ",
      excerpt: "আধুনিক ই-কমার্স প্ল্যাটফর্মের সুবিধা এবং কীভাবে এটি আপনার ব্যবসাকে রূপান্তরিত করতে পারে।",
      category: "ই-কমার্স",
      date: "১০ অক্টোবর, ২০২৫",
      author: "সারাহ আহমেদ",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80",
      path: "/blogs/ecommerce-solution",
      readTime: "৭ মিনিট",
      featured: false
    },
    {
      id: 3,
      title: "কেন আপনার ওয়েবসাইট রেসপন্সিভ হওয়া উচিত?",
      excerpt: "রেসপন্সিভ ওয়েব ডিজাইনের গুরুত্ব এবং এটি আপনার ব্যবসার জন্য কীভাবে উপকারী।",
      category: "ওয়েব ডেভেলপমেন্ট",
      date: "৫ অক্টোবর, ২০২৫",
      author: "রাকিবুল ইসলাম",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80",
      path: "/blogs/responsive-web-design",
      readTime: "৬ মিনিট",
      featured: false
    },
    {
      id: 4,
      title: "বিজনেস কনসালটিং: সফলতার পথে আপনার গাইড",
      excerpt: "ব্যবসায়িক পরামর্শ কীভাবে আপনার কৌশল উন্নত করতে এবং লক্ষ্য অর্জনে সহায়তা করে।",
      category: "বিজনেস কনসালটিং",
      date: "১ অক্টোবর, ২০২৫",
      author: "ফারিয়া রহমান",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80",
      path: "/blogs/business-consulting-guide",
      readTime: "৮ মিনিট",
      featured: true
    },
    {
      id: 5,
      title: "চাটবট সেটআপের মাধ্যমে কাস্টমার সাপোর্ট উন্নত করুন",
      excerpt: "অটোমেটেড চাটবট কীভাবে ২৪/৭ গ্রাহক সেবা প্রদান করে এবং লিড জেনারেশন বাড়ায়।",
      category: "চাটবট সেটআপ",
      date: "২৫ সেপ্টেম্বর, ২০২৫",
      author: "মাহমুদুল হক",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80",
      path: "/blogs/chatbot-setup-guide",
      readTime: "৫ মিনিট",
      featured: false
    },
    {
      id: 6,
      title: "ডিজিটাল মার্কেটিং: ২০২৫ এর ট্রেন্ড",
      excerpt: "ডিজিটাল মার্কেটিংয়ের সর্বশেষ ট্রেন্ড এবং কীভাবে সেগুলো আপনার ব্যবসার জন্য কাজে লাগাবেন।",
      category: "ডিজিটাল মার্কেটিং",
      date: "২০ সেপ্টেম্বর, ২০২৫",
      author: "নুসরাত জাহান",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80",
      path: "/blogs/digital-marketing-trends",
      readTime: "১০ মিনিট",
      featured: false
    },
    {
      id: 7,
      title: "ল্যান্ডিং পেজ ডিজাইনের কৌশল",
      excerpt: "উচ্চ কনভার্শন রেটের জন্য ল্যান্ডিং পেজ ডিজাইনের সেরা কৌশলগুলো জানুন।",
      category: "ল্যান্ডিং পেজ",
      date: "১৫ সেপ্টেম্বর, ২০২৫",
      author: "আরিফ হোসেন",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80",
      path: "/blogs/landing-page-strategies",
      readTime: "৬ মিনিট",
      featured: false
    },
    {
      id: 8,
      title: "গ্রাফিক ডিজাইনের মাধ্যমে ব্র্যান্ডিং",
      excerpt: "আকর্ষণীয় লোগো এবং ভিজুয়াল ডিজাইন দিয়ে আপনার ব্র্যান্ডকে শক্তিশালী করুন।",
      category: "গ্রাফিক ডিজাইন",
      date: "১০ সেপ্টেম্বর, ২০২৫",
      author: "শারমিন আক্তার",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80",
      path: "/blogs/graphic-design-branding",
      readTime: "৭ মিনিট",
      featured: false
    },
  ];

  // Sample reviews data
  const reviews = [
    {
      id: 1,
      name: "মো. আলমগীর হোসেন",
      role: "ই-কমার্স উদ্যোক্তা",
      review: "এসএমই কিউবের ফেসবুক বুস্টিং সার্ভিস আমার ব্যবসার বিক্রয় তিনগুণ বাড়িয়েছে। তাদের টার্গেটিং কৌশল অসাধারণ!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80",
    },
    {
      id: 2,
      name: "ফাতেমা বেগম",
      role: "ফ্রিল্যান্সার",
      review: "তাদের ওয়েব ডেভেলপমেন্ট টিম আমার জন্য একটি দুর্দান্ত রেসপন্সিভ ওয়েবসাইট তৈরি করেছে। অত্যন্ত পেশাদার সেবা!",
      rating: 4,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80",
    },
    {
      id: 3,
      name: "রেহানা আক্তার",
      role: "ব্যবসায়ী",
      review: "চাটবট সেটআপের মাধ্যমে আমার গ্রাহক সেবা এখন ২৪/৭ সক্রিয়। এসএমই কিউবের সার্ভিস সত্যিই ব্যতিক্রমী।",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80",
    },
  ];

  const categories = [
    "all",
    "সোশ্যাল মিডিয়া",
    "ই-কমার্স",
    "ওয়েব ডেভেলপমেন্ট",
    "বিজনেস কনসালটিং",
    "ডিজিটাল মার্কেটিং",
    "চাটবট সেটআপ",
    "ল্যান্ডিং পেজ",
    "গ্রাফিক ডিজাইন",
  ];

  const filters = [
    { id: "all", label: "সব পোস্ট" },
    { id: "featured", label: "ফিচার্ড" },
    { id: "popular", label: "জনপ্রিয়" },
    { id: "recent", label: "সাম্প্রতিক" },
  ];

  const filteredPosts = blogPosts.filter(
    (post) =>
      (selectedCategory === "all" || post.category === selectedCategory) &&
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter posts based on active filter
  const getFilteredPosts = () => {
    switch (activeFilter) {
      case "featured":
        return filteredPosts.filter(post => post.featured);
      case "popular":
        return filteredPosts.slice().sort((a, b) => b.id - a.id);
      case "recent":
        return filteredPosts.slice().sort((a, b) => b.id - a.id);
      default:
        return filteredPosts;
    }
  };

  const displayPosts = getFilteredPosts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 pt-20 pb-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-5 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 pt-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            <span>এসএমই কিউব ব্লগ</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              জ্ঞান ভান্ডার
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ডিজিটাল মার্কেটিং, ব্যবসায়িক উন্নয়ন, এবং প্রযুক্তি সম্পর্কিত সর্বশেষ খবর, টিপস এবং গাইড পড়ুন।
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="ব্লগ অনুসন্ধান করুন..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-4 pl-12 pr-6 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm text-gray-700 shadow-sm"
              />
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-5 py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap ${
                    activeFilter === filter.id
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-50 shadow-sm border border-gray-200"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-3 rounded-xl font-semibold transition-all duration-300 shadow-sm ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-50 hover:shadow-md border border-gray-200"
                }`}
                >
                {category === "all" ? "সব ক্যাটাগরি" : category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Posts */}
        {displayPosts.filter(post => post.featured).length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                ফিচার্ড পোস্ট
              </span>
              <div className="h-1 flex-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {displayPosts
                .filter(post => post.featured)
                .map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {post.category}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <Link
                        to={post.path}
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:gap-4 group-hover:shadow-xl"
                      >
                        বিস্তারিত পড়ুন
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        )}

        {/* All Blog Posts */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              সাম্প্রতিক ব্লগ পোস্ট
            </span>
            <div className="h-1 flex-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 flex flex-col h-full"
              >
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded-lg text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                  {post.featured && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-amber-500 text-white px-2 py-1 rounded-lg text-xs font-semibold">
                        ফিচার্ড
                      </span>
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-md">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                
                <Link
                  to={post.path}
                  className="inline-flex items-center gap-2 text-blue-500 font-semibold text-sm hover:gap-3 transition-all duration-300 group-hover:text-blue-600 mt-auto"
                >
                  বিস্তারিত পড়ুন
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* More Blogs Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              আরো ব্লগ দেখুন
            </span>
            <div className="h-1 flex-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {blogPosts
              .filter(post => !post.featured)
              .slice(0, 3)
              .map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 flex flex-col h-full"
                >
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-blue-500 text-white px-2 py-1 rounded-lg text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-md">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <Link
                    to={post.path}
                    className="inline-flex items-center gap-2 text-blue-500 font-semibold text-sm hover:gap-3 transition-all duration-300 group-hover:text-blue-600 mt-auto"
                  >
                    বিস্তারিত পড়ুন
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
          </div>

          <div className="text-center">
            <Link
              to="/blogs"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:gap-4"
            >
              বিস্তারিত দেখুন
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>

        {/* Reviews Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-black text-center mb-4">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              আমাদের গ্রাহকদের মতামত
            </span>
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            আমাদের সেবা নিয়ে গ্রাহকরা কি বলেন - সত্যিকারের অভিজ্ঞতা থেকে জানুন
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-green-200"
              >
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating 
                          ? "text-yellow-400 fill-yellow-400" 
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-lg italic">
                  "{review.review}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-green-200 group-hover:border-green-400 transition-colors"
                  />
                  <div>
                    <p className="font-bold text-gray-900 text-lg">{review.name}</p>
                    <p className="text-green-600 text-sm font-medium">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <MessageCircle className="w-4 h-4" />
              <span>আপডেট থাকুন</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-black mb-4">
              আমাদের নিউজলেটারে সাবস্ক্রাইব করুন
            </h2>
            <p className="text-lg lg:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              সর্বশেষ ব্লগ পোস্ট, টিপস এবং আপডেট সরাসরি আপনার ইনবক্সে পান। সপ্তাহে একবার।
            </p>
            
            <div className="relative max-w-md mx-auto">
              <input
                type="email"
                placeholder="আপনার ইমেইল ঠিকানা লিখুন"
                className="w-full py-4 pl-6 pr-32 rounded-2xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg border-0"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300">
                সাবস্ক্রাইব
              </button>
            </div>
            
            <p className="text-white/70 text-sm mt-4">
              কোনো স্প্যাম নেই। আপনি যেকোনো সময় আনসাবস্ক্রাইব করতে পারবেন।
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blogs;