import { useState } from "react";
import {
    DollarSign,
    Sparkles,
    Eye,
    CheckCircle2,
    Plus,
    X,
    Trash2, // প্ল্যান মোছার জন্য আইকন
} from "lucide-react";

const AdminPricing = () => {
    const [pricingTiers, setPricingTiers] = useState([
        {
            id: "basic",
            name: "বেসিক প্ল্যান",
            price: "29",
            billingPeriod: "মাস",
            features: [
                "কাস্টম ডোমেইন",
                "SSL সার্টিফিকেট",
                "৫টি পেজ",
                "বেসিক এসইও",
                "ইমেইল সাপোর্ট",
            ],
            isPopular: false,
            enabled: true,
        },
        {
            id: "pro",
            name: "প্রফেশনাল প্ল্যান",
            price: "79",
            billingPeriod: "মাস",
            features: [
                "বেসিক প্ল্যানের সবকিছু",
                "১৫টি পেজ",
                "অ্যাডভান্সড এসইও",
                "অ্যানালিটিক্স ড্যাশবোর্ড",
                "প্রায়োরিটি সাপোর্ট",
            ],
            isPopular: true,
            enabled: true,
        },
        {
            id: "enterprise",
            name: "এন্টারপ্রাইজ প্ল্যান",
            price: "199",
            billingPeriod: "মাস",
            features: [
                "প্রফেশনাল প্ল্যানের সবকিছু",
                "আনলিমিটেড পেজ",
                "API অ্যাক্সেস",
                "ডেডিকেটেড সাপোর্ট",
            ],
            isPopular: false,
            enabled: true,
        },
    ]);

    const updatePrice = (id, newPrice) => {
        setPricingTiers((tiers) =>
            tiers.map((tier) =>
                tier.id === id ? { ...tier, price: newPrice } : tier
            )
        );
    };

    const updateName = (id, newName) => {
        setPricingTiers((tiers) =>
            tiers.map((tier) => (tier.id === id ? { ...tier, name: newName } : tier))
        );
    };

    const updateFeature = (id, featureIndex, newValue) => {
        setPricingTiers((tiers) =>
            tiers.map((tier) => {
                if (tier.id === id) {
                    const updatedFeatures = [...tier.features];
                    updatedFeatures[featureIndex] = newValue;
                    return { ...tier, features: updatedFeatures };
                }
                return tier;
            })
        );
    };

    const addFeature = (id) => {
        setPricingTiers((tiers) =>
            tiers.map((tier) => {
                if (tier.id === id) {
                    return { ...tier, features: [...tier.features, "নতুন ফিচার"] };
                }
                return tier;
            })
        );
    };

    const removeFeature = (id, featureIndex) => {
        setPricingTiers((tiers) =>
            tiers.map((tier) => {
                if (tier.id === id) {
                    const updatedFeatures = tier.features.filter(
                        (_, idx) => idx !== featureIndex
                    );
                    return { ...tier, features: updatedFeatures };
                }
                return tier;
            })
        );
    };

    const togglePopular = (id) => {
        setPricingTiers((tiers) =>
            tiers.map((tier) =>
                tier.id === id ? { ...tier, isPopular: !tier.isPopular } : tier
            )
        );
    };

    const toggleEnabled = (id) => {
        setPricingTiers((tiers) =>
            tiers.map((tier) =>
                tier.id === id ? { ...tier, enabled: !tier.enabled } : tier
            )
        );
    };

    // নতুন প্ল্যান যোগ করার ফাংশন
    const addNewPlan = () => {
        const newPlan = {
            id: crypto.randomUUID(), // একটি ইউনিক আইডি তৈরি করে
            name: "নতুন প্ল্যান",
            price: "0",
            billingPeriod: "মাস",
            features: [],
            isPopular: false,
            enabled: true,
        };
        setPricingTiers((prevTiers) => [...prevTiers, newPlan]);
    };

    // প্ল্যান মুছে ফেলার ফাংশন
    const removePlan = (id) => {
        setPricingTiers((tiers) => tiers.filter((tier) => tier.id !== id));
    };


    return (
        <div className="min-h-screen bg-[#f1f5fc] rounded-2xl">
            {/* হেডার */}
            <div className="">
                <div className="container mx-auto px-6 py-6">
                    <div className="flex flex-col items-center justify-between flex-wrap gap-4">
                        <div className="p-2 rounded-lg bg-[#fcf1f8] shadow">
                            <img src="/icons/admin/layer.svg" alt="landing page" className="w-8" />
                        </div>
                        <div>
                            <h1 className="text-5xl font-bold text-slate-900 flex items-center text-center justify-center gap-3">
                                ল্যান্ডিং পেজ প্রাইসিং
                            </h1>
                            <p className="text-slate-600 text-lg mt-2">
                                আপনার ল্যান্ডিং পেজ সার্ভিসের জন্য প্রাইসিং টায়ার এবং ফিচার পরিচালনা করুন
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* মূল কন্টেন্ট */}
            <div className="container mx-auto px-6 py-8">

                {/* নতুন প্ল্যান যোগ করার বোতাম */}
                <div className="mb-6">
                    <button
                        onClick={addNewPlan}
                        className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Plus className="h-5 w-5" />
                        নতুন প্ল্যান যোগ করুন
                    </button>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {pricingTiers.map((tier) => (
                        <div
                            key={tier.id}
                            className={`bg-white rounded-xl p-6 border transition-all hover:shadow-lg flex flex-col ${tier.isPopular ? "ring-2 ring-blue-500 border-blue-500" : "border-slate-200"
                                } ${!tier.enabled ? "opacity-60" : ""}`}
                        >
                            <div className="flex-grow">
                                {/* জনপ্রিয় ব্যাজ */}
                                {tier.isPopular && (
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                                            <Sparkles className="h-3 w-3" />
                                            সবচেয়ে জনপ্রিয়
                                        </div>
                                    </div>
                                )}

                                {/* প্ল্যানের নাম */}
                                <div className="space-y-2 mb-4">
                                    <label htmlFor={`name-${tier.id}`} className="text-sm font-medium text-slate-700 block">
                                        প্ল্যানের নাম
                                    </label>
                                    <input
                                        id={`name-${tier.id}`}
                                        type="text"
                                        value={tier.name}
                                        onChange={(e) => updateName(tier.id, e.target.value)}
                                        className="w-full px-3 py-2 border border-slate-300 rounded-lg font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>

                                <div className="border-t border-slate-200 my-4" />

                                {/* মূল্য */}
                                <div className="space-y-2 mb-6">
                                    <label htmlFor={`price-${tier.id}`} className="text-sm font-medium text-slate-700 block">
                                        প্রতি {tier.billingPeriod} মূল্য
                                    </label>
                                    <div className="relative">
                                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                                        <input
                                            id={`price-${tier.id}`}
                                            type="number"
                                            value={tier.price}
                                            onChange={(e) => updatePrice(tier.id, e.target.value)}
                                            className="w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg text-3xl font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>

                                {/* ফিচারসমূহ */}
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm font-medium text-slate-700">অন্তর্ভুক্ত ফিচারসমূহ</label>
                                        <button
                                            onClick={() => addFeature(tier.id)}
                                            className="h-7 px-2 text-xs border border-slate-300 rounded-md text-slate-700 hover:bg-slate-50 transition-colors flex items-center gap-1"
                                        >
                                            <Plus className="h-3 w-3" />
                                            যোগ
                                        </button>
                                    </div>
                                    <div className="space-y-2">
                                        {tier.features.map((feature, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center gap-2 group"
                                            >
                                                <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                                                <input
                                                    type="text"
                                                    value={feature}
                                                    onChange={(e) =>
                                                        updateFeature(tier.id, idx, e.target.value)
                                                    }
                                                    className="flex-1 h-8 px-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                                <button
                                                    onClick={() => removeFeature(tier.id, idx)}
                                                    className="h-8 w-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50 rounded"
                                                >
                                                    <X className="h-4 w-4 text-red-600" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-slate-200 my-4" />

                            {/* সেটিংস */}
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <label className="text-sm font-medium text-slate-700 block">জনপ্রিয় হিসেবে চিহ্নিত করুন</label>
                                        <p className="text-xs text-slate-500">
                                            এই প্ল্যানটি হাইলাইট করুন
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => togglePopular(tier.id)}
                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${tier.isPopular ? "bg-blue-600" : "bg-slate-300"
                                            }`}
                                    >
                                        <span
                                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${tier.isPopular ? "translate-x-6" : "translate-x-1"
                                                }`}
                                        />
                                    </button>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <label className="text-sm font-medium text-slate-700 block">প্ল্যান সক্রিয় করুন</label>
                                        <p className="text-xs text-slate-500">
                                            ওয়েবসাইটে দেখান
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => toggleEnabled(tier.id)}
                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${tier.enabled ? "bg-blue-600" : "bg-slate-300"
                                            }`}
                                    >
                                        <span
                                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${tier.enabled ? "translate-x-6" : "translate-x-1"
                                                }`}
                                        />
                                    </button>
                                </div>
                            </div>

                            <div className="border-t border-slate-200 my-4" />

                            {/* প্ল্যান মুছুন বোতাম */}
                            <div>
                                <button
                                    onClick={() => removePlan(tier.id)}
                                    className="w-full px-4 py-2 border border-red-300 rounded-lg text-red-600 hover:bg-red-50 transition-colors flex items-center justify-center gap-2"
                                >
                                    <Trash2 className="h-4 w-4" />
                                    প্ল্যান মুছুন
                                </button>
                            </div>

                        </div>
                    ))}
                </div>

                {/* প্রিভিউ সেকশন */}
                <div className="mt-8 bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <Eye className="h-5 w-5 text-blue-600" />
                        <h2 className="text-xl font-semibold text-slate-900">লাইভ প্রিভিউ</h2>
                    </div>
                    <p className="text-sm text-slate-600 mb-6">
                        আপনার ল্যান্ডিং পেজে প্রাইসিং এভাবে দেখাবে
                    </p>

                    <div className="grid gap-6 md:grid-cols-3">
                        {pricingTiers
                            .filter((tier) => tier.enabled)
                            .map((tier) => (
                                <div
                                    key={tier.id}
                                    className={`relative p-6 border rounded-xl transition-all ${tier.isPopular
                                            ? "border-blue-500 bg-blue-50/50"
                                            : "border-slate-200 bg-white"
                                        }`}
                                >
                                    {tier.isPopular && (
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                            <div className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                                জনপ্রিয়
                                            </div>
                                        </div>
                                    )}
                                    <h3 className="text-xl font-semibold mb-2 text-slate-900">{tier.name}</h3>
                                    <div className="mb-4">
                                        <span className="text-4xl font-bold text-slate-900">${tier.price}</span>
                                        <span className="text-slate-600">
                                            /{tier.billingPeriod}
                                        </span>
                                    </div>
                                    <button
                                        className={`w-full mb-4 px-4 py-2 rounded-lg font-medium transition-colors ${tier.isPopular
                                                ? "bg-blue-600 text-white hover:bg-blue-700"
                                                : "border border-slate-300 text-slate-700 hover:bg-slate-50"
                                            }`}
                                    >
                                        শুরু করুন
                                    </button>
                                    <div className="space-y-2">
                                        {tier.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                                                <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPricing;