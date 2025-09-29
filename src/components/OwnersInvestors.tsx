'use client';

import { motion } from 'framer-motion';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const fadeInVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
};

const years = ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'];

const ownersData = [120, 135, 125, 130, 110, 150, 160, 130, 210, 290, 350];

const investorsData = [50, 60, 45, 40, 30, 47, 90, 110, 80, 150,250];

const ownersChartData = {
    labels: years,
    datasets: [
        {
            label: 'Property Owners',
            data: ownersData,
            borderColor: '#D6AF65',
            backgroundColor: 'rgba(214, 175, 101, 0.3)',
            tension: 0.3,
            fill: true,
            borderWidth: 3,
            pointRadius: 3,
            pointHoverRadius: 5,
        },
    ],
};

const investorsChartData = {
    labels: years,
    datasets: [
        {
            label: 'Investors',
            data: investorsData,
            borderColor: '#D6AF65',
            backgroundColor: 'rgba(214, 175, 101, 0.3)',
            tension: 0.3,
            fill: true,
            borderWidth: 3,
            pointRadius: 3,
            pointHoverRadius: 5,
        },
    ],
};

const chartOptions = {
    responsive: true,
    
    animation: {
        duration: 3000,
        easing: 'easeOutCubic', // vagy 'linear', vagy más támogatott easing
    },
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            enabled: true,
            backgroundColor: '#0A1E3F',
            titleColor: '#D6AF65',
            bodyColor: 'white',
        },
    },
    scales: {
        y: {
            beginAtZero: true,
            ticks: { color: 'white' },
            grid: { color: 'rgba(255,255,255,0.1)' },
        },
        x: {
            ticks: { color: 'white' },
            grid: { color: 'rgba(255,255,255,0.1)' },
        },
    },
};


const OwnersInvestors = () => {
    return (
        <section className="bg-[#0A1E3F] text-white py-20" id="partners">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <motion.h2
                    className="text-4xl font-bold text-center mb-12"
                    variants={fadeInVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                >
                    For Property Owners & Investors
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Property Owners Block */}
                    <motion.div
                        className="bg-[#0C244D] p-8 rounded shadow-lg flex flex-col justify-between"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        variants={fadeInVariants}
                        transition={{ duration: 0.6 }}
                    >
                        <div>
                            {/* Line Chart teljes szélességben */}
                            <div className="mb-6 w-full" style={{ height: '200px' }}>
                                <Line data={ownersChartData} options={chartOptions} />
                            </div>

                            <h3 className="text-2xl font-semibold mb-4">Property Owners</h3>
                            <p className="text-gray-300 mb-4">
                                Enjoy stress-free property management with maximum returns. We handle everything – from guest sourcing to daily operations and admin – while you receive monthly reports and payouts.
                            </p>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>Up to 25% higher income vs. long-term rentals</li>
                                <li>Full flexibility – use your property anytime</li>
                                <li>Proactive maintenance & regular reporting</li>
                                <li>Preserved property value through quality care</li>
                            </ul>
                        </div>

                        <div className="mt-8">
                            <a
                                href="#contact?topic=owner"
                                className="inline-block bg-[#D6AF65] text-[#0A1E3F] font-semibold px-6 py-3 rounded hover:bg-[#c49b4d] transition"
                            >
                                I’m a Property Owner
                            </a>
                        </div>
                    </motion.div>

                    {/* Investors Block */}
                    <motion.div
                        className="bg-[#0C244D] p-8 rounded shadow-lg flex flex-col justify-between"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        variants={fadeInVariants}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div>
                            {/* Line Chart teljes szélességben */}
                            <div className="mb-6 w-full" style={{ height: '200px' }}>
                                <Line  data={investorsChartData} options={chartOptions} />
                            </div>

                            <h3 className="text-2xl font-semibold mb-4">Investors</h3>
                            <p className="text-gray-300 mb-4">
                                Tap into Dubai’s booming short-term rental market with yields of up to 20% annually. We assist in identifying the right property and manage it end-to-end for optimal performance.
                            </p>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>High ROI in Dubai’s premium rental sector</li>
                                <li>End-to-end investment support</li>
                                <li>Premium guest experience = property value growth</li>
                                <li>Transparent performance tracking (owner portal)</li>
                            </ul>
                        </div>

                        <div className="mt-8">
                            <a
                                href="#contact?topic=investor"
                                className="inline-block bg-[#D6AF65] text-[#0A1E3F] font-semibold px-6 py-3 rounded hover:bg-[#c49b4d] transition"
                            >
                                I’m an Investor
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default OwnersInvestors;
