'use client';

import React, { useState, useEffect } from 'react';
import { Afacad } from 'next/font/google';
import Link from 'next/link';

const afacad = Afacad({
  subsets: ['latin'],
  preload: false,
  display: 'swap',
});

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { href: '/#home', label: 'Home' },
    { href: '/#skills', label: 'Skills' },
    { href: '/#projects', label: 'Projects' },
    { href: '/#contacts', label: 'Contacts' },
  ];

  return (
    <>
      <nav className={`${afacad.className} delay-75 px-4 py-4 sm:px-6 sm:py-6 lg:px-16 lg:py-8 fixed w-full z-50 bg-white text-black`}>
        <div className="flex justify-end items-center">
          <button
            className="sm:hidden text-3xl focus:outline-none z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>

          <ul className="hidden sm:flex font-semibold text-lg md:text-xl lg:text-2xl space-x-6 lg:space-x-16">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-[#db8607] transition-colors duration-300 hover:animate-bounce">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {isMenuOpen && (
        <div className={`${afacad.className} fixed inset-0 bg-[#cf871b] opacity-90 z-40 flex items-center justify-center sm:hidden`}>
          <ul className="font-semibold text-3xl space-y-8 text-center">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href} 
                  className="block hover:text-[#db8607] transition-colors duration-300" 
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;