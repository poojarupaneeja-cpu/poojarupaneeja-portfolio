'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Linkedin } from 'lucide-react'

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you'd send this to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

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

  return (
    <section id="contact" className="section-light py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="text-deep-brown text-sm font-semibold tracking-widest uppercase">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mt-4 mb-6">
              Let's Create Something Amazing
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Whether you're looking for a content writer, brand strategist, or creative partner, I'd love to hear about your project.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Contact Links */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-serif font-bold text-black mb-8">Direct Contact</h3>

              <a
                href="mailto:your-email@example.com"
                className="flex items-center gap-4 p-6 bg-black text-white rounded-lg hover:bg-dark-maroon transition-colors duration-300"
              >
                <Mail size={28} className="text-bright-red" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-400">poojarupaneeja@example.com</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-black text-white rounded-lg hover:bg-dark-maroon transition-colors duration-300"
              >
                <Linkedin size={28} className="text-bright-red" />
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <p className="text-gray-400">linkedin.com/in/poojarupaneeja</p>
                </div>
              </a>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-white border-2 border-black text-black rounded-lg focus:outline-none focus:border-bright-red transition-colors duration-300"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-white border-2 border-black text-black rounded-lg focus:outline-none focus:border-bright-red transition-colors duration-300"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-white border-2 border-black text-black rounded-lg focus:outline-none focus:border-bright-red transition-colors duration-300"
              ></textarea>
              <button
                type="submit"
                className="w-full btn-light font-semibold"
              >
                {submitted ? 'Message Sent! 🎉' : 'Send Message'}
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
