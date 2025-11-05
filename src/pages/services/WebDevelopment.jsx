import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import CustomwebDesign from "../../assets/img/svg/webdevelopment/servicesvg/CustomWebdesign";
import FastLoading from "../../assets/img/svg/webdevelopment/servicesvg/FastLoading";
import ResponsiveWebDSGN from "../../assets/img/svg/webdevelopment/servicesvg/ResponsiveWebDSGN";
import SeoOpt from "../../assets/img/svg/webdevelopment/servicesvg/SeoOpt";
import Security from "../../assets/img/svg/webdevelopment/servicesvg/Security";
import FastUpdate from "../../assets/img/svg/webdevelopment/servicesvg/FastUpdate";
import HeroSvg from "../../assets/img/svg/webdevelopment/HeroSvg";
import reactsvg from "../../assets/img/svg/webdevelopment/technologysvg/react-svgrepo-com.svg";
import nodejs from "../../assets/img/svg/webdevelopment/technologysvg/nodejs-svgrepo-com.svg";
import htmlsvg from "../../assets/img/svg/webdevelopment/technologysvg/html-svgrepo-com.svg";
import csssvg from "../../assets/img/svg/webdevelopment/technologysvg/css3-svgrepo-com.svg";
import phpsvg from "../../assets/img/svg/webdevelopment/technologysvg/php-svgrepo-com.svg";
import wordpresssvg from "../../assets/img/svg/webdevelopment/technologysvg/wordpress-svgrepo-com.svg";
import mongodbsvg from "../../assets/img/svg/webdevelopment/technologysvg/mongodb-svgrepo-com.svg";
import laravelsvg from "../../assets/img/svg/webdevelopment/technologysvg/laravel-svgrepo-com.svg";
import javascript from "../../assets/img/svg/webdevelopment/technologysvg/javascript-svgrepo-com.svg";
import restaurantpic from "../../assets/img/webdevelopment/restaurant.jpg";
import schoolPic from "../../assets/img/webdevelopment/school.jfif";
import realstatePic from "../../assets/img/webdevelopment/real-state.jpg";
import {
  webdevHeroAPI,
  webdevPackagesApi,
  webdevPortfolioAPI,
} from "../../services/api";

