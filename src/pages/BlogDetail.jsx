import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, Share2, MessageCircle, ArrowRight, RefreshCw } from 'lucide-react';
import { blogService } from '../services/blogServices';

const BlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadBlogPost();
    window.scrollTo(0, 0);
  }, [slug]); // Added slug as dependency

  const loadBlogPost = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await blogService.getBlogBySlug(slug);
      setPost(data.post);
      setRelatedPosts(data.relatedPosts);
    } catch (error) {
      console.error('Error loading blog post:', error);
      setError('Blog post not found');
    } finally {
      setLoading(false);
    }
  };

  // Add refresh function
  const refreshPost = async () => {
    await loadBlogPost();
  };

  const renderContent = (content) => {
    return { __html: content };
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Blog not found</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={refreshPost}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-4 hover:bg-blue-600 transition-colors"
          >
            <RefreshCw className="w-4 h-4 inline mr-2" />
            Retry
          </button>
          <Link 
            to="/blogs" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to blogs
          </Link>
        </div>
      </div>
    );
  }

  // Get gradient color based on category
  const getCategoryGradient = () => {
    const gradients = {
      'সোশ্যাল মিডিয়া': 'from-blue-500 to-purple-600',
      'ই-কমার্স': 'from-green-500 to-blue-600',
      'ওয়েব ডেভেলপমেন্ট': 'from-indigo-500 to-purple-600',
      'বিজনেস কনসালটিং': 'from-amber-500 to-orange-600',
      'ডিজিটাল মার্কেটিং': 'from-pink-500 to-rose-600',
      'চাটবট সেটআপ': 'from-teal-500 to-cyan-600',
      'ল্যান্ডিং পেজ': 'from-blue-500 to-cyan-600',
      'গ্রাফিক ডিজাইন': 'from-rose-500 to-pink-600',
    };
    return gradients[post.category.name] || 'from-blue-500 to-purple-600';
  };

  const getCategoryColor = () => {
    const colors = {
      'সোশ্যাল মিডিয়া': 'blue',
      'ই-কমার্স': 'green',
      'ওয়েব ডেভেলপমেন্ট': 'indigo',
      'বিজনেস কনসালটিং': 'amber',
      'ডিজিটাল মার্কেটিং': 'pink',
      'চাটবট সেটআপ': 'teal',
      'ল্যান্ডিং পেজ': 'blue',
      'গ্রাফিক ডিজাইন': 'rose',
    };
    return colors[post.category.name] || 'blue';
  };

  const gradient = getCategoryGradient();
  const color = getCategoryColor();

  return (
    <>
      <Helmet>
        <title>{post?.meta_title || post?.title || 'Blog'} - এসএমই কিউব</title>
        <meta name="description" content={post?.meta_description || post?.excerpt || ''} />
        <meta name="keywords" content={post?.meta_keywords || post?.category?.name || ''} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post?.meta_title || post?.title || ''} />
        <meta property="og:description" content={post?.meta_description || post?.excerpt || ''} />
        <meta property="og:image" content={post?.og_image || post?.image_url || ''} />
        <meta property="og:url" content={`https://smecube.com/blogs/${post?.slug || ''}`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post?.meta_title || post?.title || ''} />
        <meta name="twitter:description" content={post?.meta_description || post?.excerpt || ''} />
        <meta name="twitter:image" content={post?.og_image || post?.image_url || ''} />
        
        {/* Article specific */}
        <meta property="article:published_time" content={post?.created_at || ''} />
        <meta property="article:author" content={post?.author || ''} />
        <meta property="article:section" content={post?.category?.name || ''} />
        
        <link rel="canonical" href={`https://smecube.com/blogs/${post?.slug || ''}`} />
      </Helmet>

      <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-white to-${color}-50/30 pt-20 pb-20`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button with Refresh */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex justify-between items-center"
          >
            <Link
              to="/blogs"
              className={`inline-flex items-center gap-2 text-${color}-600 hover:text-${color}-700 font-semibold transition-colors`}
            >
              <ArrowLeft className="w-5 h-5" />
              সব ব্লগ দেখুন
            </Link>
            
            <button
              onClick={refreshPost}
              className={`inline-flex items-center gap-2 text-${color}-600 hover:text-${color}-700 font-semibold transition-colors`}
              title="Refresh post data"
            >
              <RefreshCw className="w-4 h-4" />
              রিফ্রেশ
            </button>
          </motion.div>

          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className={`inline-flex items-center gap-2 bg-${color}-100 text-${color}-800 px-4 py-2 rounded-full text-sm font-medium mb-4`}>
              <span>{post.category.name}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(post.created_at).toLocaleDateString('bn-BD', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.read_time}</span>
              </div>
            </div>
            
            <div className={`w-full h-1 bg-gradient-to-r ${gradient} rounded-full mb-8`}></div>
          </motion.header>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-8"
          >
            <img
              src={post.image_url}
              alt={post.title}
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
            <div className={`bg-${color}-50 border-l-4 border-${color}-500 pl-6 py-4 mb-8 rounded-r-lg`}>
              <p className={`text-${color}-800 font-semibold text-lg`}>
                {post.excerpt}
              </p>
            </div>

            {/* Main Content */}
            <div 
              className="text-gray-700 leading-relaxed mb-8"
              dangerouslySetInnerHTML={renderContent(post.content)}
            />

            {/* Sections (if exists) */}
            {post.sections && post.sections.length > 0 && (
              <div className="space-y-8 mb-8">
                {post.sections.map((section, index) => (
                  <div key={index}>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {section.title}
                    </h2>
                    <div 
                      className="text-gray-700 leading-relaxed"
                      dangerouslySetInnerHTML={renderContent(section.content)}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Key Points (if exists) */}
            {post.key_points && post.key_points.length > 0 && (
              <div className={`bg-gradient-to-r ${gradient} rounded-2xl p-8 text-white mb-8`}>
                <h3 className="text-2xl font-bold mb-4">মূল পয়েন্টসমূহ:</h3>
                <ul className="space-y-3">
                  {post.key_points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                        {index + 1}
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tips (if exists) */}
            {post.tips && post.tips.length > 0 && (
              <div className={`bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-8`}>
                <h3 className="text-xl font-bold text-yellow-800 mb-3">💡 প্রফেশনাল টিপস</h3>
                <ul className="text-yellow-700 space-y-2">
                  {post.tips.map((tip, index) => (
                    <li key={index}>• {tip}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.article>

          {/* CTA Section */}
          {post.cta_title && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className={`bg-gradient-to-r ${gradient} rounded-2xl p-8 text-white text-center mb-8`}
            >
              <h3 className="text-2xl font-bold mb-4">{post.cta_title}</h3>
              {post.cta_button_text && post.cta_button_link && (
                <Link
                  to={post.cta_button_link}
                  className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:gap-4"
                >
                  {post.cta_button_text}
                  <ArrowLeft className="w-5 h-5 rotate-180" />
                </Link>
              )}
            </motion.div>
          )}

          {/* Share Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center justify-between gap-4 py-6 border-t border-gray-200 mb-12"
          >
            <div className="flex items-center gap-4">
              <span className="text-gray-600 font-medium">শেয়ার করুন:</span>
              <button className={`p-3 bg-${color}-100 text-${color}-600 rounded-xl hover:bg-${color}-200 transition-colors`}>
                <Share2 className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex items-center gap-2 text-gray-500">
              <MessageCircle className="w-5 h-5" />
              <span>কমেন্ট সেকশন শীঘ্রই আসছে...</span>
            </div>
          </motion.div>

          {/* Related Blogs Section */}
          {relatedPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-black mb-8">
                <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                  সম্পর্কিত ব্লগ
                </span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.div
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="relative overflow-hidden rounded-xl mb-4">
                      <img
                        src={relatedPost.image_url}
                        alt={relatedPost.title}
                        className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className={`bg-${color}-500 text-white px-2 py-1 rounded-lg text-xs font-semibold`}>
                          {relatedPost.category.name}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {relatedPost.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    
                    <Link
                      to={`/blogs/${relatedPost.slug}`}
                      className={`inline-flex items-center gap-2 text-${color}-500 font-semibold text-sm hover:gap-3 transition-all duration-300`}
                    >
                      বিস্তারিত পড়ুন
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogDetail;