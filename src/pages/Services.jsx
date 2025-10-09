import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { CheckCircle, ArrowRight } from "lucide-react";

// Custom SVG logos for each service
const customLogos = {
  facebookBoosting: (
    <svg
      className="w-10 h-10"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12c0 5.01 3.66 9.15 8.44 9.88v-7h-2.54v-2.88h2.54v-2.2c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.77l-.44 2.88h-2.33v7C18.34 21.15 22 17.01 22 12c0-5.52-4.48-10-10-10z"
        fill="url(#fb-gradient)"
      />
      <defs>
        <linearGradient id="fb-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#3B82F6", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#2563EB", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </svg>
  ),
  ecommerce: (
    <svg
      className="w-10 h-10"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 14H6v-2h6v2zm6-4H6v-2h12v2zm0-4H6V8h12v2z"
        fill="url(#ecom-gradient)"
      />
      <defs>
        <linearGradient id="ecom-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#10B981", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#0D9488", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </svg>
  ),
  webDevelopment: (
    <svg
      className="w-10 h-10"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"
        fill="url(#web-gradient)"
      />
      <defs>
        <linearGradient id="web-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#8B5CF6", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#4F46E5", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </svg>
  ),
  hosting: (
    <svg
      className="w-10 h-10"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14h-2v6l5.25 3.15.75-1.23-4.25-2.67V6z"
        fill="url(#host-gradient)"
      />
      <defs>
        <linearGradient id="host-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#F97316", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#DC2626", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </svg>
  ),
  landingPage: (
    <svg
      className="w-10 h-10"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21 7H3v10h18V7zm-2 8H5V9h14v6z" fill="url(#landing-gradient)" />
      <defs>
        <linearGradient
          id="landing-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" style={{ stopColor: "#F472B6", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#BE123C", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </svg>
  ),
  bulkSms: (
    <svg
      className="w-10 h-10"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"
        fill="url(#sms-gradient)"
      />
      <defs>
        <linearGradient id="sms-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#22C55E", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#059669", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </svg>
  ),
  consulting: (
    <svg
      className="w-10 h-10"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 11h-4v4h4v-4zm-4-7H8v4h4V4zm4 14h-4v4h4v-4zm-8 0H4v4h4v-4z"
        fill="url(#consult-gradient)"
      />
      <defs>
        <linearGradient
          id="consult-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" style={{ stopColor: "#EAB308", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#F97316", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </svg>
  ),
  brandPage: (
    <svg
      className="w-10 h-10"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 3v18h18V3H3zm16 16H5V5h14v14zM9 9h6v6H9V9z"
        fill="url(#brand-gradient)"
      />
      <defs>
        <linearGradient id="brand-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#06B6D4", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#3B82F6", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </svg>
  ),
  graphicDesign: (
    <svg
      className="w-10 h-10"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 17V7h4l5-5v20l-5-5H3zm14 2V5h4v14h-4z"
        fill="url(#graphic-gradient)"
      />
      <defs>
        <linearGradient
          id="graphic-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" style={{ stopColor: "#A855F7", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#7E22CE", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </svg>
  ),
  chatbot: (
    <svg
      className="w-10 h-10"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-7h2v2h-2v-2zm0-4h2v2h-2V9z"
        fill="url(#chatbot-gradient)"
      />
      <defs>
        <linearGradient
          id="chatbot-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" style={{ stopColor: "#14B8A6", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#06B6D4", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </svg>
  ),
  issueFixing: (
    <svg
      className="w-10 h-10"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z"
        fill="url(#issue-gradient)"
      />
      <defs>
        <linearGradient id="issue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#FB7185", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#F43F5E", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </svg>
  ),
  training: (
    <svg
      className="w-10 h-10"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 9v6h4l5 5V4l-5 5H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77z"
        fill="url(#train-gradient)"
      />
      <defs>
        <linearGradient id="train-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#6366F1", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#3B82F6", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </svg>
  ),
};

// Reusable ServiceCard component
const ServiceCard = React.memo(({ service, index }) => (
  <Tilt options={{ max: 15, scale: 1.05, speed: 450 }}>
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group relative bg-white/80 backdrop-blur-lg border-2 border-transparent bg-clip-padding rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:border-gradient-to-r hover:from-[var(--gradient-start)] hover:to-[var(--gradient-end)]"
      style={{
        "--gradient-start": service.gradient
          .split(" ")[0]
          .replace("from-", "#"),
        "--gradient-end": service.gradient.split(" ")[1].replace("to-", "#"),
      }}
    >
      {/* Icon */}
      <div className="relative mb-6">
        <motion.div
          whileHover={{ rotate: 10 }}
          className={`w-20 h-20 ${service.iconBg} rounded-2xl flex items-center justify-center shadow-inner`}
        >
          {service.icon}
        </motion.div>
        <div
          className={`absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-br ${service.gradient} rounded-full animate-pulse`}
        ></div>
      </div>

      {/* Text */}
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>

      {/* Features */}
      <div className="space-y-2 mb-6">
        {service.features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 + idx * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-sm text-gray-600"
          >
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>{feature}</span>
          </motion.div>
        ))}
      </div>

      {/* Button */}
      <Link
        to={service.path}
        aria-label={`বিস্তারিত দেখুন ${service.title}`}
        className={`w-full bg-gradient-to-r ${service.gradient} text-white py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-4`}
      >
        বিস্তারিত দেখুন {service.path}
        <ArrowRight className="w-5 h-5" />
      </Link>
    </motion.div>
  </Tilt>
));

const Services = () => {
  const services = [
    {
      icon: customLogos.facebookBoosting,
      title: "ফেসবুক বুস্টিং",
      desc: "টার্গেটেড অডিয়েন্সে পৌঁছান এবং বিক্রয় বাড়ান",
      gradient: "from-blue-500 to-blue-600",
      iconBg: "bg-blue-50",
      path: "/services/facebook-boosting",
      features: [
        "টার্গেটেড অ্যাড",
        "বাজেট অপটিমাইজেশন",
        "পারফরম্যান্স ট্র্যাকিং",
      ],
    },
    {
      icon: customLogos.ecommerce,
      title: "ই-কমার্স সলিউশন",
      desc: "সম্পূর্ণ অনলাইন শপ সেটআপ এবং ম্যানেজমেন্ট",
      gradient: "from-emerald-500 to-teal-600",
      iconBg: "bg-emerald-50",
      path: "/services/ecommerce-solution",
      features: [
        "পেমেন্ট গেটওয়ে",
        "ইনভেন্টরি ম্যানেজমেন্ট",
        "অর্ডার ট্র্যাকিং",
      ],
    },
    {
      icon: customLogos.webDevelopment,
      title: "ডেভেলপ ওয়েবসাইট",
      desc: "আধুনিক এবং রেসপন্সিভ ওয়েবসাইট ডেভেলপমেন্ট",
      gradient: "from-purple-500 to-indigo-600",
      iconBg: "bg-purple-50",
      path: "/services/web-development",
      features: ["কাস্টম ডিজাইন", "মোবাইল ফ্রেন্ডলি", "SEO অপটিমাইজড"],
    },
    {
      icon: customLogos.hosting,
      title: "ডিজাইন হোস্টিং",
      desc: "নিরাপদ এবং দ্রুত হোস্টিং সেবা",
      gradient: "from-orange-500 to-red-600",
      iconBg: "bg-orange-50",
      path: "/services/hosting",
      features: ["৯৯.৯% আপটাইম", "SSL সার্টিফিকেট", "ডেইলি ব্যাকআপ"],
    },
    {
      icon: customLogos.landingPage,
      title: "ল্যান্ডিং পেজ",
      desc: "কনভার্শন অপটিমাইজড ল্যান্ডিং পেজ ডিজাইন",
      gradient: "from-pink-500 to-rose-600",
      iconBg: "bg-pink-50",
      path: "/services/landing-page",
      features: ["হাই কনভার্শন", "দ্রুত লোডিং", "A/B টেস্টিং"],
    },
    {
      icon: customLogos.bulkSms,
      title: "বাল্ক এসএমএস",
      desc: "বাল্ক এসএমএস মার্কেটিং সার্ভিস",
      gradient: "from-green-500 to-emerald-600",
      iconBg: "bg-green-50",
      path: "/services/bulk-sms",
      features: ["দ্রুত ডেলিভারি", "রিপোর্টিং", "সাশ্রয়ী দাম"],
    },
    {
      icon: customLogos.consulting,
      title: "বিজনেস কনসালটিং",
      desc: "ব্যবসায়িক পরামর্শ এবং কৌশল উন্নয়ন",
      gradient: "from-yellow-500 to-orange-600",
      iconBg: "bg-yellow-50",
      path: "/services/business-consulting",
      features: ["কৌশল পরিকল্পনা", "মার্কেট রিসার্চ", "গ্রোথ হ্যাকিং"],
    },
    {
      icon: customLogos.brandPage,
      title: "ব্র্যান্ড পেজ সেটআপ",
      desc: "প্রফেশনাল বিজনেস পেজ সেটআপ",
      gradient: "from-cyan-500 to-blue-600",
      iconBg: "bg-cyan-50",
      path: "/services/brand-page-setup",
      features: [
        "পেজ ভেরিফিকেশন",
        "কন্টেন্ট স্ট্র্যাটেজি",
        "অডিয়েন্স বিল্ডিং",
      ],
    },
    {
      icon: customLogos.graphicDesign,
      title: "গ্রাফিক ডিজাইন",
      desc: "লোগো, ব্যানার এবং ব্র্যান্ডিং ডিজাইন",
      gradient: "from-violet-500 to-purple-600",
      iconBg: "bg-violet-50",
      path: "/services/graphic-design",
      features: [
        "লোগো ডিজাইন",
        "সোশ্যাল মিডিয়া গ্রাফিক্স",
        "ব্র্যান্ড আইডেন্টিটি",
      ],
    },
    {
      icon: customLogos.chatbot,
      title: "চাটবট সেটআপ",
      desc: "অটোমেটেড কাস্টমার সাপোর্ট সিস্টেম",
      gradient: "from-teal-500 to-cyan-600",
      iconBg: "bg-teal-50",
      path: "/services/chatbot-setup",
      features: ["২৪/৭ সাপোর্ট", "অটো রেসপন্স", "লিড জেনারেশন"],
    },
    {
      icon: customLogos.issueFixing,
      title: "ইস্যু ফিক্সিং",
      desc: "ওয়েবসাইট সমস্যা সমাধান",
      gradient: "from-rose-500 to-pink-600",
      iconBg: "bg-rose-50",
      path: "/services/issue-fixing",
      features: ["দ্রুত সমাধান", "বাগ ফিক্স", "পারফরম্যান্স উন্নতি"],
    },
    {
      icon: customLogos.training,
      title: "বিজনেস ট্রেনিং",
      desc: "ডিজিটাল মার্কেটিং প্রশিক্ষণ",
      gradient: "from-indigo-500 to-blue-600",
      iconBg: "bg-indigo-50",
      path: "/services/business-training",
      features: ["হাতে-কলমে শিক্ষা", "সার্টিফিকেট", "লাইফটাইম সাপোর্ট"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-32 pb-20 relative overflow-hidden">
      {/* Floating background gradient blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-red-400/20 to-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-blue-400/20 to-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              আমাদের সার্ভিস
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            আপনার ব্যবসার জন্য সম্পূর্ণ ডিজিটাল সলিউশন। মানসম্মত সেবা এবং দক্ষ
            টিমের সাথে আপনার স্বপ্ন বাস্তবায়ন করুন।
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-28 bg-gradient-to-br from-red-500 via-pink-500 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 relative z-10">
            আপনার প্রজেক্ট শুরু করুন আজই
          </h2>
          <p className="text-xl mb-8 text-white/90 relative z-10">
            আমাদের সাথে যোগাযোগ করুন এবং পান বিনামূল্যে পরামর্শ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link
                to="/contact"
                aria-label="যোগাযোগ করুন"
                className="bg-white text-red-600 px-8 py-4 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                যোগাযোগ করুন
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link
                to="/#pricing"
                aria-label="প্রাইসিং দেখুন"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold border-2 border-white hover:bg-white hover:text-red-600 transition-all duration-300"
              >
                প্রাইসিং দেখুন
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
