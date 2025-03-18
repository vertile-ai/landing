"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-block px-4 py-1 mb-5 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-400 font-medium text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Advanced AI Solutions
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl xl:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-700 dark:from-white dark:via-blue-300 dark:to-cyan-400 text-transparent bg-clip-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Empower Your Business with AI Intelligence
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Vertile helps enterprises harness the power of AI with custom large language models, 
              retrieval-augmented generation systems, and intelligent AI agents tailored to your specific needs.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Link 
                href="#contact" 
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-medium text-center transition-all"
              >
                Get Started
              </Link>
              <Link 
                href="#services" 
                className="px-8 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium text-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            className="relative h-[400px] lg:h-[500px] flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="absolute w-full h-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl transform rotate-3"></div>
            <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('/hero-illustration.svg')] bg-cover bg-center"></div>
              {/* Placeholder for actual image - replace with your own image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/80 to-cyan-400/80 mix-blend-multiply dark:mix-blend-normal dark:opacity-40"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 