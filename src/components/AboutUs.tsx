'use client';

import { motion } from 'framer-motion';
import kep from "../assets/luxury-interior-apartment-studio-home-600nw-2455101863.webp";

const AboutUs = () => {
    return (
        <section id="about" className="bg-[#0A1E3F] text-white py-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-12">

                {/* Szöveges rész - animációval fentről lefelé */}
                <motion.div
                    className="md:w-1/2"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#D6AF65] mb-4">About NGRC</h2>
                    <p className="text-lg md:text-xl text-white/90 mb-6">
                        With <span className="font-semibold">over 10 years of industry experience</span>, NGRC Holiday Home Rental delivers premium service and unparalleled luxury in Dubai. We manage properties with utmost care, offering 24/7 support, high-end interiors, and a dedication to excellence.
                    </p>
                    <p className="text-md md:text-lg text-white/80 mb-6">
                        Our mission is two‑fold: delight guests seeking unforgettable stays, and provide property owners with hands‑free management and superior returns. We combine local expertise, transparent operations, and tailored services to ensure every home we manage reflects the NGRC standard of luxury.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-white/80 mb-6">
                        <li>Premium property listing & presentation</li>
                        <li>Professional cleaning & maintenance</li>
                        <li>Guest communication & check‑in / check‑out coordination</li>
                        <li>Owner & investor support, legal & admin services</li>
                    </ul>
                    <a
                        href="#services"
                        className="inline-block bg-[#D6AF65] text-[#0A1E3F] font-semibold px-6 py-3 rounded-lg shadow hover:bg-yellow-400 transition"
                    >
                        Explore Our Services
                    </a>
                </motion.div>

                {/* Kép rész - animációval jobbról balra */}
                <div style={{ overflowX: 'hidden' }}>


                    <motion.div
                        className="md:w-1/2"
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                        viewport={{ once: false }}
                        style={{ overflowX: 'hidden' }}

                    >
                        <img
                            src={kep}
                            alt="Luxury home interior Dubai"
                            className="w-full h-auto rounded-lg shadow-lg object-cover"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutUs;
