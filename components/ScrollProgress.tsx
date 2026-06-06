'use client'

import { motion } from 'framer-motion'

interface ScrollProgressProps {
  progress: number
}

const ScrollProgress = ({ progress }: ScrollProgressProps) => {
  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-bright-red z-50"
      style={{ width: `${progress}%` }}
      initial={{ width: '0%' }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 0.2 }}
    />
  )
}

export default ScrollProgress