const WebDevelopment = () => {
  const [heroData, setHeroData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [portfolio, setPortfolio] = useState([]);
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await webdevHeroAPI.getAll(); // or your endpoint
        console.log(response);

        console.log(response.data[0]); // take first hero object
        setHeroData(response.data[0] || {}); // take first hero object
        setLoading(false);
      } catch (err) {
        console.error("Error fetching hero data:", err);
        setError("Failed to load hero data");
        setLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  useEffect(() => {
    webdevPortfolioAPI.getAll().then((response) => {
      console.log(response);
      setPortfolio(response.data);
    });
  }, []);

  /* const portfolio = [
    {
      name: "রেস্টুরেন্ট ওয়েবসাইট",
      category: "খাদ্য ও পানীয়",
      image: (
        <img
          src={restaurantpic}
          alt="Restaurant"
          className="w-full h-full object-cover"
        />
      ),
    },
    {
      name: "শিক্ষা প্রতিষ্ঠান",
      category: "শিক্ষা",
      image: (
        <img
          src={schoolPic}
          alt="School"
          className="w-full h-full object-cover"
        />
      ),
    },
    {
      name: "রিয়েল এস্টেট",
      category: "সম্পত্তি",
      image: (
        <img
          src={realstatePic}
          alt="Real Estate"
          className="w-full h-full object-cover"
        />
      ),
    },
  ]; */

  const services = [
    {
      icon: <CustomwebDesign />,
      title: "কাস্টম ওয়েব ডিজাইন",
      description: "আপনার ব্র্যান্ডের জন্য ইউনিক ডিজাইন",
    },
    {
      icon: <FastLoading />,
      title: "দ্রুত লোডিং",
      description: "হাই পারফরমেন্স অপটিমাইজেশন",
    },
    {
      icon: <ResponsiveWebDSGN />,
      title: "রেসপন্সিভ ডিজাইন",
      description: "সব ডিভাইসে পারফেক্ট",
    },
    {
      icon: <SeoOpt />,
      title: "SEO অপটিমাইজড",
      description: "গুগলে ভালো র‍্যাংকিং",
    },
    {
      icon: <Security />,
      title: "সিকিউরিটি",
      description: "SSL ও সিকিউরিটি ফিচার",
    },
    {
      icon: <FastUpdate />,
      title: "সহজ আপডেট",
      description: "CMS ইন্টিগ্রেশন",
    },
  ];

  const technologies = [
    {
      name: "HTML5",
      icon: <img src={htmlsvg} alt="HTML5" className="w-8 h-8 mx-auto" />,
      color: "bg-orange-50",
    },
    {
      name: "CSS3",
      icon: <img src={csssvg} alt="CSS3" className="w-8 h-8 mx-auto" />,
      color: "bg-orange-50",
    },
    {
      name: "Javascript",
      icon: (
        <img src={javascript} alt="Javascript" className="w-8 h-8 mx-auto" />
      ),
      color: "bg-blue-50",
    },
    {
      name: "React.js",
      icon: <img src={reactsvg} alt="React" className="w-8 h-8 mx-auto" />,
      color: "bg-blue-50",
    },
    {
      name: "Node.js",
      icon: <img src={nodejs} alt="Node.js" className="w-8 h-8 mx-auto" />,
      color: "bg-green-50",
    },
    {
      name: "WordPress",
      icon: (
        <img src={wordpresssvg} alt="WordPress" className="w-8 h-8 mx-auto" />
      ),
      color: "bg-purple-50",
    },

    {
      name: "PHP",
      icon: <img src={phpsvg} alt="PHP" className="w-8 h-8 mx-auto" />,
      color: "bg-indigo-50",
    },
    {
      name: "MongoDB",
      icon: <img src={mongodbsvg} alt="MongoDB" className="w-8 h-8 mx-auto" />,
      color: "bg-teal-50",
    },

    {
      name: "Laravel",
      icon: <img src={laravelsvg} alt="Laravel" className="w-8 h-8 mx-auto" />,
      color: "bg-teal-50",
    },
  ];

  /* const packages = [
     {
      name: "ল্যান্ডিং পেজ",
      price: "১৫,০০০",
      duration: "একবার",
      features: [
        "১ পেজ ডিজাইন",
        "রেসপন্সিভ লেআউট",
        "কন্টাক্ট ফর্ম",
        "বেসিক SEO",
        "২ মাস সাপোর্ট",
      ],
    },
    {
      name: "বিজনেস ওয়েবসাইট",
      price: "৩৫,০০০",
      duration: "একবার",
      popular: true,
      features: [
        "৫-৭ পেজ ডিজাইন",
        "কাস্টম ডিজাইন",
        "CMS ইন্টিগ্রেশন",
        "এডভান্স SEO",
        "ব্লগ সেকশন",
        "৬ মাস সাপোর্ট",
      ],
    },
    {
      name: "কর্পোরেট ওয়েবসাইট",
      price: "৭৫,০০০+",
      duration: "কাস্টম",
      features: [
        "আনলিমিটেড পেজ",
        "প্রিমিয়াম ডিজাইন",
        "কাস্টম ফিচার",
        "মাল্টি-ল্যাঙ্গুয়েজ",
        "API ইন্টিগ্রেশন",
        "১ বছর সাপোর্ট",
      ],
      span: 2,
    },
  ]; */

  const engnumConvToBangla = (num) => {
    const eng = "0123456789";
    const bang = "০১২৩৪৫৬৭৮৯";
    return num.toString().replace(/[0123456789]/g, (d) => bang[eng.indexOf(d)]);
  };

  // packages data
  useEffect(() => {
    webdevPackagesApi
      .getAll()
      .then((response) => {
        setPackages(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen px-2">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="mb-6">
              <HeroSvg />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {heroData.title}
            </h1>
            <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
              {heroData.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition"
              >
                {heroData.cta1}
              </Link>
              <a
                href="#portfolio"
                className="border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-purple-600 transition"
              >
                {heroData.cta2}
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section
        className="py-16 bg-white"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              আমাদের ওয়েব ডেভেলপমেন্ট সেবা
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              আপনার প্রয়োজন অনুযায়ী কাস্টমাইজড সলিউশন
            </motion.p>
          </div>
          <motion.div
            className="grid grid-cols-3 lg:grid-cols-6 gap-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-pink-50 py-2 px-1 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
                variants={scaleIn}
                whileHover={{ scale: 1.02 }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-[12px] sm:text-sm font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-[12px] sm:text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl sm:px-6 lg:px-8 mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              আমরা যে টেকনোলজি ব্যবহার করি
            </motion.h2>
            <p
              className="text-lg text-gray-600"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              আধুনিক এবং শক্তিশালী টেকনোলজি স্ট্যাক
            </p>
          </div>
          <motion.div
            className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-9 gap-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className={`${tech.color} p-2 rounded-xl shadow-md hover:shadow-lg transition text-center`}
                variants={slideIn}
              >
                <div className="text-4xl mb-3 flex justify-center items-center">
                  {tech.icon}
                </div>
                <div className="font-semibold text-gray-800 sm:text-[12px]">
                  {tech.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-white">
        <div className="max-w-7xl sm:px-6 lg:px-8 mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              আমাদের সাম্প্রতিক কাজ
            </h2>
            <p className="text-lg text-gray-600">
              বিভিন্ন শিল্পে আমাদের সফলতার গল্প
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {portfolio.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              >
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 h-48 flex items-center justify-center text-6xl hover:scale-110 transition duration-300">
                  <img src={project.image} alt="" />
                </div>
                <div className="p-3">
                  <div className="text-sm text-purple-600 font-semibold mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {project.name}
                  </h3>
                  <button className="text-purple-600 font-semibold hover:text-purple-700">
                    বিস্তারিত দেখুন →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              প্রাইসিং প্ল্যান
            </h2>
            <p className="text-lg text-gray-600">
              সাশ্রয়ী মূল্যে পেশাদার ওয়েবসাইট
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto ">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className={`rounded-2xl p-8 transition-all ${
                  pkg.span ? "col-span-2 md:col-span-1" : "col-span-1"
                } ${
                  pkg.popular
                    ? "bg-gradient-to-br from-purple-500 to-pink-600 text-white transform scale-105 shadow-2xl"
                    : "bg-white border-2 border-gray-200 shadow-lg"
                }`}
              >
                {pkg.popular && (
                  <div className="bg-yellow-400 text-purple-900 px-4 py-1 rounded-full text-sm font-bold inline-block mb-4">
                    প্রস্তাবিত
                  </div>
                )}
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    pkg.popular ? "text-white" : "text-gray-800"
                  }`}
                >
                  {pkg.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    ৳{engnumConvToBangla(parseInt(pkg.price))}
                  </span>
                  <span
                    className={pkg.popular ? "text-gray-200" : "text-gray-600"}
                  >
                    /{pkg.duration}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span
                        className={
                          pkg.popular ? "text-yellow-300" : "text-green-500"
                        }
                      >
                        ✓
                      </span>
                      <span
                        className={
                          pkg.popular ? "text-gray-100" : "text-gray-700"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center py-3 rounded-full font-bold transition ${
                    pkg.popular
                      ? "bg-white text-purple-600 hover:bg-gray-100"
                      : "bg-purple-500 text-white hover:bg-purple-600"
                  }`}
                >
                  অর্ডার করুন
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white max-w-4xl px-[15%] mx-auto rounded-2xl mb-7"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            আজই পান আপনার ড্রিম ওয়েবসাইট
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            ফ্রি কনসালটেশন এবং প্রজেক্ট প্ল্যানিং
          </p>
          <Link
            to="/contact"
            className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 inline-block transform hover:scale-105 transition"
          >
            ফ্রি কনসালটেশন বুক করুন →
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default WebDevelopment;
