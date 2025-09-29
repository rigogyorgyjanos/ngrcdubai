'use client';

import { motion } from 'framer-motion';

const Services = () => {
    return (
        <section id="services" className="bg-white text-[#0A1E3F] py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold text-[#0A1E3F]">Our Services</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Professional, seamless, and reliable – NGRC ensures your property delivers excellence while we handle every detail.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Takarítás - balról jobbra */}
                    <motion.div
                        className="bg-[#F9FAFB] p-8 rounded-lg shadow hover:shadow-lg transition"
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        viewport={{ once: false }}
                    >
                        <h3 className="text-2xl font-semibold text-[#0A1E3F] mb-4">Cleaning Services</h3>
                        <p className="text-gray-700 mb-6">
                            Our properties are maintained to spotless perfection — every single stay. Let the guest reviews speak for themselves:
                        </p>
                        <blockquote className="italic text-gray-600 border-l-4 border-[#D6AF65] pl-4">
                            “Everything was super clean and well prepared. Felt like checking into a 5-star hotel.” ★★★★★
                        </blockquote>
                        <a
                            href="#contact"
                            className="mt-6 inline-block text-[#0A1E3F] font-semibold border-b-2 border-[#D6AF65] hover:text-[#D6AF65] transition"
                        >
                            Learn more →
                        </a>
                    </motion.div>

                    {/* Karbantartás - jobbról balra */}
                    <motion.div
                        className="bg-[#F9FAFB] p-8 rounded-lg shadow hover:shadow-lg transition"
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        viewport={{ once: false }}
                    >
                        <h3 className="text-2xl font-semibold text-[#0A1E3F] mb-4">Full Property Maintenance</h3>
                        <p className="text-gray-700 mb-6">
                            We proactively inspect and maintain all properties — avoiding costly repairs, and giving owners peace of mind.
                            Fast issue resolution, regular checkups, and professional upkeep prevent wear and tear before it starts.
                        </p>
                        <a
                            href="#contact"
                            className="mt-6 inline-block text-[#0A1E3F] font-semibold border-b-2 border-[#D6AF65] hover:text-[#D6AF65] transition"
                        >
                            Learn more →
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Services;
