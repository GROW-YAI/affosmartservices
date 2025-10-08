// src/Components/WhatsApp/WhatsAppFloating.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

/**
 * WhatsAppFloating
 * Props:
 *  - phone (string): international phone number in E.164 or local. Best: "2" (no plus, no spaces)
 *  - message (string): optional default message to prefill
 *  - position (string): CSS position class, default "right-6 bottom-6"
 */
const WhatsAppFloating = ({
  phone = "233542289609", // <-- set your WhatsApp number here WITHOUT '+' or spaces
  message = "Hello! I want to place an order / ask about produce.",
  position = "right-6 bottom-6",
}) => {
  // Build wa.me link; encode message
  const encoded = encodeURIComponent(message || "");
  const waLink = `https://wa.me/${phone}${encoded ? `?text=${encoded}` : ""}`;

  return (
    <AnimatePresence>
      <motion.a
        key="whatsapp-fab"
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`fixed z-50 ${position}`}
      >
        <div className="group relative">
          {/* Tooltip */}
          <div className="hidden group-hover:block absolute -left-56 bottom-1/2 translate-y-1/2 w-44 lg:w-56 bg-white text-gray-800 text-sm rounded-lg shadow-lg px-3 py-2">
            Chat with us on WhatsApp
            <div className="text-xs text-gray-500 mt-1">Fastest way to order ,we reply quickly.</div>
          </div>

          {/* Floating button */}
          <button
            type="button"
            className="flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2"
          >
            <FaWhatsapp className="text-2xl" />
          </button>
        </div>
      </motion.a>
    </AnimatePresence>
  );
};

export default WhatsAppFloating;
