

const AboutInnovator = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Meet Our Innovator</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold">Samuel Affo</h3>
                            <p className="text-gray-600">
                                Samuel Affo is a Ghanaian native whose roots in a farming community instilled in him a deep passion for
                                agriculture, particularly vegetable farming. With over a decade of hands-on experience in cultivating the
                                land, Samuel&apos;s expertise stems from his collaboration with his father, a revered chief farmer overseeing
                                a sprawling 100-acre farm.
                            </p>
                            <p className="text-gray-600">
                                He is the founder and the CEO of AFFOsmart Services; a startup company best known for selling and
                                delivering high-quality foodstuffs to its customers at a competitive price. This came in as solace for
                                farmers who suffer exploitation from middlemen and also to eliminate the stress consumers go through
                                in getting their selves some foodstuffs; a very healthy and high-quality produce.
                            </p>
                            <p className="text-gray-600">
                                With a blend of agricultural expertise and artistic prowess, Samuel Affo embodies a unique blend of
                                creativity, resilience, and compassion, poised to leave a lasting legacy through his advocacy for social
                                change.
                            </p>
                            <div className="flex space-x-4">
                                <span
                                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                    10+ Years Experience in Farming
                                </span>
                            </div>
                        </div>
                        <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden ml-40">
                            <img src="/images/IMG_0268.JPG" alt="Innovator Image" className="h-96 rounded-lg" />
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default AboutInnovator;