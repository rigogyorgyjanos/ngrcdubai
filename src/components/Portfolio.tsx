'use client';

import { motion } from 'framer-motion';

import marina from "../assets/stunning-sea-and-marina-views-2-bedroom-penthouse-dubai-marina-bb4f019696cda0d1f0ea768d9a296bfb.jpg";
import downtown from "../assets/Living_Dining_V1-HD.webp";
import palm from "../assets/Zv0r5rVsGrYSwRyG_2-ExclusivityandPrestigeofPalmJumeirahVillas-elles.top-_11zon.avif";

const properties = [
    {
        id: 1,
        title: 'Marina Penthouse with Sea View',
        description: '2 bedrooms • Infinity pool • Near beach',
        price: 'from $320 / night',
        image: marina,
    },
    {
        id: 2,
        title: 'Downtown Luxury Apartment',
        description: '1 bedroom • City view • Walk to Dubai Mall',
        price: 'from $220 / night',
        image: downtown,
    },
    {
        id: 3,
        title: 'Palm Jumeirah Private Villa',
        description: '4 bedrooms • Private pool • Beach access',
        price: 'from $680 / night',
        image: palm,
    },
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <motion.div
                    className="text-center mb-14"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.2 } }
                    }}
                >
                    <motion.h2
                        className="text-4xl font-bold text-[#0A1E3F]"
                        variants={{
                            hidden: { opacity: 0, y: -30 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        Our Properties
                    </motion.h2>

                    <motion.p
                        className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
                        variants={{
                            hidden: { opacity: 0, y: -30 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Discover a curated selection of premium vacation rentals managed by NGRC.
                    </motion.p>

                    <motion.p
                        className="mt-1 text-lg text-gray-600 max-w-2xl mx-auto"
                        variants={{
                            hidden: { opacity: 0, y: -30 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        Designed to impress guests, and inspire owners.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties.map((property, index) => (
                        <motion.div
                            key={property.id}
                            className="relative group rounded overflow-hidden shadow hover:shadow-lg transition"
                            initial={{ opacity: 0, y: -70 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.4 }}
                            viewport={{ once: false }}
                        >
                            <img
                                src={property.image}
                                alt={property.title}
                                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-[#0A1E3F]/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                                <a
                                    href="#contact"
                                    className="bg-[#D6AF65] text-white px-4 py-2 rounded font-semibold hover:bg-[#c49b4d] transition"
                                >
                                    View Details
                                </a>
                            </div>

                            {/* Info Box */}
                            <div className="bg-white p-4">
                                <h3 className="text-xl font-semibold text-[#0A1E3F]">{property.title}</h3>
                                <p className="text-gray-600 mt-1">{property.description}</p>
                                <p className="text-[#D6AF65] font-medium mt-2">{property.price}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
