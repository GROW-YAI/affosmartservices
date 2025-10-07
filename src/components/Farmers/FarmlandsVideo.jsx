// src/Components/Farmers/FarmlandsVideo.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaPhone } from "react-icons/fa";

const PHONE_NUMBER = "0596922053"; // update as needed

const FarmlandsVideo = ({
  videoSrc = "/images/farmlands/Afosmart.mp4",
  poster = "/images/farmlands/Affosmart-video.jpg",
  title = "Our Farmers",
  subtitle = "Sustainable farms, fresh produce",
  description = "Explore the roots of our harvest. This short video showcases our farms and the dedicated farmers behind every crop.",
}) => {
  return (
    <section id="farmers" className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-extrabold text-gray-900">{title}</h2>
          <p className="text-green-600 font-semibold mt-2">{subtitle}</p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          {/* Video Side */}
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <video
              src={videoSrc}
              poster={poster}
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
              aria-label="Farmlands video"
            />
            {/* Watermark */}
            <div className="absolute top-4 left-4 bg-white/80 text-sm text-gray-800 rounded-full px-3 py-1 shadow-sm">
              Farmlands
            </div>
          </motion.div>

          {/* Text & CTA Side */}
          <motion.div
            className="flex flex-col justify-center text-left space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">
              A Glimpse Into Nature’s Work
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {description} Farmers cultivate with care, combining traditional
              methods and sustainable practices to ensure freshness and quality
              from our soil to your table.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-all shadow-md hover:shadow-lg"
                aria-label={`Call AFFOSmart at ${PHONE_NUMBER}`}
              >
                <FaPhone className="mr-2" /> Call Now
              </a>

              <a
                href="#contact"
                className="inline-flex items-center bg-white border border-gray-300 px-6 py-3 rounded-xl text-gray-800 hover:bg-gray-100 transition-all font-semibold"
                aria-label="Contact us"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FarmlandsVideo;
