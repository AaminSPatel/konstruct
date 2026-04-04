'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight, FaHardHat, FaCheckCircle } from 'react-icons/fa';

export default function HeroSection({ title, subtitle, description, ctaText = 'Get Quote', ctaLink = '/contact', imageUrl }) {
  return (
    <section className="relative min-h-screen flex items-center bg-[#09090b] overflow-hidden">
      {/* Background Decorative Element: Large Outlined Text */}
      <div className="absolute top-20 -left-20 select-none pointer-events-none opacity-[0.02] hidden lg:block">
        <h1 className="text-[300px] font-black text-white leading-none">KONSTRUCT</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT: High Typography Focus */}
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

            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tighter">
              {title || "WE BUILD"} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400">
                THE IRON AGE.
              </span>
            </h1>

            <p className="text-zinc-400 text-xl md:text-2xl font-medium mb-8 max-w-lg border-l-4 border-orange-600 pl-6">
              {subtitle || "Konstruct PEB: Delivering pre-engineered structures that defy time and weather."}
            </p>

            <div className="text-zinc-500 text-lg leading-relaxed mb-10 text-justify max-w-xl">
              {description || "Industrial hubs, massive warehouses, or complex fabrication—Konstruct PEB handles the heavy lifting. Our precision-engineered steel solutions are designed for speed, durability, and 100% efficiency. We don't just build factories; we build the backbone of your business growth."}
            </div>

            <div className="flex flex-wrap gap-6">
              <Link href={ctaLink}>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#ea580c" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-orange-600 text-white px-10 py-5 rounded-none font-black uppercase tracking-widest flex items-center gap-4 shadow-[10px_10px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-none transition-all"
                >
                  {ctaText} <FaArrowRight />
                </motion.button>
              </Link>
              
              <div className="flex items-center gap-4 text-white font-bold uppercase tracking-tighter cursor-pointer group">
                <span className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  ▶
                </span>
                Watch Process
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE: Brutalist Framing */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* The Main Image with a 'Brutalist' Frame */}
            <div className="relative z-10 aspect-[4/5] md:aspect-square overflow-hidden border-[20px] border-zinc-800 shadow-2xl">
              <Image
                src={imageUrl || '/st3.jpg'}
                alt="Konstruct PEB"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100"
              />
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -top-10 -right-10 bg-orange-600 p-8 text-white z-20 hidden md:block">
              <p className="text-5xl font-black leading-none">20+</p>
              <p className="text-xs font-bold uppercase tracking-widest mt-2">Years of <br /> Engineering</p>
            </div>

            {/* Feature Cards Floating */}
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-10 -left-10 bg-zinc-900 border border-zinc-700 p-6 z-20 shadow-2xl max-w-[250px]"
            >
              <div className="flex items-start gap-4">
                <FaHardHat className="text-3xl text-orange-500 shrink-0" />
                <div>
                  <p className="text-white font-black text-sm uppercase">Safety First</p>
                  <p className="text-zinc-500 text-xs mt-1">Zero-accident record across 500+ sites.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Background Accent Lines */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1 bg-gradient-to-r from-transparent via-orange-600 to-orange-600"></div>
    </section>
  );
}