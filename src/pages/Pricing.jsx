import React, { useState, useEffect } from 'react';
import { Check, Zap, Crown, Star, ArrowRight, Phone, MessageCircle, Loader } from 'lucide-react';
import { pricingPlansAPI, extraServicesAPI, planComparisonsAPI } from '../services/api';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [pricingPlans, setPricingPlans] = useState([]);
  const [addOnServices, setAddOnServices] = useState([]);
  const [planComparisons, setPlanComparisons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const [plansRes, servicesRes, comparisonsRes] = await Promise.all([
          pricingPlansAPI.getAll(),
          extraServicesAPI.getAll(),
          planComparisonsAPI.getAll()
        ]);

        setPricingPlans(plansRes.data.data);
        setAddOnServices(servicesRes.data.data);
        setPlanComparisons(comparisonsRes.data.data);
      } catch (err) {
        console.error('Error fetching pricing data:', err);
        setError('Failed to load pricing data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getIconComponent = (type) => {
    const iconClass = "w-6 h-6 sm:w-8 sm:h-8";
    if (type === 'monthly') return <Zap className={iconClass} />;
    if (type === 'annual') return <Star className={iconClass} />;
    return <Crown className={iconClass} />;
  };

  const getGradient = (index) => {
    const gradients = [
      "from-blue-500 to-cyan-600",
      "from-purple-500 to-pink-600",
      "from-orange-500 to-red-600"
    ];
    return gradients[index % 3];
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center">
          <Loader className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-xl font-semibold text-gray-600">Loading pricing plans...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center">
          <div className="text-6xl mb-4">❌</div>
          <p className="text-2xl font-bold text-red-600 mb-2">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // Filter plans by billing cycle
  const filteredPlans = pricingPlans.filter(plan => plan.type === billingCycle);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap');
        .font-hind {
          font-family: 'Hind Siliguri', sans-serif;
        }
      `}</style>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-500 via-pink-600 to-purple-600 text-white pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 flex items-center min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12">
            <div className="flex-1 text-center md:text-left w-full">
              <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4 md:mb-6 flex justify-center md:justify-start">💰</div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 px-2 font-hind">
                স্বচ্ছ প্রাইসিং প্ল্যান
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-gray-100 px-4 font-hind">
                আপনার ব্যবসার জন্য সঠিক প্যাকেজ নির্বাচন করুন। সকল প্ল্যানে স্বচ্ছ মূল্য, 
                কোন লুকানো খরচ নেই। মাসিক এবং বার্ষিক প্ল্যান উপলব্ধ।
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start px-4">
                <button className="bg-white text-red-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:bg-gray-100 transition text-center text-sm sm:text-base font-hind">
                  ফ্রি ট্রায়াল শুরু করুন →
                </button>
                <button className="border-2 border-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:bg-white hover:text-red-600 transition text-sm sm:text-base font-hind">
                  এক্সপার্ট পরামর্শ
                </button>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 sm:p-6 md:p-8 border border-white/20">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center md:text-left font-hind">আমাদের মূল্য বৈশিষ্ট্য</h3>
                <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                  <li className="flex items-start gap-2 sm:gap-3 justify-center md:justify-start text-center md:text-left">
                    <span className="text-lg sm:text-xl md:text-2xl flex-shrink-0">✅</span>
                    <span className="text-xs sm:text-sm md:text-base font-hind">কোন সেটআপ ফি নেই</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3 justify-center md:justify-start text-center md:text-left">
                    <span className="text-lg sm:text-xl md:text-2xl flex-shrink-0">✅</span>
                    <span className="text-xs sm:text-sm md:text-base font-hind">৭ দিনের মানি ব্যাক গ্যারান্টি</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3 justify-center md:justify-start text-center md:text-left">
                    <span className="text-lg sm:text-xl md:text-2xl flex-shrink-0">✅</span>
                    <span className="text-xs sm:text-sm md:text-base font-hind">যেকোনো সময় প্ল্যান আপগ্রেড</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3 justify-center md:justify-start text-center md:text-left">
                    <span className="text-lg sm:text-xl md:text-2xl flex-shrink-0">✅</span>
                    <span className="text-xs sm:text-sm md:text-base font-hind">২৪/৭ টেকনিক্যাল সাপোর্ট</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        {/* Billing Toggle */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center bg-white rounded-full p-1 shadow-lg mb-6">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-xs sm:text-base font-hind ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              মাসিক
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-xs sm:text-base font-hind ${
                billingCycle === 'annual'
                  ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              বার্ষিক
              <span className="ml-1 sm:ml-2 text-xs bg-green-500 text-white px-1 sm:px-2 py-0.5 sm:py-1 rounded-full">২০% ছাড়</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 sm:mb-16 md:mb-20">
          {filteredPlans.length > 0 ? (
            filteredPlans.map((plan, index) => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-gray-100 ${
                  plan.is_popular ? 'ring-2 ring-red-500 md:scale-105' : ''
                }`}
              >
                {plan.is_popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-4 py-1.5 rounded-full font-bold text-xs shadow-md font-hind">
                      জনপ্রিয়
                    </div>
                  </div>
                )}

                <div className="p-5 sm:p-6 md:p-8">
                  <div className={`w-12 h-12 bg-gradient-to-br ${getGradient(index)} rounded-lg flex items-center justify-center text-white mb-4 shadow-md`}>
                    {getIconComponent(plan.type)}
                  </div>

                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 font-hind">{plan.name}</h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-4 font-hind">{plan.subtitle}</p>

                  <div className="mb-4 sm:mb-6">
                    <div className="flex items-end gap-2">
                      <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                        ৳{parseFloat(plan.price).toLocaleString('bn-BD')}
                      </span>
                      <span className="text-sm sm:text-base md:text-lg text-gray-500 font-semibold mb-1 font-hind">
                        {plan.price_period}
                      </span>
                    </div>
                    {plan.discount_info && (
                      <p className="text-xs sm:text-sm text-green-600 font-semibold mt-2 font-hind">
                        {plan.discount_info}
                      </p>
                    )}
                  </div>

                  <div className="space-y-3 mb-6">
                    {plan.features && plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-sm sm:text-base md:text-lg text-gray-600 font-hind">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className={`w-full py-3 sm:py-4 rounded-lg font-bold transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg font-hind ${
                      plan.is_popular
                        ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    শুরু করুন
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
              <p className="text-xl text-gray-500 font-hind">কোন প্ল্যান পাওয়া যায়নি</p>
            </div>
          )}
        </div>

        {/* Add-on Services */}
        {addOnServices.length > 0 && (
          <div className="mb-10 sm:mb-16 md:mb-20">
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-2 sm:mb-3 md:mb-4 font-hind">
                অতিরিক্ত সার্ভিস
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 font-hind">আপনার প্যাকেজের সাথে যুক্ত করুন এই সার্ভিসগুলো</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
              {addOnServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-xl p-4 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center justify-center text-center"
                >
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center mb-3 lg:mb-4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7V17L12 22L22 17V7L12 2ZM8 17L12 19L16 17V13L12 15L8 13V17Z" fill="white"/>
                    </svg>
                  </div>
                  <h3 className="text-sm lg:text-base font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-2 lg:mb-3 font-hind leading-tight">
                    {service.title}
                  </h3>
                  <div className="flex items-end gap-1">
                    <span className="text-lg lg:text-xl font-black bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                      ৳{parseFloat(service.price).toLocaleString('bn-BD')}
                    </span>
                    <span className="text-xs lg:text-sm text-gray-600 font-semibold mb-0.5 lg:mb-1 font-hind">
                      {service.unit}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Comparison Table */}
        {planComparisons.length > 0 && (
          <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 lg:p-12 mb-10 sm:mb-16 md:mb-20">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12 font-hind">
              <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                প্ল্যান তুলনা
              </span>
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full min-w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-2 sm:py-3 md:py-4 px-2 sm:px-4 font-bold text-gray-900 text-xs sm:text-sm md:text-base font-hind">ফিচার</th>
                    <th className="text-center py-2 sm:py-3 md:py-4 px-2 sm:px-4 font-bold text-gray-900 text-xs sm:text-sm md:text-base font-hind">স্টার্টার</th>
                    <th className="text-center py-2 sm:py-3 md:py-4 px-2 sm:px-4 font-bold text-gray-900 text-xs sm:text-sm md:text-base font-hind">প্রফেশনাল</th>
                    <th className="text-center py-2 sm:py-3 md:py-4 px-2 sm:px-4 font-bold text-gray-900 text-xs sm:text-sm md:text-base font-hind">এন্টারপ্রাইজ</th>
                  </tr>
                </thead>
                <tbody>
                  {planComparisons.map((row) => (
                    <tr key={row.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-2 sm:py-3 md:py-4 px-2 sm:px-4 font-semibold text-gray-700 text-xs sm:text-sm md:text-base font-hind">{row.feature_name}</td>
                      <td className="py-2 sm:py-3 md:py-4 px-2 sm:px-4 text-center text-gray-600 text-xs sm:text-sm md:text-base font-hind">{row.starter_value}</td>
                      <td className="py-2 sm:py-3 md:py-4 px-2 sm:px-4 text-center text-gray-600 text-xs sm:text-sm md:text-base font-hind">{row.professional_value}</td>
                      <td className="py-2 sm:py-3 md:py-4 px-2 sm:px-4 text-center text-gray-600 text-xs sm:text-sm md:text-base font-hind">{row.enterprise_value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* FAQ Section */}
        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 lg:p-12 mb-10 sm:mb-16 md:mb-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12 font-hind">
            <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              সাধারণ প্রশ্ন
            </span>
          </h2>
          <div className="space-y-4 sm:space-y-6 max-w-3xl mx-auto">
            {[
              {
                q: 'কি কি পেমেন্ট মেথড গ্রহণ করেন?',
                a: 'আমরা বিকাশ, নগদ, রকেট এবং ব্যাংক ট্রান্সফার গ্রহণ করি।'
              },
              {
                q: 'রিফান্ড পলিসি কি?',
                a: 'প্রথম ৭ দিনের মধ্যে সম্পূর্ণ রিফান্ড পাবেন যদি সন্তুষ্ট না হন।'
              },
              {
                q: 'প্ল্যান আপগ্রেড করা যাবে?',
                a: 'হ্যাঁ, যেকোনো সময় আপনার প্ল্যান আপগ্রেড বা ডাউনগ্রেড করতে পারবেন।'
              },
              {
                q: 'সেটআপ ফি আছে কি?',
                a: 'না, কোন সেটআপ ফি নেই। শুধুমাত্র মাসিক বা বার্ষিক চার্জ প্রযোজ্য।'
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4 sm:pb-6 last:border-0">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 font-hind">{faq.q}</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed font-hind">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-12 text-center text-white shadow-2xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 font-hind">
            এখনও নিশ্চিত নন?
          </h2>
          <p className="text-sm sm:text-base md:text-xl mb-4 sm:mb-6 md:mb-8 text-white/90 font-hind">
            আমাদের সাথে কথা বলুন এবং পান ফ্রি কনসালটেশন
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="bg-white text-red-600 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base font-hind">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              কল করুন
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-bold border-2 border-white hover:bg-white hover:text-red-600 transition-all duration-300 text-xs sm:text-sm md:text-base font-hind">
              <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 inline mr-1 sm:mr-2" />
              মেসেজ পাঠান
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;