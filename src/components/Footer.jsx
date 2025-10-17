import { FaMeta, FaTiktok } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer className="text-gray-300 bg-gray-900">
            <div className="container px-4 py-12 mx-auto">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <a href="/" className="flex items-center space-x-2">
                                <img src="/images/AffoSmart.png" alt="" className="w-24 h-auto" />
                            </a>
                        </div>
                        <p className="text-sm">
                            Supporting local farmers, providing fresh organic produce to customers.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-4 font-semibold text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="transition-colors hover:text-green-500">Home</a></li>
                            <li><a href="#" className="transition-colors hover:text-green-500">About Us</a></li>
                            <li><a href="#" className="transition-colors hover:text-green-500">Services</a></li>
                            <li><a href="#" className="transition-colors hover:text-green-500">Contact</a></li>
                        </ul>
                    </div>

                    {/* <div>
                        <h3 className="mb-4 font-semibold text-white">Legal</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="transition-colors hover:text-green-500">Privacy Policy</a></li>
                            <li><a href="#" className="transition-colors hover:text-green-500">Terms of Service</a></li>
                        </ul>
                    </div> */}

                    <div>
                        <h3 className="mb-4 font-semibold text-white">Connect with Us</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://web.facebook.com/profile.php?id=61570138556584 "
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-colors hover:text-green-500"
                            >
                                <FaMeta className="text-2xl" />
                            </a>
                            <a
                                href="https://www.tiktok.com/@affosmartservices?is_from_webapp=1&sender_device=pc "
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-colors hover:text-green-500"
                            >
                                <FaTiktok className="text-2xl" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 mt-12 text-sm text-center border-t border-gray-800">
                    <p>&copy; {new Date().getFullYear()} AffoSmart Services. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;