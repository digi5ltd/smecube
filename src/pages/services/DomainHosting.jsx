import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  Shield, 
  Clock, 
  Star, 
  ArrowRight,
  CheckCircle,
  MessageCircle,
  Twitter,
  Linkedin,
  Facebook
} from "lucide-react";

const DomainHosting = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Performance",
      description: "Lightning-fast servers with SSD storage and optimized caching for maximum speed."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Hosting",
      description: "Enterprise-grade security with DDoS protection and daily backups included."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Reliable Uptime",
      description: "99.9% uptime guaranteed with redundant infrastructure and 24/7 monitoring."
    }
  ];

  const testimonials = [
    {
      quote: "Switching to this hosting service was the best decision for our global e-commerce platform!",
      author: "Sarah Chen",
      role: "CTO, TechGlobal Inc.",
      rating: 5
    },
    {
      quote: "Exceptional performance and support. Our applications run smoother than ever before.",
      author: "Marcus Rodriguez",
      role: "Lead Developer, InnovateCo",
      rating: 5
    }
  ];

  return (
    <div className="font-sans bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen">
      {/* Hero Section */}
      <motion.header 
        className="relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10" />
        <div className="relative mx-auto max-w-6xl px-[15%] py-32">
          <motion.div 
            className="text-center"
            variants={itemVariants}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              Domain Hosting
              <br />
              <span className="text-4xl md:text-5xl">Made Effortless</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed"
              variants={itemVariants}
            >
              Enterprise-grade hosting solutions built for scale, 
              <span className="block">performance, and reliability.</span>
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={itemVariants}
            >
              <motion.button 
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-10 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button 
                className="border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 font-semibold py-4 px-10 rounded-2xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Demo
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.header>

      {/* Features Section */}
      <motion.section 
        className="py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="mx-auto max-w-6xl px-[15%]">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Enterprise-Grade Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to scale your digital presence with confidence
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group bg-white/70 backdrop-blur-sm p-8 rounded-3xl hover:bg-white transition-all duration-500 border border-gray-200/50 hover:border-blue-200/50 shadow-sm hover:shadow-xl"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        className="py-24 bg-gradient-to-br from-white to-blue-50/30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="mx-auto max-w-6xl px-[15%]">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of companies scaling their infrastructure with us
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-200/50 shadow-sm hover:shadow-xl transition-all duration-500"
                variants={itemVariants}
                whileHover={{ y: -3 }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <cite className="font-semibold text-gray-900 not-italic block">
                      {testimonial.author}
                    </cite>
                    <span className="text-gray-600 text-sm">{testimonial.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="mx-auto max-w-4xl px-[15%]">
          <motion.div 
            className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 text-center text-white shadow-2xl"
            variants={itemVariants}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Hosting?
            </h3>
            <p className="text-blue-100 text-xl mb-8">
              Start your 14-day free trial. No credit card required.
            </p>
            <motion.button 
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-12 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CheckCircle className="w-5 h-5" />
              Start Free Trial
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer Section */}
      <motion.footer 
        className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="mx-auto max-w-6xl px-[15%]">
          <motion.div 
            className="text-center"
            variants={itemVariants}
          >
            <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Domain Hosting Pro
            </h4>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Enterprise hosting solutions for the modern digital landscape.
            </p>
            <p className="text-gray-500 mb-8">&copy; 2025 Domain Hosting Inc. All rights reserved.</p>
            <div className="flex justify-center gap-6">
              {[Facebook, Twitter, Linkedin, MessageCircle].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default DomainHosting;