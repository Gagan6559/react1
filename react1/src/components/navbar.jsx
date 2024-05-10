import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { FaTimes, FaBars } from "react-icons/fa"; // import statement for Font Awesome icons

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // set toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        // Clean up event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // navitems array
    const navItems = [
        { link: 'Home', path: 'home' },
        { link: 'About Us', path: 'aboutUs' },
        { link: 'Services', path: "services" },
        { link: 'Partner with Us', path: 'partner', isButton: true },
        { link: '7703843351', path: "contact", contactNumber: '' },
    ];

    return (
        <header style={{ backgroundColor: isSticky ? '#ffffff' : '#F5F5F5' }} className='w-full sticky top-0 left-0 right-0 shadow-2xl '>
            <nav>
                <div className='flex items-center justify-between p-6'>
                    <a href='#' className='flex items-center space-x-3'>
                        <img src={logo} alt='logo' className='w-48 h-15 inline-block items-center' />
                    </a>

                    <div className='sm:hidden'>
                        <button onClick={toggleMenu} className='text-black focus:outline-none focus:text-grayDNeutral'>
                            {isMenuOpen ? <FaTimes className='h-8 w-8 text-grayDNeutral' /> : <FaBars className='h-8 w-8 text-grayDNeutral' />}
                        </button>
                    </div>

                    <div className={`sm:flex sm:space-x-8 ${isMenuOpen ? 'block' : 'hidden'}`}>
                        {/* Navbar items */}
                        {navItems.map((item, index) => (
                            <React.Fragment key={index}>
                                {item.isButton ? (
                                    <button className='px-3 py-2 text-purple-700 hover:text-neutralDGrey'>{item.link}</button>
                                ) : (
                                    <a href={`#${item.path}`} className='px-3 py-2 text-gray-700 hover:text-purple-700'>{item.link}</a>
                                )}
                            </React.Fragment>
                        ))}
                        {/* Contact number */}
                        <span>{navItems.find(item => item.contactNumber)?.contactNumber}</span>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
