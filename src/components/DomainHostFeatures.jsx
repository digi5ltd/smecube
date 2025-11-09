import React, { useEffect, useState } from "react";
import iconMap from "../assets/icones/domainhosting/dummyIcones";
import { domainhostFeatureAPI } from "../services/api";
import { motion } from "framer-motion";

const DomainHostFeatures = () => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const response = await domainhostFeatureAPI.getAll();
        setFeatures(response.data.data || response.data);
      } catch (error) {
        console.error("Error fetching features:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeatures();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

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
    <section className="">
      <div className="container mx-auto px-4">
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
                  transition: { duration: 0.5 },
                }}
              >
                {feature.icon && iconMap[feature.icon] ? (
                  React.cloneElement(iconMap[feature.icon], {
                    className: "w-12 h-12 text-blue-600",
                  })
                ) : (
                  <div className="w-12 h-12 bg-gray-300 rounded"></div>
                )}
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

        {features.length === 0 && (
          <div className="text-center text-gray-500 py-8">
            No features available at the moment.
          </div>
        )}
      </div>
    </section>
  );
};

export default DomainHostFeatures;
