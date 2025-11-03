import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, Star, Search, Calendar, User, Clock, BookOpen, MessageCircle } from "lucide-react";
import { blogService } from "../services/blogServices";

const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeFilter, setActiveFilter] = useState("all");
  const [blogPosts, setBlogPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBlogData();
  }, []);

  const loadBlogData = async () => {
    try {
      const data = await blogService.getBlogPageData();
      setBlogPosts(data.posts);
      setCategories(data.categories);
      setReviews(data.reviews);
    } catch (error) {
      console.error('Error loading blog data:', error);
    } finally {
      setLoading(false);
    }
  };

  const filters = [
    { id: "all", label: "সব পোস্ট" },
    { id: "featured", label: "ফিচার্ড" },
    { id: "popular", label: "জনপ্রিয়" },
    { id: "recent", label: "সাম্প্রতিক" },
  ];

  const filteredPosts = blogPosts.filter(
    (post) =>
      (selectedCategory === "all" || post.category.slug === selectedCategory) &&
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getFilteredPosts = () => {
    switch (activeFilter) {
      case "featured":
        return filteredPosts.filter(post => post.featured);
      case "popular":
        return filteredPosts.slice().sort((a, b) => b.id - a.id);
      case "recent":
        return filteredPosts.slice().sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      default:
        return filteredPosts;
    }
  };

  const displayPosts = getFilteredPosts();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>ব্লগ - এসএমই কিউব | ডিজিটাল মার্কেটিং ও ব্যবসায়িক টিপস</title>
        <meta name="description" content="ডিজিটাল মার্কেটিং, ব্যবসায়িক উন্নয়ন, এবং প্রযুক্তি সম্পর্কিত সর্বশেষ খবর, টিপস এবং গাইড পড়ুন এসএমই কিউব ব্লগে।" />
        <meta name="keywords" content="ডিজিটাল মার্কেটিং, ই-কমার্স, ওয়েব ডেভেলপমেন্ট, ব্যবসায়িক টিপস, বাংলাদেশ" />
        <meta property="og:title" content="ব্লগ - এসএমই কিউব" />
        <meta property="og:description" content="ডিজিটাল মার্কেটিং ও ব্যবসায়িক টিপস" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://smecube.com/blogs" />
      </Helmet>

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
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-5 py-3 rounded-xl font-semibold transition-all duration-300 shadow-sm ${
                  selectedCategory === "all"
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-50 hover:shadow-md border border-gray-200"
                }`}
              >
                সব ক্যাটাগরি
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.slug)}
                  className={`px-5 py-3 rounded-xl font-semibold transition-all duration-300 shadow-sm ${
                    selectedCategory === category.slug
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-50 hover:shadow-md border border-gray-200"
                  }`}
                >
                  {category.name}
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
                          src={post.image_url}
                          alt={post.title}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {post.category.name}
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
                            <span>{new Date(post.created_at).toLocaleDateString('bn-BD')}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{post.read_time}</span>
                          </div>
                        </div>
                        
                        <Link
                          to={`/blogs/${post.slug}`}
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
                      src={post.image_url}
                      alt={post.title}
                      className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-blue-500 text-white px-2 py-1 rounded-lg text-xs font-semibold">
                        {post.category.name}
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
                    </div>
                    <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-md">
                      <Clock className="w-3 h-3" />
                      {post.read_time}
                    </span>
                  </div>
                  
                  <Link
                    to={`/blogs/${post.slug}`}
                    className="inline-flex items-center gap-2 text-blue-500 font-semibold text-sm hover:gap-3 transition-all duration-300 group-hover:text-blue-600 mt-auto"
                  >
                    বিস্তারিত পড়ুন
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Reviews Section */}
          {reviews.length > 0 && (
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
          )}

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
    </>
  );
};

export default Blogs;