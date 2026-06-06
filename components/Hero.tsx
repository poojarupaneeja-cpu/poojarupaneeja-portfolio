'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="hero"
      className="section-dark min-h-screen flex items-center justify-center overflow-hidden relative pt-20"
    >
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" />
      </div>

      <motion.div
        className="max-w-4xl mx-auto px-6 text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="text-bright-red text-sm font-semibold tracking-widest uppercase">Welcome to my portfolio</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight"
        >
          Crafting Stories That <span className="text-bright-red">Convert</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          I'm Pooja Rupaneeja, a content writer and brand strategist who transforms ideas into compelling narratives. Specializing in copywriting, SEO strategy, and creative campaigns.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#projects" className="btn-dark">
            Explore My Work
          </a>
          <a href="#contact" className="btn-dark border-bright-red hover:bg-black hover:text-bright-red">
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-20 flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="text-bright-red" size={32} />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
