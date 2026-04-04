'use client';

import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: 'John Mitchell',
      role: 'Project Manager, BuildRight Construction',
      content: 'SteelForge\'s shuttering systems reduced our construction timeline by 40%. The precision engineering and on-site support were exceptional. We\'ve used them on multiple projects since.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Sarah Chen',
      role: 'Chief Engineer, Urban Development Corp',
      content: 'The custom fabrication capability for our curved facade project was outstanding. Their team provided excellent technical consultation throughout the design phase.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Michael Rodriguez',
      role: 'Director, Infrastructure Solutions LLC',
      content: 'Reliability and durability are non-negotiable in our industry. SteelForge delivers on both counts. Their industrial scaffolding systems are unmatched in quality.',
      rating: 5,
    },
  ];

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
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <ScrollReveal variant="fadeInUp" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-concrete-400 text-lg max-w-2xl mx-auto">
            Hear from our satisfied clients who've transformed their construction projects with SteelForge solutions.
          </p>
          <div className="w-20 h-1 bg-safety-orange mx-auto mt-6"></div>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={itemVariants}>
              <ScrollReveal variant="scaleIn" className="h-full">
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 h-full flex flex-col hover:border-safety-orange transition-all"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <FaStar key={i} className="text-safety-orange text-sm" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-concrete-300 mb-6 flex-grow leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author Info */}
                  <div className="border-t border-steel-700 pt-4">
                    <p className="font-bold text-white mb-1">{testimonial.name}</p>
                    <p className="text-sm text-safety-orange">{testimonial.role}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
