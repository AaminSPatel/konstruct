'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import SwiperCube from '@/components/SwiperCube';
import '@/app/swiper-styles.css';

export default function HomeHeroSection({ title, subtitle, description, ctaText = 'Get Quote', ctaLink = '/contact' }) {
  return (
    <section className="relative min-h-[100vh] lg:min-h-screen flex items-center bg-[#09090b] overflow-visible lg:overflow-hidden">
      
      <div className="absolute top-20 -left-20 select-none pointer-events-none opacity-[0.02] hidden lg:block">
        <h1 className="text-[300px] font-black text-white leading-none">KONSTRUCT</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-12 bg-orange-500"></span>
              <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-sm">
                The PEB Giants
              </span>
            </div>

            <div className="space-y-4">

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tighter">
                {title}
              </h1>

              <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400 text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-widest">
                THE IRON AGE
                <span className="ml-2 inline-block w-[3px] h-12 bg-gradient-to-b from-orange-500 to-yellow-400 animate-pulse"></span>
              </h2>

            </div>

            <p className="text-zinc-400 text-xl md:text-2xl font-medium mb-8 max-w-lg border-l-4 border-orange-600 pl-6">
              {subtitle}
            </p>

            <div className="text-zinc-500 text-lg leading-relaxed mb-10 text-justify max-w-xl">
              {description}
            </div>

            <Link href={ctaLink}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-600 text-white px-10 py-5 font-black uppercase tracking-widest flex items-center gap-4 shadow-[10px_10px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-none hover:bg-orange-500 transition-all"
              >
                {ctaText} <FaArrowRight />
              </motion.button>
            </Link>

          </motion.div>


          {/* RIGHT SWIPER */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative z-30"
          >

            <div className="
              flex justify-center
              h-[320px]
              sm:h-[380px]
              md:h-[420px]
              lg:h-[460px]
              xl:h-[520px]
              overflow-hidden
            ">
              <SwiperCube />
            </div>


            <motion.div 
              className="absolute -bottom-6 right-0 lg:-right-8 
              bg-gradient-to-br from-orange-500/90 to-orange-600 
              p-4 sm:p-6 rounded-2xl shadow-2xl z-40 
              text-white font-bold text-xs sm:text-sm uppercase tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >

              <div className="flex items-center gap-2">
                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-white rounded-full animate-pulse"></div>
                Featured Projects
              </div>

            </motion.div>

          </motion.div>

        </div>

      </div>


      <div className="absolute bottom-0 right-0 w-96 h-1 bg-gradient-to-r from-transparent via-orange-500/80 to-orange-600"></div>

    </section>
  );
}