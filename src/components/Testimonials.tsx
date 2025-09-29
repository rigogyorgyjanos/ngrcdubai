'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';



const testimonials = [
    {
        quote:
            'Csodás élmény volt az NGRC apartmanjában megszállni – minden igényünkről gondoskodtak!',
        name: 'Anna',
        location: 'Magyarország',
        flag: '🇭🇺',
    },
    {
        quote:
            'Ingatlantulajdonosként nyugodtan alszom, mióta az NGRC kezeli a lakásomat, profi csapat!',
        name: 'Ahmed',
        location: 'Dubai',
        flag: '🇦🇪',
    },
    {
        quote:
            'The management is top-notch, and my investment keeps growing steadily. Highly recommend NGRC!',
        name: 'Sophia',
        location: 'Germany',
        flag: '🇩🇪',
    },
    {
        quote:
            'Friendly, reliable and very professional. I always get excellent reviews from guests thanks to NGRC.',
        name: 'Mark',
        location: 'UK',
        flag: '🇬🇧',
    },
    {
        quote:
            'Az NGRC segítségével gondtalanul tudom bérbe adni a lakásomat, miközben minden rendben megy.',
        name: 'Katalin',
        location: 'Magyarország',
        flag: '🇭🇺',
    },
];

const Testimonials = () => {
    return (
        <section
            className="bg-gray-100 py-20 px-4 md:px-8 w-full mx-auto"
            id="testimonials"
        >
            {/* Címsor motion-nel */}
            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-center mb-12 text-[#0A1E3F]"
            >
                Testimonials
            </motion.h2>

            <Swiper
                modules={[Pagination, Autoplay, Scrollbar]}

                slidesPerView={2}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                spaceBetween={25}
                className="max-w-7xl mx-auto"
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 1 },
                    1024: { slidesPerView: 2 },
                }}

            >
                {testimonials.map((t, i) => (
                    <SwiperSlide key={i}>
                        <div
                            className="px-6 py-4 rounded-lg border-4 border-[#D6AF65] shadow-3xl bg-gradient-to-br from-[#0A1E3F] via-[#142F5F] to-[#1C3D70] text-white"
                        >
                            <div className="text-6xl text-[#D6AF65] leading-none mb-4 select-none">
                                “
                            </div>
                            <p className="italic text-white text-lg mb-6">{t.quote}</p>
                            <div className="text-6xl text-[#D6AF65] text-right mb-4 select-none">
                                “
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className="text-2xl">{t.flag}</span>
                                <div>
                                    <p className="font-semibold text-[#D6AF65]">{t.name}</p>
                                    <p className="text-gray-300 text-sm">{t.location}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonials;
