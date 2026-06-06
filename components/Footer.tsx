'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, ExternalLink } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="section-dark py-12 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif font-bold text-white mb-2">Pooja Rupaneeja</h3>
            <p className="text-gray-400">Content Writer & Brand Strategist</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-bright-red transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="mailto:poojarupaneeja@example.com"
                className="text-gray-400 hover:text-bright-red transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://linkedin.com/in/poojarupaneeja"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-bright-red transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Pooja Rupaneeja. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Designed & Built with Next.js, React & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
