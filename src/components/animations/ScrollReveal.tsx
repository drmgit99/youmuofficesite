import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

const ScrollReveal = ({ children, delay = 0, className = '' }: ScrollRevealProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal
