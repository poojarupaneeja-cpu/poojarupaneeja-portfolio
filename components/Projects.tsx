'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink } from 'lucide-react'

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const [selectedCategory, setSelectedCategory] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Product Copy Strategy',
      category: 'copywriting',
      description: 'Increased conversion rates by 45% through strategic product descriptions and CTAs',
      link: 'https://drive.google.com/your-portfolio-link',
    },
    {
      id: 2,
      title: 'Social Media Campaign for SaaS',
      category: 'social-media',
      description: 'Created 90-day content calendar resulting in 200% engagement growth',
      link: 'https://drive.google.com/your-portfolio-link',
    },
    {
      id: 3,
      title: 'SEO Blog Strategy',
      category: 'seo',
      description: 'Optimized 50+ blog posts, achieving top 3 rankings for 30+ keywords',
      link: 'https://drive.google.com/your-portfolio-link',
    },
    {
      id: 4,
      title: 'Brand Voice Guidelines',
      category: 'brand-strategy',
      description: 'Developed comprehensive brand voice and messaging framework for 5 brands',
      link: 'https://drive.google.com/your-portfolio-link',
    },
    {
      id: 5,
      title: 'YouTube Video Scripts',
      category: 'video-scripts',
      description: 'Wrote 20 engaging video scripts that generated 500K+ views',
      link: 'https://drive.google.com/your-portfolio-link',
    },
    {
      id: 6,
      title: 'Case Study: Digital Transformation',
      category: 'case-studies',
      description: 'Detailed case study showcasing how strategic content drove business growth',
      link: 'https://drive.google.com/your-portfolio-link',
    },
  ]

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'copywriting', label: 'Copywriting' },
    { id: 'social-media', label: 'Social Media' },
    { id: 'seo', label: 'SEO' },
    { id: 'brand-strategy', label: 'Brand Strategy' },
    { id: 'video-scripts', label: 'Video Scripts' },
    { id: 'case-studies', label: 'Case Studies' },
  ]

  const filteredProjects = useMemo(
    () =>
      selectedCategory === 'all'
        ? projects
        : projects.filter((project) => project.category === selectedCategory),
    [selectedCategory]
  )

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.3 },
    },
  }

  return (
    <section id="projects" className="section-dark py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="text-bright-red text-sm font-semibold tracking-widest uppercase">Portfolio</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-12"
          >
            Featured Projects
          </motion.h2>

          {/* Filter Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-bright-red text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  exit="exit"
                  whileHover={{ y: -10 }}
                  className="group bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-bright-red transition-all duration-300 hover-glow-red"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-bright-red transition-colors duration-300">
                      {project.title}
                    </h3>
                    <ExternalLink className="text-bright-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-gray-400 text-sm mb-4 inline-block bg-gray-800 px-3 py-1 rounded">
                    {project.category}
                  </p>
                  <p className="text-gray-300 leading-relaxed">{project.description}</p>
                </motion.a>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
