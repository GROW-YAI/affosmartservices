import { Navigation, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProductCard from "./ProductCard";
import { products } from "../../data/products";

const ProductShowCase = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>

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
                                    <ProductCard product={product} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Desktop Grid (visible for medium screens and up) */}
                    <div className="hidden md:grid md:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductShowCase;
