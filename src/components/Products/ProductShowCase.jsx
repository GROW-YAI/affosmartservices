import { Navigation, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProductCard from "./ProductCard";
import { products } from "../../data/products";
import { motion } from "framer-motion";

const ProductShowCase = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">

                    <motion.h2
                        className="text-3xl font-bold text-center mb-12"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        Our Products
                    </motion.h2>

                    {/* Mobile Carousel (visible for small screens) */}
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
                            className="product-slider"
                            a11y={{
                                prevSlideMessage: 'Previous slide',
                                nextSlideMessage: 'Next slide',
                            }}
                        >
                            {products.map((product) => (
                                <SwiperSlide key={product.id}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <ProductCard product={product} />
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Desktop Grid (visible for medium screens and up) */}
                    <div className="hidden md:grid md:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <ProductCard product={product} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductShowCase;
