import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-2">
                        <span>
                            <img src="/images/AffoSmart.png" alt="" className="w-24 h-auto" />
                        </span>
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

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden py-4">
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
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;