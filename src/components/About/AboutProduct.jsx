import { FaHandshake, FaLeaf, FaTruck } from "react-icons/fa"


const AboutProduct = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Choose AFFOSmart Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <FaLeaf className="text-green-600 text-3xl md-4" />
                            <h3 className="text-xl font-semibold mb-3">100% Organic</h3>
                            <p className="text-gray-600">
                                We sell organic products, grown by experienced farmers, without harmful pesticides and
                                synthetic fertilizers.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <FaHandshake className="text-green-600 text-3xl md-4" />
                            <h3 className="text-xl font-semibold mb-3">Fair to Farmers</h3>
                            <p className="text-gray-600">
                                By eliminating middlemen, we ensure farmers receive fair compensation for their hard work while keeping
                                prices reasonale for customers.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <FaTruck className="text-green-600 text-3xl md-4" />
                            <h3 className="text-xl font-semibold mb-3">Fresh Delivery</h3>
                            <p className="text-gray-600">
                                From farm straight to your doorstep. Our efficient delivery system
                                ensures maximum freshness of your produce.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutProduct