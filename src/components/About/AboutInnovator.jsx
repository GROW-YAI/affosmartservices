import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const AboutInnovator = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.4,
    });
    return (
        <section id="about" className="py-16 bg-white" ref={ref}>
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">

                    {/* Animated Heading */}
                    <motion.h2
                        className="text-3xl font-bold text-center mb-12"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: inView ? 1 : 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        Meet Our Innovator
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Text Section with Animation */}
                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                            transition={{ duration: 0.7 }}
                        >
                            <h3 className="text-3xl text-green-900 pt-6 ml-16 font-semibold">Samuel Affo</h3>
                            <p className="text-gray-700 ml-14">
                                Samuel Affo is a Ghanaian native whose roots in a farming community instilled in him a deep passion for
                                agriculture, particularly vegetable farming.
                            </p>
                            <p className="text-gray-700 ml-14">
                                He is the founder and the CEO of AFFOsmart Services; a startup company best known for selling and
                                delivering high-quality foodstuffs to its customers at a competitive price. This came in as solace for
                                farmers who suffer exploitation from middlemen and also to eliminate the stress consumers go through
                                in getting their selves some foodstuffs; a very healthy and high-quality produce.
                            </p>
                            <p className="text-gray-700 ml-14">
                                With a blend of agricultural expertise and artistic prowess, Samuel Affo embodies a unique blend of
                                creativity, resilience, and compassion, poised to leave a lasting legacy through his advocacy for social
                                change.
                            </p>
                            <div className="flex space-x-4 ml-14">
                                <span
                                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                    10+ Years Experience in Farming
                                </span>
                            </div>
                        </motion.div>

                        {/* Image Section with Animation */}
                        <motion.div
                            className="relative mt-8 md:mt-0 md:ml-40"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: inView ? 1 : 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <img
                                src="/images/IMG_0268.JPG"
                                alt="Innovator Image"
                                className="w-full h-auto md:w-4/5 md:h-96 rounded-lg object-cover mx-auto"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutInnovator;
