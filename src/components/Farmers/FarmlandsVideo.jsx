// src/Components/Farmers/FarmlandsVideo.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaPhone } from "react-icons/fa";



const PHONE_NUMBER = " 0596922053"; // change as needed

const FarmlandsVideo = ({
  videoSrc = "/images/farmlands/Afosmart.mp4",
  poster = "/images/farmlands/Affosmart-video.jpg",
  title = "Farmers",
  subtitle = "Sustainable farms, fresh produce",
  description = "See where our produce is grown. This short video showcases the farms and the people behind the harvest.",
}) => {
  return (
    <section id="farmers" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <motion.h2
            className="text-3xl font-extrabold text-gray-900"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {title}
          </motion.h2>
          <p className="text-green-600 font-semibold mt-2">{subtitle}</p>
          <p className="text-gray-600 mt-4">{description}</p>
        </div>

        <motion.div
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
        >
          {/* Video container */}
          <div className="relative">
            <video
              src={videoSrc}
              poster={poster}
              controls
              playsInline
              preload="metadata"
              className="w-full h-auto max-h-[60vh] bg-black object-cover"
              aria-label="Farmlands video"
            />

            {/* subtle watermark / badge */}
            <div className="absolute top-4 left-4 bg-white/80 text-xs text-gray-700 rounded-full px-3 py-1 shadow-sm">
               Farmlands
            </div>
          </div>

          {/* Footer area with short write-up + CTAs */}
          <div className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-900">Visit the farms (short tour)</h3>
              <p className="text-gray-600 mt-2 hidden md:block">
                Watch this short clip to understand our farming methods and meet the farmers who grow your food.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                aria-label={`Call AFFOSmart at ${PHONE_NUMBER}`}
              >
                <FaPhone className="mr-2" /> Call Now
              </a>

              <a
                href="#contact"
                className="inline-flex items-center bg-white border border-gray-200 px-4 py-2 rounded-lg text-gray-800 hover:bg-gray-50 transition-colors"
                aria-label="Contact us"
              >
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>

        {/* Small accessibility / performance note */}
        <p className="text-xs text-gray-400 text-center mt-4">
       
        </p>
      </div>
    </section>
  );
};

export default FarmlandsVideo;
