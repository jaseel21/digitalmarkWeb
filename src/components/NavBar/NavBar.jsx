import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
    const mobileMenuRef = useRef();

    const closeMobileMenu = (event) => {
        if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
            setMobileMenuVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('click', closeMobileMenu);

        return () => {
            window.removeEventListener('click', closeMobileMenu);
        };
    }, []);

    return (
        <div className="bg-gray-900 fixed w-full " >
            <nav className="bg-gray-900 p-4">
                <div className="container mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="text-white text-lg font-semibold">Logo</a>

                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-4">
                        <a href="#home-section" className="text-white">Home</a>
                        <a href="#about-section" className="text-white">About</a>
                        <a href="#service-section" className="text-white">Services</a>
                        <a href="#contact-section" className="text-white">Contact</a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white focus:outline-none"
                        onClick={(e) => {
                            e.stopPropagation();
                            setMobileMenuVisible(!mobileMenuVisible);
                        }}
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu (Hidden by default) */}
            {mobileMenuVisible && (
  <div
    ref={mobileMenuRef}
    className="md:hidden bg-black bg-opacity-90 p-4 mr-2 absolute top-16 right-0"
  >
    <a href="#home-section" className="block text-white py-2">Home</a>
    <a href="#service-section" className="block text-white py-2">Services</a>
    <a href="#about-section" className="block text-white py-2">About Me</a>
    <a href="#contact-section" className="block text-white py-2">Contact</a>
  </div>
)}
        </div>
    );
};

export default Navbar;
