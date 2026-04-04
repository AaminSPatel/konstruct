'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight, FaPhone } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';
import { useSite } from '@/lib/SiteContext';

export default function CTASection() {
  const { contact } = useSite();

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
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="flex-1">
            <ScrollReveal variant="fadeInLeft">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Ready for Your Next Project?
              </h2>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                Get in touch with our expert team to discuss your construction requirements and receive a customized quote for your steel shuttering and formwork needs.
              </p>
            </ScrollReveal>
          </motion.div>

          {/* Right CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full md:w-auto"
          >
            <Link href="/contact" className="flex-1 md:flex-initial">
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center gap-2 bg-white text-orange-500 hover:bg-off-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
              >
                Get Your Quote
                <FaArrowRight className="text-sm" />
              </motion.button>
            </Link>

            <a href={`tel:${contact.phone}`}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold text-lg transition-all w-full"
              >
                <FaPhone className="text-sm" />
                Call Us Now
              </motion.button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
