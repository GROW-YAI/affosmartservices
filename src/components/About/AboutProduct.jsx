import { Navigation, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaHandshake, FaLeaf, FaTruck } from "react-icons/fa";
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
function FeatureCard({ icon: Icon, title, description }) {
    return (
        <motion.div
            className="bg-white p-6 rounded-lg shadow-md h-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="text-green-600 text-3xl mb-4">
                <Icon />
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </motion.div>
    );
}

const AboutProduct = () => {
    const features = [
        {
            icon: FaLeaf,
            title: "100% Organic",
            description: "We sell organic products, grown by experienced farmers, without harmful pesticides and synthetic fertilizers."
        },
        {
            icon: FaHandshake,
            title: "Fair to Farmers",
            description: "By eliminating middlemen, we ensure farmers receive fair compensation for their hard work while keeping prices reasonable for customers."
        },
        {
            icon: FaTruck,
            title: "Fresh Delivery",
            description: "From farm straight to your doorstep. Our efficient delivery system ensures maximum freshness of your produce."
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Choose AFFOSmart Services</h2>

                    {/* Mobile Carousel for small screens */}
                    <div className="md:hidden">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={20}
                            slidesPerView={1}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                                disabledClass: 'swiper-button-disabled',
                            }}
                            pagination={{ clickable: true }}
                            className="about-slider"
                            a11y={{
                                prevSlideMessage: 'Previous slide',
                                nextSlideMessage: 'Next slide',
                            }}
                        >
                            {features.map((feature, index) => (
                                <SwiperSlide key={index}>
                                    <FeatureCard {...feature} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Desktop grid for medium screens and up */}
                    <div className="hidden md:grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <FeatureCard key={index} {...feature} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutProduct;
