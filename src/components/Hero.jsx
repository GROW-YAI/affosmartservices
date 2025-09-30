// src/Components/Products/Hero.jsx
import { FaPhone } from "react-icons/fa";
import { Autoplay, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const PHONE_NUMBER = "+233240077";

const Hero = () => {
  const isMobileDevice = () =>
    /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  const handleCallClick = (e) => {
    if (!isMobileDevice()) {
      // desktop: copy number & show toast
      e.preventDefault();
      navigator.clipboard
        .writeText(PHONE_NUMBER)
        .then(() => toast.success(`Phone number copied: ${PHONE_NUMBER}`))
        .catch(() => alert(`Call: ${PHONE_NUMBER}`));
    }
    // mobile: default tel: behavior opens dialer
  };

  return (
    <motion.div
      className="relative bg-gradient-to-r from-green-50 to-green-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Column: Text + Call-to-Action */}
          <motion.div
            className="text-left"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Farm Fresh Organic Produce Direct to Your Door
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Supporting local farmers while delivering the freshest organic produce.
              No middlemen, just pure farm-to-table goodness.
            </p>
            <div className="space-x-4">
              <a href={`tel:${PHONE_NUMBER}`} onClick={handleCallClick}>
                <motion.button
                  className="bg-green-600 text-white px-8 py-3 rounded-full font-medium inline-flex items-center hover:bg-green-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Call now at ${PHONE_NUMBER}`}
                >
                  Call Now
                  <FaPhone className="ml-2" />
                </motion.button>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Swiper Carousel */}
          <motion.div
            className="rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Swiper
              modules={[Autoplay, Pagination]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              loop={true}
              className="w-full"
            >
              <SwiperSlide>
                <motion.img
                  src="/images/WhatsApp Image 2024-11-27 at 13.55.26_795e4101.jpg"
                  alt="Promotional Flyer 1"
                  className="w-full h-[450px] object-contain"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <motion.img
                  src="/images/WhatsApp Image 2024-11-27 at 13.55.26_d68bc269.jpg"
                  alt="Promotional Flyer 2"
                  className="w-full h-[450px] object-contain"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </SwiperSlide>
            </Swiper>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
