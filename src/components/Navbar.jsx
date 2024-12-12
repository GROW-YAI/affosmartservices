import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="bg-white/80 backdrop-blur-md fixed w-full z-50 shadow-sm"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-2">
                        <a href="/" className="flex items-center space-x-2">
                            <img src="/images/AffoSmart.png" alt="" className="w-24 h-auto" />
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        <a href="#about" className="text-gray-600 hover:text-green-600">About</a>
                        <a href="#products" className="text-gray-600 hover:text-green-600">Shop</a>
                        <a href="#farmers" className="text-gray-600 hover:text-green-600">Our Farmers</a>
                        <a href="#contact" className="text-gray-600 hover:text-green-600">Contact</a>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <button className="text-gray-600 hover:text-green-600 flex items-center">
                            <FaShoppingCart className="text-xl mr-2" />
                            <span>Cart (0)</span>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
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
            </div>

            {/* Mobile Menu with Framer Motion */}
            <motion.div
                className="md:hidden py-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
                transition={{ duration: 0.3 }}
            >
                {isOpen && (
                    <div className="flex flex-col space-y-4">
                        <a href="#about" className="text-gray-600 hover:text-green-600">About</a>
                        <a href="#products" className="text-gray-600 hover:text-green-600">Shop</a>
                        <a href="#farmers" className="text-gray-600 hover:text-green-600">Our Farmers</a>
                        <a href="#contact" className="text-gray-600 hover:text-green-600">Contact</a>
                        <button className="text-gray-600 hover:text-green-600 flex items-center">
                            <FaShoppingCart className="text-xl mr-2" />
                            <span>Cart (0)</span>
                        </button>
                    </div>
                )}
            </motion.div>
        </motion.nav >
    );
}

export default Navbar