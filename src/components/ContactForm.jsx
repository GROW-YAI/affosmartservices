import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { sendEmail } from "../utils/emailService";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        subject: "",
    });
    
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitted(true)

        try {
            const result = await sendEmail(formData);

            if (result.success) {
                toast.success(result.message);
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                    subject: "",
                });
            } else {
                toast.error(result.message)
            }
        } catch (error) {
            toast.error("An unexpected error occured. Please try again later.")
            console.log("Contact form error:", error)
        } finally {
            setIsSubmitted(false)
        }

    };

    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
                    <p className="text-grey-600 text-center mb-12">Send us a message and we will respond as soon as possible</p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Your Name"
                                disabled={isSubmitted}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="your@email.com"
                                disabled={isSubmitted}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                placeholder="Subject"
                                disabled={isSubmitted}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Your message ..."
                                rows="4"
                                required
                                disabled={isSubmitted}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitted}
                            className={
                                `w-full bg-green-500 text-white px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-colors
                                ${isSubmitted ? "opacity-75 cursor-not-allowed" : "hover:bg-green-700"}`
                            }
                        >
                            {isSubmitted ? (
                                "Sending..."
                            ) : (
                                <>
                                    Send Message
                                    <FaPaperPlane className="ml-2" />
                                </>
                            )}
                        </button>

                    </form>
                    <Toaster position="top-center" />
                </div>
            </div>
        </section>
    );
};

export default ContactForm;