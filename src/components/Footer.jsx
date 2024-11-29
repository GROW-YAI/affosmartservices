import { FaInstagram, FaLeaf } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <FaLeaf className="text-green-500 text-2xl" />
                            <span className="text-xl font-bold text-white">AffoSmart Services</span>
                        </div>
                        <p className="text-sm">
                            Supporting local farmers, providing fresh organic produce to customers.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-green-500 transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-green-500 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-green-500 transition-colors">Services</a></li>
                            <li><a href="#" className="hover:text-green-500 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-green-500 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-green-500 transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Connect with Us</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-green-500 transition-colors"
                            >
                                <FaInstagram className="text-2xl" />
                            </a>
                            <a
                                href="https://x.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-green-500 transition-colors"
                            >
                                <FaXTwitter className="text-2xl" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
                    <p>&copy; {new Date().getFullYear()} AffoSmart Services. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;