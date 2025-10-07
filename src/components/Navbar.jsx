// src/Components/Products/Navbar.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const PHONE_NUMBER = " 0596922053"; // 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Add shadow when user scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy using IntersectionObserver
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // active when 60% of section is visible
    );

    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  const navLinks = [
    { name: "Home", href: "/", id: "home" },
    { name: "Shop", href: "#products", id: "products" },
    { name: "Our Farmers", href: "#farmers", id: "farmers" },
    { name: "About", href: "#about", id: "about" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const handleLinkClick = () => {
    // Close mobile menu after clicking any normal nav link
    setIsOpen(false);
  };

  // Safer mobile detection (guard navigator)
  const isMobileDevice = () => {
    if (typeof navigator === "undefined") return false;
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  };

  const handleOrderNowClick = (e) => {
    // If on desktop, copy number to clipboard and show toast (enhanced fallback).
    // If on mobile, allow tel: link to open dialer.
    if (!isMobileDevice()) {
      e.preventDefault(); // prevent default behavior for desktop
      // try clipboard write, fall back to toast + prompt
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard
          .writeText(PHONE_NUMBER)
          .then(() => {
            toast.success(`Phone number copied to clipboard: ${PHONE_NUMBER}`);
            setIsOpen(false);
          })
          .catch(() => {
            // fallback
            toast.success(`Phone number: ${PHONE_NUMBER}`);
            setIsOpen(false);
          });
      } else {
        // older browsers: show a toast with the number (and leave mobile behavior alone)
        toast.success(`Phone number: ${PHONE_NUMBER}`);
        setIsOpen(false);
      }
    } else {
      // mobile: allow default tel: behavior (opens dialer)
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow bg-white/70 backdrop-blur-md ${
        scrolled ? "shadow-md" : ""
      }`}
      initial={{ y: -120 }}
      animate={{ y: 0 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2" aria-label="AffoSmart home">
          <img src="/images/AffoSmart.png" alt="AffoSmart Logo" className="w-20 h-auto" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className={`relative group font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-green-300 ${
                  isActive ? "text-green-600" : "text-gray-700 hover:text-green-600"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-green-600 transition-all ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}

          {/* ORDER NOW - opens the phone dialer on supported devices; copies number on desktop */}
          <a
            href={`tel:${PHONE_NUMBER}`}
            onClick={handleOrderNowClick} // ✅ wired to correct handler
            className="ml-4 bg-green-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-300"
            aria-label={`Call AffoSmart at ${PHONE_NUMBER}`}
          >
            Order Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          onClick={() => setIsOpen((s) => !s)}
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        id="mobile-menu"
        className={`md:hidden bg-white/95 backdrop-blur-md ${isOpen ? "block" : "hidden"}`}
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -12 }}
        transition={{ duration: 0.22 }}
      >
        <div className="flex flex-col space-y-4 py-4 px-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className={`font-medium transition-colors ${
                  isActive ? "text-green-600" : "text-gray-700 hover:text-green-600"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.name}
              </a>
            );
          })}
          <a
            href={`tel:${PHONE_NUMBER}`}
            onClick={handleOrderNowClick} // ✅ mobile CTA wired to same handler
            className="mt-2 bg-green-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors text-center"
            aria-label={`Call AffoSmart at ${PHONE_NUMBER}`}
          >
            Order Now
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
