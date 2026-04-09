'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaBars } from 'react-icons/fa';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useSite } from '@/lib/SiteContext';
import { cn } from '@/lib/utils';

export default function Header() {
  const { branding, navigation } = useSite();

  const navItems = navigation ? navigation.map(name => {
  const isHome = name.trim().toLowerCase() === 'home';
  return {
    name,
    href: isHome ? '/' : '/' + name.toLowerCase().replace(/\s+/g, '-') // replace spaces with hyphen for safety
  };
}) : [{ name: 'Home', href: '/' }];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: 50 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-concrete-400 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-[#1a1f2e]"
            >
              <span className="text-[#ff6b35]">{branding.logo}</span>
              <span className="ml-2">{branding.companyName.split(' ')[1]}</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
              <motion.span
                  whileHover={{ color: '#ff6b35' }}
                  className="text-steel-700 font-medium transition-colors hover:text-[#ff6b35]"
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
              className="bg-[#ff6b35] hover:bg-[#e85a2a] text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Get Quote
            </Link>
          </motion.div>

          {/* Mobile menu - Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="md:hidden text-steel-900 text-2xl"
                aria-label="Toggle menu"
              >
                <FaBars />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0">
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="p-6 border-b border-concrete-400 flex items-center gap-4 bg-white">
                  <Link href="/" className="flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="text-xl font-bold text-[#1a1f2e]"
                    >
                      <span className="text-[#ff6b35]">{branding.logo}</span>
                    </motion.div>
                  </Link>
                </div>

                {/* Nav Links with stagger animation */}
                <motion.ul 
                  className="flex-1 p-6 space-y-4 pt-8"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {navItems.map((item) => (
                    <motion.li key={item.name} variants={itemVariants}>
                      <Link
                        href={item.href}
                        className="block text-steel-700 font-medium hover:text-[#ff6b35] transition-colors py-2 px-4 rounded-lg hover:bg-slate-100"
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                  <motion.li variants={itemVariants}>
                    <Link
                      href="/contact"
                      className="bg-[#ff6b35] hover:bg-[#e85a2a] text-white px-8 py-3 rounded-lg font-medium text-center transition-all block mt-4"
                      whileHover={{ scale: 1.02 }}
                    >
                      Get Quote
                    </Link>
                  </motion.li>
                </motion.ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
