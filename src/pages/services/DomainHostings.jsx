import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import heroDomain from "../../assets/png/domaiinhosting/domain.png";
import domainIcon from "../../assets/icones/domainhosting/domain.svg";
import ssdIcon from "../../assets/icones/domainhosting/ssd.svg";
import sslIcon from "../../assets/icones/domainhosting/ssl.svg";
import upIcon from "../../assets/icones/domainhosting/uptime.svg";
import cpanelIcon from "../../assets/icones/domainhosting/cpanel.svg";
import supportIcon from "../../assets/icones/domainhosting/customer-care.svg";
import {
  domainhostFeatureAPI,
  domainhostHeroAPI,
  domainhostPackageAPI,
  domainhostServiceFeatureTitleDescAPI,
} from "../../services/api";
import dummyIcones from "../../assets/icones/domainhosting/dummyIcones";

const DomainHostings = () => {
  // const [packages, setPackages] = useState([]);
  const [heroData, setHeroData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await domainhostHeroAPI.getAll(); // or your endpoint
        // console.log(response);

        // console.log(response.data[0]); // take first hero object
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

  const engnumConvToBangla = (num) => {
    const eng = "0123456789";
    const bang = "০১২৩৪৫৬৭৮৯";
    return num.toString().replace(/[0123456789]/g, (d) => bang[eng.indexOf(d)]);
  };

  // packages data
  useEffect(() => {
    domainhostPackageAPI
      .getAll()
      .then((response) => {
        setPackages(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Service feature data
  // Service feature title and description

  const [featureTitle, setFeatureTitle] = useState({});

  useEffect(() => {
    domainhostServiceFeatureTitleDescAPI
      .getAll()
      .then((response) => {
        // Assuming response.data is always an array with one object
        setFeatureTitle(response.data[0] || {});
        // console.log("Feature title data:", response.data[0]);
      })
      .catch((error) => {
        console.log("Error fetching feature title:", error);
      });
  }, []);

  const [features, setFeatures] = useState([]);
  useEffect(() => {
    domainhostFeatureAPI
      .getAll()
      .then((response) => {
        // Assuming response.data is always an array with one object
        setFeatures(response.data);
        console.log("Feature data:", response.data);
      })
      .catch((error) => {
        console.log("Error fetching feature:", error);
      });
  }, []);

  /* const features = [
    {
      icon: domainIcon,
      title: "ডোমেইন রেজিস্ট্রেশন",
      description: "আপনার ব্যবসার জন্য পছন্দের ডোমেইন নাম সহজে রেজিস্টার করুন।",
    },
    {
      icon: ssdIcon,
      title: "ফাস্ট SSD হোস্টিং",
      description: "SSD সার্ভারে দ্রুত ও নির্ভরযোগ্য ওয়েবসাইট পারফরম্যান্স।",
    },
    {
      icon: sslIcon,
      title: "ফ্রি SSL সার্টিফিকেট",
      description: "আপনার ওয়েবসাইটকে সুরক্ষিত রাখতে SSL সম্পূর্ণ ফ্রি।",
    },
    {
      icon: upIcon,
      title: "৯৯.৯% আপটাইম গ্যারান্টি",
      description: "আপনার ওয়েবসাইট সবসময় অনলাইনে থাকবে – গ্যারান্টিযুক্ত।",
    },
    {
      icon: cpanelIcon,
      title: "ইজি কন্ট্রোল প্যানেল",
      description: "cPanel এর মাধ্যমে সহজে ফাইল, ইমেইল ও ডাটাবেস ম্যানেজ করুন।",
    },
    {
      icon: supportIcon,
      title: "২৪/৭ কাস্টমার সাপোর্ট",
      description: "লাইভ চ্যাট ও কল সাপোর্ট দিয়ে সর্বদা পাশে আছি।",
    },
  ]; */

  const steps = [
    {
      step: "১",
      title: "ডোমেইন সার্চ করুন",
      desc: "পছন্দের নামটি সার্চ করে ডোমেইন উপলভ্য কিনা দেখুন।",
    },
    {
      step: "২",
      title: "প্যাকেজ নির্বাচন করুন",
      desc: "আপনার প্রয়োজন অনুযায়ী হোস্টিং প্যাকেজ বেছে নিন।",
    },
    {
      step: "৩",
      title: "পেমেন্ট সম্পন্ন করুন",
      desc: "নিরাপদ পেমেন্ট সিস্টেমের মাধ্যমে অর্ডার কনফার্ম করুন।",
    },
    {
      step: "৪",
      title: "ওয়েবসাইট লাইভ করুন",
      desc: "ডোমেইন ও হোস্টিং কানেক্ট করে আপনার সাইট চালু করুন।",
    },
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
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
    <div className="text-gray-800 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
        className="relative bg-gradient-to-br from-orange-500 to-red-600 text-white py-28 overflow-hidden h-[80vh] flex flex-col justify-center items-center"
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center">
            <img className="w-16 h-16 mb-6" src={heroDomain} alt="domain" />
          </div>
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-3xl lg:text-5xl font-extrabold mb-6 drop-shadow-lg mt-8 sm:mt-0"
          >
            {heroData.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-xl md:text-2xl mb-10 text-orange-100 max-w-3xl mx-auto leading-relaxed"
          >
            {heroData.description}
          </motion.p>
          <Link
            to="/contact"
            className="bg-white text-orange-600 px-10 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-orange-50 hover:shadow-lg transition-all duration-300"
          >
            এখনই অর্ডার করুন →
          </Link>
        </div>
      </motion.section>

      {/* Service Features Section */}
      <section className="py-20 mx-auto max-w-5xl px-2">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent py-1.5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          {featureTitle?.title}
        </motion.h2>

        <motion.div
          className="grid grid-cols-3 md:grid-cols-6 gap-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="p-3 bg-gradient-to-br from-white to-orange-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-orange-100/50 cursor-pointer group backdrop-blur-sm"
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="mb-4 group-hover:scale-110 transition-transform duration-300"
                whileHover={{
                  // rotate: [0, -5, 5, 0],
                  transition: { duration: 0.5 },
                }}
              >
                {/* {dummyIcones[feature.icon]} */}
                <img
                  className="w-10 h-10 md:w-12 md:h-12"
                  src={dummyIcones[feature.icon]}
                  alt=""
                />
              </motion.div>
              <h3 className="text-sm lg:text-[16px] font-bold mb-3 text-gray-800 group-hover:text-orange-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-[10px] lg:text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50/50 to-red-50/50">
        <div className="mx-auto max-w-5xl sm:px-6 lg:px-8 px-4 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent py-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            অর্ডার প্রসেস
          </motion.h2>

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {steps.map((s, i) => (
              <motion.div
                key={i}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-orange-100/50 group"
                variants={slideIn}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-md">
                  {s.step}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {s.desc}
                </p>
                <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mt-4 mx-auto group-hover:w-16 transition-all duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Packages Section */}
      <div className="py-16 bg-gradient-to-br from-orange-50 to-red-100">
        <div className="py-20 mx-auto max-w-5xl sm:px-6 lg:px-8 px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent py-2">
            হোস্টিং প্যাকেজসমূহ
          </h2>
          <p className="text-center text-gray-600 mb-12">
            আপনার ওয়েবসাইটের প্রয়োজন অনুযায়ী সঠিক প্যাকেজ নির্বাচন করুন।
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className={`rounded-lg p-3 transition-all ${
                  pkg.span ? "col-span-2 md:col-span-1" : "col-span-1"
                } ${
                  pkg.popular
                    ? "bg-gradient-to-br from-orange-600 to-red-600 text-white shadow-2xl scale-105"
                    : "bg-white shadow-md"
                }`}
              >
                {pkg.popular && (
                  <div className="bg-yellow-400 text-red-900 text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                    জনপ্রিয়
                  </div>
                )}
                <h3 className="text-2xl md:text-lg font-bold mb-2">
                  {pkg.name}
                </h3>
                <div className="mb-2">
                  <span className="text-4xl md:text-2xl font-bold">
                    ৳{engnumConvToBangla(pkg.price)}
                  </span>
                </div>
                <div
                  className={`mb-6 text-sm ${
                    pkg.popular ? "text-orange-100" : "text-gray-600"
                  }`}
                >
                  সময়কাল: {pkg.duration}
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center p-2 rounded-lg font-semibold transition ${
                    pkg.popular
                      ? "bg-white text-orange-600 hover:bg-gray-100"
                      : "bg-orange-600 text-white hover:bg-orange-700"
                  }`}
                >
                  অর্ডার করুন
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="py-20 mx-auto max-w-5xl sm:px-6 lg:px-8 px-4">
        <motion.div
          className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-3xl p-12 text-center shadow-2xl"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            দ্রুত ও নিরাপদ ওয়েব হোস্টিং আজই শুরু করুন!
          </h3>
          <p className="text-orange-100 text-xl mb-8 max-w-2xl mx-auto">
            আমাদের টিমের সহায়তায় আপনার ওয়েবসাইটকে নিয়ে যান পরবর্তী স্তরে।
          </p>
          <motion.button
            className="bg-white text-orange-600 hover:bg-gray-100 font-bold py-4 px-12 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            এখনই যোগাযোগ করুন
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default DomainHostings;
