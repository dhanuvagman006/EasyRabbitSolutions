'use client';

import { motion } from 'framer-motion';

export default function HeroVideo() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-60"
        >
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto">
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Elevate Your Digital Presence
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-2xl font-light text-gray-300 max-w-2xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        >
          We craft premium, minimalist experiences that build trust and drive results.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        >
          <a 
            href="#portfolio"
            className="inline-block px-8 py-4 bg-white text-black rounded-full font-medium text-sm md:text-base tracking-wide hover:bg-gray-200 transition-colors duration-300"
          >
            View Our Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
