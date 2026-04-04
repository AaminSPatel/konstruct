'use client';

import { motion } from 'framer-motion';
import * as Icons from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

export default function ServiceGrid({ services = [] }) {
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

  const getIcon = (iconName) => {
    const iconMap = {
      FaCubes: Icons.FaCubes,
      FaHammer: Icons.FaHammer,
      FaTree: Icons.FaTree,
      FaWrench: Icons.FaWrench,
      FaBox: Icons.FaBox,
      FaLightbulb: Icons.FaLightbulb,
    };
    const IconComponent = iconMap[iconName] || Icons.FaStar;
    return IconComponent;
  };

  return (
    <div className="w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service, index) => {
          const IconComponent = getIcon(service.icon);

          return (
            <motion.div key={service.id} variants={itemVariants}>
              <ScrollReveal
                variant="scaleIn"
                delay={index * 0.1}
                className="h-full"
              >
                <motion.div
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(255, 107, 53, 0.15)' }}
                  className="bg-white rounded-xl p-8 border border-concrete-400 h-full flex flex-col transition-all duration-300 hover:border-safety-orange"
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="mb-6 inline-block"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-safety-orange/10 to-safety-orange/5 rounded-xl flex items-center justify-center">
                      <IconComponent className="text-3xl text-safety-orange" />
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-steel-900 mb-3">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-steel-700 text-sm leading-relaxed mb-4 flex-grow">
                    {service.description}
                  </p>

                  {/* Benefits Tags */}
                  {service.benefits && service.benefits.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-concrete-200">
                      {service.benefits.map((benefit) => (
                        <span
                          key={benefit}
                          className="text-xs bg-safety-orange/10 text-safety-orange px-3 py-1 rounded-full"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </ScrollReveal>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
