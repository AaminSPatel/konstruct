'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaFacebook, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useSite } from '@/lib/SiteContext';

export default function Footer() {
  const { branding, contact, navigation, pages } = useSite();

  const navLinks = navigation ? navigation.slice(0,4).map(name => ({ name, href: '/' + name.toLowerCase() })) : [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="bg-[#1a1f2e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-safety-orange">SF</span> SteelForge
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {branding.description || 'Konstruct Technofab Pvt. Ltd. specializes in designing, manufacturing and installing high quality pre engineered buildings.'}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h4 className="font-bold mb-4 text-lg">Services</h4>
            <div className="flex flex-col gap-2">
              {pages.services.servicesList.slice(0,4).map((service) => (
                <Link key={service.id} href="/services" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  {service.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h4 className="font-bold mb-4 text-lg">Contact</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors"
              >
                <FaPhone className="text-orange-400" />
                {contact.phone}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors"
              >
                <FaEnvelope className="text-orange-400" />
                {contact.email}
              </a>
                <div className="flex items-start gap-2 text-gray-300">
                  <FaMapMarkerAlt className="text-orange-400 mt-1 flex-shrink-0" />
                  <span>{contact.address}</span>
                </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-steel-800 my-8"></div>

        {/* Bottom Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          {/* Copyright */}
          <motion.p variants={itemVariants} className="text-gray-300 text-sm">
            &copy; {branding.companyName.split(' ')[0]} since 2017. GST: 23ARFPV2038P1ZD. All rights reserved.
          </motion.p>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex gap-6 mt-6 md:mt-0"
          >
            <a
              href={contact.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-orange-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href={contact.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-orange-400 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter className="text-xl" />
            </a>
            <a
              href={contact.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-orange-400 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook className="text-xl" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
