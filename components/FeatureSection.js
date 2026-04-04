'use client';

import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

export default function FeatureSection({ title, features = [] }) {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <ScrollReveal variant="fadeInUp" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-steel-900 mb-6">
            {title}
          </h2>
          <div className="w-20 h-1 bg-safety-orange mx-auto"></div>
        </ScrollReveal>

        {/* Features Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ScrollReveal variant="scaleIn" delay={index * 0.1}>
                <div className="bg-gradient-to-br from-steel-50 to-concrete-100 p-8 rounded-xl border border-concrete-200 hover:border-safety-orange h-full flex flex-col transition-all hover:shadow-lg">
                  {/* Feature Number */}
                  <div className="text-5xl font-bold text-safety-orange/20 mb-2">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Feature Title */}
                  <h3 className="text-xl font-bold text-steel-900 mb-3">
                    {feature.title}
                  </h3>

                  {/* Feature Description */}
                  <p className="text-steel-700 text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Decorative Line */}
                  <div className="mt-auto pt-4 flex items-center gap-2">
                    <div className="flex-grow h-0.5 bg-gradient-to-r from-safety-orange to-transparent"></div>
                  </div>
                </div>
              </ScrollReveal>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
