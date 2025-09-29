'use client';

import video from "../assets/6754296-uhd_3840_2160_30fps.mp4"
import imageDub from "../assets/istockphoto-1331100622-612x612.jpg"

const Hero = () => {
    return (
        <section className="relative text-white min-h-195 flex items-center justify-center overflow-hidden">

            {/* Desktop video - csak md és felette látszik */}
            <video
                className="hidden md:block absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
            >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Mobil/kisebb eszköz háttérkép */}
            <div
                className="block md:hidden absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${imageDub})` }}
            ></div>

            {/* Sötét réteg a jobb kontrasztért */}
            <div className="absolute inset-0 bg-opacity-100 " />

            {/* Tartalom */}
            <div className="relative z-10 px-4 md:px-8 max-w-2xl w-full">
                <div className="p-6 md:p-10 rounded-xl border border-white/30 backdrop-blur-sm">
                    <h1 className="text-4xl md:text-6xl font-bold text-[#D6AF65] mb-4">
                        Welcome to NGRC
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 mb-6">
                        Luxury Holiday Homes in the Heart of Dubai
                    </p>

                    {/* CTA gombok */}
                    <div className="flex justify-center gap-4 flex-wrap">
                        <a
                            href="#booking"
                            className="bg-[#D6AF65] text-[#0A1E3F] font-semibold px-6 py-3 rounded-lg shadow hover:bg-yellow-400 transition"
                        >
                            Check Availability
                        </a>
                        <a
                            href="#properties"
                            className="border border-[#D6AF65] text-[#D6AF65] font-semibold px-6 py-3 rounded-lg hover:bg-[#D6AF65] hover:text-[#0A1E3F] transition"
                        >
                            View Properties
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
