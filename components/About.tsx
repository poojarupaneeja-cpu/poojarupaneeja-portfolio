'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const skills = [
    'Copywriting',
    'SEO Strategy',
    'Brand Strategy',
    'Content Marketing',
    'Social Media',
    'Video Scripts',
  ]

  return (
    <section id="about" className="section-light py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="text-deep-brown text-sm font-semibold tracking-widest uppercase">About Me</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-serif font-bold text-black mb-8"
          >
            Strategic Writer, Creative Thinker
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                With a passion for storytelling and a strategic mindset, I help brands communicate their unique value proposition through compelling content. My expertise spans across copywriting, SEO, brand strategy, and creative campaigns.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                I believe that great content goes beyond words—it's about understanding your audience, solving their problems, and creating memorable experiences that drive results.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Whether you're launching a new brand, scaling your content strategy, or need a creative partner for your next campaign, I'm here to help.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-serif font-bold text-black mb-6">Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="bg-black text-white px-6 py-4 rounded-lg font-medium text-center hover:bg-dark-maroon transition-colors duration-300"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
