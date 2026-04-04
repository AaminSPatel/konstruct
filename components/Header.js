'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useSite } from '@/lib/SiteContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { branding, navigation } = useSite();

  const navItems = navigation ? navigation.map(name => {
  const isHome = name.trim().toLowerCase() === 'home';
  return {
    name,
    href: isHome ? '/' : '/' + name.toLowerCase().replace(/\s+/g, '-') // replace spaces with hyphen for safety
  };
}) : [{ name: 'Home', href: '/' }];
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-concrete-400 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-steel-900"
            >
              <span className="text-safety-orange">{branding.logo}</span>
              <span className="ml-2">{branding.companyName.split(' ')[1]}</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <motion.span
                  whileHover={{ color: '#ff6b35' }}
                  className="text-steel-700 font-medium transition-colors hover:text-safety-orange"
                >
                  {item.name}
                </motion.span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            className="hidden md:block"
            whileHover={{ scale: 1.05 }}
          >
            <Link
              href="/contact"
              className="bg-safety-orange hover:bg-safety-orange-dark text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Get Quote
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-steel-900 text-2xl"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4 border-t border-concrete-400"
          >
            <div className="flex flex-col gap-4 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-steel-700 font-medium hover:text-safety-orange transition-colors px-4 py-2"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-safety-orange hover:bg-safety-orange-dark text-white px-6 py-2 rounded-lg font-medium text-center transition-colors mx-4"
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
