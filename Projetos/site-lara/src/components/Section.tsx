import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export function Section({ children, className = '', id }: SectionProps) {
  const { ref, isInView } = useInView(0.1)

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`relative px-5 py-16 md:px-8 md:py-24 ${className}`}
    >
      {children}
    </motion.section>
  )
}
