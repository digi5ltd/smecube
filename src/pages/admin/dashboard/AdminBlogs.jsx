import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Save, Trash2, Plus, Edit, X, BookOpen, FolderOpen, Star as StarIcon } from 'lucide-react';
import { blogService } from '../../../services/blogServices';

const AdminBlogs = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [activeTab, setActiveTab] = useState('posts'); // posts, categories, reviews
  const [editingPost, setEditingPost] = useState(null);
  const [editingCategory, setEditingCategory] = useState(null);
  const [editingReview, setEditingReview] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAllData();
  }, []);

  const loadAllData = async () => {
    try {
      const [postsData, categoriesData, reviewsData] = await Promise.all([
        blogService.getAllPosts(),
        blogService.getCategories(),
        blogService.getReviews()
      ]);
      setPosts(postsData);
      setCategories(categoriesData);
      setReviews(reviewsData);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Posts Functions
  const addPost = () => {
    const newPost = {
      title: 'নতুন ব্লগ পোস্ট',
      slug: '',
      excerpt: 'সংক্ষিপ্ত বর্ণনা...',
      content: 'ব্লগ পোস্টের বিস্তারিত কন্টেন্ট লিখুন...',
      category_id: categories[0]?.id || 1,
      author: 'লেখকের নাম',
      image_url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop',
      read_time: '৫ মিনিট',
      featured: false,
      is_active: true,
      display_order: posts.length + 1,
      meta_title: '',
      meta_description: '',
      meta_keywords: '',
      og_image: '',
      sections: [],
      key_points: [],
      tips: [],
      cta_title: '',
      cta_button_text: '',
      cta_button_link: ''
    };
    setEditingPost({ ...newPost, isNew: true });
  };

const savePost = async () => {
  try {
    let savedPost;
    if (editingPost.isNew) {
      savedPost = await blogService.createPost(editingPost);
      setPosts([...posts, savedPost]);
    } else {
      // Use the returned updated post from the API
      savedPost = await blogService.updatePost(editingPost.id, editingPost);
      setPosts(posts.map(p => p.id === editingPost.id ? savedPost : p));
    }
    setEditingPost(null);
    alert('ব্লগ পোস্ট সফলভাবে সেভ হয়েছে!');
    
    // Add this line to force reload all data
    await loadAllData();
  } catch (error) {
    console.error('Error saving post:', error);
    alert('Error saving post: ' + (error.response?.data?.message || error.message));
  }
};

  const deletePost = async (id) => {
    if (window.confirm('এই পোস্টটি মুছে ফেলতে চান?')) {
      try {
        await blogService.deletePost(id);
        setPosts(posts.filter(p => p.id !== id));
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    }
  };

  // Category Functions
  const addCategory = () => {
    const newCategory = {
      name: 'নতুন ক্যাটাগরি',
      slug: '',
      display_order: categories.length + 1,
      is_active: true
    };
    setEditingCategory({ ...newCategory, isNew: true });
  };

  const saveCategory = async () => {
    try {
      if (editingCategory.isNew) {
        const savedCategory = await blogService.createCategory(editingCategory);
        setCategories([...categories, savedCategory]);
      } else {
        await blogService.updateCategory(editingCategory.id, editingCategory);
        setCategories(categories.map(c => c.id === editingCategory.id ? editingCategory : c));
      }
      setEditingCategory(null);
      alert('ক্যাটাগরি সফলভাবে সেভ হয়েছে!');
    } catch (error) {
      console.error('Error saving category:', error);
      alert('Error saving category');
    }
  };

  const deleteCategory = async (id) => {
    if (window.confirm('এই ক্যাটাগরি মুছে ফেলতে চান?')) {
      try {
        await blogService.deleteCategory(id);
        setCategories(categories.filter(c => c.id !== id));
      } catch (error) {
        console.error('Error deleting category:', error);
      }
    }
  };

  // Review Functions
  const addReview = () => {
    const newReview = {
      name: 'গ্রাহকের নাম',
      role: 'পদবী',
      review: 'রিভিউ লিখুন...',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      display_order: reviews.length + 1,
      is_active: true
    };
    setEditingReview({ ...newReview, isNew: true });
  };

  const saveReview = async () => {
    try {
      if (editingReview.isNew) {
        const savedReview = await blogService.createReview(editingReview);
        setReviews([...reviews, savedReview]);
      } else {
        await blogService.updateReview(editingReview.id, editingReview);
        setReviews(reviews.map(r => r.id === editingReview.id ? editingReview : r));
      }
      setEditingReview(null);
      alert('রিভিউ সফলভাবে সেভ হয়েছে!');
    } catch (error) {
      console.error('Error saving review:', error);
      alert('Error saving review');
    }
  };

  const deleteReview = async (id) => {
    if (window.confirm('এই রিভিউ মুছে ফেলতে চান?')) {
      try {
        await blogService.deleteReview(id);
        setReviews(reviews.filter(r => r.id !== id));
      } catch (error) {
        console.error('Error deleting review:', error);
      }
    }
  };

  // Helper functions for editing post
  const addSection = () => {
    const newSections = [...(editingPost.sections || []), { title: 'নতুন সেকশন', content: 'কন্টেন্ট...' }];
    setEditingPost({ ...editingPost, sections: newSections });
  };

  const removeSection = (index) => {
    const newSections = editingPost.sections.filter((_, i) => i !== index);
    setEditingPost({ ...editingPost, sections: newSections });
  };

  const updateSection = (index, field, value) => {
    const newSections = [...editingPost.sections];
    newSections[index][field] = value;
    setEditingPost({ ...editingPost, sections: newSections });
  };

  const addKeyPoint = () => {
    const newPoints = [...(editingPost.key_points || []), 'নতুন পয়েন্ট'];
    setEditingPost({ ...editingPost, key_points: newPoints });
  };

  const removeKeyPoint = (index) => {
    const newPoints = editingPost.key_points.filter((_, i) => i !== index);
    setEditingPost({ ...editingPost, key_points: newPoints });
  };

  const updateKeyPoint = (index, value) => {
    const newPoints = [...editingPost.key_points];
    newPoints[index] = value;
    setEditingPost({ ...editingPost, key_points: newPoints });
  };

  const addTip = () => {
    const newTips = [...(editingPost.tips || []), 'নতুন টিপ'];
    setEditingPost({ ...editingPost, tips: newTips });
  };

  const removeTip = (index) => {
    const newTips = editingPost.tips.filter((_, i) => i !== index);
    setEditingPost({ ...editingPost, tips: newTips });
  };

  const updateTip = (index, value) => {
    const newTips = [...editingPost.tips];
    newTips[index] = value;
    setEditingPost({ ...editingPost, tips: newTips });
  };

  if (loading) {
    return (
      <div className="p-6 flex justify-center items-center h-64">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10 bg-gray-100 min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap');
        .font-hind {
          font-family: 'Hind Siliguri', sans-serif;
        }
      `}</style>

      <h1 className="text-3xl font-bold text-gray-800 mb-8 font-hind">Blog Management</h1>

      {/* Tabs */}
      <div className="flex gap-4 mb-8 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('posts')}
          className={`px-6 py-3 font-semibold font-hind transition-colors border-b-2 ${
            activeTab === 'posts'
              ? 'border-blue-500 text-blue-600'
              : 'border-transparent text-gray-600 hover:text-gray-900'
          }`}
        >
          <BookOpen className="inline-block w-5 h-5 mr-2" />
          ব্লগ পোস্ট ({posts.length})
        </button>
        <button
          onClick={() => setActiveTab('categories')}
          className={`px-6 py-3 font-semibold font-hind transition-colors border-b-2 ${
            activeTab === 'categories'
              ? 'border-blue-500 text-blue-600'
              : 'border-transparent text-gray-600 hover:text-gray-900'
          }`}
        >
          <FolderOpen className="inline-block w-5 h-5 mr-2" />
          ক্যাটাগরি ({categories.length})
        </button>
        <button
          onClick={() => setActiveTab('reviews')}
          className={`px-6 py-3 font-semibold font-hind transition-colors border-b-2 ${
            activeTab === 'reviews'
              ? 'border-blue-500 text-blue-600'
              : 'border-transparent text-gray-600 hover:text-gray-900'
          }`}
        >
          <StarIcon className="inline-block w-5 h-5 mr-2" />
          রিভিউ ({reviews.length})
        </button>
      </div>

      {/* Posts Tab */}
      {activeTab === 'posts' && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white p-6 rounded-2xl shadow-md"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold font-hind text-gray-700">ব্লগ পোস্ট</h2>
            <button
              onClick={addPost}
              className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-600"
            >
              <Plus size={18} /> নতুন পোস্ট
            </button>
          </div>

          {editingPost ? (
            <div className="space-y-6 border-t pt-6">
              <h3 className="text-xl font-bold font-hind">
                {editingPost.isNew ? 'নতুন পোস্ট তৈরি করুন' : 'পোস্ট এডিট করুন'}
              </h3>

              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold mb-1 font-hind">শিরোনাম *</label>
                  <input
                    type="text"
                    value={editingPost.title}
                    onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1 font-hind">ক্যাটাগরি *</label>
                  <select
                    value={editingPost.category_id}
                    onChange={(e) => setEditingPost({ ...editingPost, category_id: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                  >
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
              <label className="block font-semibold mb-1 font-hind">Slug (URL)</label>
              <input
                type="text"
                value={editingPost.slug || ''}
                onChange={(e) => setEditingPost({ ...editingPost, slug: e.target.value })}
                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                placeholder="facebook-boosting-guide (auto-generated if left empty)"
              />
              <p className="text-xs text-gray-500 mt-1">Leave empty to auto-generate from title</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold mb-1 font-hind">লেখক *</label>
                  <input
                    type="text"
                    value={editingPost.author}
                    onChange={(e) => setEditingPost({ ...editingPost, author: e.target.value })}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1 font-hind">পড়ার সময় *</label>
                  <input
                    type="text"
                    value={editingPost.read_time}
                    onChange={(e) => setEditingPost({ ...editingPost, read_time: e.target.value })}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                    placeholder="৫ মিনিট"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-1 font-hind">ইমেজ URL *</label>
                <input
                  type="url"
                  value={editingPost.image_url}
                  onChange={(e) => setEditingPost({ ...editingPost, image_url: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                />
                {editingPost.image_url && (
                  <img src={editingPost.image_url} alt="Preview" className="mt-2 w-full h-48 object-cover rounded-lg" />
                )}
              </div>

              <div>
                <label className="block font-semibold mb-1 font-hind">সংক্ষিপ্ত বর্ণনা *</label>
                <textarea
                  value={editingPost.excerpt}
                  onChange={(e) => setEditingPost({ ...editingPost, excerpt: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                  rows="3"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1 font-hind">মূল কন্টেন্ট *</label>
                <textarea
                  value={editingPost.content}
                  onChange={(e) => setEditingPost({ ...editingPost, content: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                  rows="10"
                  placeholder="HTML ফরম্যাটে লিখতে পারবেন"
                />
              </div>

              {/* SEO Section */}
              <div className="border-t pt-6">
                <h4 className="text-lg font-bold font-hind mb-4">SEO সেটিংস</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block font-semibold mb-1 font-hind">Meta Title</label>
                    <input
                      type="text"
                      value={editingPost.meta_title || ''}
                      onChange={(e) => setEditingPost({ ...editingPost, meta_title: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                      placeholder="SEO এর জন্য টাইটেল"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1 font-hind">Meta Description</label>
                    <textarea
                      value={editingPost.meta_description || ''}
                      onChange={(e) => setEditingPost({ ...editingPost, meta_description: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                      rows="2"
                      placeholder="SEO এর জন্য বর্ণনা"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1 font-hind">Meta Keywords</label>
                    <input
                      type="text"
                      value={editingPost.meta_keywords || ''}
                      onChange={(e) => setEditingPost({ ...editingPost, meta_keywords: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                      placeholder="কমা দিয়ে আলাদা করুন"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1 font-hind">OG Image URL</label>
                    <input
                      type="url"
                      value={editingPost.og_image || ''}
                      onChange={(e) => setEditingPost({ ...editingPost, og_image: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                      placeholder="সোশ্যাল মিডিয়ার জন্য ইমেজ"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Sections */}
              <div className="border-t pt-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-bold font-hind">অতিরিক্ত সেকশন</h4>
                  <button
                    onClick={addSection}
                    className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm"
                  >
                    + সেকশন যোগ করুন
                  </button>
                </div>
                {editingPost.sections && editingPost.sections.map((section, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold font-hind">সেকশন {index + 1}</span>
                      <button
                        onClick={() => removeSection(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X size={18} />
                      </button>
                    </div>
                    <input
                      type="text"
                      value={section.title}
                      onChange={(e) => updateSection(index, 'title', e.target.value)}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none mb-2"
                      placeholder="সেকশনের শিরোনাম"
                    />
                    <textarea
                      value={section.content}
                      onChange={(e) => updateSection(index, 'content', e.target.value)}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                      rows="4"
                      placeholder="সেকশনের কন্টেন্ট"
                    />
                  </div>
                ))}
              </div>

              {/* Key Points */}
              <div className="border-t pt-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-bold font-hind">মূল পয়েন্ট</h4>
                  <button
                    onClick={addKeyPoint}
                    className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm"
                  >
                    + পয়েন্ট যোগ করুন
                  </button>
                </div>
                {editingPost.key_points && editingPost.key_points.map((point, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={point}
                      onChange={(e) => updateKeyPoint(index, e.target.value)}
                      className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                      placeholder={`পয়েন্ট ${index + 1}`}
                    />
                    <button
                      onClick={() => removeKeyPoint(index)}
                      className="text-red-500 hover:text-red-700 px-2"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Tips */}
              <div className="border-t pt-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-bold font-hind">প্রফেশনাল টিপস</h4>
                  <button
                    onClick={addTip}
                    className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm"
                  >
                    + টিপ যোগ করুন
                  </button>
                </div>
                {editingPost.tips && editingPost.tips.map((tip, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={tip}
                      onChange={(e) => updateTip(index, e.target.value)}
                      className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                      placeholder={`টিপ ${index + 1}`}
                    />
                    <button
                      onClick={() => removeTip(index)}
                      className="text-red-500 hover:text-red-700 px-2"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="border-t pt-6">
                <h4 className="text-lg font-bold font-hind mb-4">Call to Action</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block font-semibold mb-1 font-hind">CTA শিরোনাম</label>
                    <input
                      type="text"
                      value={editingPost.cta_title || ''}
                      onChange={(e) => setEditingPost({ ...editingPost, cta_title: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                      placeholder="যেমন: আপনার ব্যবসার জন্য এই সার্ভিস চান?"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold mb-1 font-hind">বাটন টেক্সট</label>
                      <input
                        type="text"
                        value={editingPost.cta_button_text || ''}
                        onChange={(e) => setEditingPost({ ...editingPost, cta_button_text: e.target.value })}
                        className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                        placeholder="সার্ভিস দেখুন"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-1 font-hind">বাটন লিঙ্ক</label>
                      <input
                        type="text"
                        value={editingPost.cta_button_link || ''}
                        onChange={(e) => setEditingPost({ ...editingPost, cta_button_link: e.target.value })}
                        className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                        placeholder="/services/web-development"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Settings */}
              <div className="border-t pt-6">
                <h4 className="text-lg font-bold font-hind mb-4">সেটিংস</h4>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={editingPost.featured}
                      onChange={(e) => setEditingPost({ ...editingPost, featured: e.target.checked })}
                      className="w-5 h-5"
                    />
                    <span className="font-semibold font-hind">ফিচার্ড পোস্ট</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={editingPost.is_active}
                      onChange={(e) => setEditingPost({ ...editingPost, is_active: e.target.checked })}
                      className="w-5 h-5"
                    />
                    <span className="font-semibold font-hind">সক্রিয়</span>
                  </label>
                </div>
                <div className="mt-4">
                  <label className="block font-semibold mb-1 font-hind">Display Order</label>
                  <input
                    type="number"
                    value={editingPost.display_order}
                    onChange={(e) => setEditingPost({ ...editingPost, display_order: parseInt(e.target.value) })}
                    className="w-32 px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 border-t pt-6">
                <button
                  onClick={savePost}
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600"
                >
                  <Save size={18} /> সেভ করুন
                </button>
                <button
                  onClick={() => setEditingPost(null)}
                  className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300"
                >
                  বাতিল
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {posts.map((post) => (
                <div key={post.id} className="border border-gray-200 rounded-lg p-4 flex gap-4">
                  <img
                    src={post.image_url}
                    alt={post.title}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-lg font-hind">{post.title}</h3>
                        <p className="text-gray-600 text-sm font-hind">{post.category?.name}</p>
                        <p className="text-gray-500 text-sm">
                          {post.author} • {post.read_time}
                        </p>
                        {post.featured && (
                          <span className="inline-block bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-semibold mt-2">
                            ফিচার্ড
                          </span>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setEditingPost(post)}
                          className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-600"
                        >
                          <Edit size={16} />
                        </button>
                        <button
                          onClick={() => deletePost(post.id)}
                          className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mt-2 line-clamp-2">{post.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.section>
      )}

      {/* Categories Tab */}
      {activeTab === 'categories' && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white p-6 rounded-2xl shadow-md"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold font-hind text-gray-700">ক্যাটাগরি</h2>
            <button
              onClick={addCategory}
              className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-600"
            >
              <Plus size={18} /> নতুন ক্যাটাগরি
            </button>
          </div>

          {editingCategory ? (
            <div className="space-y-4 border-t pt-6">
              <h3 className="text-xl font-bold font-hind">
                {editingCategory.isNew ? 'নতুন ক্যাটাগরি' : 'ক্যাটাগরি এডিট'}
              </h3>
              <div>
                <label className="block font-semibold mb-1 font-hind">নাম *</label>
                <input
                  type="text"
                  value={editingCategory.name}
                  onChange={(e) => setEditingCategory({ ...editingCategory, name: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1 font-hind">Display Order</label>
                <input
                  type="number"
                  value={editingCategory.display_order}
                  onChange={(e) => setEditingCategory({ ...editingCategory, display_order: parseInt(e.target.value) })}
                  className="w-32 px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                />
              </div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={editingCategory.is_active}
                  onChange={(e) => setEditingCategory({ ...editingCategory, is_active: e.target.checked })}
                  className="w-5 h-5"
                />
                <span className="font-semibold font-hind">সক্রিয়</span>
              </label>
              <div className="flex gap-4">
                <button
                  onClick={saveCategory}
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600"
                >
                  <Save size={18} /> সেভ করুন
                </button>
                <button
                  onClick={() => setEditingCategory(null)}
                  className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300"
                >
                  বাতিল
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {categories.map((category) => (
                <div key={category.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg font-hind">{category.name}</h3>
                      <p className="text-gray-500 text-sm">
                        Posts: {posts.filter(p => p.category_id === category.id).length}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setEditingCategory(category)}
                        className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-600"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => deleteCategory(category.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.section>
      )}

      {/* Reviews Tab */}
      {activeTab === 'reviews' && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white p-6 rounded-2xl shadow-md"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold font-hind text-gray-700">রিভিউ</h2>
            <button
              onClick={addReview}
              className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-600"
            >
              <Plus size={18} /> নতুন রিভিউ
            </button>
          </div>

          {editingReview ? (
            <div className="space-y-4 border-t pt-6">
              <h3 className="text-xl font-bold font-hind">
                {editingReview.isNew ? 'নতুন রিভিউ' : 'রিভিউ এডিট'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold mb-1 font-hind">নাম *</label>
                  <input
                    type="text"
                    value={editingReview.name}
                    onChange={(e) => setEditingReview({ ...editingReview, name: e.target.value })}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1 font-hind">পদবী *</label>
                  <input
                    type="text"
                    value={editingReview.role}
                    onChange={(e) => setEditingReview({ ...editingReview, role: e.target.value })}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block font-semibold mb-1 font-hind">রিভিউ *</label>
                <textarea
                  value={editingReview.review}
                  onChange={(e) => setEditingReview({ ...editingReview, review: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                  rows="4"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold mb-1 font-hind">রেটিং *</label>
                  <select
                    value={editingReview.rating}
                    onChange={(e) => setEditingReview({ ...editingReview, rating: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>{num} ⭐</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-semibold mb-1 font-hind">Avatar URL *</label>
                  <input
                    type="url"
                    value={editingReview.avatar}
                    onChange={(e) => setEditingReview({ ...editingReview, avatar: e.target.value })}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                  />
                </div>
              </div>
              {editingReview.avatar && (
                <img src={editingReview.avatar} alt="Preview" className="w-20 h-20 rounded-full object-cover" />
              )}
              <div className="flex gap-4">
                <button
                  onClick={saveReview}
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600"
                >
                  <Save size={18} /> সেভ করুন
                </button>
                <button
                  onClick={() => setEditingReview(null)}
                  className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300"
                >
                  বাতিল
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {reviews.map((review) => (
                <div key={review.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex gap-4 mb-3">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold font-hind">{review.name}</h3>
                      <p className="text-gray-600 text-sm font-hind">{review.role}</p>
                      <div className="flex gap-1 mt-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400">⭐</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-3 italic">"{review.review}"</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setEditingReview(review)}
                      className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-600"
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => deleteReview(review.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.section>
      )}
    </div>
  );
};

export default AdminBlogs;