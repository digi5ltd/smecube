import { useState } from "react";
import { 
    Save, 
    Plus, 
    Trash2, 
    Eye, 
    Star, 
    TrendingUp, 
    Zap,
    CheckCircle,
    ArrowRight,
    Users,
    Share2,
    BarChart3,
    Sparkles
} from "lucide-react";

const AdminBrandPageSetup = () => {
    // Hero Section State
    const [heroData, setHeroData] = useState({
        title: "ব্র্যান্ড পেজ সেটআপ",
        subtitle: "এবং ম্যানেজমেন্ট",
        description: "আপনার ব্র্যান্ডকে সোশ্যাল মিডিয়ায় প্রতিষ্ঠিত করুন আমাদের বিশেষজ্ঞ টিমের সাথে",
        cta1: "ফ্রি কনসাল্টেশন নিন",
        cta2: "প্যাকেজ দেখুন"
    });

    // Features Section State
    const [features, setFeatures] = useState([
        {
            id: 1,
            icon: "👁️",
            title: "প্রফেশনাল ডিজাইন",
            description: "আপনার ব্র্যান্ডের জন্য আকর্ষণীয় এবং প্রফেশনাল ডিজাইন"
        },
        {
            id: 2,
            icon: "👥",
            title: "গ্রাহক বেস বৃদ্ধি",
            description: "কৌশলগত কন্টেন্ট দ্রুত গ্রাহক বেস বৃদ্ধি"
        },
        {
            id: 3,
            icon: "📅",
            title: "কন্টেন্ট পরিকল্পনা",
            description: "মাসিক কন্টেন্ট ক্যালেন্ডার এবং পরিকল্পনা"
        },
        {
            id: 4,
            icon: "📊",
            title: "বিশ্লেষণ রিপোর্ট",
            description: "নিয়মিত কর্মক্ষমতা বিশ্লেষণ এবং রিপোর্ট"
        }
    ]);

    // Packages Section State
    const [packages, setPackages] = useState([
        {
            id: 1,
            name: "বেসিক",
            price: "৫,০০০",
            duration: "মাসিক",
            features: [
                "প্রফেশনাল পেজ সেটআপ",
                "কভার ও প্রোফাইল ফটো",
                "বায়ো অপটিমাইজেশন",
                "প্রাথমিক কন্টেন্ট পরিকল্পনা",
                "সাপ্তাহিক পোস্ট (৪টি)"
            ],
            recommended: false,
            gradient: "from-gray-600 to-gray-700"
        },
        {
            id: 2,
            name: "প্রিমিয়াম",
            price: "১০,০০০",
            duration: "মাসিক",
            features: [
                "সমস্ত বেসিক ফিচার",
                "কাস্টম গ্রাফিক্স ডিজাইন",
                "মাসিক কন্টেন্ট ক্যালেন্ডার",
                "সাপ্তাহিক পোস্ট (৮টি)",
                "এনগেজমেন্ট ম্যানেজমেন্ট",
                "সাপ্তাহিক রিপোর্ট",
                "বেসিক এডস সেটআপ"
            ],
            recommended: true,
            gradient: "from-purple-500 to-pink-500"
        },
        {
            id: 3,
            name: "এন্টারপ্রাইজ",
            price: "২০,০০০",
            duration: "মাসিক",
            features: [
                "সমস্ত প্রিমিয়াম ফিচার",
                "ডেডিকেটেড ম্যানেজার",
                "ডেইলি পোস্ট (৩০টি)",
                "এডভান্সড এডস ক্যাম্পেইন",
                "কস্টম চ্যাটবট সেটআপ",
                "রিয়েল-টাইম মনিটরিং",
                "প্রাইওরিটি সাপোর্ট"
            ],
            recommended: false,
            gradient: "from-purple-500 to-pink-500"
        }
    ]);

    // Success Stories State
    const [successStories, setSuccessStories] = useState([
        {
            id: 1,
            brand: "ফ্যাশন হাব",
            growth: "৩৫০%",
            description: "৩ মাসে ফলোয়ার ১০,০০০ তে বৃদ্ধি",
            icon: "📈"
        },
        {
            id: 2,
            brand: "টেক সলিউশন",
            growth: "৫০০%",
            description: "রিচ ৫x বৃদ্ধি এবং লিড জেনারেশন",
            icon: "✨"
        },
        {
            id: 3,
            brand: "ফুডি বাংলা",
            growth: "২৮০%",
            description: "এনগেজমেন্ট ৩x বৃদ্ধি এবং সেলস বৃদ্ধি",
            icon: "⭐"
        }
    ]);

    // Testimonials State
    const [testimonials, setTestimonials] = useState([
        {
            id: 1,
            name: "আহমেদ রহমান",
            company: "টেক স্টার্টআপ",
            text: "SME Cube আমাদের ব্র্যান্ডকে সোশ্যাল মিডিয়ায় প্রতিষ্ঠিত করতে অসাধারণ সাহায্য করেছে।",
            rating: 5
        },
        {
            id: 2,
            name: "ফারিহা আক্তার",
            company: "ফ্যাশন ব্র্যান্ড",
            text: "প্রফেশনাল সেবা এবং দ্রুত ফলাফল। আমাদের ফলোয়ার বেস তিনগুণ বেড়েছে।",
            rating: 5
        }
    ]);

    const [notification, setNotification] = useState({
        show: false,
        message: "",
        type: ""
    });

    // Hero Section Handlers
    const handleHeroChange = (field, value) => {
        setHeroData(prev => ({ ...prev, [field]: value }));
    };

    // Features Handlers
    const handleFeatureChange = (id, field, value) => {
        setFeatures(prev => 
            prev.map(feature => 
                feature.id === id ? { ...feature, [field]: value } : feature
            )
        );
    };

    const addFeature = () => {
        const newFeature = {
            id: features.length + 1,
            icon: "🔧",
            title: "নতুন ফিচার",
            description: "ফিচারের বিবরণ"
        };
        setFeatures(prev => [...prev, newFeature]);
    };

    const removeFeature = (id) => {
        setFeatures(prev => prev.filter(feature => feature.id !== id));
    };

    // Packages Handlers
    const handlePackageChange = (id, field, value) => {
        setPackages(prev => 
            prev.map(pkg => 
                pkg.id === id ? { ...pkg, [field]: value } : pkg
            )
        );
    };

    const handlePackageFeatureChange = (packageId, featureIndex, value) => {
        setPackages(prev => 
            prev.map(pkg => {
                if (pkg.id === packageId) {
                    const updatedFeatures = [...pkg.features];
                    updatedFeatures[featureIndex] = value;
                    return { ...pkg, features: updatedFeatures };
                }
                return pkg;
            })
        );
    };

    const addPackageFeature = (packageId) => {
        setPackages(prev => 
            prev.map(pkg => 
                pkg.id === packageId 
                    ? { ...pkg, features: [...pkg.features, "নতুন ফিচার"] }
                    : pkg
            )
        );
    };

    const removePackageFeature = (packageId, featureIndex) => {
        setPackages(prev => 
            prev.map(pkg => {
                if (pkg.id === packageId) {
                    const updatedFeatures = pkg.features.filter((_, idx) => idx !== featureIndex);
                    return { ...pkg, features: updatedFeatures };
                }
                return pkg;
            })
        );
    };

    const addPackage = () => {
        const newPackage = {
            id: packages.length + 1,
            name: "নতুন প্যাকেজ",
            price: "০",
            duration: "মাসিক",
            features: ["ফিচার ১"],
            recommended: false,
            gradient: "from-gray-600 to-gray-700"
        };
        setPackages(prev => [...prev, newPackage]);
    };

    const removePackage = (id) => {
        setPackages(prev => prev.filter(pkg => pkg.id !== id));
    };

    // Success Stories Handlers
    const handleSuccessStoryChange = (id, field, value) => {
        setSuccessStories(prev => 
            prev.map(story => 
                story.id === id ? { ...story, [field]: value } : story
            )
        );
    };

    const addSuccessStory = () => {
        const newStory = {
            id: successStories.length + 1,
            brand: "নতুন ব্র্যান্ড",
            growth: "০%",
            description: "বিবরণ",
            icon: "🎯"
        };
        setSuccessStories(prev => [...prev, newStory]);
    };

    const removeSuccessStory = (id) => {
        setSuccessStories(prev => prev.filter(story => story.id !== id));
    };

    // Testimonials Handlers
    const handleTestimonialChange = (id, field, value) => {
        setTestimonials(prev => 
            prev.map(testimonial => 
                testimonial.id === id ? { ...testimonial, [field]: value } : testimonial
            )
        );
    };

    const addTestimonial = () => {
        const newTestimonial = {
            id: testimonials.length + 1,
            name: "নতুন ক্লায়েন্ট",
            company: "কোম্পানি",
            text: "টেস্টিমোনিয়াল টেক্সট",
            rating: 5
        };
        setTestimonials(prev => [...prev, newTestimonial]);
    };

    const removeTestimonial = (id) => {
        setTestimonials(prev => prev.filter(testimonial => testimonial.id !== id));
    };

    // Save Handler
    const handleSave = () => {
        try {
            console.log("Saving brand page data:", {
                heroData,
                features,
                packages,
                successStories,
                testimonials
            });
            
            setNotification({
                show: true,
                message: "ব্র্যান্ড পেজ ডেটা সফলভাবে সেভ হয়েছে!",
                type: "success"
            });
            
            setTimeout(() => {
                setNotification({ show: false, message: "", type: "" });
            }, 3000);
        } catch (error) {
            setNotification({
                show: true,
                message: "সেভ করতে সমস্যা হয়েছে!",
                type: "error"
            });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 p-4 md:p-8">
            {/* Notification */}
            {notification.show && (
                <div
                    className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg ${
                        notification.type === "success"
                            ? "bg-green-500 text-white"
                            : "bg-red-500 text-white"
                    } animate-slide-in`}
                >
                    {notification.message}
                </div>
            )}

            {/* Header */}
            <div className="max-w-7xl mx-auto mb-8">
                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl">
                            <Star className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                ব্র্যান্ড পেজ সেটআপ ম্যানেজমেন্ট
                            </h1>
                            <p className="text-gray-600 mt-1">
                                ব্র্যান্ড পেজের সকল কন্টেন্ট এবং প্যাকেজ পরিচালনা করুন
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto space-y-6">
              
                {/* Features Editor */}
                <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                            <Zap className="w-6 h-6 text-purple-600" />
                            ফিচারস
                        </h2>
                        <button
                            onClick={addFeature}
                            className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition flex items-center gap-2"
                        >
                            <Plus className="w-4 h-4" />
                            নতুন ফিচার
                        </button>
                    </div>

                    <div className="space-y-4">
                        {features.map((feature) => (
                            <div key={feature.id} className="border-2 border-gray-200 rounded-lg p-4">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-semibold text-gray-800">ফিচার #{feature.id}</h3>
                                    <button
                                        onClick={() => removeFeature(feature.id)}
                                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            আইকন
                                        </label>
                                        <input
                                            type="text"
                                            value={feature.icon}
                                            onChange={(e) => handleFeatureChange(feature.id, "icon", e.target.value)}
                                            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            শিরোনাম
                                        </label>
                                        <input
                                            type="text"
                                            value={feature.title}
                                            onChange={(e) => handleFeatureChange(feature.id, "title", e.target.value)}
                                            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            বিবরণ
                                        </label>
                                        <input
                                            type="text"
                                            value={feature.description}
                                            onChange={(e) => handleFeatureChange(feature.id, "description", e.target.value)}
                                            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Packages Editor */}
                <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                            <Star className="w-6 h-6 text-purple-600" />
                            প্যাকেজসমূহ
                        </h2>
                        <button
                            onClick={addPackage}
                            className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition flex items-center gap-2"
                        >
                            <Plus className="w-4 h-4" />
                            নতুন প্যাকেজ
                        </button>
                    </div>

                    <div className="space-y-6">
                        {packages.map((pkg) => (
                            <div key={pkg.id} className="border-2 border-gray-200 rounded-lg p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-xl font-bold text-gray-800">{pkg.name} প্যাকেজ</h3>
                                    <div className="flex items-center gap-2">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={pkg.recommended}
                                                onChange={(e) => handlePackageChange(pkg.id, "recommended", e.target.checked)}
                                                className="w-4 h-4"
                                            />
                                            <span className="text-sm font-semibold text-gray-700">প্রস্তাবিত</span>
                                        </label>
                                        <button
                                            onClick={() => removePackage(pkg.id)}
                                            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            নাম
                                        </label>
                                        <input
                                            type="text"
                                            value={pkg.name}
                                            onChange={(e) => handlePackageChange(pkg.id, "name", e.target.value)}
                                            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            মূল্য
                                        </label>
                                        <input
                                            type="text"
                                            value={pkg.price}
                                            onChange={(e) => handlePackageChange(pkg.id, "price", e.target.value)}
                                            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            সময়কাল
                                        </label>
                                        <input
                                            type="text"
                                            value={pkg.duration}
                                            onChange={(e) => handlePackageChange(pkg.id, "duration", e.target.value)}
                                            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            গ্রেডিয়েন্ট
                                        </label>
                                        <select
                                            value={pkg.gradient}
                                            onChange={(e) => handlePackageChange(pkg.id, "gradient", e.target.value)}
                                            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
                                        >
                                            <option value="from-gray-600 to-gray-700">গ্রে</option>
                                            <option value="from-purple-500 to-pink-500">পার্পল-পিঙ্ক</option>
                                            <option value="from-blue-500 to-cyan-500">ব্লু-সায়ান</option>
                                            <option value="from-green-500 to-emerald-500">গ্রিন-ইমারাল্ড</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <label className="block text-sm font-semibold text-gray-700">
                                            ফিচারসমূহ
                                        </label>
                                        <button
                                            onClick={() => addPackageFeature(pkg.id)}
                                            className="px-3 py-1 text-sm border-2 border-dashed border-gray-300 rounded-lg text-purple-600 hover:border-purple-500 hover:bg-purple-50 transition flex items-center gap-1"
                                        >
                                            <Plus className="w-3 h-3" />
                                            যোগ করুন
                                        </button>
                                    </div>
                                    
                                    <div className="space-y-2">
                                        {pkg.features.map((feature, index) => (
                                            <div key={index} className="flex items-center gap-2">
                                                <input
                                                    type="text"
                                                    value={feature}
                                                    onChange={(e) => handlePackageFeatureChange(pkg.id, index, e.target.value)}
                                                    className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
                                                />
                                                <button
                                                    onClick={() => removePackageFeature(pkg.id, index)}
                                                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Save Button */}
                <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                    <button
                        onClick={handleSave}
                        className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-2xl font-semibold hover:shadow-lg transition flex items-center justify-center gap-2"
                    >
                        <Save className="w-6 h-6" />
                        সব পরিবর্তন সেভ করুন
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminBrandPageSetup;