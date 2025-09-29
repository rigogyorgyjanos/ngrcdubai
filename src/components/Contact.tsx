import React, { useState } from 'react';

const socialLinks = {
    email: 'mailto:info@ngrc.com',
    phone: 'tel:+971501234567',
    whatsapp: 'https://wa.me/971501234567',
    instagram: 'https://instagram.com/ngrc',
    tiktok: 'https://tiktok.com/@ngrc',
};

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: 'Guest',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Itt küldöd az adatokat valahova, pl. API vagy email service
        // GA / Meta tracking event ide is jöhet (pl. window.gtag vagy Facebook Pixel)
        // Példa (ha használva van): window.gtag('event', 'contact_form_submit');

        setSubmitted(true);
    };

    return (
        <section id="contact" className="bg-[#0A1E3F] text-white py-20 px-6 w-full">
            <div className='max-w-7xl mx-auto'>

                <h2 className="text-4xl font-bold mb-12 text-center">Kapcsolat</h2>

                <div className="flex flex-col md:flex-row gap-12 md:gap-24">
                    {/* Űrlap */}
                    <form
                        onSubmit={handleSubmit}
                        className="flex-1 bg-white rounded-lg p-8 text-[#0A1E3F] shadow-lg"
                        aria-label="Kapcsolatfelvételi űrlap"
                    >
                        {submitted ? (
                            <div className="text-center text-xl font-semibold">
                                Köszönjük megkeresését! Hamarosan felvesszük Önnel a kapcsolatot.
                            </div>
                        ) : (
                            <>
                                <label className="block mb-4">
                                    <span className="font-semibold">Név</span>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D6AF65]"
                                        placeholder="Teljes név"
                                    />
                                </label>

                                <label className="block mb-4">
                                    <span className="font-semibold">E-mail</span>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D6AF65]"
                                        placeholder="email@pelda.hu"
                                    />
                                </label>

                                <label className="block mb-4">
                                    <span className="font-semibold">Szerep</span>
                                    <select
                                        name="role"
                                        value={formData.role}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#D6AF65]"
                                    >
                                        <option value="Guest">Vendég</option>
                                        <option value="Owner">Tulajdonos</option>
                                        <option value="Investor">Befektető</option>
                                    </select>
                                </label>

                                <label className="block mb-6">
                                    <span className="font-semibold">Üzenet</span>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D6AF65]"
                                        placeholder="Írja meg üzenetét..."
                                    />
                                </label>

                                <button
                                    type="submit"
                                    className="w-full bg-[#D6AF65] hover:bg-[#b8924a] text-[#0A1E3F] font-bold py-3 rounded-md transition-colors duration-300"
                                >
                                    Küldés
                                </button>
                            </>
                        )}
                    </form>

                    {/* Elérhetőségek */}
                    <div className="flex-1 text-white flex flex-col justify-center space-y-6">
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">Elérhetőségek</h3>
                            <ul className="space-y-3 text-lg">
                                <li className="flex items-center space-x-3">
                                    <span className="text-[#D6AF65] text-2xl">📧</span>
                                    <a href={socialLinks.email} className="hover:underline" target="_blank" rel="noreferrer">
                                        info@ngrc.com
                                    </a>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <span className="text-[#D6AF65] text-2xl">📞</span>
                                    <a href={socialLinks.phone} className="hover:underline" target="_blank" rel="noreferrer">
                                        +971 50 123 4567
                                    </a>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <span className="text-[#D6AF65] text-2xl">💬</span>
                                    <a href={socialLinks.whatsapp} className="hover:underline" target="_blank" rel="noreferrer">
                                        WhatsApp Chat
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold mb-4">Közösségi média</h3>
                            <div className="flex space-x-6 text-3xl">
                                <a href={socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-[#D6AF65] transition-colors">
                                    {/* Instagram SVG ikon */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8"
                                    >
                                        <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm4.75-3.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
                                    </svg>
                                </a>
                                <a href={socialLinks.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok" className="hover:text-[#D6AF65] transition-colors">
                                    {/* TikTok SVG ikon */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8"
                                    >
                                        <path d="M9 2v12.5a3.5 3.5 0 01-3.5-3.5H5a5 5 0 005 5V2h-1z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Lábléc */}
                <footer className="mt-16 text-center text-sm text-gray-400 select-none">
                    © 2025 NGRC Holiday Home Rental | <a href="/aszf" className="underline hover:text-[#D6AF65]">ÁSZF</a> |{' '}
                    <a href="/adatvedelem" className="underline hover:text-[#D6AF65]">Adatvédelem</a>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
