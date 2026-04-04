'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export default function HeroSection({ title, subtitle, description, ctaText = 'Get Started', ctaLink = '/contact', imageUrl }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1 },
    },
  };

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          {/* Content */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight"
            >
              {title}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-safety-orange font-semibold mb-6"
            >
              {subtitle}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 mb-8 leading-relaxed text-justify"
            >
              {description}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <Link href={ctaLink}>
                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-orange-400 hover:bg-safety-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                >
                  {ctaText} 
                  <FaArrowRight className="text-sm" />
                </motion.button>
              </Link>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-orange-500 px-8 py-4 rounded-lg font-bold text-lg transition-all"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={imageVariants}
            className="relative w-full h-96 md:h-full md:min-h-[500px] rounded-lg overflow-hidden shadow-2xl"
          >
            <Image
              src={'/st3.jpg' || 'https://images.unsplash.com/photo-1503387762519-52582191664730-d307ca884978?w=600&h=800&fit=crop'}
              alt={title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent"></div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-5 w-72 h-72 bg-orange-500/10 rounded-full filter blur-3xl opacity-50"></div>
      <div className="absolute bottom-10 left-5 w-72 h-72 bg-gray-900/5 rounded-full filter blur-3xl opacity-50"></div>
    </section>
  );
}
