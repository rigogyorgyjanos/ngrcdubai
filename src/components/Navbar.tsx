'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "../assets/logo.png"
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navItems = [
        { label: 'Home', href: '#hero' },
        { label: 'About', href: '#about' },
        { label: 'Properties', href: '#portfolio' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <header className="fixed top-0 left-0 w-full bg-[#f1f1f1] font-semibold text-(--text-dark-blue) z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">

                {/* Logo or Brand Name */}
                <div className='flex flex-row gap-3 items-center '>
                    <img src={logo} alt="" className='h-12' />
                    <a href="#" className="text-2xl font-bold text-[#D6AF65]">
                        NGRC
                    </a>

                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="hover:text-[#D6AF65] transition"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} aria-label="Toggle Menu">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <nav className="md:hidden bg-[#0A1E3F] px-4 pb-4">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="block py-2 text-white hover:text-[#D6AF65] transition"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
};

export default Navbar;
